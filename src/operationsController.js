import { ERROR_MESSAGES, OPERATIONS } from './constants/index.js';
import commands from './modules/index.js';
import { getOperationAndArguments } from './utils/index.js';

export const operationsController = async input => {
  const [operation, args] = getOperationAndArguments(input);

  switch (operation) {
    case OPERATIONS.UP:
      await commands.upHandler();
      break;
    case OPERATIONS.CD:
      await commands.cdHandler(args);
      break;
    case OPERATIONS.LS:
      await commands.lsHandler();
      break;
    case OPERATIONS.OS:
      commands.osHandler(args);
      break;
    case OPERATIONS.HASH:
      await commands.hashHandler(args);
      break;
    case OPERATIONS.COMPRESS:
      await commands.compressHandler(args);
      break;
    case OPERATIONS.DECOMPRESS:
      await commands.decompressHandler(args);
      break;
    default:
      console.error(ERROR_MESSAGES.INV_INPUT);
  }
};
