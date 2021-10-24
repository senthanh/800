 
const fs = require("fs");
module.exports.config = {
name: "lắc đít",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tân",
	description: "lắc đít",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lắc đít")==0 || (event.body.indexOf("lắc đít")==0)) {
		var msg = {
				body: "hàng của tân",
				attachment: fs.createReadStream(__dirname + `/cache/lacdit.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}  