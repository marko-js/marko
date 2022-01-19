import type { types as t } from "@marko/compiler";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

export interface Section {
  id: number;
  reservesByType: [Reserve[] | undefined, Reserve[] | undefined];
}

export const enum ReserveType {
  Visit = 0,
  Store = 1,
}

export interface Reserve {
  type: ReserveType;
  section: Section;
  name: string;
  size: number;
  id: number;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    sections?: Section[];
    section?: Section;
    reserve?: Reserve;
  }

  export interface MarkoTagBodyExtra {
    section?: Section;
  }

  export interface MarkoTagExtra {
    reserve?: Reserve;
  }

  export interface MarkoAttributeExtra {
    reserve?: Reserve;
  }

  export interface MarkoPlaceholderExtra {
    reserve?: Reserve;
  }

  export interface IdentifierExtra {
    reserve?: Reserve;
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
  if (extra.section) return extra.section;

  const programExtra = (path.hub.file.path.node.extra ??= {});
  const section = (extra.section = {
    id: 0,
    reservesByType: [undefined, undefined],
  });

  if (programExtra.sections) {
    section.id = programExtra.sections.push(section) - 1;
  } else {
    programExtra.sections = [section];
  }

  return section;
}

export function reserveScope(
  type: ReserveType,
  section: Section,
  node: t.MarkoTag | t.MarkoAttribute | t.MarkoPlaceholder | t.Identifier,
  name: string,
  size = 0
) {
  const extra = (node.extra ??= {} as typeof node.extra);

  if (extra.reserve) {
    throw new Error("Unable to reserve multiple scopes for a node.");
  }

  const { reservesByType } = section;
  const reserve = (extra.reserve = {
    id: 0,
    type,
    size,
    name,
    section,
  });

  if (reservesByType[type]) {
    reserve.id = reservesByType[type]!.push(reserve) - 1;
  } else {
    reservesByType[type] = [reserve];
  }

  return reserve;
}

export function assignFinalIds(program: t.NodePath<t.Program>) {
  for (const section of program.node.extra.sections!) {
    let curIndex = 0;
    for (const reserves of section.reservesByType) {
      if (reserves) {
        for (const reserve of reserves) {
          reserve.id = curIndex;
          curIndex += reserve.size + 1;
        }
      }
    }
  }
}

export function compareReserves(a: Reserve, b: Reserve) {
  return a.section === b.section
    ? a.type === b.type
      ? a.id - b.id
      : a.type - b.type
    : a.section.id - b.section.id;
}
