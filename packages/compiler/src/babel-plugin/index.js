import path from "path";
import { createHash } from "crypto";
import * as t from "../babel-types";
import { getLoc, getTemplateId } from "@marko/babel-utils";
import { visitors } from "@babel/traverse";
import { buildLookup } from "../taglib";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import { MarkoFile } from "./file";
import { curFS, setFS } from "../taglib/fs";
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

  return {
    name: "marko",
    parserOverride(code, jsParseOptions) {
      let prevFS = curFS;
      setFS(markoOpts.fileSystem);
      try {
        const file = getMarkoFile(code, jsParseOptions, markoOpts);
        const finalAst = t.cloneNode(file.ast, true);
        SOURCE_FILES.set(finalAst, file);
        return finalAst;
      } finally {
        setFS(prevFS);
      }
    },
    pre(file) {
      let prevFS = curFS;
      setFS(markoOpts.fileSystem);
      try {
        if (markoOpts.output === "source" || markoOpts.output === "migrate") {
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
        file.markoOpts = file.___taglibLookup = file.___getMarkoFile = undefined;

        metadata.marko.watchFiles = metadata.marko.watchFiles.filter(unique);
      } finally {
        setFS(prevFS);
      }
    }
  };
};

export function getMarkoFile(code, jsParseOptions, markoOpts) {
  const { translator } = markoOpts;
  let compileCache = markoOpts.cache.get(translator);

  if (!compileCache) {
    markoOpts.cache.set(translator, (compileCache = new Map()));
  }

  const { sourceFileName } = jsParseOptions;
  const isSource = markoOpts.output === "source";
  const isMigrate = markoOpts.output === "migrate";
  const canCache = !(isSource || isMigrate);
  const id = getTemplateId(markoOpts.optimize, sourceFileName);
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

  const taglibLookup = buildLookup(path.dirname(sourceFileName), translator);

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
    id,
    macros: {},
    deps: [],
    tags: [],
    watchFiles: []
  });

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

  if (translator.analyze) {
    traverseAll(file, translator.analyze);
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
