const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
   description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["Hellooo em là bot của LeMinh", "Cái dề", "ayenl á", "Yêu chị", "Hi người đẹp", "hả?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute phô mai que", "Nói gì thế bây bê", "Dạ", "Yêu anh Minhh nhất", "chị là bae của anh Minhh à", "Yêu chị nhất", "Sủa đi em iu", "Sao thế công chúa của em", "á á á", "Phài ơơơ ê ồ ê ồ", "Tuyển ghệ đẹp là được", "Bê đê à", "Chị buồn à?", "Sao sao sao", "Bot cute phô mai que", "Em đẹp trai ok ko", "Đừng khen em ngại quá hí hí" ,"Làm chồng em ko ạ?", "Đừng spam em", "Cút ra", "ĐSao bạn êi", "Sủa đi", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Spam cc cút", "Yêu em hong?", "A vợ tương lai"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Ừ ok", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Next", threadID);
  };

  if ((event.body.toLowerCase() == "hi mng") || (event.body.toLowerCase() == "hi mng")) {
    return api.sendMessage("hellooo", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("ừ lô bạn", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("hiiiiiii", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("hihi dạ", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️láo quá:<", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("cút cút cútttttt", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi shit", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Lô bạn êi", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("looooooooooooooooooo", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("nói nghe", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("Chửi nhau đê", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("Đánh nhau sẽ hay hơn", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("Em nghĩ nắm đấm sẽ giải quyết đc)", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Umum hát đi m.n", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("hát đi m.n ơiiiiii", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Điều anh luôn giữ kín trong tim\nThương em đôi mắt ước nhòa\nĐiều anh luôn giữ kín trong tim này\nThương em ngồi đó khóc òa\nĐiều anh luôn giữ kín trong tim này\nNgày mai nắng gió sương ngâm\nCó ai thương, lắng lo cho em?", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("hát điiii mà", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Chúng taaa... là áng mây trên trời vội vàng ngang qua\nChúng taaa... chẳng thể nâng niu những câu thề\nCứ như vậy thôi, không một lời lặng lẽ chia xa\nChiều mưa bên hiên vắng buồn\nCòn ai thương ai mong aiii?", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️Box flop quá", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️Em nghĩ nà nọc nem đi", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️Kick kick kick", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Mơ em nha", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin là Lê Văn Anh Minh có gì dùng lệnh -ad hoặc -adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin nà Lê Văn Anh Minh có gì dùng lệnh -ad hoặc -adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️Lọc mem đeee", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️lời khuyên của em là flop box đi=))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️Đâu có không vạch ra xem nào", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Eo ơi ghê thế", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Eo ơi ghê thế", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Sao emiu", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Ghen tị với vẻ đẹp tao chứ gì", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️sủa cac", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "ông Minh") || (event.body.toLowerCase() == "ong minh")) {
    return api.sendMessage("️Thằng admin em cũng tên Minh", threadID);
  };

  if ((event.body.toLowerCase() == "ôg Minh") || (event.body.toLowerCase() == "og minh")) {
    return api.sendMessage("️Cha này bê đê", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️Chuẩn mà còn đẹp trai cute phô mai queee", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Hahahahhahahahahahaaaaaa", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kakakakakakaka", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️chửi nhau đê", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️cộng 1", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Em có", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Thằng đấy bê đê yêu làm mẹ gì", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("E chưa nè, yêu em đi vã quá à", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("okok, bạn là nhất", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Kick tao đi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy sao nào", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Zui gần chết", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Không, cút cút cút", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Em chưa bùn ngủ", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Em chưa, mua gì ngon ngon cho em đi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Không", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Đéo cút", threadID);
  };

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rôi thằng bê đê đấy là admin của em mà\nLink fb nó này: https://www.facebook.com/anhminh.levan.1", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("em chịu", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Sao ghen tị với vẻ đệp của tao hả", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("Là cục cứt hả?", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
