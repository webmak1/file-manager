import { createReadStream } from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';
import {
  logOperationError,
  handleStreamError,
  parseArgs,
} from '../utils/index.js';

export const hashHandler = async path => {
  try {
    const [filePathArg] = parseArgs(path);
    const filePath = resolve(process.env.APP_CUR_DIRECTORY, filePathArg);
    const readable = createReadStream(filePath);
    const hash = createHash('sha256');
    handleStreamError(readable);
    readable.on('readable', () => {
      const chunk = readable.read();
      chunk ? hash.update(chunk) : console.log(hash.digest('hex'));
    });
  } catch {
    logOperationError();
  }
};
