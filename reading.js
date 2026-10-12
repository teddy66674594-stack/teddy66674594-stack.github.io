// ============================================
// 閱讀理解題庫
// 大測一｜文章一（P.7）+ 語境完形填空（P.9）
// ============================================

const READING_UNITS = {
  "大測一": {
    "文章一": {
      title: "Uncommon Travel Gems in the Southern World",
      page: "P.7",
      intro: "💡 長按任意英文單詞，可查看中文意思。",
      passage: `Most travelers think of beaches or big cities when planning hemisphere trips, but some lesser-known spots offer unique experiences. Three such destinations—Chile's Atacama Desert, New Zealand's Lake Tekapo, and South Africa's Karoo Desert—stand out for their distinct charm.

Chile's Atacama Desert, often called the "driest place on Earth," surprises with its otherworldly beauty. Unlike typical deserts, it has salt flats that glow pink at sunrise and geysers that spout steam at dawn. Visitors can stargaze (it's a top dark-sky reserve) or soak in hot springs. Locals, mostly Atacama indigenous people, greet travelers warmly, sharing stories of their ancient desert survival skills over cups of herbal tea.

New Zealand's Lake Tekapo, a glacial lake in the South Island, is famous for its bright turquoise water and the small Church of the Good Shepherd. It's also a UNESCO Dark Sky Reserve—on clear nights, the Milky Way shimmers so brightly you can see it with the naked eye. Hiking around the lake or visiting nearby lupin fields (blooming in summer) are popular. Locals, including Māori communities, often lead stargazing tours, explaining traditional star stories passed down for generations.

South Africa's Karoo Desert, a vast semi-arid region, is a hidden haven for nature lovers. It's home to unique succulent plants and rare animals like the Karoo korhaan bird. Travelers can go on guided wildlife drives or stay at family-run farms. Locals, many of Boer descent, welcome guests with homemade biltong (dried meat) and share tales of life in this quiet, windswept land.

These unusual spots offer big benefits. They let travelers avoid crowded tourist hubs, connect deeply with local cultures, and experience nature in its purest form. Visiting them also supports small local businesses—from family farms to indigenous-led tours—helping protect these special places for future generations.`,
      choices: [
        {q:"What is the main purpose of the passage?", opts:["To compare three famous Southern Hemisphere cities.","To introduce three lesser-known travel destinations in the Southern Hemisphere.","To explain why deserts are the best travel destinations.","To criticize crowded tourist spots."], ans:"B", exp:"文章開頭即點明主題：介紹三個較不知名的南半球旅遊點。"},
        {q:"Why is Chile's Atacama Desert called the 'driest place on Earth'?", opts:["It never rains there.","It has very little rainfall.","It has no water at all.","It has only salt water."], ans:"B", exp:"Atacama 降雨極少，故稱最乾燥之地。"},
        {q:"What can visitors see in Atacama at sunrise?", opts:["Snow-capped mountains.","Salt flats that glow pink.","Endless forests.","Icebergs floating by."], ans:"B", exp:"原文提到 salt flats that glow pink at sunrise。"},
        {q:"What does 'otherworldly beauty' most nearly mean?", opts:["Beauty from another planet.","Unusual and breathtaking beauty.","Ordinary beauty.","Artificial beauty."], ans:"B", exp:"otherworldly 指超乎尋常、夢幻般的美。"},
        {q:"What is Lake Tekapo famous for?", opts:["Its bright turquoise water and Church of the Good Shepherd.","Its deep blue ocean.","Its tall mountains only.","Its busy city center."], ans:"A", exp:"原文明確提到這兩點。"},
        {q:"What does 'UNESCO Dark Sky Reserve' imply?", opts:["A place where stars cannot be seen.","A place protected for stargazing.","A place with lots of artificial light.","A place with no sunlight."], ans:"B", exp:"Dark Sky Reserve 為保護夜間觀星而設。"},
        {q:"What can you see with the naked eye at Lake Tekapo on clear nights?", opts:["The Milky Way.","The sun.","The moon only.","Fog."], ans:"A", exp:"原文提到 the Milky Way shimmers so brightly。"},
        {q:"The word 'shimmer' in the passage most nearly means:", opts:["shine faintly.","disappear.","freeze.","fall."], ans:"A", exp:"shimmer 意為閃爍、微微發光。"},
        {q:"What are lupin fields famous for?", opts:["Blooming in summer.","Blooming in winter.","Being edible.","Being dangerous."], ans:"A", exp:"原文提到 blooming in summer。"},
        {q:"Who often leads stargazing tours in Lake Tekapo?", opts:["Tourists.","Māori communities.","Government officials.","Foreign guides."], ans:"B", exp:"原文提到 Māori communities often lead stargazing tours。"},
        {q:"What kind of place is the Karoo Desert?", opts:["A tropical rainforest.","A vast semi-arid region.","A frozen tundra.","A coastal city."], ans:"B", exp:"原文提到 a vast semi-arid region。"},
        {q:"What rare bird lives in the Karoo Desert?", opts:["Karoo korhaan.","Emperor penguin.","Snowy owl.","Flamingo."], ans:"A", exp:"原文提到 Karoo korhaan bird。"},
        {q:"What food do locals offer guests in the Karoo?", opts:["Biltong (dried meat).","Sushi.","Pizza.","Ice cream."], ans:"A", exp:"原文提到 homemade biltong。"},
        {q:"What does 'semi-arid' mean?", opts:["Completely dry.","Partially dry.","Wet and rainy.","Frozen."], ans:"B", exp:"semi- 意為「半」，arid 意為乾燥。"},
        {q:"What do the three destinations have in common?", opts:["They are all crowded.","They all offer unique travel experiences.","They are all in Asia.","They all have no local culture."], ans:"B", exp:"文章強調三地皆提供獨特旅遊體驗。"},
        {q:"What is one benefit of visiting these unusual places?", opts:["Avoiding crowded tourist hubs.","Spending less money than usual.","Meeting famous people.","Learning Chinese."], ans:"A", exp:"原文提到 avoid crowded tourist hubs。"},
        {q:"What does visiting these places help protect?", opts:["Local wildlife only.","These special places for future generations.","Only the indigenous people.","Only the farmers."], ans:"B", exp:"原文提到 helping protect these special places for future generations。"},
        {q:"What does the word 'indigenous' mean?", opts:["Native to a place.","Foreign.","Modern.","Wealthy."], ans:"A", exp:"indigenous 意為原住民、土生土長。"},
        {q:"Which of the following is NOT mentioned in the passage?", opts:["Hot springs in Atacama.","Milky Way at Lake Tekapo.","The Eiffel Tower in Paris.","Wildlife drives in the Karoo."], ans:"C", exp:"巴黎鐵塔與本文無關。"},
        {q:"What is the author's attitude towards these destinations?", opts:["Negative.","Indifferent.","Appreciative and encouraging.","Critical."], ans:"C", exp:"文章語氣正面、推薦。"}
      ],
      blanks: [
        {q:"Most ___ think of beaches or big cities when planning trips.", a:"travelers", hint:"旅客"},
        {q:"Three such destinations stand out for their ___ charm.", a:"distinct", hint:"獨特的"},
        {q:"Chile's Atacama Desert is often called the '___ place on Earth'.", a:"driest", hint:"最乾燥的"},
        {q:"Atacama surprises with its ___ beauty.", a:"otherworldly", hint:"超乎尋常的"},
        {q:"Salt flats ___ pink at sunrise.", a:"glow", hint:"發光"},
        {q:"Geysers ___ steam at dawn.", a:"spout", hint:"噴出"},
        {q:"Visitors can ___ (觀星) at Atacama.", a:"stargaze", hint:"觀星"},
        {q:"It's a top ___ reserve.", a:"dark-sky", hint:"暗天（觀星）"},
        {q:"Visitors can soak in hot ___.", a:"springs", hint:"溫泉"},
        {q:"Locals, mostly Atacama ___ people, greet travelers warmly.", a:"indigenous", hint:"原住民"},
        {q:"They share stories over cups of ___ tea.", a:"herbal", hint:"草本"},
        {q:"Lake Tekapo is a ___ lake in the South Island.", a:"glacial", hint:"冰川的"},
        {q:"It's famous for its bright ___ water.", a:"turquoise", hint:"藍綠色"},
        {q:"There is a small Church of the Good ___.", a:"Shepherd", hint:"牧羊人"},
        {q:"On clear nights, the Milky Way ___ so brightly.", a:"shimmers", hint:"閃爍"},
        {q:"You can see it with the ___ eye.", a:"naked", hint:"裸（眼）"},
        {q:"___ around the lake is popular.", a:"Hiking", hint:"遠足"},
        {q:"___ fields bloom in summer.", a:"Lupin", hint:"羽扇豆"},
        {q:"Māori communities lead ___ tours.", a:"stargazing", hint:"觀星"},
        {q:"Traditional star stories were passed down for ___.", a:"generations", hint:"世代"},
        {q:"The Karoo Desert is a vast ___ region.", a:"semi-arid", hint:"半乾燥"},
        {q:"It's a hidden ___ for nature lovers.", a:"haven", hint:"避風港"},
        {q:"It's home to unique ___ plants.", a:"succulent", hint:"多肉的"},
        {q:"Travelers can go on guided ___ drives.", a:"wildlife", hint:"野生動物"},
        {q:"Locals, many of Boer ___, welcome guests.", a:"descent", hint:"後裔"},
        {q:"They welcome guests with homemade ___.", a:"biltong", hint:"肉乾"},
        {q:"These spots let travelers avoid ___ tourist hubs.", a:"crowded", hint:"擁擠的"},
        {q:"Travelers connect deeply with local ___.", a:"cultures", hint:"文化"},
        {q:"Visiting them supports small local ___.", a:"businesses", hint:"生意"},
        {q:"This helps ___ these special places for future generations.", a:"protect", hint:"保護"}
      ],
      vocab: {
        "most":"大多數","travelers":"旅客","think":"認為","beaches":"海灘","big":"大的","cities":"城市",
        "planning":"計劃","hemisphere":"半球","trips":"旅行","lesser-known":"較不知名的","spots":"地點",
        "offer":"提供","unique":"獨特的","experiences":"體驗","three":"三個","such":"這樣的",
        "destinations":"目的地","chile":"智利","atacama":"阿塔卡馬","desert":"沙漠","new":"新的",
        "zealand":"紐西蘭","lake":"湖","tekapo":"蒂卡波","south":"南方","africa":"非洲","karoo":"卡魯",
        "stand":"站","out":"出","their":"他們的","distinct":"獨特的","charm":"魅力","often":"經常",
        "called":"被稱為","driest":"最乾燥的","place":"地方","earth":"地球","surprises":"使驚訝",
        "otherworldly":"超乎尋常的","beauty":"美","unlike":"不像","typical":"典型的","deserts":"沙漠",
        "has":"有","salt":"鹽","flats":"平地","that":"那個","glow":"發光","pink":"粉紅色",
        "sunrise":"日出","geysers":"間歇泉","spout":"噴出","steam":"蒸氣","dawn":"黎明",
        "visitors":"訪客","can":"能","stargaze":"觀星","top":"頂級","dark-sky":"暗天","reserve":"保護區",
        "soak":"浸泡","hot":"熱","springs":"溫泉","locals":"當地人","mostly":"大多","indigenous":"原住民",
        "people":"人們","greet":"問候","warmly":"熱情地","sharing":"分享","stories":"故事","ancient":"古代的",
        "survival":"生存","skills":"技能","over":"在……上","cups":"杯","herbal":"草本的","tea":"茶",
        "glacial":"冰川的","island":"島","famous":"著名的","its":"它的","bright":"明亮的",
        "turquoise":"藍綠色","water":"水","small":"小的","church":"教堂","good":"好的",
        "shepherd":"牧羊人","also":"也","unesco":"聯合國教科文組織","sky":"天空","clear":"晴朗的",
        "nights":"夜晚","milky":"乳白的","way":"道路","shimmers":"閃爍","so":"如此","brightly":"明亮地",
        "you":"你","see":"看見","it":"它","with":"用","naked":"裸的","eye":"眼睛",
        "hiking":"遠足","around":"周圍","visiting":"參觀","nearby":"附近的","lupin":"羽扇豆","fields":"田地",
        "blooming":"盛開","summer":"夏天","are":"是","popular":"受歡迎的","including":"包括",
        "māori":"毛利人","communities":"社區","lead":"帶領","tours":"旅行","explaining":"解釋",
        "traditional":"傳統的","star":"星星","passed":"傳","down":"下","generations":"世代",
        "vast":"廣闊的","semi-arid":"半乾燥","region":"地區","hidden":"隱藏的","haven":"避風港",
        "nature":"大自然","lovers":"愛好者","home":"家","succulent":"多肉的","plants":"植物",
        "rare":"稀有的","animals":"動物","like":"像","korhaan":"鴇","bird":"鳥","go":"去",
        "guided":"有導遊的","wildlife":"野生動物","drives":"駕車","stay":"停留","family-run":"家庭經營的",
        "farms":"農場","many":"許多","boer":"布爾人","descent":"後裔","welcome":"歡迎","guests":"客人",
        "homemade":"自製的","biltong":"肉乾","dried":"乾的","meat":"肉","share":"分享","tales":"故事",
        "life":"生活","quiet":"安靜的","windswept":"受風吹的","land":"土地","these":"這些","unusual":"不尋常的",
        "benefits":"好處","let":"讓","avoid":"避免","crowded":"擁擠的","tourist":"遊客",
        "hubs":"中心","connect":"連接","deeply":"深深地","local":"當地的","cultures":"文化",
        "experience":"體驗","purest":"最純淨的","form":"形式","them":"它們","supports":"支持",
        "businesses":"生意","from":"從","indigenous-led":"原住民帶領的","helping":"幫助","protect":"保護",
        "special":"特別的","places":"地方","future":"未來"
      }
    },
    "語境完形填空": {
      title: "Context Cloze (P.9)",
      page: "P.9",
      intro: "💡 長按任意英文單詞，可查看中文意思。",
      paragraphs: [
        {text:"Joyce: Noah, can you do me a (1. ___), please? Noah: Of course, what can I do for you? Joyce: Would you please take care (2. ___) my dog for me? I'm visiting my grandparents this weekend to celebrate my grandma's birthday. Noah: I'd be (3. ___) to do so. I love dogs. Joyce: Thank you so much! Really appreciate your help!"},
        {text:"A notice: Flats for Students — Are you a student looking for a (4. ___) to live? A retired couple have two fully equipped flats available for rent in a quiet and safe area. The flats are located in Susses Street and are within walking distance of the campus. They are also situated conveniently close to bus routes. (5. ___) flats have two bedrooms and a kitchen. (6. ___) parties please contact me at mmsoo@gmail.com.uk"},
        {text:"An email: To: chriswong@gmail.com; From: pattam@hotmail.com; Subject: Karen's birthday. Dear Chris, As you know, Karen's birthday is next month and so I would like to hold a surprise party for her. (7. ___) you are her best friend, could you give me some ideas on what we should plan for the party, like (8. ___) we should invite and what presents to get, etc.? Also, please let me know if you have (9. ___) suggestions. Pat"}
      ],
      items: [
        {no:1, q:"(1) can you do me a ___", opts:["flavor","favor","favoring","flavoring"], ans:"B", exp:"do sb a favor 是固定搭配，意為「幫某人一個忙」。"},
        {no:2, q:"(2) take care ___ my dog", opts:["on","after","of","for"], ans:"C", exp:"take care of 是固定搭配，意為「照顧」。"},
        {no:3, q:"(3) I'd be ___ to do so.", opts:["delighted","disappointed","disappointing","delighting"], ans:"A", exp:"delighted 意為「高興的」，修飾人。"},
        {no:4, q:"(4) looking for a ___ to live", opts:["address","location","space","place"], ans:"D", exp:"a place to live 意為「住的地方」，固定搭配。"},
        {no:5, q:"(5) ___ flats have two bedrooms", opts:["Both","Two","Either","All"], ans:"A", exp:"both 用於兩者，後接複數名詞。"},
        {no:6, q:"(6) ___ parties please contact me", opts:["Interest","Interesting","Interested","Interestingly"], ans:"C", exp:"interested parties 意為「有興趣的人」，形容詞修飾人。"},
        {no:7, q:"(7) ___ you are her best friend", opts:["Cause","Since","For","So"], ans:"B", exp:"since 引導原因狀語從句，意為「既然」。"},
        {no:8, q:"(8) like ___ we should invite", opts:["who","to whom","whose","which"], ans:"A", exp:"who 作 invite 的賓語，意為「邀請誰」。"},
        {no:9, q:"(9) if you have ___ suggestions", opts:["another","others","the other","any other"], ans:"D", exp:"any other 意為「任何其他的」，用於疑問句/否定句。"}
      ],
      vocab: {
        "joyce":"喬伊斯","noah":"諾亞","can":"能","you":"你","do":"做","me":"我","favor":"幫忙",
        "please":"請","of":"的","course":"當然","what":"什麼","for":"為了","would":"會","take":"拿",
        "care":"照顧","my":"我的","dog":"狗","i'm":"我是","visiting":"拜訪","grandparents":"祖父母",
        "this":"這個","weekend":"週末","celebrate":"慶祝","grandma":"奶奶","birthday":"生日",
        "i'd":"我會","be":"是","delighted":"高興的","to":"到","so":"如此","love":"愛","dogs":"狗",
        "thank":"感謝","much":"非常","really":"真的","appreciate":"感激","your":"你的","help":"幫助",
        "notice":"公告","flats":"公寓","students":"學生","are":"是","student":"學生","looking":"尋找",
        "place":"地方","live":"住","retired":"退休的","couple":"夫妻","have":"有","two":"二",
        "fully":"完全","equipped":"配備","available":"可用的","rent":"出租","quiet":"安靜的","safe":"安全的",
        "area":"區域","located":"位於","susses":"薩塞克斯","street":"街","within":"在……內","walking":"走路",
        "distance":"距離","campus":"校園","they":"他們","also":"也","situated":"位於","conveniently":"方便地",
        "close":"靠近","bus":"公車","routes":"路線","both":"兩者","bedrooms":"臥室","kitchen":"廚房",
        "interested":"有興趣的","parties":"當事人","contact":"聯絡","at":"在","gmail":"Gmail","com":"商業",
        "uk":"英國","an":"一個","email":"電子郵件","from":"從","hotmail":"Hotmail","subject":"主題",
        "karen":"凱倫","dear":"親愛的","chris":"克里斯","as":"如同","know":"知道","next":"下一個",
        "month":"月","and":"和","like":"喜歡","hold":"舉辦","surprise":"驚喜","party":"派對",
        "her":"她","since":"既然","best":"最好的","friend":"朋友","could":"可以","give":"給",
        "some":"一些","ideas":"主意","on":"在……上","we":"我們","should":"應該","plan":"計劃",
        "who":"誰","invite":"邀請","presents":"禮物","get":"得到","etc":"等等","let":"讓",
        "if":"如果","any":"任何","other":"其他","suggestions":"建議","pat":"帕特"
      }
    }
  }
};
