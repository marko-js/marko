import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  diagnosticWarn,
  getEnd,
  getProgram,
  getStart,
  getTemplateId,
  importStar,
  type Tag,
} from "@marko/compiler/babel-utils";
import MagicString, { type SourceMap } from "magic-string";
import path from "path";

import { WalkCode } from "../../common/types";
import { addAssetImport } from "../util/asset-imports";
import { isCoreTagName } from "../util/is-core-tag";
import { isOutputDOM } from "../util/marko-config";
import normalizeStringExpression from "../util/normalize-string-expression";
import { type Opt, push } from "../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import { createScopeReadExpression } from "../util/scope-read";
import {
  getNodeContentType,
  getOrCreateSection,
  getSection,
} from "../util/sections";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../util/serialize-reasons";
import { addStatement } from "../util/signals";
import {
  checkStyleInterpolations,
  htmlStyleTagAlternateMsg,
} from "../util/style-interpolation";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

interface DynamicStyle {
  names: string[];
  binding: Binding;
}

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    styleImportPath?: string | null;
    dynamicStyle?: DynamicStyle;
  }
}

const STYLE_EXT_REG = /^style((?:\.[a-zA-Z0-9$_-]+)+)?/;

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributeTags(tag);

    const {
      node,
      hub: { file },
    } = tag;
    assertNoStyleAttributes(tag);

    const names = collectDynamicStyleNames(tag);

    if (names) {
      checkStyleInterpolations(tag);
      checkDynamicStylePlacement(tag);
    }

    // Resolve the style up front so the page entry builder can link it in for
    // server only templates (which never reach translate). The path is cached
    // on the node for translate to reuse.
    const importPath = getStyleImportPath(file, node, names);
    (node.extra ??= {}).styleImportPath = importPath;
    if (importPath) {
      addAssetImport(file, importPath);
    }

    if (names) {
      analyzeDynamicStyle(tag, names);
    }
  },
  translate: translateByTarget({
    html: { exit: translateHTML },
    dom: { exit: translateDOM },
  }),
  parseOptions: {
    html: false,
    text: true,
    rawOpenTag: true,
    preserveWhitespace: true,
  },
  attributes: {},
} as Tag;

function analyzeDynamicStyle(tag: t.NodePath<t.MarkoTag>, names: string[]) {
  const { node } = tag;
  const section = getOrCreateSection(tag);
  const binding = createBinding("#style", BindingType.dom, section);
  node.extra!.dynamicStyle = { names, binding };

  const tagExtra = mergeReferences(section, node, []);
  let exprExtras: Opt<t.NodeExtra> = tagExtra;
  for (const value of dynamicStyleValues(node)) {
    exprExtras = push(exprExtras, (value.extra ??= {}));
  }

  addSerializeExpr(section, exprExtras, binding);
}

function collectDynamicStyleNames(tag: t.NodePath<t.MarkoTag>) {
  let names: string[] | undefined;
  let index = 0;
  for (const child of tag.node.body.body) {
    if (t.isMarkoPlaceholder(child)) {
      if (!names) {
        names = [];
        index = dynamicStyleNameOffset(tag);
      }
      names.push(dynamicStyleName(tag, index++));
    } else if (!t.isMarkoText(child)) {
      throw tag.hub.buildError(
        child,
        "The [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) only supports text and `${...}` interpolations." +
          htmlStyleTagAlternateMsg,
      );
    }
  }
  return names;
}

function dynamicStyleNameOffset(tag: t.NodePath<t.MarkoTag>) {
  const { start } = tag.node;
  let offset = 0;
  if (start != null) {
    t.traverseFast(getProgram().node, (node) => {
      const dynamicStyle = node.extra?.dynamicStyle;
      if (dynamicStyle && node.start != null && node.start < start) {
        offset += dynamicStyle.names.length;
      }
    });
  }
  return offset;
}

const styleNameUnsafeReg = /[^a-zA-Z0-9_]/g;
const encodeStyleNameChar = (c: string) => "-" + c.charCodeAt(0).toString(36);

function dynamicStyleName(tag: t.NodePath<t.MarkoTag>, index: number) {
  const { file } = tag.hub;
  const id = getTemplateId(
    file.markoOpts,
    file.opts.filename as string,
    index.toString(36),
  );
  return (
    "--" +
    ((file.markoOpts.runtimeId || "M_") + id).replace(
      styleNameUnsafeReg,
      encodeStyleNameChar,
    )
  );
}

