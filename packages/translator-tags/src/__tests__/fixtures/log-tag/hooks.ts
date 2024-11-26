import testLog from './test-log';

const log = console.log;

export const before = () => {
  // const testLog = require('./test-log').default;
  console.log = function(msg: keyof typeof testLog) {
    testLog[msg] = true;
  }
}

export const after = () => {
  console.log = log;
}
