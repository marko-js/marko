import type { types as t } from "@marko/compiler";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

export interface Section {
  sectionIndex: number;
  visits: number;
  bindings: number;
  reserves: number;
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
    const sectionIndex = (sectionExtra.sectionIndex = programExtra.sections
      ? programExtra.sections.length
      : 0);
    const section: Section = {
      sectionIndex,
      visits: 0,
      bindings: 0,
      reserves: 0,
    };

    if (sectionIndex) {
      programExtra.sections!.push(section);
    } else {
      programExtra.sections = [section];
    }

    return section;
  } else {
    return programExtra.sections![sectionIndex];
  }
}
