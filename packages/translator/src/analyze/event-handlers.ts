import type { types as t } from "@marko/compiler";

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    eventHandlers: boolean;
  }
}

export default function analyzeEventHandlers(tag: t.NodePath<t.MarkoTag>) {
  const { extra } = tag.node;

  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoAttribute()) {
      const { name } = attr.node;
      if (name[0] !== "o" && name[1] !== "n") {
        continue;
      }
    }

    extra.eventHandlers = true;
    break;
  }
}
