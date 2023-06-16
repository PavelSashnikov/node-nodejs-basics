import { readdir } from 'fs';
import { HELPER } from './modules/helpers.mjs';
import { join } from 'path';

const list = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  const res = readdir(join(__dirname, 'files'), (err, files) =>
    err ? HELPER.fsErrCb(err) : console.log(files)
  );
};

await list();
