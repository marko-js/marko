'use strict';

// Someday this will become a separate package.
const vm = require("vm");
const path = require("path");
const Module = require("module");
const builtinModules = require("builtins")();
const originalCompile = Module.prototype._compile;
const originalResolve = Module._resolveFilename;
const S_POSTFIX = Symbol("postfix");
const S_CONTEXT = Symbol("context");
const S_RESOLVE = Symbol("resolve");
const S_HOOKS = Symbol("hooks");
const EXT_NAME = ".in-module-context";
let moduleId = 0;

class ContextModule extends Module {
  /**
   * Custom nodejs Module implementation which uses a provided
   * resolver, require hooks, and context. 
   */
  constructor(options) {
    const postfix = "." + (moduleId++) + EXT_NAME;
    const filename = path.join(options.dir, "index" + postfix);
    super(filename);

    this.filename = filename;
    this[S_POSTFIX] = postfix;
    this[S_CONTEXT] = options.context;
    this[S_RESOLVE] = options.resolve;
    this[S_HOOKS] = options.extensions;
  }
}

/**
 * Patch nodejs module system to support context,
 * compilation and module resolution overrides.
 */
require.extensions[EXT_NAME] = requireHook;
Module._resolveFilename = resolveFileHook;
Module.prototype._compile = compileHook;

// Expose main util.
exports.createModule = createContextModule;

/**
 * Creates a custom Module object which runs all required scripts in a provided vm context.
 *
 * @param {object} config Config for the module.
 * @param {string} config.dir The directory from which to resolve requires for this module.
 * @param {*|JSDOM} config.context A vm context which will be used as the context for any required modules.
 * @param {function} [config.resolve] A function to which will override the native module resolution.
 * @param {Object.<string,function>} [config.extensions] An object containing any context specific require hooks to be used in this module.
 * @return {ContextModule}
 */
function createContextModule (options) {
  return new ContextModule(options);
}

/**
 * Hijack native file resolution using closest custom resolver.
 *
 * @param {string} request The file to resolve.
 * @param {Module} parentModule The module requiring this file.
 * @return {string}
 */
function resolveFileHook (request, parentModule) {
  const isNotBuiltin = builtinModules.indexOf(request) === -1;
  const contextModule = isNotBuiltin && findNearestContextModule(parentModule);

  if (contextModule) {
    const resolver = contextModule[S_RESOLVE];
    if (resolver) {      
      const dir = path.dirname(parentModule.filename);
      const postfix = contextModule[S_POSTFIX];
    
      if (request.endsWith(postfix)) {
        return request;
      }
    
      if (path.isAbsolute(request)) {
        request = path.relative(dir, request);
        if (request[0] !== ".") {
          request = "./" + request; 
        }
      }

      return resolver(dir, request) + postfix;
    }
  }

  return originalResolve(request, parentModule);
}

/**
 * Require hook which removes module postfix and uses custom extensions if provided.
 *
 * @param {Module} module
 * @param {string} filename 
 */
function requireHook (module, filename) {
  const contextModule = findNearestContextModule(module);
  const postfix = contextModule[S_POSTFIX];
  const extensions = contextModule[S_HOOKS];
  filename = filename.slice(0, -postfix.length);
  const ext = path.extname(filename);
  const compiler = (extensions && extensions[ext]) || require.extensions[ext] || require.extensions[".js"];
  return compiler(module, filename);
}

/**
 * This overrides script compilation to ensure the nearest context module is used.
 *
 * @param {string} content The file contents of the script.
 * @param {string} filename The filename for the script.
 */
function compileHook (content, filename) {
  const contextModule = findNearestContextModule(this);
  
  if (contextModule) {
    const context = contextModule[S_CONTEXT];
    const script = new vm.Script(Module.wrap(content), {
      filename: filename,
      lineOffset: 0,
      displayErrors: true
    });

    return runScript(context, script).call(
      this.exports,
      this.exports,
      createRequire(this),
      this,
      filename,
      path.dirname(filename)
    );
  }

  return originalCompile.apply(this, arguments);
}

/**
 * Walks up a module tree to find the nearest context module.
 *
 * @param {Module} cur The starting module.
 * @return {Module?}
 */
function findNearestContextModule (cur) {
  do {
    if (cur instanceof ContextModule) {
      return cur;
    }
  } while ((cur = cur.parent));
}

/**
 * Helper which will run a vm script in a context.
 * Special case for JSDOM where `runVMScript` is used.
 *
 * @param {*} context The vm context to run the script in (or a jsdom instance).
 * @param {Script} script The vm script to run.
 * @return {object}
 */
function runScript (context, script) {
  return context.runVMScript
    ? context.runVMScript(script)
    : script.runInContext(context);
}

/**
 * Creates a require function bound to a module
 * and adds a `resolve` function the same as nodejs.
 *
 * @param {Module} module The module to create a require function for.
 * @return {function}
 */
function createRequire (module) {
  const require = module.require.bind(module);
  require.resolve = function (request) {
    return resolveFileHook(request, module);
  }

  return require;
}
