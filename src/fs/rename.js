import { rename as rn } from 'fs';
import { HELPER } from './modules/helpers.mjs';
import { join } from 'path';

const rename = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  rn(
    join(__dirname, 'files', 'wrongFilename.txt'),
    join(__dirname, 'files', 'properFilename.md'),
    HELPER.fsErrCb
  );
};

await rename();
