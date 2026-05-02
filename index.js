const { Client, GatewayIntentBits } = require("discord.js");

// 🔐 TOKEN Railway Variables se aayega
const TOKEN = process.env.TOKEN;

// ❌ Agar TOKEN missing ho to clear error
if (!TOKEN) {
  console.log("❌ TOKEN missing (Railway Variables check kar)");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ✅ Ready event
client.once("ready", () => {
  console.log(`🔥 Bot Online: ${client.user.tag}`);
});

// (Optional test command via slash registration later)
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

// 🔐 Login
client.login(TOKEN);
