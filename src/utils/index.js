import { USERNAME_ARG_NAME, OPERATIONS } from '../constants/index.js';

export const getUserNameFromCommandLine = argv => {
  return argv
    .find(item => item.startsWith(USERNAME_ARG_NAME))
    ?.replace(USERNAME_ARG_NAME, '');
};

export const isExit = string => {
  return string === OPERATIONS.EXIT;
};
