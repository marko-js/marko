import { types as t, NodePath } from "@marko/babel-types";

declare module "@marko/babel-types" {
  export interface MarkoTagExtra {
    eventHandlers: boolean;
  }
}

export default function analyzeEventHandlers(tag: NodePath<t.MarkoTag>) {
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
