import { createReadStream, createWriteStream } from 'fs';
import { rm, rename } from 'fs/promises';
import path from 'path';
import {
  handleStreamError,
  logOperationError,
  parseArgs,
} from '../utils/index.js';

export const catHandler = async args => {
  try {
    const [filePathArg] = parseArgs(args);
    const filePathToRead = path.resolve(
      process.env.APP_CUR_DIRECTORY,
      filePathArg
    );
    const readable = createReadStream(filePathToRead);
    handleStreamError(readable);
    readable.pipe(process.stdout);
    readable.on('close', () => {
      console.log();
    });
  } catch {
    logOperationError();
  }
};

export const addHandler = async args => {
  try {
    const [filePathArg] = parseArgs(args);
    const filePathToWrite = path.resolve(
      process.env.APP_CUR_DIRECTORY,
      filePathArg
    );
    const writable = createWriteStream(filePathToWrite, { flags: 'ax+' });
    handleStreamError(writable);
    writable.close();
  } catch {
    logOperationError();
  }
};

export const rnHandler = async args => {
  try {
    const [filePathArg, newFileName] = parseArgs(args);
    const fileToRename = path.resolve(
      process.env.APP_CUR_DIRECTORY,
      filePathArg
    );
    const basePath = path.dirname(fileToRename);
    const newFilePath = path.resolve(basePath, newFileName);
    await rename(fileToRename, newFilePath);
  } catch {
    logOperationError();
  }
};

export const cpHandler = async args => {
  try {
    const [originPathArg, destFolderArg] = parseArgs(args);
    const originPath = path.resolve(
      process.env.APP_CUR_DIRECTORY,
      originPathArg
    );
    const fileName = path.basename(originPath);
    const destPath = path.resolve(
      process.env.APP_CUR_DIRECTORY,
      destFolderArg,
      fileName
    );

    if (!(await isFileExists(originPath))) {
      return logOperationError();
    }

    const readable = createReadStream(originPath);
    const writable = createWriteStream(destPath);
    handleStreamError(readable);
    handleStreamError(writable);
    readable.pipe(writable);
  } catch {
    logOperationError();
  }
};

export const mvHandler = async args => {
  await cpHandler(args);
  await rmHandler(args);
};

export const rmHandler = async args => {
  try {
    const [filePathArg] = parseArgs(args);
    const filePath = path.resolve(process.env.APP_CUR_DIRECTORY, filePathArg);
    await rm(filePath);
  } catch {
    logOperationError();
  }
};
