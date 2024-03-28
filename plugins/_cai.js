const { alpha, mode } = require("../lib/");
const { tiny } = require("@viper-x/fancytext");
const cai_id = require("../lib/characterai");
const cai = require("../lib/ai");

alpha(
  {
    pattern: "nahkg",
    fromMe: mode,
    desc: "Chat with naruto hokage",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.narutohokage.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "nakid",
    fromMe: mode,
    desc: "Chat with naruto kid",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.narutokid.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "sasuke",
    fromMe: mode,
    desc: "Chat with sasuke",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.sasuke.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "saskid",
    fromMe: mode,
    desc: "Chat with sasuke kid",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.sasukekid.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "kurumi",
    fromMe: mode,
    desc: "Chat with kurumi",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.kurumi.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "emininsha",
    fromMe: mode,
    desc: "hehe you have been brought into an isekai world",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.eminenceinsha.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "nanami",
    fromMe: mode,
    desc: "Chat with nanami",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.nanami.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "beni",
    fromMe: mode,
    desc: "Chat with benimaru ff",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.benimaru.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "shdgdn",
    fromMe: mode,
    desc: "Chat with the shadow garden",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.shadowgarden.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "02",
    fromMe: mode,
    desc: "Chat with zerotwo",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.zerotwo.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "gojo",
    fromMe: mode,
    desc: "Chat with gojo",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.gojo.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "delta",
    fromMe: mode,
    desc: "Chat with delta",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.delta.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "power",
    fromMe: mode,
    desc: "hey i'm  power",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.power.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "cid",
    fromMe: mode,
    desc: "Chat with cidkagenou",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.cidkagenou.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "shadow",
    fromMe: mode,
    desc: "Chat with shadow",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.shadow.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "alpha",
    fromMe: mode,
    desc: "hey i'm alpha",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.alpha.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "naship",
    fromMe: mode,
    desc: "Welcome to the world of naruto shippuden",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.narutoshippuden.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "gara",
    fromMe: mode,
    desc: "Chat with gara",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.gara.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "sakura",
    fromMe: mode,
    desc: "Chat with sakura",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.sakura.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "itachi",
    fromMe: mode,
    desc: "Chat with itachi",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.itachi.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "obito",
    fromMe: mode,
    desc: "Chat with obito",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.obito.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "lelouch",
    fromMe: mode,
    desc: "Chat with lelouch",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.lelouch.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "light",
    fromMe: mode,
    desc: "Chat with light yagami",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.light.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "l",
    fromMe: mode,
    desc: "Chat with L_Lawliet",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.L_Lawliet.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "kaneki",
    fromMe: mode,
    desc: "Chat with ken_kaneki",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.ken_kaneki.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "hinata",
    fromMe: mode,
    desc: "Chat with hinata",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.hinata.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Izuku",
    fromMe: mode,
    desc: "Chat with Izuku_Midoriya",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Izuku_Midoriya.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "allmight",
    fromMe: mode,
    desc: "Chat with allmight",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.allmight.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Anna",
    fromMe: mode,
    desc: "Chat with Anna_Nishikinomiya",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Anna_Nishikinomiya.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Momo",
    fromMe: mode,
    desc: "Chat with Momo_Deviluke",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Momo_Deviluke.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Meliodas",
    fromMe: mode,
    desc: "Chat with Meliodas",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Meliodas.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "issei",
    fromMe: mode,
    desc: "Chat with Hyoudou_Issei",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Hyoudou_Issei.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "rias",
    fromMe: mode,
    desc: "Chat with Rias_Gremory",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Rias_Gremory.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Ayame",
    fromMe: mode,
    desc: "Chat with Ayame_Kajou",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Ayame_Kajou.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Loke",
    fromMe: mode,
    desc: "Chat with Loke",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Loke.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "itoshi",
    fromMe: mode,
    desc: "Chat with Itoshi_Rin",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Itoshi_Rin.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Kakashi",
    fromMe: mode,
    desc: "Chat with Kakashi",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Kakashi.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Zenistu",
    fromMe: mode,
    desc: "Chat with Zenistu",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Zenistu.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Tomoko",
    fromMe: mode,
    desc: "Chat with Tomoko_Kuroki",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Tomoko_Kuroki.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "asia",
    fromMe: mode,
    desc: "Chat with Asia_Argento",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Asia_Argento.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Akeno",
    fromMe: mode,
    desc: "Chat with Akeno_Himejima",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Akeno_Himejima.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Megumi",
    fromMe: mode,
    desc: "Chat with Megumi",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Megumi.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Itadori",
    fromMe: mode,
    desc: "Chat with Itadori",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Itadori.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Sukuna",
    fromMe: mode,
    desc: "Chat with Sukuna",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Sukuna.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);

alpha(
  {
    pattern: "Raiden",
    fromMe: mode,
    desc: "Chat with Raiden_Shogun",
    type: "character-ai",
  },
  async (msg, match) => {
    const question = match;
    if (!question) {
      return await msg.reply("Please provide a question.");
    }
    try {
      const characterId = cai_id.Raiden_Shogun.id;
      const response = await cai(characterId, question);
      return await msg.reply(tiny(response));
    } catch (error) {
      console.error(error);
      return await msg.reply(
        "An error occurred while processing your request.",
      );
    }
  },
);
