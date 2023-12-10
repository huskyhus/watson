import "dotenv/config";
import { commands } from "./command";
import { input } from "./utils/io";
import { registerCommands, registerCommandsToGlobal } from "./utils/register";

const main = async () => {
  const config = await input(
    "Server settings or Global settings? (server/global)",
    (answer) => answer === "server" || answer === "global"
  );
  if (config === undefined) return;

  const job = await input(
    "Update config or delete config? (update/delete)",
    (answer) => answer === "update" || answer === "delete"
  );
  if (job === undefined) return;

  if (config === "server" && job === "update") registerCommands(commands);
  if (config === "server" && job === "delete") registerCommands([]);
  if (config === "global" && job === "update") registerCommandsToGlobal(commands);
  if (config === "global" && job === "delete") registerCommandsToGlobal([]);
};

main();
