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
      // 每次抽 5 道選擇題（共 20 道）
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
      // 每次抽 6 道填空題（共 30 道）
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
      // 長按查詞詞庫（覆蓋文章主要詞彙）
      vocab: {
        "travelers":"旅客","hemisphere":"半球","lesser-known":"較不知名的","destinations":"目的地",
        "distinct":"獨特的","charm":"魅力","driest":"最乾燥的","otherworldly":"超乎尋常的",
        "typical":"典型的","salt":"鹽","flats":"平地","glow":"發光","sunrise":"日出",
        "geysers":"間歇泉","spout":"噴出","steam":"蒸氣","dawn":"黎明","stargaze":"觀星",
        "reserve":"保護區","soak":"浸泡","springs":"溫泉","indigenous":"原住民","greet":"問候",
        "ancient":"古代的","survival":"生存","herbal":"草本的","glacial":"冰川的","turquoise":"藍綠色",
        "shimmers":"閃爍","naked":"裸的","hiking":"遠足","lupin":"羽扇豆","blooming":"盛開",
        "communities":"社區","generations":"世代","semi-arid":"半乾燥","haven":"避風港",
        "succulent":"多肉的","rare":"稀有的","wildlife":"野生動物","descent":"後裔","biltong":"肉乾",
        "windswept":"受風吹的","benefits":"好處","crowded":"擁擠的","hubs":"中心","cultures":"文化",
        "purest":"最純淨的","businesses":"生意","protect":"保護","generations":"世代","avoid":"避免"
      }
    },
    "語境完形填空": {
      title: "Context Cloze (P.9)",
      page: "P.9",
      intro: "💡 長按任意英文單詞，可查看中文意思。",
      // 3 個段落，每段含填空位置
      paragraphs: [
        {text:"Joyce: Noah, can you do me a (1. ___), please? Noah: Of course, what can I do for you?"},
        {text:"Joyce: Would you please take care (2. ___) my dog for me? I'm visiting my grandparents this weekend to celebrate my grandma's birthday. Noah: I'd be (3. ___) to do so. I love dogs. Joyce: Thank you so much! Really appreciate your help!"},
        {text:"A notice: Flats for Students — Are you a student looking for a (4. ___) to live? A retired couple have two fully equipped flats available for rent in a quiet and safe area. The flats are located in Susses Street and are within walking distance of the campus. They are also situated conveniently close to bus routes. (5. ___) flats have two bedrooms and a kitchen. (6. ___) parties please contact me at mmsoo@gmail.com.uk"}
      ],
      // 9 道題，答案 + 選項 + 解析
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
      // 語境完形的詞庫
      vocab: {
        "favor":"幫忙","appreciate":"感激","notice":"公告","flats":"公寓","equipped":"配備齊全的",
        "available":"可用的","rent":"出租","campus":"校園","conveniently":"方便地","routes":"路線",
        "parties":"當事人","suggestions":"建議","surprise":"驚喜","celebrate":"慶祝"
      }
    }
  }
};
