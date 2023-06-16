import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';
import { join } from 'path';

const compress = async () => {
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

  const gz = createGzip();

  createReadStream(origFilePath)
    .pipe(gz)
    .pipe(createWriteStream(compressedFilePath));
};

await compress();
