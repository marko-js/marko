"use strict";

// Someday this will become a separate package.
const fs = require("fs");
const path = require("path");
const jsdom = require("jsdom");
// const JSDOM = require('jsdom').JSDOM; // JSDOM 10+
const browserResolve = require("lasso-resolve-from");
const createContextModule = require("./create-context-module").createModule;
const remapCache = Object.create(null);

/**
 * Creates a custom Module object which runs all required scripts
 * in a new jsdom instance.
 *
 * @param {object} config Config for the module.
 * @param {string} config.dir The directory from which to resolve requires for this module.
 * @param {string} config.html The initial html to parse with jsdom.
 * @param {function} config.beforeParse A function called with the window, and the module, before parsing html.
 * @param {Object.<string,function>} [config.extensions] An object containing any browser specific require hooks to be used in this module.
 * @return {JSDOM}
 */
module.exports = function(options) {
    const html = options.html;
    const dir = options.dir;
    const extensions = options.extensions;
    const beforeParse = options.beforeParse;
    options.html = options.dir = options.extensions = options.beforeParse = undefined;
    const window = jsdom.jsdom("", options).defaultView;
    const context = {
        window: window,
        runVMScript(script) {
            return jsdom.evalVMScript(window, script);
        }
    };

    // const context = new JSDOM('', options); // JSDOM 10+
    // const window = context.window; // JSDOM 10+

    const resolveConfig = {
        remaps: loadRemaps,
        extensions:
            extensions &&
            []
                .concat(Object.keys(require.extensions))
                .concat(Object.keys(extensions))
                .filter(unique)
    };
    const module = createContextModule({
        dir: dir,
        context: context,
        resolve: resolve,
        extensions: extensions
    });

    context.require = module.require.bind(module);
    beforeParse && beforeParse(window, context);
    window.document.open();
    window.document.write(html);

    return context;

    /**
     * A function to resolve modules in the browser using the provided config.
     *
     * @param {string} from The file being resolved from.
     * @param {string} request The requested path to resolve.
     * @return {string}
     */
    function resolve(from, request) {
        return browserResolve(from, request, resolveConfig).path;
    }
};

/**
 * Array filter for uniqueness.
 */
function unique(item, i, list) {
    return list.indexOf(item) === i;
}

/**
 * Loads browser.json remaps.
 *
 * @param {string} dir
 * @return {object|void}
 */
function loadRemaps(dir) {
    const file = path.join(dir, "browser.json");

    if (file in remapCache) {
        return remapCache[file];
    }

    let result;
    const remaps = fs.existsSync(file) && require(file).requireRemap;

    if (remaps) {
        result = {};
        for (const remap of remaps) {
            result[path.join(dir, remap.from)] = path.join(dir, remap.to);
        }
    }

    remapCache[file] = result;
    return result;
}
