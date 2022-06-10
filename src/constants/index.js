export const TOKEN = '/replaceToken/';
export const USERNAME_ARG_NAME = '--username=';

export const MESSAGES = {
  WELCOME: `\x1b[35mWelcome to the File Manager, ${TOKEN}!\x1b[0m\n`,
  CURRENT_DIR: `\x1b[35mYou are currently in ${TOKEN}\x1b[0m\n`,
  BYE: `\x1b[35mThank you for using File Manager, ${TOKEN}!\x1b[0m`,
};

export const ERROR_MESSAGES = {
  INV_INPUT: 'Invalid input',
  OPERATION_FAILED: 'Operation failed',
};

export const OPERATIONS = {
  EXIT: '.exit',
};
