// typescript-eslint still peer-depends on typescript <6.1, so it gets its own
// copy of typescript 6 here while the rest of the repo builds with typescript 7.
module.exports = require("typescript-eslint");
