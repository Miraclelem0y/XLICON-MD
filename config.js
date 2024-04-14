const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6288804075817"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/sulawrsi utara'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '6288804075817' 
global.devs = '6288804075817';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBvb3hkR2diYU1ROVBuNDdhdW50Nm1TVWlrRTdEc3FyVi9VZTNJcW1GRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlNTazJxUEkzclFVbU5IaTIvMjVUeHZQbFNuWGdPRHNMcC9HSnBvNWdnWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T2VhMDVsdDhuYjY3b0tBY3hQNVVCcFMzL2FNRW8wUjV4M3JvWnNJc2xjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdFAvZFpBZGxGMXpwU2tBTUFXbEpoOTJTOVdmNllpSVo5dkw2aEozL25NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMU2N3QmNjc1FmM25Xb3Z3a0h4Y0Y3MWVBaTNaSUE2Y3ZqTVYwUGl1RTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFhNS8wTEJCZWRTUUJDcEExSGh5cmt2dTFiQlcwdlhWWjFTK1IrY1FIUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xJVVJGWTZPRGJJQk5rL1JMNzBIS1ZZUjNIc2JJL0Q4cWJ0VG5VS25sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXV3Zmd1Ky9mWTNDNEVuMjNtT0hHQmZGR1hzSW0zRlM3K3dKblR4bW5RUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVrS1N2QkZUbHlKZG81eVRmY2xPYmlVZE9XWm1MeS84elZScm5ZcUVzM2EzMWJQVW1KaVVzWkNBRFYxakZoZ0RLMEhLcjdRTFk3WDZSUmtZUVZ5TUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJvYVYrOVF1VzJXNmtZaUFxMmFkb3FISlVaVXlBY3l0c3NyZzdrRm1PY05rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvSkVIeXZaVFFCbTJTWHhxcmoxaVlnIiwicGhvbmVJZCI6ImRiYjQxMzRmLWQ1ZDgtNDBlOS1hN2I4LThjOWI1NTlkZTBiMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYY0RrVVE4aVVxRFkvekIvUHJuUENNTUoreTA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLbjBxMThKQ3REQjlqbEFEcHZ2RkkvekRHbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lqUndrQVEwcFh0c0FZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJCeFZHZmJ3R2l5dnNvQUYvd0VCN0RUaThHL2FGZnFaWjQ0QVdPZGxna289IiwiYWNjb3VudFNpZ25hdHVyZSI6IlplWHlDOGFWLzlQMDlLVC9sQmllajNYbnhqSFY3TFYwYTZQYkxKcXBoazV0TjIvZmFQSXljLzFaNU5CMENPNWtZRC9HREVqSmlUd1pRdVIvNmthNEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjWGpxeThmaTRkZFZvekMvZlZIalBwemF3Ny8yTUlpUkVsd3N4YlRveXphL2hKdHNUUERyZmY1M0wyR1lZMm05SDZXUm9ibW4xUXg4UHA2L1VzY2lDQT09In0sIm1lIjp7ImlkIjoiNjI4ODgwNDA3NTgxNzo1MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPUEVOIENIQVQgQWwifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4ODgwNDA3NTgxNzo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXd2NWUm4yOEJvc3I3S0FCZjhCQWV3MDR2QnYyaFg2bVdlT0FGam5aWUpLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzMDY0NjYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVJUyJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@dark miracle',
  packname:  process.env.PACK_NAME || 'lempoy',
   
  botname:   process.env.BOT_NAME === undefined ? "dark miracle" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'darkmiracle' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
