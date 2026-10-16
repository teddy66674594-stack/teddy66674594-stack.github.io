// ============================================
// 生詞庫
// 目前有第三單元、第五單元｜以後加單元：往下加 UNIT 物件即可
// ============================================

const WORD_UNITS = {
  "第三單元": [
    {no:1, en:"conventional", pos:"adj.", syn:"traditional", synCn:"傳統的", cn:"传统的", memo:"形容風俗、習慣等合乎傳統"},
    {no:2, en:"entice", pos:"v.", syn:"tempt", synCn:"引誘", cn:"引诱", memo:"entice somebody to do something引誘某人做某事"},
    {no:3, en:"venture", pos:"v.", syn:"expedition", synCn:"冒險遠征", cn:"冒险", memo:"venture to do sth 冒險去做；過去式ventured"},
    {no:4, en:"conjure up", pos:"phr. v.", syn:"evoke", synCn:"喚起", cn:"联想起", memo:"conjure up memories 喚起回憶"},
    {no:5, en:"glacier", pos:"n.", syn:"a large mass of ice", synCn:"大塊冰體", cn:"冰川", memo:"複數形式glaciers"},
    {no:6, en:"awe‑inspiring", pos:"adj.", syn:"breathtaking", synCn:"令人震撼的", cn:"壮丽的", memo:"多用來描寫風景壯麗震撼"},
    {no:7, en:"solar", pos:"adj.", syn:"sun‑related", synCn:"與太陽有關", cn:"太阳的", memo:"solar energy太陽能"},
    {no:8, en:"proximity", pos:"n.", syn:"nearness", synCn:"接近", cn:"邻近", memo:"in proximity to 靠近……"},
    {no:9, en:"monarchy", pos:"n.", syn:"a system of having a king or queen", synCn:"君主制度", cn:"君主制", memo:"mon‑表示君主相關"},
    {no:10, en:"delicacy", pos:"n.", syn:"gourmet item", synCn:"美食", cn:"美食佳肴", memo:"指特色珍貴食物"},
    {no:11, en:"comprise", pos:"v.", syn:"consist of", synCn:"由…組成", cn:"包括", memo:"A comprises B  A由B組成"},
    {no:12, en:"recommend", pos:"v.", syn:"suggest", synCn:"建議", cn:"推荐", memo:"recommend sth to somebody向某人推薦某物"},
    {no:13, en:"phenomenon", pos:"n.", syn:"an unusual or interesting event", synCn:"奇異事件", cn:"现象", memo:"複數phenomena"},
    {no:14, en:"visible", pos:"adj.", syn:"observable", synCn:"可觀察的", cn:"可见的", memo:"vis‑看；‑ible可……的"},
    {no:15, en:"atmosphere", pos:"n.", syn:"a mixture of gases surrounding a planet", synCn:"行星周圍氣體", cn:"大气层", memo:"也可表示氣氛"},
    {no:16, en:"engage in", pos:"phr. v.", syn:"take part in", synCn:"參加", cn:"参与", memo:"engage in activities參加各類活動"},
    {no:17, en:"once‑in‑a‑lifetime", pos:"adj.", syn:"unique", synCn:"獨特的", cn:"千载难逢的", memo:"一生難得一次的經歷"},
    {no:18, en:"cosmopolitan", pos:"adj.", syn:"international", synCn:"國際化的", cn:"国际化的", memo:"多用形容都市國際多元"},
    {no:19, en:"cuisine", pos:"n.", syn:"culinary style", synCn:"烹飪風格", cn:"烹饪风格；菜肴", memo:"local cuisine當地菜餚風味"},
    {no:20, en:"bound", pos:"adj.", syn:"almost certain", synCn:"幾乎必然", cn:"必然的", memo:"be bound to do 一定會做某事"},
    {no:21, en:"destination", pos:"n.", syn:"place", synCn:"地點", cn:"目的地", memo:"tourist destination旅遊目的地"},
    {no:22, en:"overlooked", pos:"adj.", syn:"underrated", synCn:"被低估的", cn:"被忽略的", memo:"來自動詞overlook忽視"},
    {no:23, en:"region", pos:"n.", syn:"area", synCn:"區域", cn:"地区", memo:"rural region鄉村地區"},
    {no:24, en:"several", pos:"adj.", syn:"many", synCn:"許多", cn:"数个", memo:"several +可數名詞複數"},
    {no:25, en:"combine with", pos:"phr. v.", syn:"pair with", synCn:"與…配對", cn:"与……结合", memo:"combine A with B把A與B結合"},
    {no:26, en:"wrap up", pos:"phr. v.", syn:"conclude", synCn:"結束", cn:"结束", memo:"wrap up a journey結束旅程"},
    {no:27, en:"range", pos:"n.", syn:"variety", synCn:"多樣種類", cn:"范围", memo:"a wide range of各式各樣"},
    {no:28, en:"check out", pos:"phr. v.", syn:"see", synCn:"查看", cn:"查看", memo:"check out something前去參觀、看一看"},
    {no:29, en:"entirely", pos:"adv.", syn:"completely", synCn:"完全地", cn:"完全地", memo:"entire形容詞完整，‑ly副詞後綴"},
    {no:30, en:"date back to", pos:"phr. v.", syn:"originate from", synCn:"起源於", cn:"追溯到", memo:"後接年代、歷史時期"}
  ],
  "第五單元": [
    {no:1, en:"accessible", pos:"adj.", syn:"can be reached", synCn:"可接近的", cn:"可接近的，可使用的", memo:"accessible to sb 對某人來說是可接近的"},
    {no:2, en:"customized", pos:"adj.", syn:"tailor-made", synCn:"量身定做的", cn:"定制的，定做的", memo:"customize 動詞，customized 形容詞"},
    {no:3, en:"adapt", pos:"v.", syn:"adjust", synCn:"調整", cn:"适应，改编", memo:"adapt to sth 適應某事"},
    {no:4, en:"mechanical", pos:"adj.", syn:"automated", synCn:"自動化的", cn:"机械的", memo:"mechanical engineering 機械工程"},
    {no:5, en:"amputate", pos:"v.", syn:"cut off", synCn:"切除", cn:"截肢", memo:"amputate a limb 截去肢體"},
    {no:6, en:"superior", pos:"adj.", syn:"better", synCn:"更好的", cn:"优越的，更好的", memo:"be superior to 優於……"},
    {no:7, en:"budding", pos:"adj.", syn:"emerging", synCn:"新興的", cn:"新兴的，崭露头角的", memo:"budding young artist 嶄露頭角的年輕藝術家"},
    {no:8, en:"wireless", pos:"adj.", syn:"radio", synCn:"無線電的", cn:"无线的", memo:"wireless connection 無線連接"},
    {no:9, en:"robotics", pos:"n.", syn:"robot science", synCn:"機器人科學", cn:"机器人技术", memo:"the science of making and using robots"},
    {no:10, en:"functional", pos:"adj.", syn:"practical", synCn:"實用的", cn:"功能性的，实用的", memo:"functional design 功能性設計"},
    {no:11, en:"innovative", pos:"adj.", syn:"creative", synCn:"創新的", cn:"创新的，革新的", memo:"innovative ideas 創新的想法"},
    {no:12, en:"pay close attention", pos:"phr.", syn:"focus on", synCn:"密切關注", cn:"密切注意", memo:"pay close attention to sth"},
    {no:13, en:"science fair", pos:"n. phr.", syn:"science exhibition", synCn:"科學展覽", cn:"科学展览会", memo:"a competitive exhibition of science projects"},
    {no:14, en:"realistic", pos:"adj.", syn:"lifelike", synCn:"逼真的", cn:"逼真的，现实的", memo:"realistic expectations 現實的期望"},
    {no:15, en:"outgrow", pos:"v.", syn:"grow bigger than", synCn:"長得比...快", cn:"长得比...快，因长大而不再适合", memo:"outgrow clothes 長大穿不下衣服"},
    {no:16, en:"breakthrough", pos:"n.", syn:"discovery", synCn:"重大發現", cn:"重大突破，重要发现", memo:"make a breakthrough 取得突破"},
    {no:17, en:"achieve", pos:"v.", syn:"accomplish", synCn:"完成", cn:"实现，达到", memo:"achieve a goal 實現目標"},
    {no:18, en:"affordable", pos:"adj.", syn:"reasonably priced", synCn:"價格合理", cn:"负担得起的，价格合理的", memo:"affordable housing 可負擔的住房"},
    {no:19, en:"collaboration", pos:"n.", syn:"cooperation", synCn:"合作", cn:"合作，协作", memo:"in collaboration with 與……合作"},
    {no:20, en:"inspiration", pos:"n.", syn:"motivation", synCn:"靈感", cn:"灵感，启发灵感的人/物", memo:"draw inspiration from 從……中汲取靈感"}
  ]
};
