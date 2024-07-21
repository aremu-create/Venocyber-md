//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347045845726";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVhMlBoWlhhMGFscUMySFZLWU1VdGtHMnJTc1NpNnZmYUR1SW5NN2FsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdCU0ljQjlTQTkyQWhkVE5IeG5EOTlzeUtEQVZjVWZxbkw2MTVNNSt5ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQVJwQy9LRVN5Sm5NQ0hONVNHOU82azBtUFY1U0g3RWRES3Nka1pYNEVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNU9NbFV4VEZNamhUZU9XajRBeWJvS0w0MWpNR2RJZ0F3TWhub3p4SVJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNdEdreTU3SXJ3K2pObEcwWFNqNU5DN1ZNa2YyRVFrQkcyS2puTEVSa009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJCT25qNEpkYjlLaDJFeHBYQlZiTE5KckZ0eW1LeUVueVBEOVBoa2t6d2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0wxZEdHVVVJTWRwUnlZU01mdFhZNWF1TnRsS2lpbndicHZGTFRmK2cwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWStIcFMxc2NCMmwzT08ySlRPeVRqeEpOalp2elRNZWg1Qlk1OEJNR2Z6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlEbXB2U2dFd0RlZDErWjkzSVVoZTNrSVY2SktkeUFNQ2hjTkM2am5YQVA5NFh5ejBJS3M1SUJ4Zi9EbUlobVNSNXlSS2FYZGl0VXp0QVRUYll4TGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJNT3ZqRVlQSmE5M09VU0xTY0JpeGRoMnNsUW5DVzh1SFNQUE9hOTl3enF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRbklNR3Q1aFFnR01LMWhhQUp0V2FBIiwicGhvbmVJZCI6ImRkYjExYTQzLTNmYzEtNDk4OC1iY2EzLWI4NTM5YTliNWUzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVENocjZtL1l6OSsxc0wyQlE5RDBoSEpBcU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHY5UDlqWkl3cHExK3gxaG1vU2crTGprWlBRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM3WDQ5Tks2IiwibWUiOnsiaWQiOiIyMzQ3MDQ1ODQ1NzI2OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsOXzZzDl+KCpsWC4oK1yYbigrLJhMmONDU2w5fNnMOXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUG9ua29RdmEvMXRBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPaVFWbzB0YTdBamJLQjlBcm02VzlSbFNtbGtoU1o3SU9kSWxNVktGeGpJPSIsImFjY291bnRTaWduYXR1cmUiOiJoOG51am1OSVZOamFSR1VVdlFRRXo3QldvaVJiakloTFpwb3dPUUtOMTBCcitzbTdIeTBtQzJuV2hyaTZkS1RjTXhxODhVSXNDMzFtek4ySGR1Yk5Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieXpNNmtiMmo5QVR3ZnNNa3ZrOXhnbi9JaDdjeDN5NnRBMHprcVZ1SVN0NHhncG11aWY3eE5GeVlOU0FpZUlWb3dxcXVZb1EwVjJjcTBZMmhmWEVkZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ1ODQ1NzI2OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRva0ZhTkxXdXdJMnlnZlFLNXVsdlVaVXBwWklVbWV5RG5TSlRGU2hjWXkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1ODc2NTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnowIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "oi Wₐᵣₐᵢ ₒ𝚗ᵢ desu",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
