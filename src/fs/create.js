import { writeFile } from 'fs';
import { HELPER } from './modules/helpers.mjs';
import { join } from 'path';

const create = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);

  writeFile(
    join(__dirname, 'files', 'fresh.txt'),
    'I am fresh and young',
    { flag: 'wx' },
    HELPER.fsErrCb
  );
};

await create();
