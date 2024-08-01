const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165068371";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_32_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1CbTlkQ1VDTldWVWFFOE1na0w4VnlKUVZuWFp6RmZKTzkzNnZwenRoLzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRyU1lhanZIUWl1Q3d1ZlJFMHVVS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWE5OTU4YjQtOWExMS00YjMwLWJjN2EtMGM1NDljNTU3YzIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgNTIsXG4gICAgICAxMjUsXG4gICAgICA4NyxcbiAgICAgIDI0OCxcbiAgICAgIDM4LFxuICAgICAgMTEwLFxuICAgICAgMTM2LFxuICAgICAgMjIxLFxuICAgICAgMTUyLFxuICAgICAgMTQ3LFxuICAgICAgMTE1LFxuICAgICAgNzQsXG4gICAgICAxNDMsXG4gICAgICA1NyxcbiAgICAgIDE5MixcbiAgICAgIDE5NSxcbiAgICAgIDE5LFxuICAgICAgMTEwLFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMyxcbiAgICAgIDEyOSxcbiAgICAgIDQ1LFxuICAgICAgNjIsXG4gICAgICAxMzksXG4gICAgICA4OCxcbiAgICAgIDIxMCxcbiAgICAgIDI1MSxcbiAgICAgIDEzNSxcbiAgICAgIDE1NSxcbiAgICAgIDIyLFxuICAgICAgMjMzLFxuICAgICAgMTA5LFxuICAgICAgMTgzLFxuICAgICAgNjQsXG4gICAgICAyMSxcbiAgICAgIDI0OCxcbiAgICAgIDEzMCxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUMjJNUUVSRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NTA2ODM3MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRUxJVEUgWC1MSU5LIENPTlNVTFRcIixcbiAgICBcImxpZFwiOiBcIjExMzQ2ODg5MjAwNDQxMjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPUHNhZ0ZFS3FEckxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRFNEeW44QmxwK25WdGJFL3hFMng1SGZkVkk2ZWE3YkJTRjlOaTlmTXFRYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXWGwwenlJejkvRklsSUU1SUZDci9ZSlVNV3c4SzlnNXRJQzZUY3h0T1JvM29PUmtQbG5FNy9zWTdHdmV0U29OMFV1M2liY21mbit4MkdxT1UwUWhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGYTQwbjFVcG94OXAyeWtTaXVaN3YrczYzZjFLWnk3dGNmcmo5d2s0eTZ3b3lSZm54ejU3QWZmWXZIZzZrTUVBQ2NCZmpFaHIrSWxZaWdVRVVmLzNpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY1MDY4MzcxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ4MzExOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
