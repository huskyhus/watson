/**
 * Description of available slash commands.
 */
export const commands = [
  {
    name: "status",
    description: "Replies her name, version and status.",
  },
  {
    name: "modal",
    description: "modal sample",
  },
] as const;

export type commandName = (typeof commands)[number]["name"];
