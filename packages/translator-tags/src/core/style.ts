import {
  assertNoParams,
  getEnd,
  getStart,
  importDefault,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import MagicString, { type SourceMap } from "magic-string";
import path from "path";

import { assertNoSpreadAttrs } from "../util/assert";
import { getMarkoOpts } from "../util/marko-config";
import { currentProgramPath } from "../visitors/program";

export default {
  translate(tag) {
    const {
      hub: { file },
    } = tag;
    const { filename, sourceMaps } = file.opts;

    assertNoParams(tag);
    assertNoSpreadAttrs(tag);

    let type = "text/css";
    const attrs = tag.get("attributes");

    const base = path.basename(filename);

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
    const start = getStart(file, markoText.node);
    const end = getEnd(file, markoText.node);
    let code = markoText.node.value;
    let map: SourceMap | undefined;

    if (
      resolveVirtualDependency &&
      sourceMaps &&
      start !== null &&
      end !== null
    ) {
      const magicString = new MagicString(file.code, { filename });
      magicString.remove(0, start);
      magicString.remove(end, file.code.length);
      map = magicString.generateMap({
        source: filename,
        includeContent: true,
      });

      if (sourceMaps === "inline" || sourceMaps === "both") {
        code += `\n/*# sourceMappingURL=${map.toUrl()}*/`;

        if (sourceMaps === "inline") {
          map = undefined;
        }
      }
    }

    const importPath = resolveVirtualDependency?.(filename, {
      virtualPath: `./${base}.${type}`,
      code,
      map,
    });

    if (importPath) {
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
  attributes: {},
} as Tag;
