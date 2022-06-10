import readline from 'readline';
import os from 'os';
import { MESSAGES, TOKEN } from './constants/index.js';
import { getUserNameFromCommandLine, isExit } from './utils/index.js';

export class App {
  constructor() {
    this.currentDir = '';
    this.userName = '';
  }

  init = () => {
    this.currentDir = os.homedir();
    this.userName = getUserNameFromCommandLine(process.argv);

    console.log(MESSAGES.WELCOME.replace(TOKEN, this.userName));
    console.log(MESSAGES.CURRENT_DIR.replace(TOKEN, this.currentDir));

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', line => {
      isExit(line) ? rl.close() : console.log(line);
      // replace this line with operations controller
      console.log(MESSAGES.CURRENT_DIR.replace(TOKEN, this.currentDir));
    });

    rl.on('close', () => {
      console.log(MESSAGES.BYE.replace(TOKEN, this.userName));
      process.exit(0);
    });
  };
}
