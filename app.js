function openGrammarQuizRoot(){
  if(!guardNavigation())return;
  hideAllBox();
  document.getElementById("grammarRoot").classList.add("show");
  const p=document.getElementById("grammarPanel");
  const totalCount=(typeof GRAMMAR_BANK!=="undefined")?GRAMMAR_BANK.length:0;
  
  p.innerHTML=`<h3 style="color:#2c3e50;margin-bottom:12px;">語法測驗 <span style="font-size:14px;color:#888;">（目前題庫共 ${totalCount} 題）</span></h3>
  <div class="tip-box">💡 <strong>怎麼做：</strong>選擇模式，設定抽題數量，選擇時態，點「開始練習」。</div>
  <div class="mode-select-group">
    <div>選擇模式：</div>
    <label style="display:block;margin:6px 0;"><input type="radio" name="grammarMode" value="fill" checked>模式1：填空（寫出正確形式）</label>
    <label style="display:block;margin:6px 0;"><input type="radio" name="grammarMode" value="choice">模式2：選擇題（4選1）</label>
  </div>
  <p style="font-size:14px;margin-bottom:8px;">選擇要練的時態（可多選）：</p>
  <div id="grammarTopicFilter" style="margin-bottom:12px;"></div>
  <div class="range-input-area">
    <span>抽題數量：</span>
    <input type="number" id="grammarPickCount" min="1" placeholder="留空 = 20 題">
    <button class="btn" id="grammarStartBtn">開始練習</button>
  </div>
  <div id="grammarExerciseArea"></div>
  <div class="finish-area"><button class="btn btn-finish" id="grammarFinishBtn" style="display:none;">✅全部作答完畢，查看成績</button></div>
  <div class="result-page" id="grammarResultPage">
    <h2 style="text-align:center">📝語法成績</h2>
    <div class="score-text" id="grammarScoreText"></div>
    <div id="grammarResultList"></div>
    <div style="margin-top:12px;text-align:center"><button class="btn" id="saveGrammarResultBtn">保存本次成績至紀錄+錯題本</button></div>
  </div>`;
  
  renderGrammarFilters();
  document.getElementById("grammarStartBtn").onclick=startGrammarQuiz;
  document.getElementById("grammarFinishBtn").onclick=showGrammarResult;
  document.getElementById("saveGrammarResultBtn").onclick=saveGrammarRecord;
  document.getElementById("backHomeBtn").innerText="← 返回上一頁";
}

function renderGrammarFilters(){
  const wrap=document.getElementById("grammarTopicFilter");
  if(!wrap)return;
  wrap.innerHTML="";
  const topics=[
    {topic:"現在完成時",topicEn:"Present Perfect"},
    {topic:"現在完成進行時",topicEn:"Present Perfect Continuous"},
    {topic:"過去完成時",topicEn:"Past Perfect"},
    {topic:"過去完成進行時",topicEn:"Past Perfect Continuous"}
  ];
  topics.forEach(t=>{
    const div=document.createElement("label");
    div.style.cssText="display:flex;align-items:center;padding:12px 14px;margin-bottom:8px;background:#f4f7ff;border-radius:10px;cursor:pointer;font-size:15px;";
    div.innerHTML=`<input type="checkbox" class="grammar-topic-cb" value="${t.topic}" checked style="margin-right:10px;"><span style="font-weight:bold;color:#2c3e50;">${t.topic}</span><span style="color:#888;font-size:13px;margin-left:8px;">（${t.topicEn}）</span>`;
    wrap.appendChild(div);
  });
}

