import type { types as t } from "@marko/compiler";
import { Section, createSectionState } from "./sections";

const [getReservesByType] = createSectionState<
  [Reserve[] | undefined, Reserve[] | undefined]
>("reservesByType", () => [undefined, undefined]);

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

  const reservesByType = getReservesByType(section.id);
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
    for (const reserves of getReservesByType(section.id)) {
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
