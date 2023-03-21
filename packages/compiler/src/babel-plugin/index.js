import path from "path";
import { createHash } from "crypto";
import * as t from "../babel-types";
import { getTemplateId } from "@marko/babel-utils";
import { visitors } from "@babel/traverse";
import { buildLookup } from "../taglib";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import { MarkoFile } from "./file";
import taglibConfig from "../taglib/config";
import tryLoadTranslator from "../util/try-load-translator";
import shouldOptimize from "../util/should-optimize";

const SOURCE_FILES = new WeakMap();

export default (api, markoOpts) => {
  api.assertVersion(7);
  const translator = (markoOpts.translator = tryLoadTranslator(
    markoOpts.translator
  ));
  markoOpts.output = markoOpts.output || "html";

  if (markoOpts.optimize === undefined) {
    api.cache.using(shouldOptimize);
    markoOpts.optimize = shouldOptimize();
  }

  if (!translator || !translator.translate) {
    throw new Error(
      "@marko/compiler: translator must provide a translate visitor object"
    );
  }

  if (
    markoOpts.output === "hydrate" &&
    typeof markoOpts.resolveVirtualDependency !== "function"
  ) {
    throw new Error(
      `@marko/compiler: the "resolveVirtualDependency" option must be supplied when output is "hydrate".`
    );
  }

  let curOpts;

  return {
    name: "marko",
    manipulateOptions(opts) {
      // We need to allow these for now since we are not parsing the entire file
      // These types of syntax errors will be picked up by the bundler / runtime anyways.
      opts.parserOpts.allowAwaitOutsideFunction =
        opts.parserOpts.allowImportExportEverywhere =
        opts.parserOpts.allowReturnOutsideFunction =
        opts.parserOpts.allowSuperOutsideMethod =
        opts.parserOpts.allowUndeclaredExports =
          true;
      curOpts = opts;
    },
    parserOverride(code) {
      let prevFS = taglibConfig.fs;
      taglibConfig.fs = markoOpts.fileSystem;
      try {
        const file = getMarkoFile(code, curOpts, markoOpts);
        const finalAst = t.cloneNode(file.ast, true);
        SOURCE_FILES.set(finalAst, file);
        return finalAst;
      } finally {
        taglibConfig.fs = prevFS;
      }
    },
    pre(file) {
      let prevFS = taglibConfig.fs;
      taglibConfig.fs = markoOpts.fileSystem;
      curOpts = undefined;
      try {
        if (isMarkoOutput(markoOpts.output)) {
          return file;
        }

        const { ast, metadata } = file;
        const sourceFile = SOURCE_FILES.get(ast);
        const taglibLookup = sourceFile.___taglibLookup;
        const rootTranslators = [];
        const { buildCodeFrameError } = file;
        const { buildError } = file.hub;
        metadata.marko = shallowClone(sourceFile.metadata.marko);
        file.buildCodeFrameError = MarkoFile.prototype.buildCodeFrameError;
        file.hub.buildError = file.buildCodeFrameError.bind(file);
        file.markoOpts = markoOpts;
        file.___taglibLookup = taglibLookup;
        file.___getMarkoFile = getMarkoFile;

        if (markoOpts.output !== "hydrate") {
          for (const id in taglibLookup.taglibsById) {
            addPlugin(
              metadata.marko,
              rootTranslators,
              taglibLookup.taglibsById[id].translator
            );
          }
        }

        rootTranslators.push(translator.translate);
        traverseAll(file, rootTranslators);
        file.buildCodeFrameError = buildCodeFrameError;
        file.hub.buildError = buildError;
        file.markoOpts =
          file.___taglibLookup =
          file.___getMarkoFile =
            undefined;

        metadata.marko.watchFiles = metadata.marko.watchFiles.filter(unique);
        file.path.scope.crawl(); // Ensure all scopes are accurate for subsequent babel plugins
      } finally {
        taglibConfig.fs = prevFS;
      }
    },
    visitor:
      markoOpts.stripTypes && isMarkoOutput(markoOpts.output)
        ? {
            ExportNamedDeclaration: {
              exit(path) {
                // The babel typescript plugin will add an empty export declaration
                // if there are no other imports/exports in the file.
                // This is not needed for Marko file outputs since there is always
                // a default export.
                if (path.node.specifiers.length === 0) path.remove();
              }
            }
          }
        : undefined
  };
};

