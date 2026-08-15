import type { types as t } from "@marko/compiler";
import {
  getFile,
  parseStatements,
  type Tag,
} from "@marko/compiler/babel-utils";

export default {
  parse(tag) {
    const { node } = tag;
    const statements = parseStatements(
      getFile(),
      node.rawValue!,
      node.start!,
      node.end!,
    );

    if (statements.length > 1) {
      throw tag.hub.buildError(
        statements[1],
        "The `<export>` tag takes a single export statement.",
      );
    }

    // The template is compiled into the default export, so a second one would
    // leave the module with two.
    const defaultExport = getDefaultExport(statements[0]);
    if (defaultExport) {
      throw tag.hub.buildError(
        defaultExport,
        "A template is already its own default export. Use a named export instead.",
      );
    }

    tag.replaceWith(statements[0]);
  },
  parseOptions: {
    statement: true,
    rawOpenTag: true,
  },
  autocomplete: [
    {
      displayText: "export <value>",
    },
  ],
} as Tag;

// `export * from` is not one: it never carries the source's default export.
function getDefaultExport(statement: t.Statement) {
  if (statement.type === "ExportDefaultDeclaration") return statement;
  if (statement.type !== "ExportNamedDeclaration") return;

  for (const specifier of statement.specifiers) {
    const { exported } = specifier as
      | t.ExportSpecifier
      | t.ExportNamespaceSpecifier;
    if (
      exported &&
      (exported.type === "Identifier" ? exported.name : exported.value) ===
        "default"
    ) {
      return specifier;
    }
  }
}
