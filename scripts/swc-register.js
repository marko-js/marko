globalThis.MARKO_DEBUG = true;
require("complain").silence = true;
// aliased as ~ts via package.json. swc strips TS types, lowers enums/param
// properties, and transforms ESM->CJS so mocha can require() specs. Called with
// no options so it reads the repo tsconfig (target ESNext -> no down-leveling,
// source maps on) and forces module: commonjs.
require("@swc-node/register/register").register();
