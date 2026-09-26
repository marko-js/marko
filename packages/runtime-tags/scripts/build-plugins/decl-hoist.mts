import { type Plugin, RolldownMagicString } from "rolldown";

/**
 * Hoists each module-scope `let`/`const` declarator of the minified chunk as its own
 * `let`: app bundlers tree-shake each statement, then minifiers join the survivors.
 */
export default function moduleScopeVarHoistPlugin(): Plugin {
  return {
    name: "module-scope-var-hoist",

    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== "chunk") continue;
        const s = new RolldownMagicString(chunk.code);
        let top = 0;

        for (const node of this.parse(chunk.code).body) {
          if ("directive" in node) {
            top = node.end;
          } else if (
            node.type === "VariableDeclaration" &&
            (node.kind === "let" || node.kind === "const")
          ) {
            let prevEnd = node.start;
            for (const d of node.declarations) {
              // Remove the keyword or ", " before each declarator.
              s.remove(prevEnd, d.start);
              s.prependRight(d.start, "let ");
              s.appendLeft(d.end, ";\n");
              // Each move() lands after earlier moves to top, keeping source order.
              s.move(d.start, d.end, top);
              prevEnd = d.end;
            }
            s.remove(prevEnd, node.end);
          }
        }

        chunk.code = s.toString();
      }
    },
  };
}
