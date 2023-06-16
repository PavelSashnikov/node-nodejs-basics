import { unlink } from 'fs';
import { HELPER } from './modules/helpers.mjs';
import { join } from 'path';

const remove = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);

  unlink(join(__dirname, 'files', 'fileToRemove.txt'), HELPER.fsErrCb);
};

await remove();