export function getMarkoFile(code, fileOpts, markoOpts) {
  const { translator } = markoOpts;
  let compileCache = markoOpts.cache.get(translator);

  if (!compileCache) {
    markoOpts.cache.set(translator, (compileCache = new Map()));
  }

  const { filename } = fileOpts;
  const isSource = markoOpts.output === "source";
  const isMigrate = markoOpts.output === "migrate";
  const canCache = !(isSource || isMigrate);
  const id = getTemplateId(markoOpts.optimize, filename);
  const contentHash = canCache && createHash("MD5").update(code).digest("hex");
  const cacheKey = canCache && createHash("MD5").update(id).digest("hex");

  let cached = canCache && compileCache.get(cacheKey);

  if (cached) {
    if (cached.contentHash !== contentHash) {
      // File content changed, invalidate the cache.
      cached = undefined;
    } else {
      for (const watchFile of cached.file.metadata.marko.watchFiles) {
        let mtime = Infinity;
        try {
          mtime = markoOpts.fileSystem.statSync(watchFile).mtime;
          // eslint-disable-next-line no-empty
        } catch {}

        if (mtime > cached.time) {
          // Some dependency changed, invalidate the cache.
          cached = undefined;
          break;
        }
      }
    }
  }

  if (cached) {
    return cached.file;
  }

  const taglibLookup = buildLookup(path.dirname(filename), translator);

  const file = new MarkoFile(fileOpts, {
    code,
    ast: {
      type: "File",
      program: {
        type: "Program",
        sourceType: "module",
        body: [],
        directives: []
      }
    }
  });

  const meta = (file.metadata.marko = {
    id,
    macros: {},
    deps: [],
    tags: [],
    watchFiles: []
  });

  file.markoOpts = markoOpts;
  file.___taglibLookup = taglibLookup;
  file.___getMarkoFile = getMarkoFile;

  parseMarko(file);

  if (isSource) {
    return file;
  }

  file.path.scope.crawl(); // Initialize bindings.

  const rootMigrators = [];
  for (const id in taglibLookup.taglibsById) {
    for (const migrator of taglibLookup.taglibsById[id].migrators) {
      addPlugin(meta, rootMigrators, migrator);
    }
  }

  rootMigrators.push(migrate);
  traverseAll(file, rootMigrators);

  if (isMigrate) {
    return file;
  }

  const rootTransformers = [];
  for (const id in taglibLookup.taglibsById) {
    for (const transformer of taglibLookup.taglibsById[id].transformers) {
      addPlugin(meta, rootTransformers, transformer);
    }
  }

  rootTransformers.push(transform);
  traverseAll(file, rootTransformers);

  for (const taglibId in taglibLookup.taglibsById) {
    const { filePath } = taglibLookup.taglibsById[taglibId];

    if (
      filePath[filePath.length - 5] === "." &&
      filePath.endsWith("marko.json")
    ) {
      meta.watchFiles.push(filePath);
    }
  }

  compileCache.set(cacheKey, {
    time: Date.now(),
    file,
    contentHash
  });

  if (translator.analyze) {
    try {
      traverseAll(file, translator.analyze);
    } catch (e) {
      compileCache.delete(cacheKey);
      throw e;
    }
  }

  return file;
}

function shallowClone(data) {
  const clone = {};

  for (const key in data) {
    const v = data[key];

    if (v !== undefined) {
      if (v === null || typeof v !== "object") {
        clone[key] = v;
      } else {
        const Ctor = v.constructor;

        switch (Ctor) {
          case Array:
            clone[key] = [...v];
            break;
          case Object:
          case null:
            clone[key] = { ...v };
            break;
          case Map:
          case Set:
          case Date:
          case RegExp:
            clone[key] = new Ctor(v);
            break;

          default:
            throw new Error(`Unsupported metadata type of ${Ctor.name}`);
        }
      }
    }
  }

  return clone;
}

function mergeVisitors(all) {
  if (Array.isArray(all)) {
    if (all.length === 1) {
      all = all[0];
    } else {
      return visitors.merge(all);
    }
  }

  return visitors.explode(all);
}

function traverseAll(file, visitors) {
  const program = file.path;
  const { Program, ...mergedVisitors } = mergeVisitors(visitors);
  program.state = {};

  // Traverse only walks into children by default
  // This manually traverses into the Program node as well.
  if (!(Program && Program.enter && program._call(Program.enter))) {
    program.traverse(mergedVisitors, program.state);

    if (Program && Program.exit) {
      program._call(Program.exit);
    }
  }
}

function addPlugin(meta, arr, plugin) {
  if (plugin) {
    const hook = plugin.hook.default || plugin.hook;

    if (plugin.path) {
      meta.watchFiles.push(plugin.path);
    }

    if (Array.isArray(hook)) {
      arr.push(...hook);
    } else {
      arr.push(hook);
    }
  }
}

function unique(item, i, list) {
  return list.indexOf(item) === i;
}

function isMarkoOutput(output) {
  return output === "source" || output === "migrate";
}
