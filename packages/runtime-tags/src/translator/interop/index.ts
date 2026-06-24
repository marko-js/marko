import { type Config, taglib, types as t } from "@marko/compiler";
import {
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import { generator } from "@marko/compiler/internal/babel";
import path from "path";

import * as translate6 from "..";
import { resolveRelativeToEntry } from "../util/resolve-relative-to-entry";
import { isTagsAPI } from "./feature-detection";

type TagDef = Record<string, unknown>;
type Taglibs = [taglibId: string, taglib: Record<string, unknown>][];

export function createInteropTranslator(translate5: any) {
  return {
    version: translate5.version ?? "0.0.0",
    preferAPI: translate5.preferAPI,
    transform: mergeVisitors(translate5.transform, translate6.transform),
    analyze: mergeVisitors(translate5.analyze, translate6.analyze),
    translate: patchTranslateProgram(
      mergeVisitors(translate5.translate, translate6.translate) as t.Visitor,
    ),
    tagDiscoveryDirs: [
      ...translate6.tagDiscoveryDirs,
      ...translate5.tagDiscoveryDirs,
    ],
    taglibs: mergeTaglibs(
      taglib
        .resolveOptionalTaglibs(translate5.optionalTaglibs)
        .concat(translate5.taglibs) as Taglibs,
      translate6.taglibs as Taglibs,
    ),
    getRuntimeEntryFiles(output: Config["output"], optimize: boolean) {
      return [
        ...translate5.getRuntimeEntryFiles(output, optimize),
        ...translate6.getRuntimeEntryFiles(output, optimize),
      ];
    },
  };

  function patchTranslateProgram(visitor: t.Visitor): t.Visitor {
    type EntryFile = t.BabelFile & {
      [kState]?: {
        has5: boolean;
        has6: boolean;
        // Whether any visited Tags API template is interactive (needs a client
        // runtime). When the entry root is an interactive Tags API template that
        // also renders Class API children, its render is inlined into the hydrate
        // output so those (server only) children can be dropped.
        init6: boolean;
        // Whether any visited Class API template is inert (has no component
        // file, so nothing to hydrate). Only then is it worth inlining the
        // render to strip such children; otherwise the root is imported as
        // before to avoid needless churn.
        inert5: boolean;
        // Relative import paths of the topmost Tags API (Marko 6) templates that
        // are rendered by a Class API (Marko 5) ancestor. When the entry root is
        // a Class API template, these are imported in its place so a server only
        // class root (and the Marko 5 runtime it would pull in) can be dropped.
        islandRoots6: Set<string>;
      };
    };
    const { Program } = visitor;
    const kState = Symbol();
    const entryBuilder = {
      build(entryFile: EntryFile, inlineRoot?: readonly t.Statement[]) {
        const state = entryFile[kState];
        if (!state) {
          throw entryFile.path.buildCodeFrameError(
            "Unable to build hydrate code, no files were visited before finalizing the build",
          );
        }

        if (state.has5) {
          if (state.has6) {
            const filename = entryFile.opts.filename as string;
            const baseName = `./${path.basename(filename)}`;
            const generatorOpts = {
              ...(entryFile.opts.generatorOpts as any),
              sourceMaps: false,
            };
            const { resolveVirtualDependency } = entryFile.markoOpts;
            const importHydrateProgram = (
              name: string,
              statements: t.Statement[],
            ) => {
              return t.importDeclaration(
                [t.importDefaultSpecifier(t.identifier(`init${name}`))],
                t.stringLiteral(
                  resolveVirtualDependency!(filename, {
                    code: generator(t.program(statements) as any, generatorOpts)
                      .code,
                    virtualPath: `${baseName}.hydrate-${name}.js`,
                  })!,
                ),
              );
            };
            // When the entry root is itself a Tags API template, importing it
            // pulls in its whole subtree (as before). When it is a Class API
            // template it can be dropped: the Marko 6 hydrate program imports
            // the Tags API island roots it renders directly instead.
            const importTargets6 = isTagsAPI(entryFile)
              ? undefined
              : [...state.islandRoots6];
            return [
              importHydrateProgram(
                "6",
                translate6.internalEntryBuilder.build(
                  entryFile,
                  true,
                  importTargets6,
                  inlineRoot,
                ),
              ),
              importHydrateProgram(
                "5",
                translate5.internalEntryBuilder.build(entryFile, true),
              ),
              t.expressionStatement(
                t.callExpression(t.identifier("init6"), []),
              ),
              t.expressionStatement(
                t.callExpression(t.identifier("init5"), []),
              ),
            ];
          } else {
            return translate5.internalEntryBuilder.build(entryFile);
          }
        } else {
          return translate6.internalEntryBuilder.build(entryFile);
        }
      },
      visit(
        file: t.BabelFile,
        entryFile: EntryFile,
        parentIsTags: boolean | undefined,
        visitChild: (id: string) => void,
      ) {
        const state = (entryFile[kState] ||= {
          has5: false,
          has6: false,
          init6: false,
          inert5: false,
          islandRoots6: new Set(),
        });

        if (isTagsAPI(file)) {
          state.has6 = true;
          if (file.path.node.extra?.isInteractive) {
            state.init6 = true;
          }
          // The topmost Tags API template under a Class API ancestor: importing
          // it covers its statically rendered Tags API subtree.
          if (parentIsTags === false) {
            state.islandRoots6.add(
              resolveRelativePath(entryFile, file.opts.filename as string),
            );
          }
          translate6.internalEntryBuilder.visit(file, entryFile, visitChild);
        } else {
          state.has5 = true;
          // A Class API template with no component file is inert (server only):
          // there is something the inlined render can strip to drop Marko 5.
          if (!(file.metadata.marko as { component?: string }).component) {
            state.inert5 = true;
          }
          translate5.internalEntryBuilder.visit(file, entryFile, visitChild);
        }
      },
    };
    const enterProgram = getVisitorEnter(Program);
    const exitProgram = getVisitorExit(Program);

    return {
      ...visitor,
      Program: {
        enter(program, state) {
          const entryFile: EntryFile = program.hub.file;
          const { output, entry } = entryFile.markoOpts;
          const isDOMPageEntry =
            (output === "dom" && entry === "page") || output === "hydrate";
          if (!isDOMPageEntry) {
            return enterProgram?.call(this, program, state);
          }

          const visitedFiles = new Set([
            resolveRelativePath(entryFile, entryFile.opts.filename as string),
          ]);
          const walkChild = (resolved: string, parentIsTags: boolean) => {
            if (!visitedFiles.has(resolved)) {
              visitedFiles.add(resolved);
              const file = loadFileForImport(entryFile, resolved);
              if (file) {
                entryBuilder.visit(file, entryFile, parentIsTags, (id) =>
                  walkChild(
                    resolveRelativeToEntry(entryFile, file, id),
                    isTagsAPI(file),
                  ),
                );
              }
            }
          };
          entryBuilder.visit(entryFile, entryFile, undefined, (id) =>
            walkChild(id, isTagsAPI(entryFile)),
          );

          const entryState = entryFile[kState]!;
          // An interactive Tags API root that also renders inert Class API
          // children. Importing the root module would pull in those children
          // (and the Marko 5 runtime they carry) even though they are server
          // only. Instead inline the render with such children stripped: fall
          // through to the normal dom translation here, then assemble in `exit`.
          if (
            entryState.has5 &&
            entryState.has6 &&
            entryState.init6 &&
            entryState.inert5 &&
            isTagsAPI(entryFile)
          ) {
            (program.node.extra ??= {}).hydrateInlineRender = true;
            return enterProgram?.call(this, program, state);
          }

          program.node.body = entryBuilder.build(entryFile);
          program.skip();
        },
        exit(program, state) {
          const extra = program.node.extra;
          if (!extra?.hydrateInlineRender) {
            return exitProgram?.call(this, program, state);
          }

          // Every class child in the render was inert/server only (all stripped),
          // so the compat layer (and the Marko 5 runtime it pulls in) is not
          // needed to hydrate. Cleared before the dom program exit links it.
          if (!extra.hydrateKeptClassChild) {
            extra.needsCompat = false;
          }

          // Finalize the translated render, then inline it (in place of importing
          // the root) into the hydrate output.
          exitProgram?.call(this, program, state);
          program.node.body = entryBuilder.build(
            program.hub.file,
            program.node.body,
          );
        },
      },
    };
  }
}

function mergeVisitors(visitor5?: t.Visitor, visitor6?: t.Visitor) {
  return mergeObjects(visitor5, visitor6, (_, value5, value6) =>
    mergeVisit(value5, value6),
  );
}

function mergeVisit(
  visit5?: t.VisitNode<unknown, any>,
  visit6?: t.VisitNode<unknown, any>,
): undefined | t.VisitNode<unknown, t.Node> {
  const enter5 = getVisitorEnter(visit5);
  const enter6 = getVisitorEnter(visit6);
  const enter: undefined | t.VisitNode<unknown, t.Node> =
    (enter5 || enter6) &&
    function enter(path, state) {
      return (isTagsAPI() ? enter6 : enter5)?.call(this, path, state);
    };

  const exit5 = getVisitorExit(visit5);
  const exit6 = getVisitorExit(visit6);
  const exit: undefined | t.VisitNode<unknown, t.Node> =
    (exit5 || exit6) &&
    function exit(path, state) {
      return (isTagsAPI() ? exit6 : exit5)?.call(this, path, state);
    };

  return exit ? (enter ? { enter, exit } : { exit }) : enter;
}

function mergeTaglibs(libs5: Taglibs, libs6: Taglibs) {
  const libs5Map = new Map(libs5);
  const libs6Map = new Map(libs6);
  const merged = [] as Taglibs;

  for (const taglibId of new Set([...libs5Map.keys(), ...libs6Map.keys()])) {
    merged.push([
      taglibId,
      mergeObjects(
        libs5Map.get(taglibId),
        libs6Map.get(taglibId),
        (key, value5, value6) => {
          switch (key) {
            case "migrate":
            case "analyze":
            case "transform":
            case "translate":
              return mergeVisitors(
                normalizeVisitor(value5),
                normalizeVisitor(value6),
              );
            default:
              if (key[0] === "<") {
                return mergeTagDef(
                  value5 as TagDef | undefined,
                  value6 as TagDef | undefined,
                );
              }
              return value5 ?? value6;
          }
        },
      ),
    ]);
  }

  return merged;
}

function mergeTagDef(def5?: TagDef, def6?: TagDef) {
  return mergeObjects(
    normalizeTagDef(def5),
    normalizeTagDef(def6),
    (key, value5, value6) => {
      switch (key) {
        case "parse":
        case "migrate":
        case "transform":
        case "analyze":
        case "translate":
          return mergeVisit(normalizeVisit(value5), normalizeVisit(value6));
        default:
          return value5 ?? value6;
      }
    },
  ) as TagDef;
}

function mergeObjects<A, B, K extends keyof (B & {}) | keyof (A & {}), R>(
  a: A,
  b: B,
  cb: (
    key: K,
    aValue: K extends keyof (A & {}) ? (A & {})[K] : undefined,
    bValue: K extends keyof (B & {}) ? (B & {})[K] : undefined,
  ) => R,
): Record<K, R> {
  const merged: any = {};

  if (a) {
    if (b) {
      for (const key in a) {
        merged[key] = (cb as any)(key, a[key], (b as any)[key]);
      }

      for (const key in b) {
        if (!(key in (a as any))) {
          merged[key] = (cb as any)(key, undefined, b[key]);
        }
      }
    } else {
      for (const key in a) {
        merged[key] = (cb as any)(key, a[key], undefined);
      }
    }
  } else if (b) {
    for (const key in b) {
      merged[key] = (cb as any)(key, undefined, b[key]);
    }
  }

  return merged;
}

function normalizeTagDef<T extends Record<string, unknown> | undefined>(
  tagDef: T,
): T {
  if (tagDef) {
    const normalized = {} as T & {};

    for (const key in tagDef) {
      normalized[normalizeTagDefKey(key) as keyof T & string] = tagDef[key];
    }

    return normalized;
  }

  return undefined as T;
}

function normalizeTagDefKey(key: string) {
  switch (key) {
    case "code-generator":
    case "codeGenerator":
      return "translate";
    case "migrator":
      return "migrate";
    case "node-factory":
    case "nodeFactory":
      return "parse";
    case "parse-options":
      return "parseOptions";
    case "transformer":
      return "transform";
    default:
      return key;
  }
}

function normalizeVisitor(visitor: any): t.Visitor | undefined {
  return visitor?.default ?? visitor;
}

function normalizeVisit(visitor: any): t.VisitNode<any, t.Node> | undefined {
  return typeof visitor === "function" ? visitor : normalizeVisitor(visitor);
}

function getVisitorEnter<A, B extends t.Node>(
  visit: t.VisitNode<A, B> | undefined,
): t.VisitNodeFunction<A, B> | undefined {
  return typeof visit === "function" ? visit : visit?.enter;
}

function getVisitorExit<A, B extends t.Node>(
  visit: t.VisitNode<A, B> | undefined,
): t.VisitNodeFunction<A, B> | undefined {
  return typeof visit === "object" ? visit?.exit : undefined;
}
