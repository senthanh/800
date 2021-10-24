module.exports.config = {
    name: "kbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra//mod by Jukie
    description: "búa bao kéo",
    commandCategory: "Game",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args, Currencies,Users,Threads }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          var data = await Currencies.getData(event.senderID);
          var money = data.money
          if(money < 5000) api.sendMessage("Bạn thiếu 5000$ để có thể chơi",event.threadID,event.messageID)
          else {              
    if(!args[0]) {
        outMsg("Vui lòng nhập 'kéo' hoặc 'búa' hoặc 'bao'")
    }
    var turnbot = ["✌️","👊","🖐"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          var userturn = args.join( " ")
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              return outMsg(`Hòa\nCậu : ${userturn}\nTớ : ${botturn}\nHòa, số dư không thay đổi`)
            } else if (userturn == "kéo") {
              if (botturn == "👊") {
                Currencies.setData(event.senderID, options = {money: money -5000})
                return outMsg(`Tớ win\nCậu : ${userturn}\nTớ : ${botturn}\nCậu đã thua và mất 5000$`)
                
              } else if (botturn == "🖐") {
                Currencies.setData(event.senderID, options = {money: money +10000})
                return outMsg(`Cậu win\nCậu : ${userturn}\nTớ : ${botturn}\nCậu đã thắng và được cộng 10000$`)
                
            }
          } else if (userturn == "búa") {
            if (botturn == "🖐") {
                Currencies.setData(event.senderID, options = {money: money -5000})
                return outMsg(`Tớ win\nCậu : ${userturn}\nTớ : ${botturn}\nCậu đã thua và mất 5000$`)
                
              } else if (botturn == "✌") {
                Currencies.setData(event.senderID, options = {money: money +10000})
                return outMsg(`Cậu win\nCậu : ${userturn}\nTớ : ${botturn}\nCậu đã thắng và được cộng 10000$`)
              
          }
        } else if (userturn == "bao") {
          if (botturn == "✌") {
                Currencies.setData(event.senderID, options = {money: money -5000})
                return outMsg(`Tớ win\nCậu : ${userturn}\nTớ : ${botturn}\nCậu đã thua và mất 5000$`)
                
              } else if (botturn == "👊") {
                Currencies.setData(event.senderID, options = {money: money +10000})
                return outMsg(`Cậu win\nCậu : ${userturn}\nTớ : ${botturn}\nCậu đã thắng và được cộng 10000$`)
            
        }
      }
        } 
      }
}