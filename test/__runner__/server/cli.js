const path = require('path');
const rootDir = path.join(__dirname, '../../../');
const env = require(path.join(rootDir, 'env'));
const isDebug = env.isDebug;

const testDir = path.join(rootDir, isDebug ? 'test' : 'test-dist');
const spawnSync = require('child_process').spawnSync;
const mochaPath = path.join(rootDir, 'node_modules/.bin/mocha');

var result = spawnSync(mochaPath, ['--ui', 'bdd', '--reporter', 'spec', '--timeout', '3000', path.join(testDir, '**/*.test.js')], {
    stdio: 'inherit'
});

process.exit(result.status);
