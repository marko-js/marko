import type { types as t } from "@marko/compiler";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

const sectionCounts = new WeakMap<t.BabelFile, number>();

export interface Section {
  sectionIndex: number;
  visits: number;
  bindings: number;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    sections?: Section[];
    sectionIndex?: number;
  }

  export interface MarkoTagBodyExtra {
    sectionIndex?: number;
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
  const { file } = path.hub;
  const programExtra = (file.path.node.extra ??= {});
  const sectionExtra = (path.node.extra ??= {});
  const { sectionIndex } = sectionExtra;

  if (sectionIndex === undefined) {
    const section: Section = {
      sectionIndex: sectionCounts.get(file) || 0,
      visits: 0,
      bindings: 0,
    };
    sectionCounts.set(file, section.sectionIndex + 1);
    sectionExtra.sectionIndex = section.sectionIndex;

    if (programExtra.sections) {
      programExtra.sections.push(section);
    } else {
      programExtra.sections = [section];
    }

    return section;
  } else {
    return programExtra.sections![sectionIndex];
  }
}