function checkDynamicStylePlacement(tag: t.NodePath<t.MarkoTag>) {
  for (const sibling of tag.getAllPrevSiblings()) {
    if (isCoreTagName(sibling, "style")) {
      continue;
    }

    const rendered = sibling.isMarkoText()
      ? /\S/.test(sibling.node.value)
      : getNodeContentType(sibling as t.NodePath<t.Statement>, "startType") !==
        null;

    if (rendered) {
      diagnosticWarn(tag, {
        label:
          "The `${...}` values of a [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) only apply to elements rendered after it, so the content before this tag will not receive them. Move the `<style>` tag above the content it styles.",
      });
      return;
    }
  }
}

function assertNoStyleAttributes(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
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
}

function translateHTML(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const dynamic = node.extra?.dynamicStyle;

  if (dynamic) {
    const { binding } = dynamic;
    const section = getSection(tag);
    writer.writeTo(tag)`${callRuntime("_style_html", buildStyleDecls(node))}`;
    writer.markNode(tag, binding, getSerializeReason(section, binding));
  }

  emitStyleImport(tag);
  tag.remove();
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const dynamic = node.extra?.dynamicStyle;

  if (dynamic) {
    const { names, binding } = dynamic;
    const section = getSection(tag);
    const write = writer.writeTo(tag);
    const readEl = () => createScopeReadExpression(binding);

    walks.visit(tag, WalkCode.Get);
    write`<style>`;

    addStatement(
      "render",
      section,
      undefined,
      [
        t.expressionStatement(
          callRuntime(
            "_attr_nonce",
            scopeIdentifier,
            getScopeAccessorLiteral(binding),
          ),
        ),
        t.expressionStatement(
          callRuntime(
            "_style_shell",
            scopeIdentifier,
            getScopeAccessorLiteral(binding),
          ),
        ),
      ],
      undefined,
      true,
    );

    dynamicStyleValues(node).forEach((value, i) => {
      const valueRef = value.extra?.referencedBindings;
      addStatement(
        "render",
        section,
        valueRef,
        t.expressionStatement(
          callRuntime(
            "_style_rule_item",
            readEl(),
            t.stringLiteral(names[i]),
            value,
          ),
        ),
        undefined,
        !valueRef,
      );
    });

    write`</style>`;
  }

  emitStyleImport(tag);
  tag.remove();
}

function dynamicStyleValues(node: t.MarkoTag) {
  const values: t.Expression[] = [];
  for (const child of node.body.body) {
    if (t.isMarkoPlaceholder(child)) {
      values.push(child.value);
    }
  }
  return values;
}

function emitStyleImport(tag: t.NodePath<t.MarkoTag>) {
  const {
    node,
    hub: { file },
  } = tag;
  const importPath = node.extra?.styleImportPath;
  if (!importPath) return;

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

function buildStyleDecls(node: t.MarkoTag) {
  const { names } = node.extra!.dynamicStyle!;
  const parts: (string | t.Expression)[] = [];

  dynamicStyleValues(node).forEach((value, i) => {
    parts.push(`${names[i]}:`);
    parts.push(callRuntime("_escape_style_value", value));
    parts.push(";");
  });

  return normalizeStringExpression(parts)!;
}

/**
 * Resolves a `<style>` block's text content to its client side import path
 * (eg `./template.marko.css`) by handing the css off to the configured
 * `resolveVirtualDependency` hook.
 */
function getStyleImportPath(
  file: t.BabelFile,
  node: t.MarkoTag,
  names: string[] | undefined,
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

  const magicString = sourceMaps
    ? new MagicString(file.code, { filename })
    : undefined;
  let code = "";
  let last = 0;
  let map: SourceMap | undefined;
  let nameIndex = 0;

  for (const child of node.body.body) {
    const placeholder = t.isMarkoPlaceholder(child);
    const text = placeholder
      ? `var(${names![nameIndex++]})`
      : (child as t.MarkoText).value;

    if (magicString) {
      const start = getStart(file, child);
      if (start === null) {
        magicString.appendLeft(last, text);
      } else {
        const end = getEnd(file, child)!;
        if (start > last) {
          magicString.remove(last, start);
        }
        if (placeholder) {
          magicString.update(start, end, text);
        }
        last = end;
      }
    } else {
      code += text;
    }
  }

  if (magicString) {
    if (file.code.length > last) {
      magicString.remove(last, file.code.length);
    }

    code = magicString.toString();
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
