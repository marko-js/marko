import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getEnd,
  getProgram,
  getStart,
  importStar,
  type Tag,
} from "@marko/compiler/babel-utils";
import MagicString, { type SourceMap } from "magic-string";
import path from "path";

import { addAssetImport } from "../util/asset-imports";
import { isOutputDOM } from "../util/marko-config";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    styleImportPath?: string | null;
  }
}

const STYLE_EXT_REG = /^style((?:\.[a-zA-Z0-9$_-]+)+)?/;
const htmlStyleTagAlternateMsg =
  " For a native html [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) use the `html-style` core tag instead.";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributeTags(tag);

    const {
      node,
      hub: { file },
    } = tag;
    const ext = STYLE_EXT_REG.exec(node.rawValue || "")?.[1]?.slice(1);
    const extClass = ext?.replace(/\./g, " ");
    for (const attr of node.attributes) {
      if (
        attr.start == null &&
        attr.type === "MarkoAttribute" &&
        attr.name === "class" &&
        attr.value.type === "StringLiteral" &&
        attr.value.value === extClass
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
          "The [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) currently only supports static content." +
            htmlStyleTagAlternateMsg,
        );
      }
    }

    // Resolve the style up front so the page entry builder can link it in for
    // server only templates (which never reach translate). The path is cached
    // on the node for translate to reuse.
    const importPath = getStyleImportPath(file, node);
    (node.extra ??= {}).styleImportPath = importPath;
    if (importPath) {
      addAssetImport(file, importPath);
    }
  },
  translate(tag) {
    const {
      node,
      hub: { file },
    } = tag;
    const importPath = node.extra?.styleImportPath;

    if (importPath) {
      if (!node.var) {
        getProgram().node.body.push(
          t.importDeclaration([], t.stringLiteral(importPath)),
        );
      } else if (t.isIdentifier(node.var)) {
        getProgram().node.body.push(
          t.importDeclaration(
            [t.importNamespaceSpecifier(node.var)],
            t.stringLiteral(importPath),
          ),
        );
      } else {
        const varDecl = t.variableDeclaration("const", [
          t.variableDeclarator(node.var, importStar(file, importPath, "style")),
        ]);
        getProgram().node.body.push(
          isOutputDOM() ? varDecl : t.markoScriptlet([varDecl], true),
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

/**
 * Resolves a `<style>` block's text content to its client side import path
 * (eg `./template.marko.css`) by handing the css off to the configured
 * `resolveVirtualDependency` hook.
 */
function getStyleImportPath(
  file: t.BabelFile,
  node: t.MarkoTag,
): string | null | undefined {
  const { resolveVirtualDependency } = file.markoOpts;
  if (!resolveVirtualDependency) {
    return undefined;
  }

  const { filename, sourceMaps } = file.opts;
  let ext = STYLE_EXT_REG.exec(node.rawValue || "")?.[1] || ".css";

  if (node.var && !/\.module\./.test(ext)) {
    ext = ".module" + ext;
  }

  let magicString: MagicString | undefined;
  let code = "";
  let last = 0;
  let map: SourceMap | undefined;

  for (const child of node.body.body as t.MarkoText[]) {
    code += child.value;

    if (sourceMaps) {
      const start = getStart(file, child);
      if (start !== null) {
        magicString ||= new MagicString(file.code, { filename });
        if (start > last) {
          magicString.remove(last, start);
        }
        last = getEnd(file, child)!;
      }
    }
  }

  if (magicString) {
    if (file.code.length > last) {
      magicString.remove(last, file.code.length);
    }

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

  return resolveVirtualDependency(filename, {
    virtualPath: `./${path.basename(filename) + ext}`,
    code,
    map,
  });
}
