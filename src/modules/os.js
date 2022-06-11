import os from 'os';
import { ERROR_MESSAGES, OS } from '../constants/index.js';
import { getClockRateInGHz } from '../utils/index.js';

export const osHandler = async arg => {
  switch (arg) {
    case OS.EOL:
      console.log(JSON.stringify(os.EOL));
      break;
    case OS.CPUS:
      console.log(
        os.cpus().map(cpu => ({
          model: cpu.model,
          speed: getClockRateInGHz(cpu.speed),
        }))
      );
      break;
    case OS.HOME_DIR:
      console.log(os.homedir());
      break;
    case OS.SYS_USER_NAME:
      console.log(os.userInfo().username);
      break;
    case OS.ARCH:
      console.log(os.arch());
      break;
    default:
      console.error(ERROR_MESSAGES.OPERATION_FAILED);
      break;
  }
};
