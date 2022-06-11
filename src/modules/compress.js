import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import path from 'path';
import { ERROR_MESSAGES } from '../constants/index.js';
import {
  parseArgs,
  logOperationError,
  handleStreamError,
} from '../utils/index.js';

export const compressHandler = async args => {
  const compressing = createBrotliCompress();
  createTransformingPipe(args, compressing);
};

export const decompressHandler = async args => {
  const decompressing = createBrotliDecompress();
  createTransformingPipe(args, decompressing);
};

const createTransformingPipe = (args, transformStream) => {
  try {
    const pathsArr = parseArgs(args);

    if (pathsArr.length !== 2) throw new Error(ERROR_MESSAGES.OPERATION_FAILED);

    const [inputFilePath, outputFilePath] = pathsArr.map(item =>
      path.resolve(process.env.APP_CUR_DIRECTORY, item)
    );

    const readable = createReadStream(inputFilePath);
    const writable = createWriteStream(outputFilePath);

    handleStreamError(readable);
    handleStreamError(writable);

    readable.pipe(transformStream).pipe(writable);
  } catch {
    logOperationError();
  }
};
