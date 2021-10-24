const fs = require("fs");
module.exports.config = {
name: "chúa haha",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "chúa haha",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chúa")==0 || (event.body.indexOf("chúa")==0)) {
		var msg = {
				body: "kkk",
				attachment: fs.createReadStream(__dirname + `/noprefix/chua.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}