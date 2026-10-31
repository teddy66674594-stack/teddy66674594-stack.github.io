// ================== 全局变量 ==================
let currentUnitName = "";
let currentReadingUnit = "";
let currentReadingSub = "";
let currentQuizList = [];
let exerciseRecords = JSON.parse(localStorage.getItem("exerciseRecords") || "[]");

// 初始化
window.onload = function() {
    renderHomeGrid();
    updateHomeStats();
};

// ================== 首页 ==================
function renderHomeGrid() {
    const grid = document.getElementById("homeGrid");
    if (!grid) return;
    const cards = [
        { icon: "📚", title: "生詞池", target: "vocabPool" },
        { icon: "📝", title: "練習題", target: "exerciseRoot" },
        { icon: "📖", title: "語法", target: "grammarRoot" },
        { icon: "📘", title: "閱讀理解", target: "readingRoot" },
        { icon: "📒", title: "錯題本", target: "wrongBookPanel" }
    ];
    grid.innerHTML = "";
    cards.forEach(c => {
        const div = document.createElement("div");
        div.className = "module-card";
        div.innerHTML = `
            <div class="card-icon">${c.icon}</div>
            <div class="card-title">${c.title}</div>
            <div class="card-btn">進入</div>
        `;
        div.onclick = () => showModule(c.target);
        grid.appendChild(div);
    });
}

function updateHomeStats() {
    try {
        let wordCount = 0;
        for (let unit in WORD_UNITS) wordCount += WORD_UNITS[unit].length;
        document.getElementById("statWords").innerText = wordCount;

        let clozeCount = 0;
        for (let unit in CLOZE_UNITS) clozeCount += CLOZE_UNITS[unit].length;
        document.getElementById("statCloze").innerText = clozeCount;

        document.getElementById("statGrammar").innerText = (typeof GRAMMAR_BANK !== "undefined") ? GRAMMAR_BANK.length : 0;
        document.getElementById("statReading").innerText = (typeof READING_UNITS !== "undefined") ? Object.keys(READING_UNITS).length : 0;
    } catch (e) {
        console.log("统计数据失败");
    }
}

function showModule(id) {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("moduleView").style.display = "block";
    document.querySelectorAll("#moduleView > div").forEach(el => el.style.display = "none");
    
    document.getElementById(id).style.display = "block";
    
    if (id === "vocabPool") renderVocabUnits();
    if (id === "exerciseRoot") renderExerciseUnits();
    if (id === "wrongBookPanel") renderRecordList();
}

function goHome() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("moduleView").style.display = "none";
}

// ================== 生词池 ==================
function renderVocabUnits() {
    const wrap = document.getElementById("vocabUnitButtons");
    wrap.innerHTML = "";
    for (let unit in WORD_UNITS) {
        const btn = document.createElement("button");
        btn.className = "unit-btn";
        btn.innerText = unit;
        btn.onclick = () => openVocabUnit(unit);
        wrap.appendChild(btn);
    }
}

function openVocabUnit(unit) {
    currentUnitName = unit;
    document.getElementById("vocabPool").style.display = "none";
    document.getElementById("vocabUnit").style.display = "block";
    document.getElementById("vocabUnitTitle").innerText = unit;
    document.getElementById("cardPanel").innerHTML = "";
    document.getElementById("tablePanel").innerHTML = "";
}

function showVocabCard() {
    const wrap = document.getElementById("cardPanel");
    document.getElementById("tablePanel").innerHTML = "";
    wrap.innerHTML = "";
    WORD_UNITS[currentUnitName].forEach(w => {
        const div = document.createElement("div");
        div.className = "exercise-item";
        div.innerHTML = `<b>${w.no}. ${w.en}</b> (${w.pos})<br>${w.cn} <br><span style="color:#888">同义词: ${w.syn}</span>`;
        wrap.appendChild(div);
    });
}

function showVocabTable() {
    const wrap = document.getElementById("tablePanel");
    document.getElementById("cardPanel").innerHTML = "";
    let html = `<table><tr><th>序号</th><th>单词</th><th>中文</th></tr>`;
    WORD_UNITS[currentUnitName].forEach(w => {
        html += `<tr><td>${w.no}</td><td>${w.en}</td><td>${w.cn}</td></tr>`;
    });
    html += `</table>`;
    wrap.innerHTML = html;
}

// ================== 练习题 ==================
function renderExerciseUnits() {
    const wrap = document.getElementById("exerciseUnitButtons");
    wrap.innerHTML = "";
    for (let unit in CLOZE_UNITS) {
        const btn = document.createElement("button");
        btn.className = "unit-btn";
        btn.innerText = unit;
        btn.onclick = () => openExerciseUnit(unit);
        wrap.appendChild(btn);
    }
}

function openExerciseUnit(unit) {
    currentUnitName = unit;
    document.getElementById("exerciseRoot").style.display = "none";
    document.getElementById("exerciseUnit").style.display = "block";
    document.getElementById("exerciseUnitTitle").innerText = unit;
    document.getElementById("writePanel").style.display = "none";
    document.getElementById("clozePanel").style.display = "none";
    document.getElementById("choicePanel").style.display = "none";
}

function showWriteExercise() {
    const p = document.getElementById("writePanel");
    p.style.display = "block";
    p.innerHTML = `<h3>默寫練習</h3><button class="btn" onclick="startWriteQuiz()">開始默寫</button><div id="writeArea"></div>`;
}

