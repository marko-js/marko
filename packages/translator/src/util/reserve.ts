import { types as t } from "@marko/compiler";
import { isOptimize } from "./marko-config";
import { Section, createSectionState, forEachSection } from "./sections";
import { SortedRepeatable } from "./sorted-repeatable";

const [getReservesByType] = createSectionState<Array<Reserve[] | undefined>>(
  "reservesByType",
  () => [undefined, undefined, undefined]
);

export const enum ReserveType {
  Visit = 0,
  Store = 1,
}

export interface Reserve {
  type: ReserveType;
  section: Section;
  debugKey: string;
  name: string;
  id: number;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
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
  debugKey: string = name
): Reserve {
  const extra = (node.extra ??= {} as typeof node.extra);

  if (extra.reserve) {
    const reserve = extra.reserve as Reserve;
    reserve.name += "_" + name;
    return reserve;
  }

  const reservesByType = getReservesByType(section);
  const reserve = (extra.reserve = {
    id: 0,
    type,
    name,
    debugKey,
    section,
  });

  if (reservesByType[type]) {
    reserve.id = reservesByType[type]!.push(reserve) - 1;
  } else {
    reservesByType[type] = [reserve];
  }

  return reserve;
}

export function assignFinalIds() {
  forEachSection((section) => {
    let curIndex = 0;
    for (const reserves of getReservesByType(section)) {
      if (reserves) {
        for (const reserve of reserves) {
          reserve.id = curIndex;
          curIndex += 1;
        }
      }
    }
  });
}

export function getNodeLiteral(reserve: Reserve) {
  if (!isOptimize()) {
    return t.stringLiteral(
      reserve.debugKey +
        (reserve.type === ReserveType.Visit ? `/${reserve.id}` : "")
    );
  }
  return t.numericLiteral(reserve.id);
}

export const repeatableReserves = new SortedRepeatable(function compareReserves(
  a: Reserve,
  b: Reserve
) {
  return a.section.id - b.section.id || a.type - b.type || a.id - b.id;
});
