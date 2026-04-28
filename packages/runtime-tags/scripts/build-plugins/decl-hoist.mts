import type { Plugin } from "rolldown";

/**
 * Rolldown plugin that hoists all module-scope variable declarations into a
 * single `let` statement at the top of the chunk.
 */
export default function moduleScopeVarHoistPlugin(): Plugin {
  return {
    name: "module-scope-var-hoist",

    renderChunk(code, _chunk, _options, meta) {
      const s = meta?.magicString;
      if (!s) return null;

      const ast = this.parse(code);
      const decls: ((typeof ast.body)[number] & {
        type: "VariableDeclaration";
      })["declarations"] = [];

      for (const node of ast.body) {
        if (
          node.type === "VariableDeclaration" &&
          (node.kind === "let" || node.kind === "const")
        ) {
          // Remove keyword (e.g. "let " or "const ")
          s.remove(node.start, node.declarations[0].start);

          for (let i = 0; i < node.declarations.length; i++) {
            const d = node.declarations[i];
            // Remove ", " between adjacent declarators
            if (i) s.remove(node.declarations[i - 1].end, d.start);
            decls.push(d);
          }

          // Remove trailing semicolon
          s.remove(
            node.declarations[node.declarations.length - 1].end,
            node.end,
          );
        }
      }

      if (!decls.length) return null;

      // Move segments to position 0 in output order: names first, then inits.
      // Each move() appends to what was previously moved to position 0, so we
      // move them in natural output order (not reversed). prependRight() content
      // at seg.start travels with the segment when moved.
      for (let i = 0; i < decls.length; i++) {
        s.prependRight(decls[i].start, i === 0 ? "let " : ", ");
        s.move(decls[i].start, decls[i].end, 0);
      }

      // Append ";\n" after all moved segments, before the remaining file content.
      s.prependRight(0, ";\n");

      return s;
    },
  };
}
