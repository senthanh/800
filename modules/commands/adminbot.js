module.exports.config = {
    name: "adminbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "LeMinh",
    description: "Thông tin về Dịch Vụ Của Admin",
    commandCategory: "adminbot",
    usages: "adminbot",
    cooldowns: 5,
    dependencies: ["request"],
};

module.exports.run = ({ api, event, args }) => {
    const request = require("request");
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`+++ Dịch Vụ Của Admin +++\n🔰Nhận All Về Dịch Vụ Facebook🔰\n& Liên Hệ: https://www.facebook.com/anhminh.levan.1\n+++ Mọi người ủng hộ adminn vài đồng ăn sángg nhó +++\n$ LÊ MINH $`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        var codeData = JSON.parse(body);
        if (codeData.error == true) return api.sendMessage(getText('cantFindHentai'), threadID, messageID);
        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters == '') characters = 'Original';
        api.sendMessage(`» Tên: ${title}\n» Tác giả: ${artists}\n» Nhân vật: ${characters}\n» Tags: ${tags}\n» Liên kết: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}
