import { stat } from 'fs/promises';
import { USERNAME_ARG_NAME, OPERATIONS } from '../constants/index.js';

export const getUserNameFromCommandLine = argv => {
  return argv
    .find(item => item.startsWith(USERNAME_ARG_NAME))
    ?.replace(USERNAME_ARG_NAME, '');
};

export const isExit = string => {
  return string === OPERATIONS.EXIT;
};

export const getOperationAndArguments = input => {
  const trimmedInput = input.trim();
  const idx = trimmedInput.indexOf(' ');
  return idx !== -1
    ? [trimmedInput.slice(0, idx), trimmedInput.slice(idx + 1)]
    : [trimmedInput, null];
};

export const isPathExists = async path => {
  return stat(path)
    .then(stat => stat.isDirectory())
    .catch(() => {
      return false;
    });
};
