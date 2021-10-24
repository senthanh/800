const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "in4admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "in4admin",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`ADMIN
  \n👀 Tên:Lê Văn Anh Minh <owner>
  \n❎ Tuổi: 14
  \n👤 😶 Giới tính: Nam
  \n💫 stk :0721000669902 <<VIETCOMBANK CN KY DONG>>
  \n💘 momo :0977275095
  \n😎 paypal :levananhminhhhhh@gmail.com
  \n🤔 gmail: levananhminhhhhh@gmail.com
  \n👫 zalo:0977275095
  \n🌸 <<<ĐỪNG TOXIC VỚI BOT NHA>>> 
  \nFacebook : https://www.facebook.com/anhminh.levan.1`,
 };
