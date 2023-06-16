import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';
import { join } from 'path';

const decompress = async () => {
  const origFilePath = join(
    HELPER.getDirPath(import.meta.url),
    'files',
    'fileToCompress.txt'
  );
  const compressedFilePath = join(
    HELPER.getDirPath(import.meta.url),
    'files',
    'archive.gz'
  );
  const gz = createUnzip();

  createReadStream(compressedFilePath)
    .pipe(gz)
    .pipe(createWriteStream(origFilePath));
};

await decompress();
