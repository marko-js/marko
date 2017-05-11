const path = require('path');
const rootDir = path.join(__dirname, '../../');
const env = require(path.join(rootDir, 'env'));
const isDebug = env.isDebug;

const testDir = path.join(rootDir, isDebug ? 'test' : 'test-dist');
const { spawnSync } = require('child_process');
const mochaPath = path.join(rootDir, 'node_modules/.bin/mocha');

spawnSync(mochaPath, ['--ui', 'bdd', '--reporter', 'spec', testDir], {
    stdio: 'inherit'
});
