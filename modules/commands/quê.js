
const fs = require("fs");
module.exports.config = {
name: "quê",
version: "1.0.1",
hasPermssion: 0,
credits: "tân",
description: "quê",
commandCategory: "Không cần dấu lệnh",
usages: "noprefix",
cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
var { threadID, messageID } = event;
if (event.body.indexOf("quê")==0 || (event.body.indexOf("Quê")==0)) {
var msg = {
body: "lêu lêu",
attachment: fs.createReadStream(__dirname + `/cache/quê.mp4`)
}
return api.sendMessage(msg, threadID, messageID);
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

} 