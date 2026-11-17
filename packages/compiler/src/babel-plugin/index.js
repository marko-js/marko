import path from "path";

import {
  pluginTransformTypeScript,
  traverse,
  types as t,
} from "@marko/compiler/internal/babel";

import { diagnosticError, DiagnosticType } from "../babel-utils/diagnostics";
import { getFileInternal, setFileInternal } from "../babel-utils/get-file";
import { getTemplateId } from "../babel-utils/tags";
import { getLookupDependencies } from "../taglib";
import {
  CompileDependencies,
  Dependencies,
  inNodeModules,
  LookupDependencies,
  stateOf,
} from "../taglib/dependencies";
import { buildCodeFrameError } from "../util/build-code-frame";
import throwAggregateError from "../util/merge-errors";
import { Hash } from "../util/quick-hash";
import { MarkoFile } from "./file";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";

const SOURCE_FILES = new WeakMap();
let stripTypesVisitor;

export default (api) => {
  api.assertVersion(7);
  stripTypesVisitor ||= [
    pluginTransformTypeScript(api, {
      isTSX: false,
      allowNamespaces: true,
      allowDeclareFields: true,
      optimizeConstEnums: true,
      onlyRemoveTypeImports: true,
      disallowAmbiguousJSXLike: false,
    }).visitor,
    stripTagTypesVisitor,
  ];

  let curOpts;

  return {
    name: "marko",
    manipulateOptions(opts) {
      const { parserOpts } = opts;
      // We need to allow these for now since we are not parsing the entire file
      // These types of syntax errors will be picked up by the bundler / runtime anyways.
      parserOpts.allowAwaitOutsideFunction =
        parserOpts.allowImportExportEverywhere =
        parserOpts.allowReturnOutsideFunction =
        parserOpts.allowSuperOutsideMethod =
        parserOpts.allowUndeclaredExports =
        parserOpts.allowNewTargetOutsideFunction =
        parserOpts.createImportExpressions =
          true;

      parserOpts.plugins = [
        ...parserOpts.plugins,
        "objectRestSpread",
        "classProperties",
        [
          "typescript",
          {
            disallowAmbiguousJSXLike: false,
            dts: false,
          },
        ],
      ];
      curOpts = opts;
    },
    parserOverride(code, { markoOpts }) {
      const file = getMarkoFile(code, curOpts, markoOpts);
      const finalAst = t.cloneNode(file.ast, true);
      SOURCE_FILES.set(finalAst, file);
      return finalAst;
    },
    pre(file) {
      const { markoOpts } = file.opts.parserOpts;
      this.hasLaterPlugins =
        file.opts.plugins.length > 1 || file.opts.presets.length > 0;
      const { buildError: prevBuildError } = file.hub;
      const { buildCodeFrameError: prevCodeFrameError } = file;
      const prevFile = getFileInternal();
      setFileInternal(file);
      curOpts = undefined;
      try {
        const { ast, metadata } = file;
        const sourceFile = SOURCE_FILES.get(ast);
        metadata.marko = shallowClone(sourceFile.metadata.marko);

        if (isMarkoOutput(markoOpts.output)) {
          addLegacyMeta(metadata.marko);
          return;
        }

        // Recovery reports every error as a diagnostic, but, as without it, a
        // template with errors is not translated: its module is empty.
        if (
          markoOpts.errorRecovery &&
          metadata.marko.diagnostics.some(isErrorDiagnostic)
        ) {
          file.path.node.body = [];
          addLegacyMeta(metadata.marko);
          return;
        }

        const taglibLookup = sourceFile.___taglibLookup;
        const rootTranslators = [];
        file.buildCodeFrameError = MarkoFile.prototype.buildCodeFrameError;
        file.hub.buildError = file.buildCodeFrameError.bind(file);
        file.markoOpts = markoOpts;
        file.___taglibLookup = taglibLookup;
        file.___getMarkoFile = getMarkoFile;
        file.___analyzedFiles = sourceFile.___analyzedFiles;
        // Translate loads into a copy, so a template only it loads is not kept
        // with the cached file nor taken for one its analysis loaded.
        file.___loadedFiles = new Map(sourceFile.___analyzedFiles);

        // hydrate output emits only the entry bootstrap, so taglib translators are skipped.
        if (markoOpts.output !== "hydrate") {
          for (const taglibTranslator of taglibLookup.translators) {
            addPlugin(metadata.marko, rootTranslators, taglibTranslator);
          }
        }

        rootTranslators.push(markoOpts.translator.translate);
        file.___compileStage = "translate";
        traverseAll(file, rootTranslators);
        addLegacyMeta(metadata.marko);

        if (this.hasLaterPlugins) {
          file.path.scope.crawl();
        }
      } finally {
        setFileInternal(prevFile);
        file.buildCodeFrameError = prevCodeFrameError;
        file.hub.buildError = prevBuildError;
        file.markoOpts =
          file.___taglibLookup =
          file.___getMarkoFile =
          file.___analyzedFiles =
          file.___loadedFiles =
            undefined;
      }
    },
    visitor: {
      Program(program) {
        // Babel's own pass then only hoists statements marked `_blockHoist`,
        // and Marko marks none.
        if (!this.hasLaterPlugins) program.skip();
      },
    },
  };
};

