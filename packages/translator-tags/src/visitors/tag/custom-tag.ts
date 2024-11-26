import {
  assertAttributesOrSingleArg,
  getTagTemplate,
  importDefault,
  importNamed,
  isAttributeTag,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import path from "path";

import { getTagName } from "../../util/get-tag-name";
import { isOutputHTML } from "../../util/marko-config";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  getAttrTagIdentifier,
} from "../../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  dropReferences,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../../util/references";
import { callRuntime, importRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type Section,
  startSection,
} from "../../util/sections";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSerializedScopeProperties,
  initValue,
  setForceResumeScope,
  writeHTMLResumeStatements,
} from "../../util/signals";
import toPropertyName from "../../util/to-property-name";
import {
  addDynamicAttrTagStatements,
  getTranslatedRenderBodyProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import translateVar from "../../util/translate-var";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import {
  currentProgramPath,
  htmlRendererIdentifier,
  scopeIdentifier,
  type TemplateExport,
} from "../program";

type AttrTagGroup = AttrTagLookup[string]["group"];
const kChildScopeBinding = Symbol("custom tag child scope");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kChildScopeBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag) {
      assertAttributesOrSingleArg(tag);
      analyzeAttributeTags(tag);

      const templateFile = getTagTemplate(tag);
      if (!templateFile) {
        const tagName = getTagName(tag);
        if (tagName && tag.scope.hasBinding(tagName)) {
          throw tag
            .get("name")
            .buildCodeFrameError(
              `Local variables must in a dynamic tag unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
            );
        }
        throw tag
          .get("name")
          .buildCodeFrameError("Unable to find entry point for custom tag.");
      }

      const section = getOrCreateSection(tag);
      const tagBody = tag.get("body");
      const tagExtra = (tag.node.extra ??= {});
      startSection(tagBody);
      trackVarReferences(tag, BindingType.derived);
      trackParamsReferences(tagBody, BindingType.param);

      tagExtra[kChildScopeBinding] = createBinding(
        "#childScope",
        BindingType.dom,
        section,
        undefined,
        tagExtra,
      );

      const childFile = loadFileForTag(tag)!;
      if (childFile.opts.filename === tag.hub.file.opts.filename) {
        mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));
      } else {
        const childProgramExtra = childFile.ast.program.extra;
        analyzeAttrs(
          section,
          tag,
          childProgramExtra?.domExports!.params?.props?.[0],
        );
        // TODO: should check individual inputs to see if they are intersecting with state
        currentProgramPath.node.extra!.hasInteractiveChild =
          childProgramExtra?.isInteractive ||
          childProgramExtra?.hasInteractiveChild ||
          false;
      }
    },
  },
  translate: {
    enter(tag) {
      walks.visit(tag);
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
  const tagBody = tag.get("body");
  const { node } = tag;
  let tagIdentifier: t.Expression;

  writer.flushInto(tag);
  writeHTMLResumeStatements(tagBody);

  if (t.isStringLiteral(node.name)) {
    const relativePath = getTagRelativePath(tag);
    tagIdentifier = isCircularRequest(tag.hub.file, relativePath)
      ? htmlRendererIdentifier
      : importDefault(tag.hub.file, relativePath, getTagName(tag));
  } else {
    tagIdentifier = node.name;
  }

  const tagVar = node.var;
  const section = getSection(tag);
  const childScopeBinding = node.extra![kChildScopeBinding]!;
  const peekScopeId = tag.scope.generateUidIdentifier(childScopeBinding?.name);
  tag.insertBefore(
    t.variableDeclaration("const", [
      t.variableDeclarator(peekScopeId, callRuntime("peekNextScope")),
    ]),
  );

  getSerializedScopeProperties(section).set(
    getScopeAccessorLiteral(childScopeBinding),
    callRuntime("writeExistingScope", peekScopeId),
  );

  const inputExport =
    loadFileForTag(tag)?.ast.program.extra?.domExports?.params?.props?.[0];
  const { properties, statements } = inputExport
    ? translateAttrs(tag, inputExport.props)
    : {
        properties: [],
        statements: [],
      };

  if (node.extra!.tagNameNullable) {
    const renderBodyProp = getTranslatedRenderBodyProperty(properties);
    let renderBodyId: t.Identifier | undefined = undefined;

    if (renderBodyProp) {
      const renderBodyExpression = renderBodyProp.value;
      renderBodyProp.value = renderBodyId =
        tag.scope.generateUidIdentifier("renderBody");
      const [renderBodyPath] = tag.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            renderBodyId,
            // TODO: only register if needed (child template analysis)
            renderBodyExpression,
          ),
        ]),
      );
      renderBodyPath.skip();
    }

    let renderTagExpr: t.Expression = callExpression(
      tagIdentifier,
      propsToExpression(properties),
    );

    if (tagVar) {
      translateVar(tag, t.unaryExpression("void", t.numericLiteral(0)), "let");
      renderTagExpr = t.assignmentExpression("=", tagVar, renderTagExpr);
    }

    statements.push(
      t.ifStatement(
        tagIdentifier,
        t.expressionStatement(renderTagExpr),
        renderBodyId && callStatement(renderBodyId),
      ),
    );
  } else if (tagVar) {
    translateVar(
      tag,
      callExpression(
        tagIdentifier,
        propsToExpression(properties),
        callRuntime(
          "register",
          t.arrowFunctionExpression([], t.blockStatement([])),
          t.stringLiteral(
            getResumeRegisterId(
              section,
              (node.var as t.Identifier).extra?.binding, // TODO: node.var is not always an identifier.
            ),
          ),
          getScopeIdIdentifier(section),
        ),
      ),
    );
    setForceResumeScope(section);
  } else {
    statements.push(
      callStatement(tagIdentifier, propsToExpression(properties)),
    );
  }

  for (const replacement of tag.replaceWithMultiple(statements)) {
    replacement.skip();
  }
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const tagSection = getSection(tag);
  const { node } = tag;
  const extra = node.extra!;
  const childScopeBinding = extra[kChildScopeBinding]!;
  const write = writer.writeTo(tag);
  const { file } = tag.hub;
  const tagName = t.isIdentifier(node.name)
    ? node.name.name
    : t.isStringLiteral(node.name)
      ? node.name.value
      : "tag";
  const relativePath = getTagRelativePath(tag);
  const childFile = loadFileForTag(tag)!;
  const childExports = childFile.ast.program.extra!.domExports!;
  const tagIdentifier = importOrSelfReferenceName(
    file,
    relativePath,
    childExports.setup,
    tagName,
  );
  const inputExport = childExports.params?.props?.[0];
  if (inputExport) {
    writeAttrsToExports(tag, inputExport, `${getTagName(tag) || "tag"}_input`, {
      circular: childFile.opts.filename === file.opts.filename,
      tagSection,
      relativePath,
      childScopeBinding,
    });
  }

  write`${importNamed(file, relativePath, childExports.template, `${tagName}_template`)}`;
  walks.injectWalks(
    tag,
    importNamed(file, relativePath, childExports.walks, `${tagName}_walks`),
  );

  if (node.var) {
    const source = initValue(
      // TODO: support destructuring
      node.var.extra!.binding!,
    );
    source.register = true;
    source.buildAssignment = (_valueSection, value) => {
      return t.callExpression(importRuntime("tagVarSignalChange"), [
        createScopeReadExpression(source.section, childScopeBinding),
        value,
      ]);
    };
    addStatement(
      "render",
      tagSection,
      undefined,
      t.expressionStatement(
        callRuntime(
          "setTagVar",
          scopeIdentifier,
          getScopeAccessorLiteral(childScopeBinding),
          source.identifier,
        ),
      ),
    );
  }
  addStatement(
    "render",
    tagSection,
    undefined,
    t.expressionStatement(
      t.callExpression(tagIdentifier, [
        createScopeReadExpression(tagSection, childScopeBinding),
      ]),
    ),
  );
  tag.remove();
}

export function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
  const {
    node,
    hub: { file },
  } = tag;
  let relativePath: string | undefined;

  if (t.isStringLiteral(node.name)) {
    const template = getTagTemplate(tag);
    relativePath = template && resolveRelativePath(file, template);
  } else if (node.extra?.tagNameImported) {
    relativePath = node.extra.tagNameImported;
  }

  if (!relativePath) {
    const tagName = getTagName(tag);
    if (tagName && tag.scope.hasBinding(tagName)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Local variables must in a dynamic tag unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
        );
    }
    throw tag
      .get("name")
      .buildCodeFrameError("Unable to find entry point for custom tag.");
  }

  return relativePath;
}

function analyzeAttrs(
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  templateExport: TemplateExport | undefined,
) {
  if (!templateExport) {
    dropReferences(getAllTagReferenceNodes(tag.node));
    return;
  }

  if (!templateExport.props || tag.node.arguments?.length) {
    mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));
    return;
  }

  const attrTagLookup = analyzeAttributeTags(tag);
  const seen = new Set<string>();
  if (attrTagLookup) {
    const nodeReferencesByGroup = new Map<
      AttrTagGroup,
      { firstTag: t.NodePath<t.MarkoTag>; referenceNodes: t.Node[] }
    >();

    const analyzeDynamicChildGroup = (
      group: AttrTagGroup,
      child: t.NodePath<t.MarkoTag>,
    ) => {
      const referenceNodes = getAllTagReferenceNodes(child.node);
      const groupReferences = nodeReferencesByGroup.get(group);
      if (groupReferences) {
        groupReferences.referenceNodes =
          groupReferences.referenceNodes.concat(referenceNodes);
      } else {
        nodeReferencesByGroup.set(group, {
          firstTag: child,
          referenceNodes,
        });
      }
    };

    for (const attrTagName in attrTagLookup) {
      seen.add(attrTagLookup[attrTagName].name);
    }

    const attrTags = tag.node.body.attributeTags
      ? tag.get("body").get("body")
      : tag.get("attributeTags");
    for (const child of attrTags) {
      if (child.isMarkoTag()) {
        if (isAttributeTag(child)) {
          const attrTagMeta = attrTagLookup[getTagName(child)];
          const childAttrExports = templateExport.props[attrTagMeta.name];
          if (childAttrExports) {
            if (childAttrExports.props && !attrTagMeta.dynamic) {
              analyzeAttrs(section, child, childAttrExports);
            } else {
              analyzeDynamicChildGroup(attrTagMeta.group, child);
            }
          } else {
            dropReferences(getAllTagReferenceNodes(child.node));
          }
        } else {
          const group = child.node.extra!.attributeTagGroup!;
          let childUsesGroupProp = false;
          for (const name of group) {
            if (templateExport.props[attrTagLookup[name].name]) {
              childUsesGroupProp = true;
              break;
            }
          }

          if (childUsesGroupProp) {
            analyzeDynamicChildGroup(group, child);
          } else {
            dropReferences(getAllTagReferenceNodes(child.node));
          }
        }
      }
    }

    for (const { firstTag, referenceNodes } of nodeReferencesByGroup.values()) {
      mergeReferences(section, firstTag.node, referenceNodes);
    }
  }

  const { attributes } = tag.node;
  let spreadReferenceNodes: t.Node[] | undefined;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      if (seen.has(attr.name) || !templateExport.props[attr.name]) {
        // drop references for duplicated attributes and unused attributes.
        dropReferences(attr.value);
        continue;
      }

      seen.add(attr.name);
    }

    if (spreadReferenceNodes) {
      spreadReferenceNodes.push(attr.value);
    } else if (t.isMarkoSpreadAttribute(attr)) {
      spreadReferenceNodes = [attr.value];
    }
  }

  if (spreadReferenceNodes) {
    mergeReferences(section, tag.node, spreadReferenceNodes);
  }
}

function writeAttrsToExports(
  tag: t.NodePath<t.MarkoTag>,
  templateExport: TemplateExport,
  importAlias: string,
  info: {
    circular: boolean;
    tagSection: Section;
    relativePath: string;
    childScopeBinding: Binding;
  },
) {
  if (tag.node.arguments?.length) {
    // With arguments passed to a custom tag we supply the first arg and thats all.
    const [arg] = tag.node.arguments;
    const tagInputIdentifier = importOrSelfReferenceName(
      tag.hub.file,
      info.relativePath,
      templateExport.id,
      importAlias,
    );
    addValue(
      info.tagSection,
      // technically this should be `arg.extra?.referencedBindings`
      // but we should probably ensure all other references are dropped in this case before we do that.
      tag.node.extra?.referencedBindings,
      identifierToSignal(tagInputIdentifier),
      t.isSpreadElement(arg)
        ? t.memberExpression(arg.argument, t.numericLiteral(0))
        : arg,
      createScopeReadExpression(info.tagSection, info.childScopeBinding),
      callRuntime(
        "inChild",
        getScopeAccessorLiteral(info.childScopeBinding),
        t.identifier(tagInputIdentifier.name),
      ),
    );
    return;
  }

  if (!templateExport.props || info.circular) {
    const referencedBindings = tag.node.extra?.referencedBindings;
    const tagInputIdentifier = importOrSelfReferenceName(
      tag.hub.file,
      info.relativePath,
      templateExport.id,
      importAlias,
    );

    const translatedAttrs = translateAttrs(tag);

    if (translatedAttrs.statements.length) {
      addStatement(
        "render",
        info.tagSection,
        referencedBindings,
        translatedAttrs.statements,
      );
    }

    addValue(
      info.tagSection,
      referencedBindings,
      identifierToSignal(tagInputIdentifier),
      propsToExpression(translatedAttrs.properties),
      createScopeReadExpression(info.tagSection, info.childScopeBinding),
      callRuntime(
        "inChild",
        getScopeAccessorLiteral(info.childScopeBinding),
        t.identifier(tagInputIdentifier.name),
      ),
    );
    return;
  }

  const seen = new Set<string>();
  const attrTagLookup = analyzeAttributeTags(tag);
  if (attrTagLookup) {
    const attrTags = tag.get("attributeTags");
    const statementsByGroup = new Map<
      AttrTagGroup,
      {
        referencedBindings: t.NodeExtra["referencedBindings"];
        statements: t.Statement[];
      }
    >();

    const translateDynamicAttrTagChildInGroup = (
      group: AttrTagGroup,
      index: number,
    ) => {
      const child = attrTags[index];
      let statements = statementsByGroup.get(group)?.statements;
      if (!statements) {
        statements = [];
        statementsByGroup.set(group, {
          referencedBindings: child.node.extra?.referencedBindings,
          statements,
        });
      }

      return addDynamicAttrTagStatements(
        attrTags,
        index,
        attrTagLookup,
        statements,
        templateExport.props,
      );
    };

    for (const attrTagName in attrTagLookup) {
      seen.add(attrTagLookup[attrTagName].name);
    }

    for (let i = 0; i < attrTags.length; i++) {
      const child = attrTags[i];
      if (child.isMarkoTag()) {
        if (isAttributeTag(child)) {
          const attrTagMeta = attrTagLookup[getTagName(child)];
          const childAttrExport = templateExport.props[attrTagMeta.name];
          if (childAttrExport) {
            if (attrTagMeta.dynamic) {
              i = translateDynamicAttrTagChildInGroup(attrTagMeta.group, i);
            } else {
              writeAttrsToExports(
                child,
                childAttrExport,
                `${importAlias}_${attrTagMeta.name}`,
                info,
              );
            }
          }
        } else if (child.node.extra?.attributeTagGroup) {
          i = translateDynamicAttrTagChildInGroup(
            child.node.extra.attributeTagGroup,
            i,
          );
        }
      }
    }

    for (const [
      group,
      { referencedBindings, statements },
    ] of statementsByGroup) {
      const decls: t.VariableDeclaration["declarations"] = [];
      for (const name of group) {
        const attrTagMeta = attrTagLookup[name];
        const childAttrExports = templateExport.props[attrTagMeta.name];
        if (!childAttrExports) continue;
        const attrExportIdentifier = importOrSelfReferenceName(
          tag.hub.file,
          info.relativePath,
          childAttrExports.id,
          `${importAlias}_${attrTagMeta.name}`,
        );
        decls.push(t.variableDeclarator(getAttrTagIdentifier(attrTagMeta)));
        addValue(
          info.tagSection,
          referencedBindings,
          identifierToSignal(attrExportIdentifier),
          getAttrTagIdentifier(attrTagMeta),
          createScopeReadExpression(info.tagSection, info.childScopeBinding),
          callRuntime(
            "inChild",
            getScopeAccessorLiteral(info.childScopeBinding),
            t.identifier(attrExportIdentifier.name),
          ),
        );
      }

      addStatement("render", info.tagSection, referencedBindings, [
        t.variableDeclaration("let", decls),
        ...statements,
      ]);
    }
  }

  const bodySection = tag.node.body.extra?.section;
  if (bodySection && !seen.has("renderBody")) {
    seen.add("renderBody");
    if (templateExport.props.renderBody) {
      const renderBodyExportIdentifier = importNamed(
        tag.hub.file,
        info.relativePath,
        templateExport.props.renderBody.id,
        `${importAlias}_renderBody`,
      );
      addValue(
        info.tagSection,
        undefined, // TODO: pretty sure renderBody needs to have the reference group of it's param defaults.
        identifierToSignal(renderBodyExportIdentifier),
        t.callExpression(t.identifier(bodySection.name), [scopeIdentifier]),
        createScopeReadExpression(info.tagSection, info.childScopeBinding),
        callRuntime(
          "inChild",
          getScopeAccessorLiteral(info.childScopeBinding),
          t.identifier(renderBodyExportIdentifier.name),
        ),
      );
    }
  }

  const { attributes } = tag.node;
  const staticAttrs: t.MarkoAttribute[] = [];
  let spreadProps: t.ObjectExpression["properties"] | undefined;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      const childAttrExports = templateExport.props[attr.name];
      if (!childAttrExports || seen.has(attr.name)) continue;
      seen.add(attr.name);

      if (spreadProps) {
        spreadProps.push(
          t.objectProperty(toPropertyName(attr.name), attr.value),
        );
        continue;
      }

      staticAttrs.push(attr);
    } else if (spreadProps) {
      spreadProps.push(t.spreadElement(attr.value));
    } else {
      spreadProps = [t.spreadElement(attr.value)];
    }
  }

  for (const attr of staticAttrs.reverse()) {
    const childAttrExports = templateExport.props[attr.name];
    const attrExportIdentifier = importOrSelfReferenceName(
      tag.hub.file,
      info.relativePath,
      childAttrExports.id,
      `${importAlias}_${attr.name}`,
    );
    addValue(
      info.tagSection,
      attr.value.extra?.referencedBindings,
      identifierToSignal(attrExportIdentifier),
      attr.value,
      createScopeReadExpression(info.tagSection, info.childScopeBinding),
      callRuntime(
        "inChild",
        getScopeAccessorLiteral(info.childScopeBinding),
        t.identifier(attrExportIdentifier.name),
      ),
    );
  }

  const missing = new Set<string>(Object.keys(templateExport.props));
  for (const name of seen) missing.delete(name);

  if (missing.size) {
    const referencedBindings = tag.node.extra?.referencedBindings;
    let getMissingPropValue: (name: string) => t.Expression = buildUndefined;
    if (spreadProps) {
      const spreadId = tag.scope.generateUidIdentifier(`${importAlias}_spread`);
      spreadProps.reverse();
      getMissingPropValue = (name) =>
        t.memberExpression(spreadId, toPropertyName(name));
      addStatement("render", info.tagSection, referencedBindings, [
        t.variableDeclaration("const", [
          t.variableDeclarator(spreadId, propsToExpression(spreadProps)),
        ]),
      ]);
    }

    for (const name of missing) {
      const childAttrExports = templateExport.props[name]!;
      const attrExportIdentifier = importOrSelfReferenceName(
        tag.hub.file,
        info.relativePath,
        childAttrExports.id,
        `${importAlias}_${name}`,
      );
      addValue(
        info.tagSection,
        referencedBindings,
        identifierToSignal(attrExportIdentifier),
        getMissingPropValue(name),
        createScopeReadExpression(info.tagSection, info.childScopeBinding),
        callRuntime(
          "inChild",
          getScopeAccessorLiteral(info.childScopeBinding),
          t.identifier(attrExportIdentifier.name),
        ),
      );
    }
  }
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

function isCircularRequest(file: t.BabelFile, request: string) {
  const { filename } = file.opts;
  return (
    request === filename ||
    (request[0] === "." && path.resolve(filename, "..", request) === filename)
  );
}

function callStatement(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.expressionStatement(callExpression(id, ...args));
}

function callExpression(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.callExpression(id, args.filter(Boolean) as t.Expression[]);
}

function identifierToSignal(identifier: t.Identifier) {
  return {
    identifier,
    hasDownstreamIntersections: always,
  };
}

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}

function always() {
  return true;
}
