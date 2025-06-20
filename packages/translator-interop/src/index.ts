import generate from "@babel/generator";
import { type Config, taglib, types as t } from "@marko/compiler";
import {
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import {
  analyze as analyze6,
  getRuntimeEntryFiles as getRuntimeEntryFiles6,
  internalEntryBuilder as internalEntryBuilder6,
  taglibs as taglibs6,
  transform as transform6,
  translate as translate6,
} from "@marko/runtime-tags/translator";
import {
  analyze as analyze5,
  getRuntimeEntryFiles as getRuntimeEntryFiles5,
  internalEntryBuilder as internalEntryBuilder5,
  optionalTaglibs as optionalTaglibs5,
  taglibs as taglibs5,
  transform as transform5,
  translate as translate5,
} from "marko/translator";
import path from "path";

import { isTagsAPI } from "./feature-detection";

type TagDef = Record<string, unknown>;

const UNMERGABLE_TAGDEF_KEYS = ["renderer", "template"];
const CANONICAL_TAGDEF_KEYS = {
  migrator: "migrate",
  "code-generator": "translate",
  codeGenerator: "translate",
  "node-factory": "parse",
  nodeFactory: "parse",
  transformer: "transform",
  "parse-options": "parseOptions",
};
const VISITOR_TAGDEF_KEYS = ["parse", "migrate", "transform", "translate"];

export const tagDiscoveryDirs = ["tags", "components"];
export const taglibs = mergeTaglibs(
  taglib.resolveOptionalTaglibs(optionalTaglibs5).concat(taglibs5),
  taglibs6,
);
export const transform = mergeVisitors(transform5, transform6);
export const analyze = mergeVisitors(analyze5, analyze6);
export const translate = patchTranslateProgram(
  mergeVisitors(translate5, translate6),
);
export function getRuntimeEntryFiles(
  output: Config["output"],
  optimize: boolean,
) {
  return [
    ...getRuntimeEntryFiles5(output, optimize),
    ...getRuntimeEntryFiles6(output, optimize),
    `marko/${optimize ? "dist" : "src"}/runtime/helpers/tags-compat/${output === "html" ? "html" : "dom"}${optimize ? "" : "-debug"}.mjs`,
  ];
}

function patchTranslateProgram(visitor: t.Visitor) {
  type EntryFile = t.BabelFile & {
    [kState]?: {
      has5: boolean;
      has6: boolean;
    };
  };
  const { Program } = visitor;
  const kState = Symbol();
  const entryBuilder = {
    build(entryFile: EntryFile) {
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
              [],
              t.stringLiteral(
                resolveVirtualDependency!(filename, {
                  code: generate(t.program(statements) as any, generatorOpts)
                    .code,
                  virtualPath: `${baseName}.hydrate-${name}.js`,
                })!,
              ),
            );
          };
          return [
            importHydrateProgram("5", internalEntryBuilder5.build(entryFile)),
            importHydrateProgram("6", internalEntryBuilder6.build(entryFile)),
          ];
        } else {
          return internalEntryBuilder5.build(entryFile);
        }
      } else {
        return internalEntryBuilder6.build(entryFile);
      }
    },
    visit(
      file: t.BabelFile,
      entryFile: EntryFile,
      visitChild: (id: string) => void,
    ) {
      const state = (entryFile[kState] ||= {
        has5: false,
        has6: false,
      });

      if (isTagsAPI(file)) {
        state.has6 = true;
        internalEntryBuilder6.visit(file, entryFile, visitChild);
      } else {
        state.has5 = true;
        internalEntryBuilder5.visit(file, entryFile, visitChild);
      }
    },
  };
  const enterProgram = getVisitorEnter(Program);
  const exitProgram = getVisitorExit(Program);
  visitor.Program = {
    enter(program, state) {
      if (program.hub.file.markoOpts.output !== "hydrate") {
        return enterProgram?.call(this, program, state);
      }

      const entryFile = program.hub.file;
      const visitedFiles = new Set([
        resolveRelativePath(entryFile, entryFile.opts.filename as string),
      ]);
      entryBuilder.visit(entryFile, entryFile, function visitChild(resolved) {
        if (!visitedFiles.has(resolved)) {
          visitedFiles.add(resolved);
          const file = loadFileForImport(entryFile, resolved);
          if (file) {
            entryBuilder.visit(file, entryFile, (id) =>
              visitChild(resolveRelativeToEntry(entryFile, file, id)),
            );
          }
        }
      });

      program.node.body = entryBuilder.build(entryFile);
      program.skip();
    },
    exit: exitProgram,
  };

  return visitor;
}

function resolveRelativeToEntry(
  entryFile: t.BabelFile,
  file: t.BabelFile,
  req: string,
) {
  return file === entryFile
    ? resolveRelativePath(file, req)
    : resolveRelativePath(
        entryFile,
        req[0] === "."
          ? path.join(file.opts.filename as string, "..", req)
          : req,
      );
}

