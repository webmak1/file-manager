import readline from 'readline';
import os from 'os';
import { MESSAGES, TOKEN } from './constants/index.js';
import { getUserNameFromCommandLine, isExit } from './utils/index.js';
import { operationsController } from './operationsController.js';

export const init = () => {
  try {
    const currentDir = os.homedir();
    const userName = getUserNameFromCommandLine(process.argv);

    process.env.APP_CUR_DIRECTORY = currentDir;
    process.env.APP_USER_NAME = userName;

    console.log(MESSAGES.WELCOME.replace(TOKEN, userName));
    console.log(MESSAGES.CURRENT_DIR.replace(TOKEN, currentDir));

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', async line => {
      isExit(line) ? rl.close() : console.log(line);
      await operationsController(line);
      console.log(
        MESSAGES.CURRENT_DIR.replace(TOKEN, process.env.APP_CUR_DIRECTORY)
      );
    });

    rl.on('close', () => {
      console.log(MESSAGES.BYE.replace(TOKEN, userName));
      process.exit(0);
    });
  } catch (error) {
    console.log(error.message);
  }
};