function getMarkoFile(code, fileOpts, markoOpts) {
  const { translator } = markoOpts;
  let compileCache = markoOpts.cache.get(translator);

  if (!compileCache) {
    markoOpts.cache.set(translator, (compileCache = new Map()));
  }

  const { filename } = fileOpts;
  const isSource = markoOpts.output === "source";
  const isMigrate = markoOpts.output === "migrate";
  const canCache = !(isSource || isMigrate);
  // `stripTypes` is left out of the key on purpose: it is for cli flows, which
  // compile once per process, so no cache is shared across its settings.
  const contentHash = canCache && new Hash().update(code).digest();
  // Kept as analyzed, by filename, so configs sharing a cache may differ only
  // in `output`, which only translate reads.
  let cached = canCache && compileCache.get(filename);

  // A template still analyzing is part of the analysis an import cycle led
  // back from, so it is current.
  if (cached && cached.file.___compileStage !== "analyze") {
    if (cached.contentHash !== contentHash) {
      // File content changed, invalidate the cache.
      cached = undefined;
    } else if (
      cached.state !== stateOf(markoOpts.fileSystem) ||
      (!markoOpts.reportsChanges && revalidateRead(cached)) ||
      cached.state.isStale(filename, cached.invalidations)
    ) {
      // The caches were cleared, or it was marked stale since.
      cached = undefined;
    }
  }

  if (cached) {
    cached.file.markoOpts = markoOpts;
    return cached.file;
  }

  const prevFile = getFileInternal();

  try {
    const file = setFileInternal(
      new MarkoFile(fileOpts, {
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
      }),
    );
    file.markoOpts = markoOpts;
    file.___compileStage = "parse";
    file.___getMarkoFile = getMarkoFile;
    file.___analyzedFiles = file.___loadedFiles = new Map();
    const lookupDependencies = getLookupDependencies(
      path.dirname(filename),
      translator,
      markoOpts.fileSystem,
    );
    const meta = (file.metadata.marko = {
      id: getTemplateId(markoOpts, filename),
      deps: [],
      tags: [],
      dependencies: new CompileDependencies(lookupDependencies, filename),
      // Kept empty for translators that predate `dependencies` and push to it.
      watchFiles: [],
      diagnostics: [],
      api: translator.preferAPI,
    });
    // Only once the template goes stale with its lookup, as one that failed to
    // build throws here.
    const taglibLookup = (file.___taglibLookup =
      LookupDependencies.getLayer(lookupDependencies));

    parseMarko(file);
    file.path.scope.crawl(); // Initialize bindings.

    if (isSource) {
      if (markoOpts.stripTypes) {
        stripTypes(file);
      }
      return file;
    }

    const rootMigrators = [];
    for (const migrator of taglibLookup.migrators) {
      addPlugin(meta, rootMigrators, migrator);
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

    if (markoOpts.stripTypes) {
      stripTypes(file);
    }

    if (isMigrate) {
      return file;
    }

    file.path.scope.crawl(); // Migrators may have changed bindings.
    file.___compileStage = "transform";

    const rootTransformers = [];
    for (const transformer of taglibLookup.transformers) {
      addPlugin(meta, rootTransformers, transformer);
    }

    rootTransformers.push(transform);
    if (translator.transform) {
      rootTransformers.push(translator.transform);
    }
    traverseAll(file, rootTransformers);
    file.path.scope.crawl();

    const state = LookupDependencies.getState(lookupDependencies);
    compileCache.set(filename, {
      file,
      contentHash,
      state,
      invalidations: state.invalidations,
    });

    if (translator.analyze) {
      file.___compileStage = "analyze";
      traverseAll(file, translator.analyze);

      if (!markoOpts.errorRecovery) {
        // Analyze failures are recorded as error diagnostics so the whole
        // template reports at once (and editors compiling with
        // `errorRecovery` keep them as recoverable diagnostics); mirror
        // the parse layer by throwing them together at the stage's end.
        const seen = new Set();
        const errors = [];
        for (const diag of meta.diagnostics) {
          if (diag.type !== DiagnosticType.Error) continue;
          const key = `${
            diag.loc ? `${diag.loc.start.line}:${diag.loc.start.column}` : ""
          }:${diag.label}`;
          if (seen.has(key)) continue;
          seen.add(key);
          errors.push(
            buildCodeFrameError(filename, file.code, diag.loc, diag.label),
          );
          if (errors.length === 8) break;
        }

        throwAggregateError(errors);
      }

      // Ready to translate; a file still at "analyze" is mid-analysis (an
      // import cycle loaded it from inside its own analysis).
      file.___compileStage = "translate";
    }

    return file;
  } catch (err) {
    // A compile that failed leaves no entry to hit.
    if (canCache) compileCache.delete(filename);
    throw err;
  } finally {
    setFileInternal(prevFile);
  }
}

// For a caller that reports no changes, checks against disk what the template and the
// templates its analysis loaded watch (see `forEachWatched`); marks it stale if changed.
function revalidateRead(cached) {
  const paths = [];
  const seen = new WeakSet();
  const pending = [cached.file];
  const visited = new Set(pending);
  for (let file; (file = pending.pop());) {
    forEachWatched(file.metadata.marko.dependencies, seen, (path) =>
      paths.push(path),
    );
    for (const child of file.___analyzedFiles.values()) {
      if (child && !visited.has(child)) {
        visited.add(child);
        pending.push(child);
      }
    }
  }
  return cached.state.revalidate(paths).length > 0;
}

// Fields read by integrations that predate `dependencies`, derived only if read.
function addLegacyMeta(meta) {
  const { dependencies, watchFiles, analyzedTags } = meta;
  defineLazy(meta, "watchFiles", () => {
    const files = new Set(watchFiles);
    forEachWatched(dependencies, new WeakSet(), (path) => {
      if (!path.endsWith(".marko")) files.add(path);
    });
    return [...files];
  });
  defineLazy(meta, "analyzedTags", () => {
    const templates = new Set(analyzedTags);
    forEachWatched(dependencies, undefined, (path) => {
      if (path.endsWith(".marko")) templates.add(path);
    });
    return templates.size ? [...templates] : undefined;
  });
}

// What a compile watched before `dependencies`: the files it read itself, and (given
// `seen`) its lookups' `marko.json` files, not tags dirs or tags, outside `node_modules`.
function forEachWatched(deps, seen, visit) {
  let lookup = deps;
  for (; lookup instanceof CompileDependencies;) {
    for (const path of Dependencies.getFiles(lookup)) visit(path);
    lookup = Dependencies.getParent(lookup);
  }
  if (!seen) return;
  for (; lookup && !seen.has(lookup); lookup = Dependencies.getParent(lookup)) {
    seen.add(lookup);
    for (const taglib of LookupDependencies.getLayer(lookup).taglibs) {
      if (!taglib.discoveryDir && !inNodeModules(taglib.filePath)) {
        visit(taglib.filePath);
      }
    }
  }
}

function defineLazy(obj, key, get) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      const value = get();
      Object.defineProperty(obj, key, {
        value,
        writable: true,
        enumerable: true,
      });
      return value;
    },
  });
}

