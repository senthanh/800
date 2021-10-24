module.exports.config = {
  name: "chửi cả box",
  vesrion: "1.0.0",
  hasPermisson: 1,
  credit: "ThịnhGoodboy",
  description: "Chửi cả box xong out :v",
  commandCategory: "group",
  usages: "chửi nguyên cả box xong out oke ko",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "axios": ""
    }
    
} 
module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var listUserID = (await Threads.getInfo(event.threadID)).participantIDs;
		const botID = api.getCurrentUserID();
		listUserID = listUserID.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : 'Để tao dập lồn cái box này!⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯', mentions = [], index = 0;
		
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}