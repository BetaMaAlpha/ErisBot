const Eris = require("eris");
const token = procss.env.token;
const bot = new Eris(token);

bot.on("ready", () => {
    console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
    if(msg.content.toLowerCase() === "!ping") {
        msg.channel.createMessage("Pong!");
    } else if(msg.content.toLowerCase() === "!pong") {
        msg.channel.createMessage("Ping!");
    }
});

bot.connect();