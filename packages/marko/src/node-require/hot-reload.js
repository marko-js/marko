/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const compiler = require("../compiler");
const runtime = require("../runtime/html");
const nodeRequire = require(".");

let modifiedId = 1;
const HOT_RELOAD_KEY = Symbol("HOT_RELOAD");

function cleanResolvePathCache() {
  const modulePathCache = require("module").Module._pathCache;
  if (!modulePathCache) {
    console.log(
      '[marko/hot-reload] WARNING: Missing: require("module").Module._pathCache [' +
        __filename +
        "]"
    );
    return;
  }

  Object.keys(modulePathCache).forEach(key => {
    delete modulePathCache[key];
  });
}

function tryReloadTemplate(request) {
  request = request.replace(/\.js$/, "");

  try {
    return require(request).default;
  } catch (e) {
    return undefined;
  }
}

function createHotReloadProxy(func, template, methodName) {
  const templatePath = template.path;
  let hotReloadData = template[HOT_RELOAD_KEY];
  if (!hotReloadData) {
    hotReloadData = template[HOT_RELOAD_KEY] = {
      modifiedId: modifiedId,
      latest: template,
      originals: {}
    };
  }

  hotReloadData.originals[methodName] = func;

  function hotReloadProxy() {
    if (hotReloadData.modifiedId !== modifiedId) {
      hotReloadData.modifiedId = modifiedId;
      hotReloadData.latest = tryReloadTemplate(templatePath) || template;

      if (hotReloadData.latest !== template) {
        template.meta = hotReloadData.latest.meta;
        console.log("[marko] Template successfully reloaded: " + templatePath);
      }
    }

    const latest = hotReloadData.latest;
    let originals = latest[HOT_RELOAD_KEY] && latest[HOT_RELOAD_KEY].originals;
    if (!originals) {
      originals = latest;
    }

    return originals._.apply(latest, arguments);
  }

  return hotReloadProxy;
}

const oldCreateTemplate = runtime.t;
runtime.t = function hotReloadCreateTemplate() {
  const originalTemplate = oldCreateTemplate.apply(runtime, arguments);
  let actualRenderFunc;

  Object.defineProperty(originalTemplate, "_", {
    get: () => actualRenderFunc,
    set: renderFunc => {
      actualRenderFunc = createHotReloadProxy(
        renderFunc,
        originalTemplate,
        "_"
      );
    }
  });

  return originalTemplate;
};

/**
 * Checks whether a path ends with a custom Marko extension
 */
function _endsWithMarkoExtension(request, requireExtensions) {
  for (let i = 0; i < requireExtensions.length; i++) {
    if (request.endsWith(requireExtensions[i])) {
      return true;
    }
  }
  return false;
}

exports.handleFileModified = function (filename) {
  if (!fs.existsSync(filename)) {
    console.log(
      "[marko/hot-reload] WARNING cannot resolve template path: ",
      filename
    );
    return;
  }

  const requireExtensions = nodeRequire.getExtensions();
  const basename = path.basename(filename);

  function handleFileModified() {
    console.log("[marko] File modified: " + filename);
    runtime.cache = {};
    compiler.clearCaches();
    cleanResolvePathCache();
    modifiedId++;
  }

  if (basename === "marko-tag.json" || basename === "marko.json") {
    handleFileModified();
    // If we taglib was modified then uncache *all* templates so that they will
    // all be reloaded
    Object.keys(require.cache).forEach(filename => {
      if (filename.endsWith(".marko") || filename.endsWith(".marko.js")) {
        delete require.cache[filename];
      }
    });
  } else if (_endsWithMarkoExtension(filename, requireExtensions)) {
    handleFileModified();
    delete require.cache[filename];
    delete require.cache[filename + ".js"];
  } else if (basename === "component.js") {
    handleFileModified();
    const dir = path.dirname(filename);
    const templatePath = path.join(dir, "index.marko");
    delete require.cache[filename];
    delete require.cache[templatePath];
    delete require.cache[templatePath + ".js"];
  }
};
