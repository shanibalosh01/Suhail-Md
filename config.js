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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923005597178";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923005597178";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923005597178";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_56_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJQUhsdythbm9UbENIWFJDZHRHYmluQVZESXR3cld3c1BPaVljT3Nzc2VzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAwNTU5NzE3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDkwNUJDM0U3NjNFQUM0NTRFMzA3MkFENzEyMzcyQzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzM0MTY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDA1NTk3MTc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMTAxMDc4Njc3QjU5RDQ0REI0NzU2QjY4MDA1QkFCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3MzQxNjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaG9EWHB6TjNUQjY4YVp5Q0JWVC00UVwiLFxuICBcInBob25lSWRcIjogXCJkNjgyYjI5Ny02NzFhLTQxMmMtYWUzZC0wM2Q0ODUzNTIzZDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgMjUzLFxuICAgICAgMTM0LFxuICAgICAgMjAyLFxuICAgICAgMjM1LFxuICAgICAgMTc4LFxuICAgICAgMTI3LFxuICAgICAgMTAxLFxuICAgICAgMTAxLFxuICAgICAgNzYsXG4gICAgICAyMixcbiAgICAgIDIsXG4gICAgICAyMjYsXG4gICAgICAyMDIsXG4gICAgICAxNTAsXG4gICAgICAxOTQsXG4gICAgICAyMCxcbiAgICAgIDQ4LFxuICAgICAgMjAyLFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxNDcsXG4gICAgICAzNSxcbiAgICAgIDEzMyxcbiAgICAgIDY2LFxuICAgICAgMTMxLFxuICAgICAgMjYsXG4gICAgICA5MyxcbiAgICAgIDIwOSxcbiAgICAgIDkwLFxuICAgICAgMjQ2LFxuICAgICAgNDQsXG4gICAgICAxNjYsXG4gICAgICAxNjEsXG4gICAgICAxNjMsXG4gICAgICAxMjIsXG4gICAgICA0NSxcbiAgICAgIDk3LFxuICAgICAgMTU2LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5KV0NNOFdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMDU1OTcxNzg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn4kaGFudX5cIixcbiAgICBcImxpZFwiOiBcIjI3NDY4OTI5NzUxMDYzMjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00ydjBNY0dFSktmaExRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1poZVU1OVo3bTZXcU9YUkVFcSswV0JudE5zaXdTQ3dhdnkxcktUZVUzQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtaFlhZDFOVCtYUDFzeG02eWc5Q0pyeTAzNTh2YUVWVWlkQ2FaZFFCdmxjblhVM04zN2lESVZjMXFmRTdFd0hCVzdJaGQvMDVra3p5OGhNTFgyaElCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4aHFDMHQveklqUFQvanp6Mk9JejNLMGNPQUVEelJOdUtmZVBrM2RuakN2ZmZJd2xDTDcwc2s5eDdkaTU0azNsTGxCemdDUm1VR2ttZlZiVkdOSGdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMDU1OTcxNzg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzM0MTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSERRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIRFEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuVlJ5cHY0UWFvdmZIelEvbHJtcGV0UGV0b1phZGJLNXNIb3BJTGdiTkRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NjA4MjczNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==.."  // PUT your SESSION_ID 


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
