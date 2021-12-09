import type { types as t } from "@marko/compiler";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

const sectionCounts = new WeakMap<t.BabelFile, number>();

export type Section = (t.Program["extra"] | t.MarkoTagBody["extra"]) & {
  sectionIndex: number;
  visits: number;
  bindings: number;
};

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    sectionIndex?: number;
    visits?: number;
  }

  export interface MarkoTagBodyExtra {
    sectionIndex?: number;
    visits?: number;
  }
}

export function getSection(path: t.NodePath<any>) {
  let cur = path;

  do {
    cur = cur.parentPath!;

    if (
      cur.type === "Program" ||
      (cur.type === "MarkoTag" &&
        analyzeTagNameType(cur) !== TagNameTypes.NativeTag)
    ) {
      return startSection(cur);
    }
    // eslint-disable-next-line no-constant-condition
  } while (true);
}

export function startSection(path: t.NodePath<t.MarkoTagBody | t.Program>) {
  const extra = (path.node.extra ??= {});

  if (extra.sectionIndex === undefined) {
    const { file } = path.hub;
    extra.sectionIndex = sectionCounts.get(file) || 0;
    sectionCounts.set(file, extra.sectionIndex + 1);
    extra.visits = extra.bindings = 0;
  }

  return extra as Section;
}
