import {
  ActionRowBuilder,
  CacheType,
  ChatInputCommandInteraction,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

export async function modal(interaction: ChatInputCommandInteraction<CacheType>) {
  const modal = new ModalBuilder().setCustomId("mailSend").setTitle("メール送信");

  const fromInput = new TextInputBuilder()
    .setCustomId("fromInput")
    .setLabel("送信元")
    .setStyle(TextInputStyle.Short);

  const toInput = new TextInputBuilder()
    .setCustomId("toInput")
    .setLabel("送信先")
    .setStyle(TextInputStyle.Short);

  const subjectInput = new TextInputBuilder()
    .setCustomId("subjectInput")
    .setLabel("件名")
    .setStyle(TextInputStyle.Short);

  const htmlInput = new TextInputBuilder()
    .setCustomId("htmlInput")
    .setLabel("内容")
    .setStyle(TextInputStyle.Paragraph);

  const a = new ActionRowBuilder<TextInputBuilder>().addComponents(fromInput);
  const b = new ActionRowBuilder<TextInputBuilder>().addComponents(toInput);
  const c = new ActionRowBuilder<TextInputBuilder>().addComponents(subjectInput);
  const d = new ActionRowBuilder<TextInputBuilder>().addComponents(htmlInput);
  modal.addComponents(a, b, c, d);

  await interaction.showModal(modal);
}
