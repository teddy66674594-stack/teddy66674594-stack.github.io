// ============================================
// 語法題庫｜4 種時態 × 20 題 = 共 80 題
// 以後加單元 / 時態：往下加 GRAMMAR_UNITS 的鍵即可
// ============================================

const GRAMMAR_UNITS = {
  "Unit 10": {
    "現在完成時": [
      {q:"My bike is OK again now. I ___ (repair) it.", a:"have repaired", hint:"動作已完成", exp:"強調修已完成，車能騎了。"},
      {q:"Somebody ___ (eat) all the chocolates. The box is empty.", a:"has eaten", hint:"強調結果", exp:"強調吃已完成，盒子空了。"},
      {q:"How many pages of that book ___ you ___ (read)?", a:"have read", hint:"問數量", exp:"問讀了多少頁，強調結果。"},
      {q:"I ___ (lose) my keys. I can't find them anywhere.", a:"have lost", hint:"對現在的影響", exp:"鑰匙丟了，現在找不到。"},
      {q:"She ___ (finish) her homework already.", a:"has finished", hint:"already", exp:"already 常與現在完成時連用。"},
      {q:"We ___ (not / see) that film yet.", a:"haven't seen", hint:"yet", exp:"yet 用於否定。"},
      {q:"___ you ever ___ (be) to Japan?", a:"Have been", hint:"ever", exp:"ever 問經歷。"},
      {q:"He ___ (live) here since 2010.", a:"has lived", hint:"since", exp:"since 後接時間點。"},
      {q:"They ___ (just / arrive) at the airport.", a:"have just arrived", hint:"just", exp:"just 表示剛剛。"},
      {q:"I ___ (never / eat) sushi before.", a:"have never eaten", hint:"never", exp:"never 表經歷。"},
      {q:"She ___ (already / do) her homework.", a:"has already done", hint:"already", exp:"already 強調已經完成。"},
      {q:"How long ___ you ___ (know) him?", a:"have known", hint:"狀態動詞", exp:"know 是狀態動詞。"},
      {q:"The train ___ (just / leave).", a:"has just left", hint:"just", exp:"火車剛走。"},
      {q:"We ___ (be) friends for ten years.", a:"have been", hint:"for + 時間", exp:"be friends 是狀態。"},
      {q:"I ___ (read) that book twice.", a:"have read", hint:"twice", exp:"次數用現在完成時。"},
      {q:"He ___ (not / come) back yet.", a:"hasn't come", hint:"yet", exp:"yet 用於否定。"},
      {q:"Someone ___ (take) my umbrella!", a:"has taken", hint:"強調結果", exp:"強調被拿走。"},
      {q:"How many times ___ she ___ (visit) Paris?", a:"has visited", hint:"問次數", exp:"問次數用現在完成時。"},
      {q:"I ___ (not / finish) reading the book yet.", a:"haven't finished", hint:"yet", exp:"yet 用於否定。"},
      {q:"They ___ (know) each other since childhood.", a:"have known", hint:"狀態動詞", exp:"know 是狀態動詞。"}
    ],
    "現在完成進行時": [
      {q:"How long ___ you ___ (read) that book?", a:"have you been reading", hint:"問多久", exp:"問讀了多久，強調持續。"},
      {q:"It ___ (rain) for two hours.", a:"has been raining", hint:"for + 持續", exp:"強調從過去持續到現在。"},
      {q:"I ___ (wait) for you since 8 o'clock.", a:"have been waiting", hint:"since", exp:"強調一直等到現在。"},
      {q:"She ___ (study) English for five years.", a:"has been studying", hint:"for", exp:"強調持續五年。"},
      {q:"They ___ (play) football since this morning.", a:"have been playing", hint:"since", exp:"強調持續踢球。"},
      {q:"Why are you so tired? ___ you ___ (work) all day?", a:"Have been working", hint:"問持續", exp:"強調一整天在工作。"},
      {q:"My eyes are red. I ___ (read) for hours.", a:"have been reading", hint:"強調持續", exp:"強調讀了好幾個小時。"},
      {q:"He ___ (learn) Chinese for two years.", a:"has been learning", hint:"for", exp:"強調持續學習。"},
      {q:"The children ___ (watch) TV since they got home.", a:"have been watching", hint:"since", exp:"強調從到家後一直在看。"},
      {q:"I ___ (think) about you all day.", a:"have been thinking", hint:"all day", exp:"強調一整天在想。"},
      {q:"How long ___ it ___ (snow)?", a:"has been snowing", hint:"問多久", exp:"問下了多久。"},
      {q:"She ___ (cook) since 6 a.m.", a:"has been cooking", hint:"since", exp:"強調從 6 點一直煮。"},
      {q:"We ___ (walk) for three hours.", a:"have been walking", hint:"for", exp:"強調走了三小時。"},
      {q:"He ___ (work) here since he graduated.", a:"has been working", hint:"since", exp:"強調從畢業持續到現在。"},
      {q:"You look wet. ___ you ___ (run)?", a:"Have been running", hint:"問持續", exp:"強調剛剛一直在跑。"},
      {q:"The baby ___ (cry) for half an hour.", a:"has been crying", hint:"for", exp:"強調哭了半小時。"},
      {q:"I ___ (try) to call you all morning.", a:"have been trying", hint:"all morning", exp:"強調一早上一直在試。"},
      {q:"They ___ (build) that bridge for years.", a:"have been building", hint:"for", exp:"強調建了好幾年。"},
      {q:"She ___ (practice) the piano since she was five.", a:"has been practicing", hint:"since", exp:"強調從五歲持續練琴。"},
      {q:"My hands are dirty. I ___ (work) in the garden.", a:"have been working", hint:"強調持續", exp:"強調一直在花園幹活。"}
    ]
  },
  "Unit 11": {
    "現在完成進行時": [
      {q:"How long ___ you ___ (live) in New Street?", a:"have you been living", hint:"問多久", exp:"強調一直住在那裡。"},
      {q:"I ___ (learn) English for ten years.", a:"have been learning", hint:"for", exp:"強調持續十年。"},
      {q:"She ___ (work) in this company since 2015.", a:"has been working", hint:"since", exp:"強調從 2015 持續到現在。"},
      {q:"We ___ (wait) for the bus for 20 minutes.", a:"have been waiting", hint:"for", exp:"強調等了 20 分鐘。"},
      {q:"How long ___ he ___ (study) Japanese?", a:"has he been studying", hint:"問多久", exp:"問學日語持續多久。"},
      {q:"They ___ (live) in London since 2018.", a:"have been living", hint:"since", exp:"強調從 2018 一直住倫敦。"},
      {q:"I ___ (read) this novel for a week.", a:"have been reading", hint:"for", exp:"強調讀了一週。"},
      {q:"He ___ (drive) for six hours.", a:"has been driving", hint:"for", exp:"強調開了六小時。"},
      {q:"She ___ (teach) at this school for 5 years.", a:"has been teaching", hint:"for", exp:"強調教了 5 年。"},
      {q:"We ___ (plan) this trip for months.", a:"have been planning", hint:"for", exp:"強調計劃了幾個月。"},
      {q:"The dog ___ (bark) since midnight.", a:"has been barking", hint:"since", exp:"強調從午夜一直在叫。"},
      {q:"I ___ (feel) tired lately.", a:"have been feeling", hint:"lately", exp:"強調最近一直覺得累。"},
      {q:"She ___ (wear) glasses since she was a child.", a:"has been wearing", hint:"since", exp:"強調從小一直戴眼鏡。"},
      {q:"How long ___ they ___ (argue)?", a:"have they been arguing", hint:"問多久", exp:"問爭論持續多久。"},
      {q:"The machine ___ (make) noise all morning.", a:"has been making", hint:"all morning", exp:"強調一早上一直在響。"},
      {q:"I ___ (look) for my glasses for an hour.", a:"have been looking", hint:"for", exp:"強調找了一小時。"},
      {q:"They ___ (travel) around Asia since May.", a:"have been traveling", hint:"since", exp:"強調從 5 月一直在旅行。"},
      {q:"He ___ (write) his novel for three years.", a:"has been writing", hint:"for", exp:"強調寫了三年。"},
      {q:"We ___ (talk) on the phone for an hour.", a:"have been talking", hint:"for", exp:"強調聊了一小時。"},
      {q:"She ___ (dream) of visiting Paris since childhood.", a:"has been dreaming", hint:"since", exp:"強調從小一直夢想。"}
    ]
  },
  "Unit 15": {
    "過去完成時": [
      {q:"Sarah and Paul went to the same party last week, but they ___ (not / see) each other before.", a:"hadn't seen", hint:"過去的過去", exp:"去派對是過去，之前沒見過是過去的過去。"},
      {q:"When Sarah arrived at the party, Paul ___ already ___ (go) home.", a:"had gone", hint:"過去的過去", exp:"保羅回家在莎拉到達之前。"},
      {q:"I ___ just ___ (finish) my homework when the phone rang.", a:"had finished", hint:"過去的過去", exp:"寫完作業在電話響之前。"},
      {q:"By the time we got to the cinema, the film ___ (start).", a:"had started", hint:"By the time", exp:"電影開始在我們到達之前。"},
      {q:"She ___ (never / see) a lion before she went to Africa.", a:"had never seen", hint:"before", exp:"去非洲前從未見過獅子。"},
      {q:"He told me he ___ (buy) a new car.", a:"had bought", hint:"間接引語", exp:"他說之前已經買了。"},
      {q:"When I arrived, they ___ (already / eat) dinner.", a:"had already eaten", hint:"already", exp:"我到之前他們已吃完。"},
      {q:"I realized I ___ (leave) my keys at home.", a:"had left", hint:"意識到", exp:"意識到之前把鑰匙忘在家。"},
      {q:"She ___ (study) English before she moved to London.", a:"had studied", hint:"before", exp:"搬到倫敦之前學過英語。"},
      {q:"They ___ (not / meet) before that day.", a:"hadn't met", hint:"before", exp:"那天之前他們沒見過。"},
      {q:"By 2010, he ___ (write) three books.", a:"had written", hint:"By + 時間", exp:"到 2010 年已寫了三本。"},
      {q:"I ___ (not / eat) anything since breakfast.", a:"hadn't eaten", hint:"since", exp:"從早餐後就沒吃。"},
      {q:"The train ___ (leave) before we arrived.", a:"had left", hint:"before", exp:"火車在我們到達前就開了。"},
      {q:"She said she ___ (already / finish) the report.", a:"had already finished", hint:"間接引語", exp:"她說已經完成報告。"},
      {q:"When the police arrived, the thief ___ (run) away.", a:"had run", hint:"過去的過去", exp:"警察到之前小偷已跑。"},
      {q:"He ___ (work) there for 10 years before he retired.", a:"had worked", hint:"before", exp:"退休前已工作 10 年。"},
      {q:"I ___ (see) the film before, so I didn't watch it again.", a:"had seen", hint:"before", exp:"之前看過，所以沒再看。"},
      {q:"She was tired because she ___ (not / sleep) well.", a:"hadn't slept", hint:"because", exp:"因為之前沒睡好。"},
      {q:"They ___ (live) in Paris before they moved to Rome.", a:"had lived", hint:"before", exp:"搬到羅馬之前住過巴黎。"},
      {q:"By the end of last year, I ___ (read) 50 books.", a:"had read", hint:"By", exp:"到去年底已讀了 50 本。"}
    ]
  },
  "Unit 16": {
    "過去完成進行時": [
      {q:"I was very tired when I got home. I ___ (work) hard all day.", a:"had been working", hint:"強調持續", exp:"到家前一直努力工作。"},
      {q:"The sun was shining, but the ground was wet. It ___ (rain).", a:"had been raining", hint:"強調持續", exp:"太陽出來前一直下雨。"},
      {q:"She ___ (wait) for two hours when he finally arrived.", a:"had been waiting", hint:"for", exp:"等他之前已等了兩小時。"},
      {q:"They ___ (play) football for an hour before it started to rain.", a:"had been playing", hint:"before", exp:"下雨前已踢了一小時。"},
      {q:"I ___ (study) all night, so I was exhausted.", a:"had been studying", hint:"all night", exp:"整晚一直在學。"},
      {q:"He ___ (drive) for hours before he found a hotel.", a:"had been driving", hint:"before", exp:"找到旅館前已開了好幾小時。"},
      {q:"The children ___ (watch) TV since morning.", a:"had been watching", hint:"since", exp:"從早上一直在看電視。"},
      {q:"She ___ (cook) all day for the party.", a:"had been cooking", hint:"all day", exp:"為派對煮了一整天。"},
      {q:"They ___ (argue) for hours before they made up.", a:"had been arguing", hint:"before", exp:"和好前已吵了好幾小時。"},
      {q:"I ___ (look) for my keys for an hour before I found them.", a:"had been looking", hint:"before", exp:"找到前已找了一小時。"},
      {q:"He ___ (work) at the company for 5 years before he quit.", a:"had been working", hint:"before", exp:"辭職前已工作 5 年。"},
      {q:"The baby ___ (cry) for an hour before she fell asleep.", a:"had been crying", hint:"before", exp:"睡著前哭了一小時。"},
      {q:"We ___ (walk) for miles before we saw a house.", a:"had been walking", hint:"before", exp:"看到房子前已走了好幾英里。"},
      {q:"She ___ (teach) for 20 years when she retired.", a:"had been teaching", hint:"when", exp:"退休時已教了 20 年。"},
      {q:"I ___ (try) to call him all morning before he answered.", a:"had been trying", hint:"before", exp:"他接電話前我一直試著打。"},
      {q:"They ___ (build) the house for a year before they moved in.", a:"had been building", hint:"before", exp:"搬進去前已蓋了一年。"},
      {q:"He ___ (run) for an hour, so he was sweating.", a:"had been running", hint:"強調持續", exp:"跑了一小時，所以流汗。"},
      {q:"We ___ (wait) since 6 a.m. when the bus finally came.", a:"had been waiting", hint:"since", exp:"從 6 點一直等到公車來。"},
      {q:"She ___ (read) the book for a week before she finished it.", a:"had been reading", hint:"before", exp:"讀完前已讀了一週。"},
      {q:"The machine ___ (make) noise for days before it broke.", a:"had been making", hint:"before", exp:"壞掉前已響了好幾天。"}
    ]
  }
};
