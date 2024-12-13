import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getEnd,
  getStart,
  importDefault,
  type Tag,
} from "@marko/compiler/babel-utils";
import MagicString, { type SourceMap } from "magic-string";
import path from "path";

import { getMarkoOpts } from "../util/marko-config";
import { currentProgramPath } from "../visitors/program";

const STYLE_EXT_REG = /^style((?:\.[a-zA-Z0-9$_-]+)+)?/;
const htmlStyleTagAlternateMsg =
  " For a native html `style` tag use the `html-style` core tag instead.";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributeTags(tag);

    const { node } = tag;
    const ext = STYLE_EXT_REG.exec(node.rawValue || "")?.[1]?.slice(1);
    for (const attr of node.attributes) {
      if (
        attr.start == null &&
        attr.type === "MarkoAttribute" &&
        attr.name === "class" &&
        attr.value.type === "StringLiteral" &&
        attr.value.value === ext
      ) {
        continue;
      }

      throw tag.hub.buildError(
        attr.value,
        "The `style` does not support html attributes." +
          htmlStyleTagAlternateMsg,
      );
    }

    for (const child of node.body.body) {
      if (child.type !== "MarkoText") {
        throw tag.hub.buildError(
          child,
          "The `style` tag currently only supports static content." +
            htmlStyleTagAlternateMsg,
        );
      }
    }

    if (node.body.body.length > 1) {
      throw tag.hub.buildError(
        node.name,
        "The `style` tag currently only supports static content." +
          htmlStyleTagAlternateMsg,
      );
    }
  },
  translate(tag) {
    const {
      node,
      hub: { file },
    } = tag;
    const { filename, sourceMaps } = file.opts;
    let ext = STYLE_EXT_REG.exec(node.rawValue || "")?.[1] || ".css";

    if (node.var && !/\.module\./.test(ext)) {
      ext = ".module" + ext;
    }

    const markoText = node.body.body[0] as t.MarkoText;
    const { resolveVirtualDependency } = getMarkoOpts();
    const start = getStart(file, markoText);
    const end = getEnd(file, markoText);
    let code = markoText.value;
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
      virtualPath: `./${path.basename(filename) + ext}`,
      code,
      map,
    });

    if (importPath) {
      if (!node.var) {
        currentProgramPath.pushContainer(
          "body",
          t.importDeclaration([], t.stringLiteral(importPath)),
        );
      } else if (t.isIdentifier(node.var)) {
        currentProgramPath.pushContainer(
          "body",
          t.importDeclaration(
            [t.importDefaultSpecifier(node.var)],
            t.stringLiteral(importPath),
          ),
        );
      } else {
        currentProgramPath.pushContainer(
          "body",
          t.variableDeclaration("const", [
            t.variableDeclarator(
              node.var,
              importDefault(file, importPath, "style"),
            ),
          ]),
        );
      }
    }

    tag.remove();
  },
  parseOptions: {
    html: false,
    text: true,
    rawOpenTag: true,
    preserveWhitespace: true,
  },
  attributes: {},
} as Tag;
