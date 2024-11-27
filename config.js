const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_54_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJReldtNXFsT25zVGpDeGlWTGREQzZUMUJLNlJLKzV6SVpCYzh5VzFQZlpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGYk94eUQwZlFIYXE1VDhpeFhWeUJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkMTcwOTYwLWIyZGQtNGMyOS04MzliLTRkY2ExMzcyYjgxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDE1LFxuICAgICAgMjUyLFxuICAgICAgNjUsXG4gICAgICA1MCxcbiAgICAgIDgsXG4gICAgICA3MCxcbiAgICAgIDIyNSxcbiAgICAgIDE4NixcbiAgICAgIDIxNyxcbiAgICAgIDY5LFxuICAgICAgNzIsXG4gICAgICAxNDMsXG4gICAgICA2MSxcbiAgICAgIDE2MixcbiAgICAgIDE0NixcbiAgICAgIDE2LFxuICAgICAgMjI3LFxuICAgICAgMjIwLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgODksXG4gICAgICAyMSxcbiAgICAgIDE4NixcbiAgICAgIDYsXG4gICAgICA3MixcbiAgICAgIDE0NixcbiAgICAgIDExMyxcbiAgICAgIDIyLFxuICAgICAgNTEsXG4gICAgICAxOCxcbiAgICAgIDE2NSxcbiAgICAgIDE4LFxuICAgICAgMjI4LFxuICAgICAgMjMxLFxuICAgICAgNjYsXG4gICAgICAxNDYsXG4gICAgICAxNjMsXG4gICAgICAxMyxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpEM0IxSjk4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI0NDU2NzcxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ0hJREVYIERJR0lUQUwgU1BBQ0VcIixcbiAgICBcImxpZFwiOiBcIjE3NTE1MTQ1MDgwODM2OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ArV3d2Z0hFSnVxbnJvR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaDBwZFc4MWFQMmxCcFoyMFBabmJWeU5mVDM2Smh5OVp2bldvS2t0MjBscz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoU2xVbFBVcEwrajNUM1pzcTl2bGg1ZFZRU3FXU0cwT2V3UDNOSFR4OHB5dkhPQ05Wdzk0ZVFOUUd5MkV3QnZJR0dPN3lmK0lDelhyOHppWnRlR1pBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhSk5CY2RHanlCZnd5OXN3cmUzMm9scG9CTVdIZlJ2RzlGaEpoTjQvT3FhTVNleUdKZEhaZFJlS0xxV2d4TFpXNjhwajlkQ2d6RGdJYjJBYndobmVBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI0NDU2NzcxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3NDQ0NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU42Vy5qc29uIjogIntcImtleURhdGFcIjpcIk9VUzZVRnlpa2hURW1WQ0pYN0pFLzRUUnQ2RnBRa1cwdHNtekRRQ1IrRDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMTc5MDcxMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3MDM1ODczODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
