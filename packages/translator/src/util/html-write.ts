import type { types as t } from "@marko/compiler";

export function writeHTML<T extends t.Node>(path: t.NodePath<T>) {
  const writes = (path.state.writes || (path.state.writes = [])) as Array<
    string | t.Expression
  >;
  return (
    strs: TemplateStringsArray,
    ...exprs: Array<string | t.Expression>
  ) => {
    const exprsLen = exprs.length;

    for (let i = 0; i < exprsLen; i++) {
      writes.push(strs[i], exprs[i]);
    }

    writes.push(strs[exprsLen]);
  };
}
