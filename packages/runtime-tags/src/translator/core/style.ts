import path from "path";

import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  diagnosticWarn,
  getEnd,
  getFile,
  getProgram,
  getStart,
  getTemplateId,
  importStar,
  type Tag,
} from "@marko/compiler/babel-utils";
import MagicString, { type SourceMap } from "magic-string";

import { addAssetImport } from "../util/asset-imports";
import { BindingType, createBinding } from "../util/bindings";
import buildStringExpression from "../util/build-string-expression";
import { getPatchKey } from "../util/get-accessor-enums";
import { isCoreTagName } from "../util/is-core-tag";
import { isOutputDOM, isPatch } from "../util/marko-config";
import { type Opt, push } from "../util/optional";
import { writesPatchHole } from "../util/patch/decisions";
import { patchWrites } from "../util/patch/structure";
import { callPatchRuntime, getExprWriteOwnership } from "../util/patch/writers";
import { addReasonExprs } from "../util/reasons";
import {
  getReferencedBindings,
  mergeReferences,
  onFinalizeReferences,
} from "../util/references";
import { callRuntime, linkRuntimeFeature } from "../util/runtime";
import {
  getScopeAccessor,
  getScopeAccessorLiteral,
} from "../util/scope-accessor";
import { createScopeReadExpression, scopeIdentifier } from "../util/scope-read";
import {
  getNodeContentType,
  ensureSection,
  getSection,
} from "../util/sections";
import { addSetupWork } from "../util/setup-work";
import { addStatement } from "../util/signals";
import { ensureSlot } from "../util/slots";
import { createProgramState } from "../util/state";
import * as structure from "../util/structure";
import {
  checkStyleInterpolations,
  htmlStyleTagAlternateMsg,
} from "../util/style-interpolation";
import { translateByTarget } from "../util/visitors";
import { getWriteReason } from "../util/write-guard";
import * as writer from "../util/writer";

const kStyleImportPath = Symbol("style import path");
const kCustomPropertyNames = Symbol("custom property names");
declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kStyleImportPath]?: string | null;
    /** The custom property names of a `<style>`'s interpolated values. */
    [kCustomPropertyNames]?: string[];
  }
}

const STYLE_EXT_REG = /^style((?:\.[a-zA-Z0-9$_-]+)+)?/;
// Same-extension <style> block count per program, so each block's virtual file path is distinct.
const [getStyleCounts] = createProgramState(
  (): Partial<Record<string, number>> => ({}),
);
// Program-wide index of the next `<style>` custom property name.
const [getCustomPropertyCount, setCustomPropertyCount] = createProgramState(
  () => 0,
);

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributeTags(tag);

    const { node } = tag;
    assertNoStyleAttributes(tag);

    const names = createCustomPropertyNames(tag);

    if (names) {
      checkStyleInterpolations(tag);
      checkDynamicStylePlacement(tag);
    }

    // Created up front so the page entry builder can link it for server-only
    // templates (which never reach translate); cached on the node for reuse.
    const importPath = createStyleDependency(getFile(), node, names);
    (node.extra ??= {})[kStyleImportPath] = importPath;
    if (importPath) {
      addAssetImport(importPath);
    }

    if (names) {
      analyzeDynamicStyle(tag, names);
      // Dynamic styles write their shell statement in setup.
      addSetupWork(ensureSection(tag));
      structure.node(tag, tag.node.extra!.nodeBinding);
      structure.enterShallow(tag);
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
  const section = ensureSection(tag);
  const binding = (node.extra!.nodeBinding = createBinding(
    "#style",
    BindingType.dom,
    section,
  ));
  node.extra![kCustomPropertyNames] = names;

  const tagExtra = mergeReferences(section, node, []);
  let exprExtras: Opt<t.NodeExtra> = tagExtra;
  for (const value of dynamicStyleValues(node)) {
    const valueExtra = (value.extra ??= {});
    valueExtra.rendersValue = true;
    exprExtras = push(exprExtras, valueExtra);
  }

  addReasonExprs(ensureSlot(binding), exprExtras);
  // Stateful structure is known only once sources resolve.
  if (isPatch()) {
    onFinalizeReferences(() => {
      // The flush writes a dynamic style's rule, even a state-sourced one: a
      // scope the flush creates never runs the setup that writes its selector.
      if (patchWrites(section)) {
        linkRuntimeFeature("patches/style");
      }
    });
  }
}

function createCustomPropertyNames(tag: t.NodePath<t.MarkoTag>) {
  let names: string[] | undefined;
  for (const child of tag.node.body.body) {
    if (t.isMarkoPlaceholder(child)) {
      const index = getCustomPropertyCount();
      setCustomPropertyCount(index + 1);
      (names ??= []).push(customPropertyName(index));
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

function customPropertyName(index: number) {
  const file = getFile();
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
  const binding = node.extra?.nodeBinding;

  if (binding) {
    const names = node.extra![kCustomPropertyNames]!;
    const section = getSection(tag);
    writer.writeTo(tag)`${callRuntime(
      "_style_html",
      buildStyleDecls(node, (value, i) =>
        patchWrites(section)
          ? callPatchRuntime(
              "_patch_style",
              section,
              getPatchKey().Style + getScopeAccessor(binding) + " " + names[i],
              value,
              ...(writesPatchHole(section, value.extra)
                ? getExprWriteOwnership(section, value.extra!)
                : [t.numericLiteral(0), t.numericLiteral(0)]),
            )
          : callRuntime("_escape_style_value", value),
      ),
    )}`;
    writer.markNode(tag, binding, getWriteReason(binding));
  }

  emitStyleImport(tag);
  tag.remove();
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const binding = node.extra?.nodeBinding;

  if (binding) {
    const names = node.extra![kCustomPropertyNames]!;
    const section = getSection(tag);
    const readEl = () => createScopeReadExpression(binding);

    addStatement(
      "render",
      section,
      undefined,
      callRuntime(
        "_style_shell",
        scopeIdentifier,
        getScopeAccessorLiteral(binding),
      ),
      true,
    );

    dynamicStyleValues(node).forEach((value, i) => {
      const valueRef = getReferencedBindings(value.extra);
      const patched = writesPatchHole(section, value.extra);
      addStatement(
        patched ? "patch" : "render",
        section,
        valueRef,
        callRuntime(
          "_style_rule_item",
          readEl(),
          t.stringLiteral(names[i]),
          value,
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
  const { node } = tag;
  const importPath = node.extra?.[kStyleImportPath];
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
      t.variableDeclarator(
        node.var,
        importStar(getFile(), importPath, "style"),
      ),
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
  const names = node.extra![kCustomPropertyNames]!;
  const parts: (string | t.Expression)[] = [];

  dynamicStyleValues(node).forEach((value, i) => {
    parts.push(`${names[i]}:`);
    parts.push(toDecl(value, i));
    parts.push(";");
  });

  return buildStringExpression(parts)!;
}

/**
 * Hands a `<style>` block's css to the configured `resolveVirtualDependency`
 * hook as a new virtual dependency, returning its client-side import path.
 */
function createStyleDependency(
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

  const counts = getStyleCounts();
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
