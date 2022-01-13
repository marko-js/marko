import type { types as t } from "@marko/compiler";
import { getSection } from "./sections";

export interface Reserve {
  sectionIndex: number;
  reserveIndex: number;
  size: number;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    reserves?: number;
  }

  export interface MarkoTagExtra {
    reserve?: Reserve;
  }

  export interface MarkoAttributeExtra {
    reserve?: Reserve;
  }
}

export default function reserveScope(
  tag: t.NodePath<t.MarkoTag | t.MarkoAttribute>,
  size: number
) {
  const section = getSection(tag);
  const { sectionIndex } = section;
  const extra = (tag.node.extra ??= {});
  extra.reserve = {
    sectionIndex,
    reserveIndex: (section.reserves += size),
    size,
  };
}
