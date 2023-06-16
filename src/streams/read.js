import { createReadStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';
import { join } from 'path';

const read = async () => {
  const filePath = join(
    HELPER.getDirPath(import.meta.url),
    'files',
    'fileToRead.txt'
  );
  createReadStream(filePath).on('data', (ch) => {
    process.stdout.write(ch);
  });
};

await read();
