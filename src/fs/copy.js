import { cp } from 'fs';
import { HELPER } from './modules/helpers.mjs';
import { join } from 'path';

const copy = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  cp(
    join(__dirname, 'files'),
    join(__dirname, 'files_copy'),
    {
      recursive: true,
      force: false,
      errorOnExist: true,
    },
    HELPER.fsErrCb
  );
};

await copy();
