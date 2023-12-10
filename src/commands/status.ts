import { CacheType, ChatInputCommandInteraction } from "discord.js";

export async function status(interaction: ChatInputCommandInteraction<CacheType>) {
  await interaction.reply(`${process.env.BOTNAME} version ${process.env.VERSION} in operation.`);
}
