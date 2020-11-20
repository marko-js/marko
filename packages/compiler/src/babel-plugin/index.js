import path from "path";
import { createHash } from "crypto";
import { getRootDir } from "lasso-package-root";
import { types as t } from "@marko/babel-types";
import { getLoc } from "@marko/babel-utils";
import traverse, { visitors } from "@babel/traverse";
import { buildLookup } from "../taglib";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import markoModules from "../../modules";
import { MarkoFile } from "./file";

const SOURCE_FILES = new WeakMap();
let ROOT = process.cwd();
try {
  ROOT = getRootDir(ROOT) || ROOT;
  // eslint-disable-next-line no-empty
} catch {}

export default (api, markoOpts) => {
  api.assertVersion(7);
  const translator = markoOpts.translator;

  markoOpts.output = markoOpts.output || "html";

  if (markoOpts.optimize === undefined) {
    markoOpts.optimize = api.env("production");
  }

  if (!translator || !translator.visitor) {
    throw new Error(
      "@marko/compiler: translator must provide a visitor object"
    );
  }

  return {
    name: "marko",
    parserOverride(code, jsParseOptions) {
      const file = getMarkoFile(code, jsParseOptions, markoOpts);
      const finalAst = t.cloneDeep(file.ast);
      SOURCE_FILES.set(finalAst, file);
      return finalAst;
    },
    pre(file) {
      const { ast, metadata } = file;
      const sourceFile = SOURCE_FILES.get(ast);
      metadata.marko = shallowClone(sourceFile.metadata.marko);

      if (markoOpts._translate !== false) {
        const { buildCodeFrameError } = file;
        const { buildError } = file.hub;
        file.buildCodeFrameError = MarkoFile.prototype.buildCodeFrameError;
        file.hub.buildError = file.buildCodeFrameError.bind(file);
        file.markoOpts = markoOpts;
        file.___taglibLookup = sourceFile.___taglibLookup;
        file.___getMarkoFile = getMarkoFile;
        traverse(ast, translator.visitor, file.scope);
        file.buildCodeFrameError = buildCodeFrameError;
        file.hub.buildError = buildError;
        file.markoOpts = file.___taglibLookup = file.___getMarkoFile = undefined;
      }

      metadata.marko.watchFiles = metadata.marko.watchFiles.filter(unique);
    }
  };
};

export function getMarkoFile(code, jsParseOptions, markoOpts) {
  let compileCache = markoOpts.cache.get(markoOpts.translator);

  if (!compileCache) {
    markoOpts.cache.set(markoOpts.translator, (compileCache = new Map()));
  }

  const filename = jsParseOptions.sourceFileName;
  const relativeFilename = path.relative(ROOT, filename);
  const contentHash = createHash("MD5")
    .update(code)
    .digest("hex");
  const cacheKey = createHash("MD5")
    .update(relativeFilename)
    .update(markoOpts.optimize ? "\0optimize" : "")
    .update(markoOpts.migrate ? "\0migrate" : "")
    .digest("hex");

  let cached = compileCache.get(cacheKey);

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

  const taglibLookup = buildLookup(
    path.dirname(filename),
    markoOpts.translator
  );

  const file = new MarkoFile(jsParseOptions, {
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
    id: markoOpts.optimize
      ? createHash("MD5")
          .update(relativeFilename)
          .digest("base64")
          .slice(0, 8)
      : relativeFilename,
    macros: {},
    deps: [],
    tags: [],
    watchFiles: []
  });

  const rootMigrators = [migrate];
  const rootTransformers = [transform];

  file.markoOpts = markoOpts;
  file.___taglibLookup = taglibLookup;
  file.___getMarkoFile = getMarkoFile;

  file.ast.start = file.ast.program.start = 0;
  file.ast.end = file.ast.program.end = code.length - 1;
  file.ast.loc = file.ast.program.loc = {
    start: { line: 0, column: 0 },
    end: getLoc(file, file.ast.end)
  };

  parseMarko(file);
  file.path.scope.crawl(); // Initialize bindings.

  for (const id in taglibLookup.taglibsById) {
    const { migratorPath } = taglibLookup.taglibsById[id];
    if (migratorPath) {
      const mod = markoModules.require(migratorPath);
      meta.watchFiles.push(migratorPath);
      rootMigrators.push(mod.default || mod);
    }
  }

  for (const { path: transformerPath } of taglibLookup.merged.transformers) {
    const mod = markoModules.require(transformerPath);
    meta.watchFiles.push(transformerPath);
    rootTransformers.push(mod.default || mod);
  }

  traverse(file.ast, mergeVisitors(rootMigrators), file.scope);
  traverse(file.ast, mergeVisitors(rootTransformers), file.scope);

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
  if (all.length <= 1) {
    return all[0];
  }

  return visitors.merge(all);
}

function unique(item, i, list) {
  return list.indexOf(item) === i;
}
