import type { types as t } from "@marko/compiler";
import { getSection } from "./sections";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    visits?: number;
  }

  export interface MarkoTagBodyExtra {
    visits?: number;
  }

  export interface MarkoTagExtra {
    visitIndex?: number;
  }

  export interface MarkoPlaceholderExtra {
    visitIndex?: number;
  }
}

export default function visit(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>
) {
  const extra = (path.node.extra ??= {} as typeof path.node.extra);
  extra.visitIndex = getSection(path).visits++;
}
