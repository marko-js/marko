import { types as t } from "@marko/compiler";
import {
  assertAttributesOrSingleArg,
  getProgram,
  getTagDef,
  getTaglibLookup,
  getTagTemplate,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import { closest, distance } from "fastest-levenshtein";
import path from "path";

import { WalkCode } from "../../../common/types";
import { getBindingPropTree } from "../../util/binding-prop-tree";
import { generateUidIdentifier } from "../../util/generate-uid";
import { getTagName } from "../../util/get-tag-name";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import { getMarkoOpts, isOutputHTML } from "../../util/marko-config";
import type { Binding } from "../../util/references";
import {
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import { getOrCreateSection } from "../../util/sections";
import { addStatement, getSignal } from "../../util/signals";
import { createProgramState } from "../../util/state";
import { toMemberExpression } from "../../util/to-property-name";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";
import { getTemplateContentName } from "../program/html";

const kLazyTagBinding = Symbol("lazy tag binding");
const [getLazyWrapped] = createProgramState(
  () => new Map<string, t.Identifier>(),
);

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kLazyTagBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag) {
      const templateFile = getTagTemplate(tag);

      if (!templateFile) throw tagNotFoundError(tag);

      assertAttributesOrSingleArg(tag);

      const childFile = loadFileForTag(tag);

      if (!childFile) {
        throw tag
          .get("name")
          .buildCodeFrameError("Unable to resolve file for tag.");
      }

      const tagExtra = (tag.node.extra ??= {});
      const programExtra = getProgram().node.extra;
      const programSection = programExtra.section!;
      const childProgram = childFile.ast.program;
      const childExtra = childProgram.extra;
      const childSection = childExtra.section!;

      if (childExtra.page) {
        programExtra.page ??= true;
      }

      if (tagExtra.tagNameLazy) {
        tagExtra[kLazyTagBinding] = createBinding(
          "#text",
          BindingType.dom,
          getOrCreateSection(tag),
        );
      }

      knownTagAnalyze(
        tag,
        childSection,
        programSection === childSection
          ? programSection.params && getBindingPropTree(programSection.params)
          : childExtra.domExports?.params,
      );
    },
  },
  translate: {
    enter(tag) {
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        translateHTML(tag);
      } else {
        translateDOM(tag);
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

function translateHTML(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const childFile = loadFileForTag(tag)!;
  const childProgram = childFile.ast.program;
  const childExtra = childProgram.extra;
  const readyId = node.extra?.tagNameLazy && childExtra.readyId;

  let tagIdentifier: t.Expression;
  if (t.isStringLiteral(node.name)) {
    const relativePath = getTagRelativePath(tag);
    tagIdentifier = isCircularRequest(tag.hub.file, relativePath)
      ? t.identifier(getTemplateContentName())
      : importDefault(tag.hub.file, relativePath, getTagName(tag));
  } else {
    tagIdentifier = node.name;

    if (readyId) {
      const markoOpts = getMarkoOpts();
      const { file } = tag.hub;
      const program = file.path;
      const lazyWrapped = getLazyWrapped();
      const existing = lazyWrapped.get(readyId);
      markoOpts.linkAssets?.onAsset("lazy", childFile.opts.filename, readyId);

      if (existing) {
        tagIdentifier = existing;
      } else {
        const originalIdentifier = tagIdentifier;
        tagIdentifier = generateUidIdentifier(
          `lazy_${(tagIdentifier as t.Identifier).name}`,
        );
        lazyWrapped.set(readyId, tagIdentifier);
        program.node.body.push(
          t.markoScriptlet(
            [
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  tagIdentifier,
                  callRuntime(
                    "withAssets",
                    originalIdentifier,
                    importDefault(
                      file,
                      markoOpts.linkAssets.runtime,
                      "assetRuntime",
                    ),
                    t.stringLiteral(readyId),
                  ),
                ),
              ]),
            ],
            true,
          ),
        );
      }
    }
  }

  knownTagTranslateHTML(
    tag,
    tagIdentifier,
    childExtra.section!,
    childExtra.domExports?.params,
  );
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { file } = tag.hub;
  const write = writer.writeTo(tag);
  const relativePath = getTagRelativePath(tag);
  const programSection = getProgram().node.extra.section!;
  const childFile = loadFileForTag(tag)!;
  const childExtra = childFile.ast.program.extra;
  const childExports = childExtra.domExports!;
  const childSection = childExtra.section!;
  const isLazy = node.extra?.tagNameLazy;
  const tagName = t.isIdentifier(node.name)
    ? node.name.name
    : t.isStringLiteral(node.name)
      ? node.name.value
      : "tag";

  if (isLazy) {
    const childFileName = childFile.opts.filename;
    const lazySignalMap = new Map<string, t.Identifier>();
    const childImportId = resolveRelativePath(file, childFileName);

    if (childExports.params?.props) {
      const attrsPropTree =
        childExports.params.props[node.arguments?.length || 0];
      if (attrsPropTree?.props) {
        for (const [, propTree] of Object.entries(attrsPropTree.props)) {
          const exportName = propTree.binding.export!;
          const signalIdent = generateUidIdentifier(
            `lazy_${tagName}_tag_${propTree.binding.name}`,
          );
          lazySignalMap.set(exportName, signalIdent);
          getProgram().node.body.push(
            t.variableDeclaration("let", [
              t.variableDeclarator(
                signalIdent,
                callRuntime(
                  "_lazy_signal",
                  buildLazyImport(childImportId, (mod) =>
                    t.memberExpression(mod, t.identifier(exportName)),
                  ),
                ),
              ),
            ]),
          );
        }
      }
    }

    knownTagTranslateDOM(
      tag,
      childExports.params,
      (binding) => {
        const ident = lazySignalMap.get(binding.export!);
        if (ident) return ident;
        return importOrSelfReferenceName(
          tag.hub.file,
          relativePath,
          binding.export!,
        );
      },
      (section, childBinding) => {
        const setupIdent = generateUidIdentifier(`lazy_${tagName}_setup`);
        getProgram().node.body.push(
          t.variableDeclaration("let", [
            t.variableDeclarator(
              setupIdent,
              callRuntime(
                "_lazy_setup",
                getScopeAccessorLiteral(node.extra![kLazyTagBinding]!),
                getScopeAccessorLiteral(childBinding),
                buildLazyImport(childImportId, (mod) =>
                  t.arrayExpression([
                    toMemberExpression(mod, childExports.template),
                    toMemberExpression(mod, childExports.walks),
                    toMemberExpression(mod, childExports.setup),
                  ]),
                ),
              ),
            ),
          ]),
        );
        addStatement(
          "render",
          section,
          undefined,
          t.expressionStatement(
            t.callExpression(setupIdent, [scopeIdentifier]),
          ),
        );
      },
    );

    write`<!>`;
    walks.visit(tag, WalkCode.Replace);
    walks.injectWalks(tag, tagName);
  } else if (programSection === childSection) {
    knownTagTranslateDOM(
      tag,
      childExports.params,
      (binding, preferredName) =>
        getSignal(programSection, binding, preferredName).identifier,
      (section, childBinding) => {
        addStatement(
          "render",
          section,
          undefined,
          t.expressionStatement(
            t.callExpression(t.identifier(childExports.setup), [
              createScopeReadExpression(childBinding, section),
            ]),
          ),
        );
      },
    );

    write`${t.identifier(childExports.template)}`;
    walks.injectWalks(tag, tagName, t.identifier(childExports.walks));
  } else {
    knownTagTranslateDOM(
      tag,
      childExports.params,
      (binding, preferredName) =>
        importOrSelfReferenceName(
          tag.hub.file,
          relativePath,
          binding.export!,
          preferredName,
        ),
      (section, childBinding) => {
        addStatement(
          "render",
          section,
          undefined,
          t.expressionStatement(
            t.callExpression(
              importOrSelfReferenceName(
                file,
                relativePath,
                childExports.setup,
                tagName,
              ),
              [createScopeReadExpression(childBinding, section)],
            ),
          ),
        );
      },
    );

    write`${importNamed(file, relativePath, childExports.template, `${tagName}_template`)}`;
    walks.injectWalks(
      tag,
      tagName,
      importNamed(file, relativePath, childExports.walks, `${tagName}_walks`),
    );
  }

  tag.remove();
}

