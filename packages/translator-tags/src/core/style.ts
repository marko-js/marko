import path from "path";
import { type Tag, assertNoParams, importDefault } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoSpreadAttrs } from "../util/assert";
import { getMarkoOpts } from "../util/marko-config";
import { currentProgramPath } from "../visitors/program";

export default {
  translate(tag) {
    const {
      hub: { file },
    } = tag;

    assertNoParams(tag);
    assertNoSpreadAttrs(tag);

    let type = "text/css";
    const attrs = tag.get("attributes");

    const base = path.basename(file.opts.sourceFileName as string);

    const typeAttr = attrs.find(
      (attr) => attr.isMarkoAttribute() && attr.node.name === "type",
    );
    const classAttr = attrs.find(
      (attr) => attr.isMarkoAttribute() && attr.node.name === "class",
    );

    if (typeAttr && classAttr) {
      throw classAttr.buildCodeFrameError(
        "The `style` tag must only use `type` or `class` and not both.",
      );
    } else if (typeAttr) {
      const typeValue = typeAttr.get("value");
      if (typeValue.isStringLiteral()) {
        type = typeValue.node.value;
      } else {
        throw typeValue.buildCodeFrameError(
          "The `style` tag `type` attribute can only be a string literal.",
        );
      }
    } else if (classAttr) {
      const classValue = classAttr.get("value");
      if (classValue.isStringLiteral()) {
        type = classValue.node.value;
      } else {
        throw classValue.buildCodeFrameError(
          "The `style` tag `class` attribute can only be a string literal.",
        );
      }
    }

    if (type === "text/css") {
      type = "css";
    }

    if (tag.node.var && !type.startsWith("module")) {
      type = "module." + type;
    }

    const body = tag.get("body").get("body");
    const markoText = body[0]!;

    if (body.length !== 1 || !markoText.isMarkoText()) {
      throw (markoText.isMarkoText() ? body[1] : body[0]).buildCodeFrameError(
        "The `style` tag currently only supports static content.",
      );
    }

    const { resolveVirtualDependency } = getMarkoOpts();

    if (resolveVirtualDependency) {
      const importPath = resolveVirtualDependency(
        file.opts.filename as string,
        {
          type,
          code: markoText.node.value,
          startPos: markoText.node.start!,
          endPos: markoText.node.end!,
          path: `./${base}`,
          virtualPath: `./${base}.${type}`,
        } as any,
      );

      if (!tag.node.var) {
        currentProgramPath.pushContainer(
          "body",
          t.importDeclaration([], t.stringLiteral(importPath)),
        );
      } else if (t.isIdentifier(tag.node.var)) {
        currentProgramPath.pushContainer(
          "body",
          t.importDeclaration(
            [t.importDefaultSpecifier(tag.node.var)],
            t.stringLiteral(importPath),
          ),
        );
      } else {
        currentProgramPath.pushContainer(
          "body",
          t.variableDeclaration("const", [
            t.variableDeclarator(
              tag.node.var,
              importDefault(file, importPath, "style"),
            ),
          ]),
        );
      }
    }

    tag.remove();
  },
  attributes: {
    type: { enum: ["css", "less", "scss", "text/css"] },
  },
} as Tag;
