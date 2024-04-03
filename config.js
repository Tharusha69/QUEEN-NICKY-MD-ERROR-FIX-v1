const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ae42844d1eb41e25b7311.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐁𝐨𝐭𝐭𝐨' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DUMIDU' : process.env.OWNER_NAME,
  sessionName: process.env.SESSION_ID === undefined ? '𝙌𝙐𝙀𝙀𝙉-𝙉𝙄𝘾𝙆𝙔-𝙈𝘿;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdZWW9ieEhYNU41QldCdFVrbTZxeFJsQzVFcUFUYmVxK3dKVGxjNTZtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV291MUZWY3dTM0lMWENyRmdWbWxnRkF3TnlwWFgyMDVOWDhPMmZZaDlWRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QVF3KzY5bnVZSjNYdlovR3FMd2ZTSDNCaGRCSllMUjZUYmg0ZloxZzNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJETlpDV0l5VG12b3Jua2JNZjZpYVhQVjZMb0lUQmJ3dlFXSjdqblp3c2swPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OY0toM0ZJTVpva0plbEJSZXlpR3lONzhDaHdLMzU3djF5eHMrcUhTbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU2dmNDZWlXZm10VVg5V0RIeTk0MTQxRkg3ZzNPM2Ywd1p0dWk5WVRTbUk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4K0RuRGlGZ2RWRjErWFI4WHE5cDZFTVUzR3RhekdSUm5CTlhVckFMa0lmWGhSekVUMEhvVFdPOU9VNWNEZGQwY2I5TG5OY0QwM1pZWnE3azBLTVhodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1NiwiYWR2U2VjcmV0S2V5IjoiYmNZeEppUDd6ZTNzMnIyVHRHSFRsNG9wZjNTenduVVFHM1huTHowcE5WST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMGVFWlVwY0VRb21rYVFkalJlcGxDQSIsInBob25lSWQiOiIxNzkzYTgyYy05YTY1LTQ3MDQtYmU2Ni1mNjY4Mzg4ZGQzODkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhuRm93azk2ZFo3dXM2STlUSllmWTFxQitVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2T2d1aDh0WmVORkF3bUY1aVQ3SzUwVC82cjA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdmsyWk1ERU82NnRiQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3Zit2NEh5dEh3NHQ4cDFnQ1p6MTE1VVhuSGt4MGpPMHRINnQxTkVIaTJjPSIsImFjY291bnRTaWduYXR1cmUiOiJMWFhTWDdvQkFwRkw0ZEFwdXQvVkdJUXRYUXpwRmowRUtUcXhJdFBCa0cvaE52WVBSK1FtWkhjNnNpSVBabFBiOTk3SitlR3RtWFZhV21nMG9qV1FCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVMra2RvSUJYNkxxTnF6Tm1IKzVwNHc2NnNZUHVnckVKRXkrNUppU2NpcGt3T3M5LzBWYU1hamF5d1drNjhwTWJ1TXhVZm9NZHBaUzc1Q1FjTmY5aXc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzY1ODMyMzM4OjhAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjU4MzIzMzg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSC9yK0I4clI4T0xmS2RZQW1jOWRlVkY1eDVNZEl6dExSK3JkVFJCNHRuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEyMTUxOTIyfQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,fucked,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,	
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'QUEEN-NICKY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