export function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
  const {
    node,
    hub: { file },
  } = tag;
  let relativePath: string | undefined;

  if (t.isStringLiteral(node.name)) {
    const template =
      (node.extra?.featureType === "class" && getTagDef(tag)?.renderer) ||
      getTagTemplate(tag);
    relativePath = template && resolveRelativePath(file, template);
  } else if (node.extra?.tagNameImported) {
    relativePath = node.extra.tagNameImported;
  }

  if (!relativePath) throw tagNotFoundError(tag);

  return relativePath;
}

function tagNotFoundError(tag: t.NodePath<t.MarkoTag>) {
  const tagName = getTagName(tag);
  if (tagName && tag.scope.hasBinding(tagName)) {
    return tag
      .get("name")
      .buildCodeFrameError(
        `Local variables must be in a [dynamic tag](https://markojs.com/docs/reference/language#dynamic-tags) unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
      );
  }
  let didYouMean = "";
  if (tagName) {
    const closestTag = closest(
      tagName,
      Object.keys((getTaglibLookup(tag.hub.file) as any).merged.tags),
    );
    if (distance(tagName, closestTag) < 4) {
      didYouMean = ` Did you mean \`<${closestTag}>\`?`;
    }
  }
  return tag
    .get("name")
    .buildCodeFrameError(
      `Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) \`<${tagName}>\`.${didYouMean}`,
    );
}

function importOrSelfReferenceName(
  file: t.BabelFile,
  request: string,
  name: string,
  nameHint?: string,
): t.Identifier {
  if (isCircularRequest(file, request)) {
    return t.identifier(name);
  }

  return importNamed(file, request, name, nameHint);
}

function buildLazyImport(
  importId: string,
  extract: (mod: t.Identifier) => t.Expression,
): t.ArrowFunctionExpression {
  const mod = t.identifier("mod");
  return t.arrowFunctionExpression(
    [],
    t.callExpression(
      t.memberExpression(
        t.callExpression(t.import(), [t.stringLiteral(importId)]),
        t.identifier("then"),
      ),
      [t.arrowFunctionExpression([mod], extract(mod))],
    ),
  );
}

function isCircularRequest(file: t.BabelFile, request: string) {
  const { filename } = file.opts;
  return (
    request === filename ||
    (request[0] === "." && path.resolve(filename, "..", request) === filename)
  );
}
