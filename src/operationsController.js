import { OPERATIONS } from './constants/index.js';
import commands from './modules/index.js';
import { getOperationAndArguments, logCommandError } from './utils/index.js';

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
    case OPERATIONS.CAT:
      await commands.catHandler(args);
      break;
    case OPERATIONS.ADD:
      await commands.addHandler(args);
      break;
    case OPERATIONS.RN:
      await commands.rnHandler(args);
      break;
    case OPERATIONS.CP:
      await commands.cpHandler(args);
      break;
    case OPERATIONS.MV:
      await commands.mvHandler(args);
      break;
    case OPERATIONS.RM:
      await commands.rmHandler(args);
      break;
    default:
      logCommandError();
  }
};
