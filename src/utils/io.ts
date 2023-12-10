import * as readline from "readline";

export async function input(
  message: string,
  accept?: (answer: string) => boolean
): Promise<string | undefined> {
  // I/O stream
  const stream = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input: string | undefined = undefined;
  try {
    while (input === undefined) {
      const answer = await question(message, stream);
      if (accept === undefined) {
        input = answer;
      } else if (accept(answer)) {
        input = answer;
      } else {
        input = undefined;
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    stream.close();
  }

  return input;
}

async function question(message: string, stream: readline.Interface): Promise<string> {
  return new Promise<string>((resolve) => {
    stream.question(message, (answer) => {
      resolve(answer);
    });
  });
}