function startGrammarQuiz(){
  startTimer();
  
  // 1. 获取选中的时态
  const selTopics=Array.from(document.querySelectorAll(".grammar-topic-cb:checked")).map(cb=>cb.value);
  if(selTopics.length===0){alert("請至少勾選一個時態");stopTimer();return;}
  
  // 2. 安全检查题库
  if(typeof GRAMMAR_BANK==="undefined"||GRAMMAR_BANK.length===0){
    alert("題庫未加載，請檢查 grammar.js 文件！");
    stopTimer(); return;
  }

  const pool=GRAMMAR_BANK.filter(item=>selTopics.includes(item.topic));
  if(pool.length===0){alert("沒有符合條件的題目");stopTimer();return;}
  
  // 3. 抽题
  let pickNum=Number(document.getElementById("grammarPickCount").value);
  if(!pickNum||pickNum<1)pickNum=20;
  if(pickNum>pool.length)pickNum=pool.length;
  
  currentQuizList=shuffleArray([...pool]).slice(0,pickNum);
  const allBank=GRAMMAR_BANK; // 用于生成选择题的错误干扰项
  quizType="grammar";
  
  const mode=document.querySelector('input[name="grammarMode"]:checked').value;
  const area=document.getElementById("grammarExerciseArea");
  const finishBtn=document.getElementById("grammarFinishBtn");
  
  document.getElementById("grammarResultPage").style.display="none";
  finishBtn.style.display="none";
  area.innerHTML="";
  
  // 4. 使用 try-catch 防止任何意外导致卡死
  try {
    currentQuizList.forEach((item,idx)=>{
      const div=document.createElement("div");
      div.className="exercise-item";
      
      if(mode==="fill"){
        div.innerHTML=`<div class="q-num">${idx+1}. [${item.topic}] ${item.q}</div><div class="q-syn-info">提示：${item.hint}</div><input class="user-display" data-ans="${item.a}" placeholder="填入正確形式"><div class="feedback"></div>`;
      }else{
        const opts=[item.a]; // 先放入正确答案
        let attempts=0;
        
        // 防死循环抽取 3 个干扰项
        while(opts.length<4 && attempts<300){
          const randItem=allBank[Math.floor(Math.random()*allBank.length)];
          if(randItem && randItem.a && randItem.a!==item.a && !opts.includes(randItem.a)){
            opts.push(randItem.a);
          }
          attempts++;
        }
        // 极端保底：如果题库实在太小抽不到，用横线补齐
        while(opts.length<4){ opts.push("___"); }
        
        const shuffledOpts=shuffleArray(opts);
        let optsHtml="";
        shuffledOpts.forEach((opt,i)=>{
          optsHtml+=`<span class="choice-opt" data-val="${opt.replace(/"/g,'&quot;')}" onclick="selectGrammarChoice(this)">${String.fromCharCode(65+i)}. ${opt}</span>`;
        });
        
        div.dataset.realAns=item.a;
        div.innerHTML=`<div class="q-num">${idx+1}. [${item.topic}] ${item.q}</div><div class="q-syn-info">提示：${item.hint}</div><div class="choice-options">${optsHtml}</div><div class="feedback"></div>`;
      }
      area.appendChild(div);
    });
    finishBtn.style.display="block";
  } catch (error) {
    console.error("生成語法題目出錯：", error);
    alert("加載題目時出錯，請按 F12 查看控制台報錯。");
    stopTimer();
  }
}

function selectGrammarChoice(el){
  const parent=el.parentElement;
  if(parent.dataset.answered==="true") return; 
  parent.dataset.answered="true";
  
  const realAns=el.closest(".exercise-item").dataset.realAns;
  const feedback=parent.nextElementSibling;
  
  if(el.dataset.val===realAns){
    el.classList.add("correct");
    feedback.innerHTML=`<span class="ok">✅正確</span>`;
  }else{
    el.classList.add("wrong");
    feedback.innerHTML=`<span class="err">❌錯誤，正確答案：${realAns}</span>`;
    parent.querySelectorAll(".choice-opt").forEach(opt=>{
      if(opt.dataset.val===realAns) opt.classList.add("correct");
    });
  }
  
  const nextItem=parent.closest(".exercise-item").nextElementSibling;
  if(nextItem){
    setTimeout(()=>{ nextItem.scrollIntoView({behavior:"smooth",block:"center"}); },500);
  }
}

function showGrammarResult(){
  let score=0, wrongQuestions=[];
  const total=currentQuizList.length;
  const resultListDom=document.getElementById("grammarResultList");
  resultListDom.innerHTML="";
  const mode=document.querySelector('input[name="grammarMode"]:checked').value;
  
  document.querySelectorAll("#grammarExerciseArea .exercise-item").forEach((dom,idx)=>{
    let userAns="", realAns=currentQuizList[idx].a;
    
    if(mode==="fill"){
      const input=dom.querySelector(".user-display");
      userAns=input.value.trim().toLowerCase().replace(/\s+/g," ");
      const isCorrect=userAns===realAns.toLowerCase().replace(/\s+/g," ");
      if(isCorrect) score++; else wrongQuestions.push(currentQuizList[idx].q);
      
      const feedback=dom.querySelector(".feedback");
      feedback.innerHTML=isCorrect?`<span class="ok">✅正確：${realAns}</span>`:`<span class="err">❌錯誤，答案：${realAns}</span><br><span style="color:#666;font-size:13px;">${currentQuizList[idx].exp}</span>`;
      resultListDom.innerHTML+=`<div class="result-item">${idx+1}. ${isCorrect?"✅":"❌"} ${realAns}，你的答案：${userAns||"（未作答）"}</div>`;
    }else{
      const selected=dom.querySelector(".choice-opt.correct, .choice-opt.wrong");
      if(selected) userAns=selected.dataset.val;
      const isCorrect=(userAns===realAns);
      if(isCorrect) score++; else wrongQuestions.push(currentQuizList[idx].q);
      resultListDom.innerHTML+=`<div class="result-item">${idx+1}. ${isCorrect?"✅":"❌"} ${realAns}，你選的：${userAns||"（未作答）"}</div>`;
    }
  });
  
  const percent=Number((score/total*100).toFixed(2));
  document.getElementById("grammarScoreText").innerText=`得分：${score}/${total}（${percent}%）`;
  document.getElementById("grammarResultPage").style.display="block";
  window._grammarScore={score,total,wrongQuestions};
  stopTimer();
}
