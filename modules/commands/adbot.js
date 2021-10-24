module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MhTuanng",
  description: "Thông tin AdminBot",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://postimg.cc/8fJ5fc0H",
  ];
  var callback = () => api.sendMessage({body:`👤 Lê Văn Anh Minh
📍 Ho Chi Minh City
📱 Facebook:https://www.facebook.com/anhminh.levan.1
Này Người Đẹp Bạn Có Thể Donate cho Tôi Chứ?:3✨
💳 VIETCOMBANK: 0721000669902
`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
