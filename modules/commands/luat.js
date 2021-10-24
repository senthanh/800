module.exports.config = {
	name: "luat",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "BuiChiThong",
	description: "Luật",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`[ BẠN CÓ BIẾT ] 
1: Không Spam Bot Tránh Tình Trạng Checkpoint Hoặc Die Bot !
2: Không Khuyến Khích Chơi Game Trong Box Chat Gây Loãng + Lag Cho Người Khác !
3: Vi Phạm Thì Bị Chặn Sử Dụng Bot Hoặc Gban !
Nếu Có Trục Trặc Gì Về BOT Liên Hệ Admin Bot:facebook.com/anhminh.levan.1 ( Lê Minhh ) Để Fix Spam Ăn Gban Ráng Chịu`, event.threadID, event.messageID);
