import path from "path";

import type { ConfigAPI } from "@babel/core";
import type { MarkoMeta } from "@marko/compiler";
import type {
  DiagnosticOptions,
  PluginDefinition,
} from "@marko/compiler/babel-utils";
import { traverse, types as t } from "@marko/compiler/internal/babel";

import { diagnosticError, DiagnosticType } from "../babel-utils/diagnostics";
import { getFileInternal, setFileInternal } from "../babel-utils/get-file";
import { getTemplateId } from "../babel-utils/tags";
import { buildLookup } from "../taglib";
import {
  buildCodeFrameError,
  type CompileError,
} from "../util/build-code-frame";
import {
  type CompileFile,
  type FileOpts,
  type MarkoOpts,
} from "../util/compile-file";
import { stat } from "../util/fs";
import throwAggregateError from "../util/merge-errors";
import { Hash } from "../util/quick-hash";
import type { Visitors } from "../util/try-load-translator";
import { toCommonJS } from "./commonjs";
import { MarkoFile } from "./file";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import { stripTypes } from "./strip-types";

/** A template's analysis as a compiler's cache keeps it. */
interface Cached {
  time: number;
  file: CompileFile;
  contentHash: number | false;
}

/** A template's metadata while it compiles. */
type CompileMeta = Omit<MarkoMeta, "analyzedTags"> & {
  analyzedTags?: Set<string> | string[];
};

/** What the plugin keeps on its pass, Babel's `this` in its hooks. */
interface PluginPass {
  hasLaterPlugins?: boolean;
  /** Whether the compile's output is CommonJS, converted once every plugin has run. */
  commonjs?: boolean;
}

/** The hooks of Babel's plugin API that the plugin implements. */
interface Plugin {
  name: string;
  manipulateOptions(opts: FileOpts): void;
  parserOverride(code: string, parserOpts: FileOpts["parserOpts"]): t.File;
  pre(this: PluginPass, file: t.BabelFile): void;
  post(this: PluginPass, file: t.BabelFile): void;
  visitor: t.Visitor<PluginPass>;
}

const SOURCE_FILES = new WeakMap<t.File, CompileFile>();

