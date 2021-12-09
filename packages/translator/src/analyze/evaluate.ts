declare module "@marko/compiler/dist/types" {
  export interface MarkoAttributeExtra {
    computed?: unknown;
  }

  export interface MarkoSpreadAttributeExtra {
    computed?: unknown;
  }

  export interface MarkoPlaceholderExtra {
    computed?: unknown;
  }
}

export default function evaluate(
  path: t.NodePath<
    t.MarkoAttribute | t.MarkoSpreadAttribute | t.MarkoPlaceholder
  >
) {
  const value = path.get("value");
  const { confident, value: computed } = value.evaluate();

  if (confident) {
    const extra = (path.node.extra ??= {});
    extra.computed = computed;
  }
}
