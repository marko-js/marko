/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const compiler = require("../compiler");
require("../runtime/html/hot-reload");

exports.handleFileModified = function (filename) {
  if (!fs.existsSync(filename)) {
    console.log(
      "[marko/hot-reload] WARNING cannot resolve template path: ",
      filename
    );
    return;
  }

  compiler.clearCaches();
  console.log(`[marko] File modified: ${cwdRelative(filename)}`);

  if (path.extname(filename) === ".json") {
    // If we taglib was modified then uncache *all* templates so that they will
    // all be reloaded
    for (const filename in require.cache) {
      if (path.extname(filename) === ".marko") {
        tryReload(filename);
      }
    }
  } else {
    tryReload(filename);
  }
};

function tryReload(filename) {
  try {
    delete require.cache[filename];
    require(filename);
    console.log(
      `[marko] Template successfully reloaded: ${cwdRelative(filename)}`
    );
  } catch (e) {
    console.error(e);
  }
}

function cwdRelative(filename) {
  return path.relative(process.cwd(), filename);
}
