import { types as t } from "@marko/compiler";

import {
  analyze as analyze6,
  taglibs as taglibs6,
  translate as translate6,
} from "@marko/translator-fluurt";
import {
  analyze as analyze5,
  taglibs as taglibs5,
  translate as translate5,
} from "@marko/translator-default";
import { isTagsAPI } from "./feature-detection";

type TagDef = Record<string, unknown>;

const UNMERGABLE_TAGDEF_KEYS = ["renderer", "template"];
const CANNONICAL_TAGDEF_KEYS = {
  migrator: "migrate",
  "code-generator": "translate",
  codeGenerator: "translate",
  "node-factory": "parse",
  nodeFactory: "parse",
  transformer: "transform",
  "parse-options": "parseOptions",
};
const VISITOR_TAGDEF_KEYS = ["parse", "migrate", "transform", "translate"];

export const analyze = mergeVisitors(analyze5, analyze6);
export const translate = mergeVisitors(translate5, translate6);
export const taglibs = mergeTaglibs(taglibs5, taglibs6);

function mergeVisitors(visitor5: t.Visitor = {}, visitor6: t.Visitor = {}) {
  const allVisitorKeys = getSetOfAllKeys(visitor5, visitor6) as Set<
    keyof t.Visitor
  >;
  const mergedVisitors = {} as any;

  for (const visitorKey of allVisitorKeys) {
    mergedVisitors[visitorKey as any] = mergedVisitor(
      visitor5[visitorKey] as any,
      visitor6[visitorKey] as any
    ) as any;
  }

  return mergedVisitors;
}

function mergedVisitor<A, B extends t.Node>(
  visitor5: t.VisitNode<A, B> = {},
  visitor6: t.VisitNode<A, B> = {}
): t.VisitNode<A, B> {
  const visitor5Enter = getVisitorEnter(visitor5);
  const visitor5Exit = getVisitorExit(visitor5);
  const visitor6Enter = getVisitorEnter(visitor6);
  const visitor6Exit = getVisitorExit(visitor6);
  const hasExit = visitor5Exit || visitor6Exit;
  const visitNode = {
    enter(path, state) {
      if (isTagsAPI(path)) return visitor6Enter?.call(this, path, state);
      else return visitor5Enter?.call(this, path, state);
    },
    exit(path, state) {
      if (isTagsAPI(path)) return visitor6Exit?.call(this, path, state);
      else return visitor5Exit?.call(this, path, state);
    },
  } satisfies t.VisitNodeObject<A, B>;

  return hasExit ? visitNode : visitNode.enter;
}

function mergeTaglibs(taglibs5: unknown[][], taglibs6: unknown[][]) {
  const taglib5Merged = taglibs5.reduce(
    (mergedTaglib, taglib) => Object.assign(mergedTaglib, taglib[1]),
    {} as Record<string, TagDef>
  );
  const taglib6Merged = taglibs6.reduce(
    (mergedTaglib, taglib) => Object.assign(mergedTaglib, taglib[1]),
    {} as Record<string, TagDef>
  );
  const allTaglibKeys = getSetOfAllKeys(taglib5Merged, taglib6Merged);
  const mergedTaglib = {} as Record<string, unknown>;

  for (const taglibKey of allTaglibKeys) {
    if (taglibKey.startsWith("<")) {
      mergedTaglib[taglibKey] = mergeTagdef(
        taglib5Merged[taglibKey],
        taglib6Merged[taglibKey]
      );
    } else if (taglibKey === "migrator") {
      mergedTaglib[taglibKey] = mergeVisitors(
        normalizeTagDefVisitors(taglib5Merged[taglibKey]),
        normalizeTagDefVisitors(taglib6Merged[taglibKey])
      );
    }
  }

  return [["@marko/translator-interop-class-tags", mergedTaglib]];
}

function mergeTagdef(tagdef5: TagDef = {}, tagdef6: TagDef = {}) {
  const tagdef5Normalized = normalizeTagdef(tagdef5);
  const tagdef6Normalized = normalizeTagdef(tagdef6);
  const allTagdefKeys = getSetOfAllKeys(tagdef5Normalized, tagdef6Normalized);
  const mergedTagdef = {} as Record<string, unknown>;

  for (const tagdefKey of allTagdefKeys) {
    if (VISITOR_TAGDEF_KEYS.includes(tagdefKey)) {
      mergedTagdef[tagdefKey] = mergedVisitor(
        normalizeTagDefVisitor(tagdef5Normalized[tagdefKey]),
        normalizeTagDefVisitor(tagdef6Normalized[tagdefKey])
      );
    } else {
      mergedTagdef[tagdefKey] =
        tagdef5Normalized[tagdefKey] ?? tagdef6Normalized[tagdefKey];
      if (
        UNMERGABLE_TAGDEF_KEYS.includes(tagdefKey) &&
        tagdef5Normalized[tagdefKey] &&
        tagdef6Normalized[tagdefKey]
      ) {
        throw new Error(`cannot merge "${tagdefKey}"`);
      }
    }
  }

  return mergedTagdef;
}

function normalizeTagdef<T extends Record<string, unknown>>(tagdef: T): T {
  const normalized = {} as T;

  for (const key in tagdef) {
    normalized[
      (CANNONICAL_TAGDEF_KEYS[
        key as keyof typeof CANNONICAL_TAGDEF_KEYS
      ] as keyof T) ?? key
    ] = tagdef[key];
  }

  return normalized;
}

function getVisitorEnter<A, B extends t.Node>(
  visit: t.VisitNode<A, B>
): t.VisitNodeFunction<A, B> | undefined {
  if (typeof visit === "function") {
    return visit;
  }
  return visit?.enter;
}

function getVisitorExit<A, B extends t.Node>(
  visit: t.VisitNode<A, B>
): t.VisitNodeFunction<A, B> | undefined {
  if (typeof visit === "function") {
    return undefined;
  }
  return visit?.exit;
}

function getSetOfAllKeys<
  A extends Record<any, any>,
  B extends Record<any, any>
>(o1: A, o2: B): Set<keyof (A & B)> {
  return new Set(Object.keys(o1).concat(Object.keys(o2)));
}

function normalizeTagDefVisitors(visitor: any): t.Visitor {
  return visitor?.default ?? visitor;
}

function normalizeTagDefVisitor(visitor: any): t.VisitNode<any, t.Node> {
  return typeof visitor === "function" ? visitor : visitor?.default ?? visitor;
}
