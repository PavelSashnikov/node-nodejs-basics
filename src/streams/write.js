import { createWriteStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';
import { join } from 'path';

const write = async () => {
  const filePath = join(
    HELPER.getDirPath(import.meta.url),
    'files',
    'fileToWrite.txt'
  );
  const file = createWriteStream(filePath);
  process.stdin.pipe(file);
  process.stdin.resume();
};

await write();
