import { ERROR_MESSAGES, OPERATIONS } from './constants/index.js';
import commands from './modules/index.js';
import { getOperationAndArguments } from './utils/index.js';

export const operationsController = async input => {
  const [operation, args] = getOperationAndArguments(input);

  switch (operation) {
    case OPERATIONS.UP:
      commands.upHandler();
      break;
    case OPERATIONS.CD:
      await commands.cdHandler(args);
      break;
    case OPERATIONS.LS:
      await commands.lsHandler();
      break;
    default:
      console.error(ERROR_MESSAGES.INV_INPUT);
  }
};