function mergeVisitors(visitor5: t.Visitor = {}, visitor6: t.Visitor = {}) {
  const allVisitorKeys = getSetOfAllKeys(visitor5, visitor6) as Set<
    keyof t.Visitor
  >;
  const mergedVisitors = {} as any;

  for (const visitorKey of allVisitorKeys) {
    mergedVisitors[visitorKey as any] = mergedVisitor(
      visitor5[visitorKey] as any,
      visitor6[visitorKey] as any,
    ) as any;
  }

  return mergedVisitors;
}

function mergedVisitor<A, B extends t.Node>(
  visitor5: t.VisitNode<A, B> = {},
  visitor6: t.VisitNode<A, B> = {},
): t.VisitNode<A, B> {
  const enter5 = getVisitorEnter(visitor5);
  const exit5 = getVisitorExit(visitor5);
  const enter6 = getVisitorEnter(visitor6);
  const exit6 = getVisitorExit(visitor6);
  const visitor = {
    enter(path, state) {
      return (isTagsAPI() ? enter6 : enter5)?.call(this, path, state);
    },
    exit(path, state) {
      return (isTagsAPI() ? exit6 : exit5)?.call(this, path, state);
    },
  } satisfies t.VisitNodeObject<A, B>;

  return exit5 || exit6 ? visitor : visitor.enter;
}

function mergeTaglibs(taglibs5: unknown[][], taglibs6: unknown[][]) {
  const taglib5Merged = taglibs5.reduce(
    (mergedTaglib, taglib) => Object.assign(mergedTaglib, taglib[1]),
    {} as Record<string, TagDef>,
  );
  const taglib6Merged = taglibs6.reduce(
    (mergedTaglib, taglib) => Object.assign(mergedTaglib, taglib[1]),
    {} as Record<string, TagDef>,
  );
  const allTaglibKeys = getSetOfAllKeys(taglib5Merged, taglib6Merged);
  const mergedTaglib = {} as Record<string, unknown>;

  for (const taglibKey of allTaglibKeys) {
    if (taglibKey.startsWith("<")) {
      mergedTaglib[taglibKey] = mergeTagDef(
        taglib5Merged[taglibKey],
        taglib6Merged[taglibKey],
      );
    } else if (taglibKey === "migrate") {
      mergedTaglib[taglibKey] = mergeVisitors(
        normalizeTagDefVisitors(taglib5Merged[taglibKey]),
        normalizeTagDefVisitors(taglib6Merged[taglibKey]),
      );
    }
  }

  return [["@marko/translator-interop-class-tags", mergedTaglib]];
}

function mergeTagDef(tagDef5: TagDef = {}, tagDef6: TagDef = {}) {
  const tagDef5Normalized = normalizeTagDef(tagDef5);
  const tagDef6Normalized = normalizeTagDef(tagDef6);
  const allTagDefKeys = getSetOfAllKeys(tagDef5Normalized, tagDef6Normalized);
  const mergedTagDef = {} as Record<string, unknown>;

  for (const tagDefKey of allTagDefKeys) {
    if (VISITOR_TAGDEF_KEYS.includes(tagDefKey)) {
      mergedTagDef[tagDefKey] = mergedVisitor(
        normalizeTagDefVisitor(tagDef5Normalized[tagDefKey]),
        normalizeTagDefVisitor(tagDef6Normalized[tagDefKey]),
      );
    } else {
      mergedTagDef[tagDefKey] =
        tagDef5Normalized[tagDefKey] ?? tagDef6Normalized[tagDefKey];
      if (
        UNMERGABLE_TAGDEF_KEYS.includes(tagDefKey) &&
        tagDef5Normalized[tagDefKey] &&
        tagDef6Normalized[tagDefKey]
      ) {
        throw new Error(`cannot merge "${tagDefKey}"`);
      }
    }
  }

  return mergedTagDef;
}

function normalizeTagDef<T extends Record<string, unknown>>(tagDef: T): T {
  const normalized = {} as T;

  for (const key in tagDef) {
    normalized[
      (CANONICAL_TAGDEF_KEYS[
        key as keyof typeof CANONICAL_TAGDEF_KEYS
      ] as keyof T) ?? key
    ] = tagDef[key];
  }

  return normalized;
}

function getVisitorEnter<A, B extends t.Node>(
  visit: t.VisitNode<A, B> | undefined,
): t.VisitNodeFunction<A, B> | undefined {
  if (typeof visit === "function") {
    return visit;
  }
  return visit?.enter;
}

function getVisitorExit<A, B extends t.Node>(
  visit: t.VisitNode<A, B> | undefined,
): t.VisitNodeFunction<A, B> | undefined {
  if (typeof visit === "function") {
    return undefined;
  }
  return visit?.exit;
}

function getSetOfAllKeys<
  A extends Record<any, any>,
  B extends Record<any, any>,
>(o1: A, o2: B): Set<keyof (A & B)> {
  return new Set(Object.keys(o1).concat(Object.keys(o2)));
}

function normalizeTagDefVisitors(visitor: any): t.Visitor {
  return visitor?.default ?? visitor;
}

function normalizeTagDefVisitor(visitor: any): t.VisitNode<any, t.Node> {
  return typeof visitor === "function"
    ? visitor
    : (visitor?.default ?? visitor);
}
