const mySecret = process.env['TOKEN']
module.exports = {
  Admins: ["752508262733316147", "752371687365804096"], //Admins of the bot
  DefaultPrefix: ";;", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token: process.env.TOKEN, //Discord Bot Token
  ClientID: "838762939296382996", //Discord Client ID
  ClientSecret: "P4QGyngIaNseTqQ4CttOJKT1R-4e3dW8", //Discord Client Secret
  Scopes: ["identify", "guilds"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true,//If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is OP", //A Secret like a password
  IconURL:
    "https://503575c0-841e-4f0d-a13a-7749f355d1a9.id.repl.co/logo.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "wedonthaveapasswordsomakeurown",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "3c72b0841fc1484cb1e6ad966afc5d73", //Spotify Client ID
    ClientSecret: "820e6793e60f4f69a9c76e085a1513b7", //Spotify Client Secret
  },
};
