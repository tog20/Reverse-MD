//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/Reverse-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/reverse.jpg";
global.devs = "233542680612";
global.sudo = process.env.SUDO || "233542680612";
global.owner = process.env.OWNER_NUMBER || "233542680612";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/reverse.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZHSFMvYnJJZ0VQQkZoZk9SMktzMEQzOHFjWGdMQmZncm0xWjZCMXFuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlVxb2o1WkFtL242U3h6cWNWb01nTWlHWkRkMEZpdW5vaDhSU01XZTlFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSEkwV09ieFVEZ0pqay9PWHhLV2tKc3JJdWV4d0ZUd2x3OFBFbDRLaGxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYOXdGNjNXMHdYcjQvdFlCQ1FxY2ROeHVNNm45bEFZZnNISW12QW50MERVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DQ1hDNDJJblhpMUVaRlQyMytPL283MW1RS0RJdzdmS09lYkxSZ2s3SDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFKT1FyV2t0SVFiVlVKb3Y0YUZ0bGlzSFFTQTAvMHlQcVMxV2Y4dWNnU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1rOWV0a1BOcS8vOVY4SzNIOGhxT0J0MUpDSHFRZHcvSmNMQkI5aW5VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWNucUVBby9MV0FMTGYzMkxVQ1lJRG9Zc0lMYmdDN04xbktsbzBNMFBFQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims2UEsxOGpWRk5zWG1yQ2JEZzZmV1cwM1FRVDVSVmRDVGFGR1E0OGxZVUFUSXRiWVdyTGlZb0FqVTBET2ZEYmg3dWdzTlJCRWM4NnJqSmtsd2F2cWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJXcVJLNG9LRkFWWElUMXpVZFFIa292ajlmNzR5dXMzRzVpNFN2NEZuWU5nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI0MzEzNTU4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTRFMzI4RjYyQ0UyMDVERjBCQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2Nzk3MDA2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjZFhsOUNKTVRFNkZuYkNzVEtrWDZnIiwicGhvbmVJZCI6ImI0NmM0NjZhLTExYzgtNDNiOS04MmU3LTdhNTAzMmEyYTUxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDd2l4NGM5M1dNMkkwdVpQWEFqQmxrN3BLa0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2dXWnBZWHlHc1RRaGl5ZUJVeDdoYXpIYitzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktENzlLNjVCIiwibWUiOnsiaWQiOiIyMzMyNDMxMzU1ODU6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVMy1zI3Mk82AzL/NhMyazIHNgcyrzK3Nmc2IzKbNh82OzYfMp82Fb8y2zYTNhMyLzILMv82SzLvMp8ypzY7NiMy7zJ7Mn2fMtc2EzJbNjsypzKfMrsyszLEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0syNTRwSUJFTDNXbGJ3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdkTEF2bnFsVVFBVWZsS0dpbEsxSHpRQUpiOHQ1U0JQN29WZGdQMkJBUUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVKaGE2QVJodEVOUlhxQ0lERkl5ZXN4dm5oSlBGM04wbFFBSkE3KzFPRVZNM0Uwd1JtaFh0M0ZlMWQ2LzdGNU9OdzI1RXNLQWRaSXRncjhNd0hlaGdnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzNjBQS0gzcDFHODNHUTFnclVYSk1wQTNrcEkrSzY1b1hQclpZZXBNTnliY2Jab2Vwb1N0bitUbUdMUjRiQUJ5cjYyZ2lML0Z0VlBrKy9ienBpdVZqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzI0MzEzNTU4NToyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSblN3TDU2cFZFQUZINVNob3BTdFI4MEFDVy9MZVVnVCs2RlhZRDlnUUVDIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2Nzk3MDAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVkVCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSE KING",
  packname: process.env.PACK_NAME || "R E V E R S E",
  botname: process.env.BOT_NAME || "REVERSE KING",
  ownername: process.env.OWNER_NAME || "REVERSE KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
