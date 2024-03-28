const toBool = (x) => x === "true";

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "inrl~mF9RCwRF",
  BASE_URL: "https://api.alpha-md.rf.gd/",
  ALPHA_KEY: process.env.ALPHA_KEY || "alpha-free",
  HANDLERS: process.env.HANDLERS || ".", //[.]
  BOT_NAME: process.env.BOT_NAME || "Alpha",
  OWNER_NAME: process.env.OWNER_NAME || "Cipher",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348114860536",
  SUDO: process.env.SUDO || "2348114860536",
  MODE: (process.env.MODE || "public").trim(),
};