export default (api: ConfigAPI): Plugin => {
  api.assertVersion(7);

  let curOpts: FileOpts | undefined;

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
      const file = getMarkoFile(code, curOpts!, markoOpts);
      const finalAst = t.cloneNode(file.ast, true);
      SOURCE_FILES.set(finalAst, file);
      return finalAst;
    },
    pre(babelFile) {
      const file = babelFile as CompileFile;
      const { markoOpts } = file.opts.parserOpts;
      this.hasLaterPlugins =
        file.opts.plugins.length > 1 || file.opts.presets.length > 0;
      this.commonjs =
        markoOpts.modules === "cjs" && !isMarkoOutput(markoOpts.output);
      const { buildError: prevBuildError } = file.hub;
      const { buildCodeFrameError: prevCodeFrameError } = file;
      const prevFile = getFileInternal();
      setFileInternal(file);
      curOpts = undefined;
      try {
        const { ast, metadata } = file;
        const sourceFile = SOURCE_FILES.get(ast)!;
        metadata.marko = shallowClone(sourceFile.metadata.marko);

        if (isMarkoOutput(markoOpts.output)) {
          finalizeMeta(metadata.marko);
          return;
        }

        // Recovery reports every error as a diagnostic, but, as without it, a
        // template with errors is not translated: its module is empty.
        if (
          markoOpts.errorRecovery &&
          metadata.marko.diagnostics.some(isErrorDiagnostic)
        ) {
          file.path.node.body = [];
          finalizeMeta(metadata.marko);
          return;
        }

        const taglibLookup = sourceFile.___taglibLookup;
        const rootTranslators: t.Visitor[] = [];
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

        finalizeMeta(metadata.marko);
        if (this.hasLaterPlugins) {
          file.path.scope.crawl();
        }
      } finally {
        setFileInternal(prevFile);
        file.buildCodeFrameError = prevCodeFrameError;
        file.hub.buildError = prevBuildError;
        // Babel's file outlives the compile, so it keeps none of it.
        const cleared: Partial<CompileFile> = file;
        cleared.markoOpts =
          cleared.___taglibLookup =
          cleared.___getMarkoFile =
          cleared.___analyzedFiles =
          cleared.___loadedFiles =
            undefined;
      }
    },
    post(babelFile) {
      if (this.commonjs) toCommonJS(babelFile as CompileFile);
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

function getMarkoFile(
  code: string,
  fileOpts: FileOpts,
  markoOpts: MarkoOpts,
): CompileFile {
  const { translator } = markoOpts;
  let compileCache = markoOpts.cache.get(translator) as
    | Map<string, Cached>
    | undefined;

  if (!compileCache) {
    markoOpts.cache.set(translator, (compileCache = new Map()));
  }

  const { filename } = fileOpts;
  const isSource = markoOpts.output === "source";
  const isMigrate = markoOpts.output === "migrate";
  const canCache = !(isSource || isMigrate);
  const id = getTemplateId(markoOpts, filename);
  // `stripTypes` is left out of the key on purpose: it is for cli flows, which
  // compile once per process, so no cache is shared across its settings.
  const contentHash = canCache && new Hash().update(code).digest();
  // Configs may share a cache only when they differ in `output` alone, as the
  // bundler plugins' do: it keeps each template as analyzed, so only translate
  // may read `output`.
  let cached = canCache ? compileCache.get(id) : undefined;

  // A template still analyzing is part of the analysis an import cycle led
  // back from, so it is current.
  if (cached && cached.file.___compileStage !== "analyze") {
    if (cached.contentHash !== contentHash) {
      // File content changed, invalidate the cache.
      cached = undefined;
    } else if (hasStaleDependency(cached, markoOpts)) {
      // Some dependency changed, invalidate the cache.
      cached = undefined;
    }
  }

  if (cached) {
    cached.file.markoOpts = markoOpts;
    return cached.file;
  }

  const prevFile = getFileInternal();

  try {
    // A Babel file, which the fields set below make a `CompileFile`.
    const babelFile: t.BabelFile = new MarkoFile(fileOpts, {
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
      } as t.File,
    });
    const file = setFileInternal(babelFile as CompileFile);
    file.markoOpts = markoOpts;
    file.___compileStage = "parse";
    file.___getMarkoFile = getMarkoFile;
    file.___analyzedFiles = file.___loadedFiles = new Map();
    const taglibLookup = (file.___taglibLookup = buildLookup(
      path.dirname(filename),
      translator,
      undefined,
      markoOpts.fileSystem,
    ));
    const meta: CompileMeta = (file.metadata.marko = {
      id,
      deps: [],
      tags: [],
      watchFiles: [],
      diagnostics: [],
      api: translator.preferAPI,
    });

    parseMarko(file);
    file.path.scope.crawl(); // Initialize bindings.

    if (isSource) {
      if (markoOpts.stripTypes) {
        stripTypes(file);
      }
      return file;
    }

    const rootMigrators: t.Visitor[] = [];
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
              loc: (node.errorLoc || node.loc) as DiagnosticOptions["loc"],
            });
          }
        });
      } else {
        const errors: CompileError[] = [];
        t.traverseFast(file.path.node, (node) => {
          if (node.type === "MarkoParseError") {
            errors.push(
              buildCodeFrameError(
                file.opts.filename,
                file.code,
                (node.errorLoc || node.loc) as CompileError["loc"],
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

    const rootTransformers: t.Visitor[] = [];
    for (const transformer of taglibLookup.transformers) {
      addPlugin(meta, rootTransformers, transformer);
    }

    rootTransformers.push(transform);
    if (translator.transform) {
      rootTransformers.push(translator.transform);
    }
    traverseAll(file, rootTransformers);
    file.path.scope.crawl();

    for (const watchFile of taglibLookup.watchFiles) {
      meta.watchFiles.push(watchFile);
    }

    compileCache.set(id, {
      time: Date.now(),
      file,
      contentHash,
    });

    if (translator.analyze) {
      try {
        file.___compileStage = "analyze";
        traverseAll(file, translator.analyze);

        if (!markoOpts.errorRecovery) {
          // Analyze failures are recorded as error diagnostics so the whole
          // template reports at once (and editors compiling with
          // `errorRecovery` keep them as recoverable diagnostics); mirror
          // the parse layer by throwing them together at the stage's end.
          const seen = new Set<string>();
          const errors: CompileError[] = [];
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
      } catch (e) {
        compileCache.delete(id);
        throw e;
      }
    }

    return file;
  } finally {
    setFileInternal(prevFile);
  }
}

function isErrorDiagnostic(diag: { type: string }) {
  return diag.type === DiagnosticType.Error;
}

function hasStaleDependency(cached: Cached, markoOpts: MarkoOpts) {
  const seen = new Set<string>();
  const pending = [cached.file];
  let file: CompileFile | undefined;

  while ((file = pending.pop())) {
    for (const watchFile of file.metadata.marko.watchFiles) {
      if (isNewerThan(watchFile, cached.time, markoOpts)) return true;
    }

    // A child's own analysis feeds this file, so its children count too.
    for (const [filename, analyzedFile] of file.___analyzedFiles) {
      if (seen.has(filename)) continue;
      seen.add(filename);
      if (isNewerThan(filename, cached.time, markoOpts)) return true;
      pending.push(analyzedFile);
    }
  }

  return false;
}

function isNewerThan(filename: string, time: number, markoOpts: MarkoOpts) {
  // An unreadable dependency invalidates, since its contribution is unknown.
  return +(stat(markoOpts.fileSystem, filename)?.mtime ?? Infinity) > time;
}

function shallowClone<T extends object>(data: T) {
  const clone: Record<string, unknown> = {};

  for (const key in data) {
    const v: unknown = data[key];

    if (v !== undefined) {
      if (v === null || typeof v !== "object") {
        clone[key] = v;
      } else {
        const Ctor: Function | undefined = v.constructor;

        switch (Ctor) {
          case Array:
            clone[key] = [...(v as unknown[])];
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
            clone[key] = new (Ctor as new (value: object) => object)(v);
            break;

          default:
            throw new Error(
              `Unsupported metadata type of ${Ctor?.name ?? Ctor}`,
            );
        }
      }
    }
  }

  return clone as T;
}

function mergeVisitors(all: Visitors): t.Visitor {
  if (Array.isArray(all)) {
    if (all.length === 1) {
      all = all[0];
    } else {
      return traverse.visitors.merge(all.map(toExploded));
    }
  }

  return toExploded(all);
}

const explodeCache = new WeakMap<t.Visitor, t.Visitor>();
function toExploded(visitor: t.Visitor) {
  let cached = explodeCache.get(visitor);
  if (!cached) {
    cached = traverse.visitors.explode(cloneVisitor(visitor));
    explodeCache.set(visitor, cached);
  }

  return cached;
}

function cloneVisitor(visitor: t.Visitor) {
  const clone: Record<string, unknown> = {};
  for (const key in visitor) {
    clone[key] = cloneVisit((visitor as Record<string, unknown>)[key]);
  }

  return clone as t.Visitor;
}

function cloneVisit(visit: unknown) {
  if (!visit || typeof visit !== "object") {
    return visit;
  }

  return { ...visit };
}

function traverseAll(file: CompileFile, visitors: Visitors) {
  const program = file.path;
  traverse(
    program.node,
    mergeVisitors(visitors),
    program.scope,
    (program.state = { file }),
    program,
    true, // Visits the program itself too.
  );
}

function addPlugin(
  meta: CompileMeta,
  arr: t.Visitor[],
  plugin: PluginDefinition,
) {
  const hook = ((plugin.hook as { default?: unknown }).default ||
    plugin.hook) as t.Visitor | t.Visitor[];

  if (plugin.path) {
    meta.watchFiles.push(plugin.path);
  }

  if (Array.isArray(hook)) {
    arr.push(...hook);
  } else {
    arr.push(hook);
  }
}

// These outputs reprint the AST, so blank lines between tags are not kept;
// keeping them would mean patching Babel's printer beyond our node types.
function isMarkoOutput(output: string) {
  return output === "source" || output === "migrate";
}

function finalizeMeta(meta: CompileMeta) {
  meta.watchFiles = [...new Set(meta.watchFiles)];
  if (meta.analyzedTags) {
    meta.analyzedTags = [...meta.analyzedTags];
  }
}
