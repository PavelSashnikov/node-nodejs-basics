import { fork } from 'child_process';
import { HELPER } from '../fs/modules/helpers.mjs';

const spawnChildProcess = async (args) => {
  const filePath = HELPER.getDirPath(import.meta.url) + '/files/script.js';
  //fork uses IPC by default (see documentation)
  fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['some', '-arg']);
