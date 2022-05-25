import type { types as t } from "@marko/compiler";
import { createSectionState, forEachSectionId } from "./sections";
import { createSortedCollection } from "./sorted-arr";

const [getReservesByType] = createSectionState<Array<Reserve[] | undefined>>(
  "reservesByType",
  () => [undefined, undefined, undefined]
);

export const enum ReserveType {
  Visit = 0,
  Store = 1,
  Attr = 2,
}

export interface Reserve {
  type: ReserveType;
  sectionId: number;
  name: string;
  size: number;
  id: number;
  exportIdentifier?: t.Identifier;
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
  sectionId: number,
  node:
    | t.MarkoTag
    | t.MarkoAttribute
    | t.MarkoPlaceholder
    | t.Identifier
    | t.MarkoTagBody,
  name: string,
  size = 0
): Reserve {
  const extra = (node.extra ??= {} as typeof node.extra);

  if (extra.reserve) {
    const reserve = extra.reserve as Reserve;
    if (size && reserve.size) {
      throw new Error("Unable to reserve multiple scopes for a node");
    } else {
      reserve.size = size;
      reserve.name += "_" + name;
    }
    return reserve;
  }

  const reservesByType = getReservesByType(sectionId);
  const reserve = (extra.reserve = {
    id: 0,
    type,
    size,
    name,
    sectionId,
  });

  if (reservesByType[type]) {
    reserve.id = reservesByType[type]!.push(reserve) - 1;
  } else {
    reservesByType[type] = [reserve];
  }

  return reserve;
}

export function assignFinalIds() {
  forEachSectionId((sectionId) => {
    let curIndex = 0;
    for (const reserves of getReservesByType(sectionId)) {
      if (reserves) {
        for (const reserve of reserves) {
          reserve.id = curIndex;
          curIndex += reserve.size + 1;
        }
      }
    }
  });
}

export function compareReserves(a: Reserve, b: Reserve) {
  return a.sectionId - b.sectionId || a.type - b.type || a.id - b.id;
}

export const { insert: insertReserve } =
  createSortedCollection(compareReserves);
