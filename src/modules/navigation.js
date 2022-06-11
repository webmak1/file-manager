import path from 'path';
import { readdir } from 'fs/promises';
import { isDirExists, logOperationError } from '../utils/index.js';

export const cdHandler = async newPath => {
  const newCurrentDir = path.resolve(process.env.APP_CUR_DIRECTORY, newPath);
  if (!(await isDirExists(newCurrentDir))) {
    return logOperationError();
  }
  process.env.APP_CUR_DIRECTORY = newCurrentDir;
};

export const upHandler = async () => {
  await cdHandler('..');
};

export const lsHandler = async () => {
  return readdir(process.env.APP_CUR_DIRECTORY, { withFileTypes: true })
    .then(res => res.map(item => item.name))
    .then(console.log)
    .catch(logOperationError);
};
