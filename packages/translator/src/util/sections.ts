import type { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
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
  sectionId: number;
  name: string;
  size: number;
  id: number;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    sections?: Section[];
    sectionId?: number;
    reserve?: Reserve;
  }

  export interface MarkoTagBodyExtra {
    sectionId?: number;
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

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      cur.type === "Program" ||
      (cur.type === "MarkoTagBody" &&
        analyzeTagNameType(cur.parentPath as t.NodePath<t.MarkoTag>) !==
          TagNameTypes.NativeTag)
    ) {
      return startSection(cur);
    }

    cur = cur.parentPath!;
  }
}

export function startSection(path: t.NodePath<t.MarkoTagBody | t.Program>) {
  const extra = (path.node.extra ??= {});
  if (extra.sectionId)
    return getSectionById(path, extra as ObjectWithSectionId);

  const programExtra = (path.hub.file.path.node.extra ??= {});
  const section: Section = {
    id: 0,
    reservesByType: [undefined, undefined],
  };

  if (programExtra.sections) {
    section.id = programExtra.sections.push(section) - 1;
  } else {
    programExtra.sections = [section];
  }

  extra.sectionId = section.id;

  return section;
}

export function reserveScope(
  type: ReserveType,
  section: Section,
  node:
    | t.MarkoTag
    | t.MarkoAttribute
    | t.MarkoPlaceholder
    | t.Identifier
    | t.MarkoTagBody,
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
    sectionId: section.id,
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
  return a.sectionId - b.sectionId || a.type - b.type || a.id - b.id;
}

export function getParentSectionId(path: t.NodePath) {
  return getSectionId(path.parentPath!);
}

export function getSectionId(path: t.NodePath) {
  let sectionId: number;
  let currentPath = path;
  while (
    (sectionId = currentPath.node.extra?.sectionId as number) === undefined
  ) {
    currentPath = currentPath.parentPath!;
  }
  return sectionId;
}

type ObjectWithSectionId = {
  sectionId: number;
};

function getSectionById<S extends Section>(
  path: t.NodePath,
  reference: ObjectWithSectionId = path.state
) {
  const program = path.hub.file.path;
  const sections = program.node.extra.sections!;
  return sections[reference.sectionId] as S;
}

export function createSectionState<T = unknown>(key: string, init?: () => T) {
  return [
    (sectionId: number): T => {
      const arrayOfSectionData = (currentProgramPath.state[key] ??= []);
      const sectionData = (arrayOfSectionData[sectionId] ??= init && init());
      return sectionData as T;
    },
    (sectionId: number, value: T): void => {
      const arrayOfSectionData = (currentProgramPath.state[key] ??= []);
      arrayOfSectionData[sectionId] = value;
    },
  ] as const;
}
