const { alpha, runtime, mode } = require("../lib");

alpha(
  {
    pattern: "runtime",
    type: "main",
    desc: "Check Bot Runtime",
    fromMe: mode,
  },
  async (msg) => {
    const time = await runtime();
    await msg.reply(`_*Runtime ${time}*_`);
  },
);
