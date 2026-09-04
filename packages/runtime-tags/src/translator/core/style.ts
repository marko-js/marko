import path from "path";

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

import { WalkCode } from "../../common/types";
import { addAssetImport } from "../util/asset-imports";
import { isCoreTagName } from "../util/is-core-tag";
import { isOutputDOM, isPersisted } from "../util/marko-config";
import normalizeStringExpression from "../util/normalize-string-expression";
import { type Opt, push } from "../util/optional";
import { onFinalizePersisted } from "../util/persisted/lifecycle";
import {
  ensurePersistedWriteGroups,
  inStatefulBranch,
  isBranchPathSection,
} from "../util/persisted/structure";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import {
  addRuntimeFeatureAsset,
  callRuntime,
  importRuntimeFeature,
} from "../util/runtime";
import { createScopeReadExpression } from "../util/scope-read";
import {
  getNodeContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { getPatchWriteOwnership, isStableExpr } from "../util/serialize-guard";
import {
  addSerializeExpr,
  addSerializeReason,
  getSerializeReason,
  getSerializeSourcesForExpr,
} from "../util/serialize-reasons";
import { addSetupStatement } from "../util/setup-statements";
import { addStatement } from "../util/signals";
import * as structure from "../util/structure";
import {
  checkStyleInterpolations,
  htmlStyleTagAlternateMsg,
} from "../util/style-interpolation";
import { translateByTarget } from "../util/visitors";
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
// Same-extension <style> block count per program, so each block's virtual file path is distinct.
const programStyleCounts = new WeakMap<
  t.Program,
  Partial<Record<string, number>>
>();
// Running index for dynamic `<style>` interpolation names, program-scoped.
const programDynamicStyleNameCounts = new WeakMap<t.Program, number>();

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

    // Resolve up front so the page entry builder can link it for server-only
    // templates (which never reach translate); cached on the node for reuse.
    const importPath = getStyleImportPath(file, node, names);
    (node.extra ??= {}).styleImportPath = importPath;
    if (importPath) {
      addAssetImport(importPath);
    }

    if (names) {
      analyzeDynamicStyle(tag, names);
      // Dynamic styles write their shell statement in setup.
      addSetupStatement(getOrCreateSection(tag));
      structure.visit(tag, WalkCode.Get);
      structure.writeTo(tag)`<style></style>`;
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
  // Stateful structure is known only once sources resolve.
  const valueExtras = dynamicStyleValues(node).map((value) => value.extra!);
  onFinalizePersisted(() => {
    if (patchesStyle(section)) {
      addSerializeReason(section, true, binding);
      addRuntimeFeatureAsset("patch-style");
      for (const extra of valueExtras) ensurePersistedWriteGroups(() => extra);
    }
  });
}

// A dynamic style in server-owned structure writes its rule from the frame
// (a state-fed interpolation recomputes through the signal graph).
function patchesStyle(section: Section) {
  return (
    isPersisted() && isBranchPathSection(section) && !inStatefulBranch(section)
  );
}
function patchesStyleValue(section: Section, value: t.Expression) {
  return (
    patchesStyle(section) && !getSerializeSourcesForExpr(value.extra!)?.state
  );
}

function collectDynamicStyleNames(tag: t.NodePath<t.MarkoTag>) {
  let names: string[] | undefined;
  for (const child of tag.node.body.body) {
    if (t.isMarkoPlaceholder(child)) {
      const program = getProgram().node;
      const index = programDynamicStyleNameCounts.get(program) ?? 0;
      programDynamicStyleNameCounts.set(program, index + 1);
      (names ??= []).push(dynamicStyleName(tag, index));
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
          "The `${...}` values of a [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) only apply to the subsequent siblings of the `<style>` tag and their descendants, so the content before this tag will not receive them. Move the `<style>` tag above the content it styles.",
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
    const { binding, names } = dynamic;
    const section = getSection(tag);
    writer.writeTo(tag)`${callRuntime(
      "_style_html",
      buildStyleDecls(node, (value, i) =>
        patchesStyleValue(section, value)
          ? callRuntime(
              "_patch_style",
              getScopeIdIdentifier(section),
              getScopeAccessorLiteral(binding),
              t.stringLiteral(names[i]),
              value,
              ...getPatchWriteOwnership(
                getSerializeSourcesForExpr(value.extra!),
                isStableExpr(value.extra),
              ),
            )
          : callRuntime("_escape_style_value", value),
      ),
    )}`;
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
    const readEl = () => createScopeReadExpression(binding);

    addStatement(
      "render",
      section,
      undefined,
      t.expressionStatement(
        callRuntime(
          "_style_shell",
          scopeIdentifier,
          getScopeAccessorLiteral(binding),
        ),
      ),
      true,
    );

    dynamicStyleValues(node).forEach((value, i) => {
      const valueRef = value.extra?.referencedBindings;
      const patched = patchesStyleValue(section, value);
      if (patched) importRuntimeFeature("patch-style");
      addStatement(
        patched ? "patched" : "render",
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
        !valueRef,
      );
    });
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

function buildStyleDecls(
  node: t.MarkoTag,
  toDecl: (value: t.Expression, i: number) => t.Expression,
) {
  const { names } = node.extra!.dynamicStyle!;
  const parts: (string | t.Expression)[] = [];

  dynamicStyleValues(node).forEach((value, i) => {
    parts.push(`${names[i]}:`);
    parts.push(toDecl(value, i));
    parts.push(";");
  });

  return normalizeStringExpression(parts)!;
}

/**
 * Resolves a `<style>` block's text to its client-side import path by handing
 * the css to the configured `resolveVirtualDependency` hook.
 */
function getStyleImportPath(
  file: t.BabelFile,
  node: t.MarkoTag,
  names: string[] | undefined,
): string | null | undefined {
  const { resolveVirtualDependency, sourceMaps } = file.markoOpts;
  if (!resolveVirtualDependency) {
    // No hook means no bundler to receive the css, so the block is deliberately
    // discarded without a diagnostic (unlike `output: "hydrate"`, which errors).
    return undefined;
  }

  const { filename } = file.opts;
  let ext = STYLE_EXT_REG.exec(node.rawValue || "")?.[1] || ".css";

  if (node.var && !/\.module\./.test(ext)) {
    ext = ".module" + ext;
  }

  const program = getProgram().node;
  let counts = programStyleCounts.get(program);
  if (!counts) programStyleCounts.set(program, (counts = {}));
  const index = counts[ext] || 0;
  counts[ext] = index + 1;

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
    virtualPath: `./${path.basename(filename)}${index ? `.${index}` : ""}${ext}`,
    code,
    map,
  });
}