function isErrorDiagnostic(diag) {
  return diag.type === DiagnosticType.Error;
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
          // A prototype-less object's `constructor` is undefined.
          case undefined:
            clone[key] = { ...v };
            break;
          case Map:
          case Set:
          case Date:
          case RegExp:
            clone[key] = new Ctor(v);
            break;
          // An output records its own reads atop its template's.
          case CompileDependencies:
            clone[key] = new CompileDependencies(v);
            break;

          default:
            throw new Error(
              `Unsupported metadata type of ${Ctor?.name ?? Ctor}`,
            );
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
      return traverse.visitors.merge(all.map(toExploded));
    }
  }

  return toExploded(all);
}

const explodeCache = new WeakMap();
function toExploded(visitor) {
  let cached = explodeCache.get(visitor);
  if (!cached) {
    cached = traverse.visitors.explode(cloneVisitor(visitor));
    explodeCache.set(visitor, cached);
  }

  return cached;
}

function cloneVisitor(visitor) {
  const clone = {};
  for (const key in visitor) {
    clone[key] = cloneVisit(visitor[key]);
  }

  return clone;
}

function cloneVisit(visit) {
  if (!visit || typeof visit !== "object") {
    return visit;
  }

  return { ...visit };
}

function traverseAll(file, visitors) {
  const program = file.path;
  traverse(
    program.node,
    mergeVisitors(visitors),
    program.scope,
    (program.state = { file }),
    program,
    true,
  );
}

