import type { types as t } from "@marko/compiler";
import { type Tag } from "@marko/compiler/babel-utils";

import { parseSingleStatement } from "../util/statement-tag";
import { getLiteralName } from "../util/to-property-name";

export default {
  parse(tag) {
    const statement = parseSingleStatement(
      tag,
      "The `<export>` tag takes a single export statement.",
    );

    // The template is compiled into the default export, so a second one would
    // leave the module with two.
    const defaultExport = getDefaultExport(statement);
    if (defaultExport) {
      throw tag.hub.buildError(
        defaultExport,
        "A template is already its own default export. Use a named export instead.",
      );
    }

    tag.replaceWith(statement);
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
    if (exported && getLiteralName(exported) === "default") {
      return specifier;
    }
  }
}
