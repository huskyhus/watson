import "dotenv/config";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { commandName } from "./command";
import { status } from "./commands/status";
import { modal } from "./commands/modal";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName as commandName) {
    case "status":
      await status(interaction);
      break;
    case "modal":
      await modal(interaction);
      break;
    default:
      console.warn(`Command Not Implemented: ${interaction.commandName}`);
      break;
  }
});

client.login(process.env.TOKEN);
