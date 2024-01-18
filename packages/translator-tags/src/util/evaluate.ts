import { computeNode } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";

declare module "@marko/compiler/dist/types" {
  export interface MarkoAttributeExtra {
    confident?: boolean;
    computed?: unknown;
  }

  export interface MarkoSpreadAttributeExtra {
    confident?: boolean;
    computed?: unknown;
  }

  export interface MarkoPlaceholderExtra {
    confident?: boolean;
    computed?: unknown;
  }
}

export default function evaluate(
  path: t.NodePath<
    t.MarkoAttribute | t.MarkoSpreadAttribute | t.MarkoPlaceholder
  >,
) {
  let { extra } = path.node;

  if (!extra) {
    extra = path.node.extra = {};
  }

  if (extra.confident === undefined) {
    const computed = computeNode(path.node.value);
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

export function getEvaluated(
  path: t.NodePath<
    t.MarkoAttribute | t.MarkoSpreadAttribute | t.MarkoPlaceholder
  >,
) {
  const { extra } = path.node;

  if (!extra || extra.confident === undefined) {
    throw path.buildCodeFrameError("Node was not analyzed.");
  }

  return extra as typeof extra & {
    confident: boolean;
    computed: unknown;
  };
}
