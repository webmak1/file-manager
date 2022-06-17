import { stat } from 'fs/promises';
import {
  USERNAME_ARG_NAME,
  OPERATIONS,
  ERROR_MESSAGES,
} from '../constants/index.js';

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
    ? [trimmedInput.slice(0, idx), trimmedInput.slice(idx + 1).trim()]
    : [trimmedInput, null];
};

export const isFileExists = async path => {
  return stat(path)
    .then(stat => stat.isFile())
    .catch(() => {
      return false;
    });
};

export const isDirExists = async path => {
  return stat(path)
    .then(stat => stat.isDirectory())
    .catch(() => {
      return false;
    });
};

export const getClockRateInGHz = clockRate => {
  return Math.floor(clockRate / 100) / 10;
};

export const parseArgs = argString => {
  if (argString.includes('"')) {
    return argString
      .match(/(?<=["])[^"]+/g)
      .map(item => item.trim())
      .filter(item => !!item);
  }
  return argString.split(' ');
};

export const logCommandError = () => {
  console.log(`\x1b[31m${ERROR_MESSAGES.INV_INPUT}\x1b[0m\n`);
};

export const logOperationError = () => {
  console.log(`\x1b[31m${ERROR_MESSAGES.OPERATION_FAILED}\x1b[0m\n`);
};

export const handleStreamError = stream => {
  stream.on('error', () => {
    logOperationError();
  });
};
