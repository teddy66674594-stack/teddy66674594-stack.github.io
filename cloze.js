// ============================================
// 完形題庫
// 目前有第三單元、第五單元
// ============================================

const CLOZE_UNITS = {
  "第三單元": [
    {sentence:"Many people only visit （______） travel destinations like London or Bangkok.", answer:"conventional", syn:"traditional", cnKey:"传统的", cnSentence:"許多人只去傳統的旅遊目的地，比如倫敦或曼谷。"},
    {sentence:"However, Norway is a country that can （______） travellers of all ages who want adventure.", answer:"entice", syn:"tempt", cnKey:"引诱", cnSentence:"然而，挪威是一個能吸引各個年齡段想要冒險的旅行者的國家。"},
    {sentence:"Last summer, I （______） to this exotic city called Tromsø.", answer:"ventured", syn:"expedition", cnKey:"冒险（前往）", cnSentence:"去年夏天，我冒險前往這座充滿異國情調的城市——特羅姆瑟。"},
    {sentence:"The scenery looked like it was （______） by Scandinavia: massive glaciers, thick ice and snow covering the mountains.", answer:"conjured up", syn:"evoke", cnKey:"唤起", cnSentence:"那景色彷彿是由斯堪的納維亞變出來的：巨大的冰川、厚厚的冰雪覆蓋著群山。"},
    {sentence:"The scenery looked like it was conjured up by Scandinavia: massive （______）, thick ice and snow covering the mountains.", answer:"glaciers", syn:"a large mass of ice", cnKey:"冰川", cnSentence:"那景色彷彿是由斯堪的納維亞變出來的：巨大的冰川、厚厚的冰雪覆蓋著群山。"},
    {sentence:"Seeing the Northern Lights was one of the most （______） sights I have ever seen.", answer:"awe‑inspiring", syn:"breathtaking", cnKey:"令人震撼的", cnSentence:"看到北極光是我見過的最令人震撼的景象之一。"},
    {sentence:"The （______） winds painted the sky in bright greens and purples.", answer:"solar", syn:"sun‑related", cnKey:"太阳的", cnSentence:"太陽風把天空染成了明亮的綠色和紫色。"},
    {sentence:"Because of the （______） of the Arctic Ocean, the weather was very cold.", answer:"proximity", syn:"nearness", cnKey:"邻近", cnSentence:"由於靠近北冰洋，天氣非常寒冷。"},
    {sentence:"Norway still has a （______）, with a king and queen respected by the people.", answer:"monarchy", syn:"a system of having a king or queen", cnKey:"君主制", cnSentence:"挪威仍然有君主制，國王和王后受到人民的尊敬。"},
    {sentence:"A famous （______） in Norway is reindeer meat, which I tried and enjoyed.", answer:"delicacy", syn:"gourmet item", cnKey:"美食", cnSentence:"挪威著名的美食是馴鹿肉，我嘗過並且很喜歡。"},
    {sentence:"The country does not （______） many large cities; most towns are small and quiet.", answer:"comprise", syn:"consist of", cnKey:"包括/由…组成", cnSentence:"這個國家沒有很多大城市；大部分城鎮都很小很安靜。"},
    {sentence:"I highly （______） that you visit Norway if you love nature and beautiful landscapes.", answer:"recommend", syn:"suggest", cnKey:"推荐", cnSentence:"我強烈推薦你去挪威，如果你熱愛自然和美麗的風景。"},
    {sentence:"Visiting Iceland is truly a （______） experience.", answer:"once‑in‑a‑lifetime", syn:"unique", cnKey:"千载难逢的", cnSentence:"去冰島真是一次千載難逢的經歷。"},
    {sentence:"Although Reykjavik offers modern （______） living with nice cafes and shops, the real magic lies in nature.", answer:"cosmopolitan", syn:"international", cnKey:"国际化的", cnSentence:"雖然雷克雅未克有現代化的國際都會生活，但真正的魅力在大自然中。"},
    {sentence:"The Northern Lights are clearly （______） on clear winter nights.", answer:"visible", syn:"observable", cnKey:"可见的", cnSentence:"在晴朗的冬夜，北極光清晰可見。"},
    {sentence:"Local （______） includes fresh fish and lamb, which are delicious.", answer:"cuisine", syn:"culinary style", cnKey:"烹饪风格；菜肴", cnSentence:"當地菜餚包括新鮮的魚和羊肉，非常美味。"},
    {sentence:"If you go, you are （______） to see amazing natural wonders.", answer:"bound", syn:"almost certain", cnKey:"必然的", cnSentence:"如果你去，你一定會看到令人驚嘆的自然奇觀。"},
    {sentence:"This beautiful （______） happens when particles from the sun enter the earth's atmosphere.", answer:"phenomenon", syn:"an unusual or interesting event", cnKey:"现象", cnSentence:"當太陽粒子進入地球大氣層時，就會出現這種美麗的現象。"},
    {sentence:"This beautiful phenomenon happens when particles from the sun enter the earth's （______）.", answer:"atmosphere", syn:"a mixture of gases surrounding a planet", cnKey:"大气层", cnSentence:"這種美麗的現象發生在太陽粒子進入地球大氣層時。"},
    {sentence:"There are also many exciting activities to （______）, such as hiking on glaciers, visiting hot springs, and whale watching.", answer:"engage in", syn:"take part in", cnKey:"参与", cnSentence:"還有許多刺激的活動可以參與，比如在冰川上徒步、泡溫泉和賞鯨。"},
    {sentence:"Many tourists only visit famous capitals, but there are many （______） holiday sightseeing spots worth exploring.", answer:"overlooked", syn:"underrated", cnKey:"被忽略的", cnSentence:"許多遊客只去著名的首都，但還有許多被忽略的度假觀光景點值得探索。"},
    {sentence:"One example is a （______） in Denmark called the island of Funen.", answer:"destination", syn:"place", cnKey:"目的地", cnSentence:"一個例子是丹麥一個叫菲英島的目的地。"},
    {sentence:"This peaceful （______） is perfect for travellers who want something different.", answer:"region", syn:"area", cnKey:"地区", cnSentence:"這個寧靜的地區非常適合想要與眾不同的旅行者。"},
    {sentence:"Some castles there （______） the Renaissance period.", answer:"date back to", syn:"originate from", cnKey:"追溯到", cnSentence:"那裡的一些城堡可以追溯到文藝復興時期。"},
    {sentence:"You can easily （______） a visit to Copenhagen, which is only a short train ride away.", answer:"combine with", syn:"pair with", cnKey:"与……结合", cnSentence:"你可以輕鬆地把哥本哈根的遊覽結合起來，只需短程火車即可到達。"},
    {sentence:"The countryside is （______） covered with green fields, farms, and charming villages.", answer:"entirely", syn:"completely", cnKey:"完全地", cnSentence:"鄉村完全被綠色的田野、農場和迷人的村莊覆蓋著。"},
    {sentence:"There are （______） small towns where locals are very welcoming.", answer:"several", syn:"a few", cnKey:"数个", cnSentence:"有幾個小鎮，當地人都非常熱情。"},
    {sentence:"Visitors can enjoy a wide （______） of experiences, including cycling through scenic routes, visiting Hans Christian Andersen's childhood home, and tasting Danish pastries.", answer:"range", syn:"variety", cnKey:"范围", cnSentence:"遊客可以享受各種各樣的體驗。"},
    {sentence:"If you love history and nature, （______） these amazing places.", answer:"check out", syn:"see", cnKey:"查看", cnSentence:"如果你喜歡歷史和自然，去看看這些令人驚嘆的地方吧。"},
    {sentence:"Finally, to （______） the journey, you can relax by the coast and watch the sunset over the Baltic Sea.", answer:"wrap up", syn:"conclude", cnKey:"结束", cnSentence:"最後，為了結束旅程，你可以在海邊放鬆，看波羅的海上的日落。"}
  ],
  "第五單元": [
    {sentence:"In the field of （______）, Easton LaChappelle is renowned for his innovative hand.", answer:"robotics", syn:"the science of making and using robots", cnKey:"机器人技术", cnSentence:"在机器人技术领域，伊斯頓·拉夏佩爾以其創新的機械手而聞名。"},
    {sentence:"He created an innovative （______） hand that was far more functional than conventional prosthetics.", answer:"mechanical", syn:"operated by a machine", cnKey:"机械的", cnSentence:"他創造了一種創新的機械手，其功能遠超傳統假肢。"},
    {sentence:"This device was far more （______） and affordable than conventional prosthetics.", answer:"functional", syn:"practical and useful", cnKey:"功能性的", cnSentence:"這種設備比傳統假肢功能更強大且價格更實惠。"},
    {sentence:"He helped a 7-year-old girl whose right arm was （______） below the elbow.", answer:"amputated", syn:"cut off a part of the body", cnKey:"截肢", cnSentence:"他幫助了一個右臂肘部以下被截肢的7歲女孩。"},
    {sentence:"He provided her with a （______） artificial arm that was tailor-made for her.", answer:"customized", syn:"change to suit the needs of the owner", cnKey:"定制的", cnSentence:"他為她提供了一個專門為她量身定做的定制假肢。"},
    {sentence:"The artificial arm was （______） in both design and cost compared to others.", answer:"superior", syn:"better than average", cnKey:"优越的", cnSentence:"這款假肢在設計和成本上均優於其他產品。"},
    {sentence:"The new prosthetic arm uses a （______） connection to respond to her brain signals.", answer:"wireless", syn:"using a system of radio signals", cnKey:"无线的", cnSentence:"這款新假肢使用無線連接來響應她的大腦信號。"},
    {sentence:"Now, he has made the robotic arm's design freely （______） online for anyone to use.", answer:"accessible", syn:"can be reached", cnKey:"可接近的", cnSentence:"現在，他將機械臂的設計免費發佈在網上，供任何人使用。"},
    {sentence:"This allows anyone to （______） and improve the design.", answer:"adapt", syn:"to change sth", cnKey:"适应，改编", cnSentence:"這使得任何人都可以改編和改進該設計。"},
    {sentence:"For this reason, he has become an inspiration to many （______） young inventors.", answer:"budding", syn:"beginning to develop", cnKey:"新兴的", cnSentence:"因此，他成為了許多嶄露頭角的年輕發明家的靈感來源。"},
    {sentence:"Easton LaChappelle created an （______） prosthetic arm in nine months.", answer:"innovative", syn:"using new ideas or methods", cnKey:"创新的", cnSentence:"伊斯頓·拉夏佩爾在九個月內創造了一款創新的假肢。"},
    {sentence:"Momo had to replace her prosthetic arm when she （______） it.", answer:"outgrew", syn:"to grow bigger than", cnKey:"长大不再适合", cnSentence:"莫莫長大後，不得不更換她的假肢。"},
    {sentence:"Easton has the drive and vision to （______） his goals independently.", answer:"achieve", syn:"to succeed in finishing sth", cnKey:"实现", cnSentence:"伊斯頓擁有獨立實現目標的動力和遠見。"},
    {sentence:"Easton worked in （______） with a team at Microsoft during the design stage.", answer:"collaboration", syn:"cooperation", cnKey:"合作", cnSentence:"在設計階段，伊斯頓與微軟團隊進行了合作。"},
    {sentence:"Unlimited tomorrow has a goal of producing advanced technology at （______） prices.", answer:"affordable", syn:"reasonably priced", cnKey:"负担得起的", cnSentence:"無限明天項目的目標是以可負擔的價格生產先進技術。"},
    {sentence:"The prosthetic arm looked （______） because Momo could even paint its fingernails.", answer:"realistic", syn:"accepting things as they are in fact", cnKey:"逼真的", cnSentence:"這款假肢看起來非常逼真，莫莫甚至可以給它的指甲塗色。"},
    {sentence:"The prosthetic arm and the methods used were widely reported as a （______）.", answer:"breakthrough", syn:"an important discovery", cnKey:"突破", cnSentence:"這款假肢及其使用的方法被廣泛報導為一項重大突破。"},
    {sentence:"While producing the prosthetic arm on a 3D printer, Easton （______） to details.", answer:"paid close attention", syn:"to give careful focus to sth", cnKey:"密切注意", cnSentence:"在用3D打印機製作假肢時，伊斯頓密切關注細節。"},
    {sentence:"From the young inventors' viewpoint, Easton is their （______）.", answer:"inspiration", syn:"sb that gives you ideas", cnKey:"灵感", cnSentence:"從年輕發明家的角度來看，伊斯頓是他們的靈感來源。"},
    {sentence:"Congratulations on winning the （______）.", answer:"science fair", syn:"a competitive exhibition of science projects", cnKey:"科学展览会", cnSentence:"祝賀你在科學展覽會上獲獎。"}
  ]
};
