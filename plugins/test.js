const { alpha, mode } = require("../lib");

alpha(
  {
    pattern: "test",
    type: "misc",
    desc: "testing...",
    fromMe: mode,
  },
  async (msg, match) => {
    if (!match) return await msg.reply("provide some texts after command");
    await msg.reply(match);
  },
);