function addPlugin(meta, arr, plugin) {
  const hook = plugin.hook.default || plugin.hook;

  CompileDependencies.addPlugin(meta.dependencies, plugin);

  if (Array.isArray(hook)) {
    arr.push(...hook);
  } else {
    arr.push(hook);
  }
}

// The TypeScript plugin does not know the type syntax of a tag's head.
const stripTagTypesVisitor = {
  MarkoTag(tag) {
    tag.node.typeArguments = undefined;
  },
  MarkoTagBody(body) {
    body.node.typeParameters = undefined;
  },
};

function stripTypes(file) {
  // The TypeScript transform strips type imports only from the program's own
  // body, so those of `static`, `server` and `client` statements go here.
  for (const path of file.path.get("body")) {
    if (path.type === "MarkoScriptlet" && path.node.static) {
      for (const stmt of path.get("body")) {
        if (stmt.isImportDeclaration()) stripTypeImports(stmt);
      }
    }
  }

  traverseAll(file, stripTypesVisitor);

  for (const path of file.path.get("body")) {
    if (
      path.type === "ExportNamedDeclaration" &&
      !(path.node.declaration || path.node.specifiers.length)
    ) {
      // The babel typescript plugin will add an empty export declaration
      // if there are no other imports/exports in the file.
      // This is not needed for Marko file outputs since there is always
      // a default export.
      path.remove();
    }
  }
}

function stripTypeImports(decl) {
  if (decl.node.importKind === "type") {
    decl.remove();
    return;
  }

  let hasTypes = false;
  for (const specifier of decl.get("specifiers")) {
    if (specifier.node.importKind === "type") {
      hasTypes = true;
      specifier.remove();
    }
  }

  if (hasTypes && !decl.node.specifiers.length) {
    decl.remove();
  }
}

// These outputs reprint the AST, so blank lines between tags are not kept;
// keeping them would mean patching Babel's printer beyond our node types.
function isMarkoOutput(output) {
  return output === "source" || output === "migrate";
}
