module.exports.config = {
	name: "vdsex",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Lê Anh Trường",
	description: "vdsex",
	commandCategory: "VIDEO",
	usages: "vdsex",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.com/Video/Sex/sex.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/leanhtruonggggg.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/leanhtruonggggg.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/leanhtruonggggg.${ext}`)).on("close", callback);
			})
}
