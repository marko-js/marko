import traverse from "@babel/traverse";
import { diagnosticError, getTemplateId } from "@marko/compiler/babel-utils";
import { createHash } from "crypto";
import path from "path";

import * as t from "../babel-types";
import { buildLookup } from "../taglib";
import taglibConfig from "../taglib/config";
import { buildCodeFrameError } from "../util/build-code-frame";
import throwAggregateError from "../util/merge-errors";
import shouldOptimize from "../util/should-optimize";
import tryLoadTranslator from "../util/try-load-translator";
import { MarkoFile } from "./file";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";

const SOURCE_FILES = new WeakMap();

export default (api, markoOpts) => {
  api.assertVersion(7);
  const translator = (markoOpts.translator = tryLoadTranslator(
    markoOpts.translator,
  ));
  markoOpts.output = markoOpts.output || "html";

  if (markoOpts.optimize === undefined) {
    api.cache.using(shouldOptimize);
    markoOpts.optimize = shouldOptimize();
  }

  if (!translator || !translator.translate) {
    throw new Error(
      "@marko/compiler: translator must provide a translate visitor object",
    );
  }

  if (
    markoOpts.output === "hydrate" &&
    typeof markoOpts.resolveVirtualDependency !== "function"
  ) {
    throw new Error(
      `@marko/compiler: the "resolveVirtualDependency" option must be supplied when output is "hydrate".`,
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
        opts.parserOpts.allowNewTargetOutsideFunction =
          true;
      curOpts = opts;
    },
    parserOverride(code) {
      const prevFS = taglibConfig.fs;
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
      const { buildError: prevBuildError } = file.hub;
      const { buildCodeFrameError: prevCodeFrameError } = file;
      const prevFS = taglibConfig.fs;
      taglibConfig.fs = markoOpts.fileSystem;
      curOpts = undefined;
      try {
        const { ast, metadata } = file;
        const sourceFile = SOURCE_FILES.get(ast);
        metadata.marko = shallowClone(sourceFile.metadata.marko);

        if (isMarkoOutput(markoOpts.output)) {
          finalizeMeta(metadata.marko);
          return;
        }

        const taglibLookup = sourceFile.___taglibLookup;
        const rootTranslators = [];
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
              taglibLookup.taglibsById[id].translator,
            );
          }
        }

        rootTranslators.push(translator.translate);
        file.___compileStage = "translate";
        traverseAll(file, rootTranslators);

        finalizeMeta(metadata.marko);
        file.path.scope.crawl(); // Ensure all scopes are accurate for subsequent babel plugins
      } finally {
        taglibConfig.fs = prevFS;
        file.buildCodeFrameError = prevCodeFrameError;
        file.hub.buildError = prevBuildError;
        file.markoOpts =
          file.___taglibLookup =
          file.___getMarkoFile =
            undefined;
      }
    },
    visitor:
      markoOpts.stripTypes && isMarkoOutput(markoOpts.output)
        ? {
            MarkoClass(path) {
              // We replace the MarkoClass with a regular class declaration so babel can strip it's types.
              path.replaceWith(
                t.classDeclaration(t.identifier(""), null, path.node.body),
              );
            },
            ExportNamedDeclaration: {
              exit(path) {
                const { node } = path;
                // The babel typescript plugin will add an empty export declaration
                // if there are no other imports/exports in the file.
                // This is not needed for Marko file outputs since there is always
                // a default export.
                if (!(node.declaration || node.specifiers.length))
                  path.remove();
              },
            },
          }
        : undefined,
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
  const id = getTemplateId(markoOpts, filename);
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
        } catch {
          // ignore
        }

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
        directives: [],
        params: [t.identifier("input")],
      },
    },
  });

  const meta = (file.metadata.marko = {
    id,
    deps: [],
    tags: [],
    watchFiles: [],
    diagnostics: [],
  });

  file.markoOpts = markoOpts;
  file.___taglibLookup = taglibLookup;
  file.___getMarkoFile = getMarkoFile;

  file.___compileStage = "parse";
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
  file.___compileStage = "migrate";
  traverseAll(file, rootMigrators);

  if (file.___hasParseErrors) {
    if (markoOpts.errorRecovery) {
      t.traverseFast(file.path.node, (node) => {
        if (node.type === "MarkoParseError") {
          diagnosticError(file.path, {
            label: node.label,
            loc: node.errorLoc || node.loc,
          });
        }
      });
    } else {
      let errors = [];
      t.traverseFast(file.path.node, (node) => {
        if (node.type === "MarkoParseError") {
          errors.push(
            buildCodeFrameError(
              file.opts.filename,
              file.code,
              node.errorLoc || node.loc,
              node.label,
            ),
          );
        }
      });

      throwAggregateError(errors);
    }
  }

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
  if (translator.transform) {
    rootTransformers.push(translator.transform);
  }
  file.___compileStage = "transform";
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
    contentHash,
  });

  if (translator.analyze) {
    try {
      file.___compileStage = "analyze";
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
      return traverse.visitors.merge(all);
    }
  }

  return traverse.visitors.explode(all);
}

function traverseAll(file, visitors) {
  const program = file.path;
  traverse(
    program.node,
    mergeVisitors(visitors),
    program.scope,
    (program.state = {}),
    program,
    true,
  );
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

function isMarkoOutput(output) {
  return output === "source" || output === "migrate";
}

function finalizeMeta(meta) {
  meta.watchFiles = [...new Set(meta.watchFiles)];
  if (meta.analyzedTags) {
    meta.analyzedTags = [...meta.analyzedTags];
  }
}
