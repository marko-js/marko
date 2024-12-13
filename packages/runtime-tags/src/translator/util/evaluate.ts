import type { types as t } from "@marko/compiler";
import { computeNode } from "@marko/compiler/babel-utils";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    confident?: boolean;
    computed?: unknown;
  }
}

export default function evaluate(value: t.Expression) {
  let { extra } = value;

  if (!extra) {
    extra = value.extra = {};
  }

  if (extra.confident === undefined) {
    const computed = computeNode(value);
    if (computed) {
      extra.computed = computed.value;
      extra.confident = true;
    } else {
      extra.computed = undefined;
      extra.confident = false;
    }
  }

  return extra as typeof extra & {
    confident: boolean;
    computed: unknown;
  };
}
