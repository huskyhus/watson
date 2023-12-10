import { REST, Routes } from "discord.js";
import { commands } from "../command";

/**
 * A function to register the available slash commands to Discord API. (guild-specific settings)
 *
 * It uses several environment variables for configuration:
 * - `TOKEN`: authentication key.
 * - `CLIENT_ID`: client id of the app.
 * - `GUILD_ID`: guild id of the Discord guild, where the bot is going to be used.
 *
 * @returns void.
 */
export async function registerCommands(cmds: typeof commands | []) {
  if (process.env.TOKEN === undefined) {
    console.log("TOKEN is undefined. aborting...");
    return;
  }
  if (process.env.CLIENT_ID === undefined) {
    console.log("CLIENT_ID is undefined. aborting...");
    return;
  }
  if (process.env.GUILD_ID === undefined) {
    console.log("GUILD_ID is undefined. aborting...");
    return;
  }

  // Discord API
  const rest = new REST().setToken(process.env.TOKEN);

  // Register slash commands to Discord API
  try {
    console.log("Started refreshing application (/) commands.");

    // guild only setting
    console.log("guild-specific settings.");
    await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
      body: cmds,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error("Some error occured: ");
    console.error(error);
  }
}

/**
 * A function to register the available slash commands to Discord API. (global settings)
 *
 * It uses several environment variables for configuration:
 * - `TOKEN`: authentication key.
 * - `CLIENT_ID`: client id of the app.
 *
 * @returns void.
 */
export async function registerCommandsToGlobal(cmds: typeof commands | []) {
  if (process.env.TOKEN === undefined) {
    console.log("TOKEN is undefined. aborting...");
    return;
  }
  if (process.env.CLIENT_ID === undefined) {
    console.log("CLIENT_ID is undefined. aborting...");
    return;
  }

  // Discord API
  const rest = new REST().setToken(process.env.TOKEN);

  // Register slash commands to Discord API
  try {
    console.log("Started refreshing application (/) commands.");

    // global setting
    console.log("global settings.");
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: cmds,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error("Some error occured: ");
    console.error(error);
  }
}