function startWriteQuiz() {
    const area = document.getElementById("writeArea");
    area.innerHTML = "";
    const pool = WORD_UNITS[currentUnitName];
    pool.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "exercise-item";
        div.innerHTML = `<div class="q-num">${idx+1}. 写出单词 (${item.cn})</div><input class="user-display" data-ans="${item.en}">`;
        area.appendChild(div);
    });
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = "提交答案";
    btn.onclick = () => {
        let correct = 0;
        document.querySelectorAll("#writeArea .exercise-item").forEach(dom => {
            const inp = dom.querySelector("input");
            if (inp.value.trim().toLowerCase() === inp.dataset.ans.toLowerCase()) correct++;
        });
        alert(`答对了 ${correct} / ${pool.length} 题`);
    };
    area.appendChild(btn);
}

function showClozeExercise() {
    const p = document.getElementById("clozePanel");
    p.style.display = "block";
    p.innerHTML = `<h3>完形填空</h3><button class="btn" onclick="startClozeQuiz()">開始練習</button><div id="clozeArea"></div>`;
}

function startClozeQuiz() {
    const area = document.getElementById("clozeArea");
    area.innerHTML = "";
    const pool = CLOZE_UNITS[currentUnitName];
    pool.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "exercise-item";
        div.innerHTML = `<div class="q-num">${idx+1}. ${item.sentence}</div><input class="user-display" data-ans="${item.answer}">`;
        area.appendChild(div);
    });
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = "提交答案";
    btn.onclick = () => {
        let correct = 0;
        document.querySelectorAll("#clozeArea .exercise-item").forEach(dom => {
            const inp = dom.querySelector("input");
            if (inp.value.trim().toLowerCase() === inp.dataset.ans.toLowerCase()) correct++;
        });
        alert(`答对了 ${correct} / ${pool.length} 题`);
    };
    area.appendChild(btn);
}

function showChoiceExercise() {
    const p = document.getElementById("choicePanel");
    p.style.display = "block";
    p.innerHTML = `<h3>拖拽选择(此版本简化为填空)</h3><button class="btn" onclick="startChoiceQuiz()">開始練習</button><div id="choiceArea"></div>`;
}

function startChoiceQuiz() {
    const area = document.getElementById("choiceArea");
    area.innerHTML = "";
    const pool = CLOZE_UNITS[currentUnitName];
    pool.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "exercise-item";
        div.innerHTML = `<div class="q-num">${idx+1}. 填入正确单词</div><input class="user-display" data-ans="${item.answer}">`;
        area.appendChild(div);
    });
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = "提交答案";
    btn.onclick = () => {
        let correct = 0;
        document.querySelectorAll("#choiceArea .exercise-item").forEach(dom => {
            const inp = dom.querySelector("input");
            if (inp.value.trim().toLowerCase() === inp.dataset.ans.toLowerCase()) correct++;
        });
        alert(`答对了 ${correct} / ${pool.length} 题`);
    };
    area.appendChild(btn);
}

// ================== 语法 ==================
function openVerbTable() {
    const p = document.getElementById("grammarPanel");
    let html = `<table><tr><th>原形</th><th>过去式</th><th>过去分词</th><th>中文</th></tr>`;
    IRREGULAR_VERBS.forEach(v => {
        html += `<tr><td>${v.base}</td><td>${v.past}</td><td>${v.pp}</td><td>${v.cn}</td></tr>`;
    });
    html += `</table>`;
    p.innerHTML = html;
}

function openTenseStructure() {
    const p = document.getElementById("grammarPanel");
    p.innerHTML = `<h3>时态结构</h3><p>Present Perfect: have/has + done</p><p>Past Perfect: had + done</p>`;
}

function openGrammarQuizRoot() {
    const p = document.getElementById("grammarPanel");
    p.innerHTML = `<h3>语法测验</h3><button class="btn" onclick="startGrammarQuiz()">开始测验</button><div id="grammarArea"></div>`;
}

function startGrammarQuiz() {
    const area = document.getElementById("grammarArea");
    area.innerHTML = "";
    const pool = GRAMMAR_BANK.slice(0, 10); // 抽前10题测试
    pool.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "exercise-item";
        div.innerHTML = `<div class="q-num">${idx+1}. ${item.q}</div><input class="user-display" data-ans="${item.a}">`;
        area.appendChild(div);
    });
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = "提交答案";
    btn.onclick = () => {
        let correct = 0;
        document.querySelectorAll("#grammarArea .exercise-item").forEach(dom => {
            const inp = dom.querySelector("input");
            if (inp.value.trim().toLowerCase() === inp.dataset.ans.toLowerCase()) correct++;
        });
        alert(`答对了 ${correct} / ${pool.length} 题`);
    };
    area.appendChild(btn);
}

// ================== 阅读 ==================
function openReadingUnit(unit) {
    currentReadingUnit = unit;
    const p = document.getElementById("readingPanel");
    p.innerHTML = `<h3>${unit}</h3><p>请选择练习</p>`;
}

// ================== 错题本 ==================
function renderRecordList() {
    const wrap = document.getElementById("recordList");
    wrap.innerHTML = "<p>暂无记录</p>";
}

function clearAllRecords() {
    localStorage.removeItem("exerciseRecords");
    alert("已清空");
}
