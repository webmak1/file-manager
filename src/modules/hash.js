import { createReadStream } from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';
import { logOperationError } from '../utils/index.js';

export const hashHandler = async path => {
  try {
    const filePath = resolve(process.env.APP_CUR_DIRECTORY, path);
    const readable = createReadStream(filePath);
    const hash = createHash('sha256');
    readable.on('readable', () => {
      const chunk = readable.read();
      chunk ? hash.update(chunk) : console.log(hash.digest('hex'));
    });
  } catch {
    logOperationError();
  }
};
