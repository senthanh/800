const fs = require("fs");
module.exports.config = {
name: "loli",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "loli",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Loli")==0 || (event.body.indexOf("loli")==0)) {
		var msg = {
				body: "LOLI con cặc",
				attachment: fs.createReadStream(__dirname + `/noprefix/loli.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}