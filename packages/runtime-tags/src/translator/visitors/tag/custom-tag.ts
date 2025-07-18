import { types as t } from "@marko/compiler";
import {
  assertAttributesOrSingleArg,
  getProgram,
  getTagTemplate,
  importDefault,
  importNamed,
  isAttributeTag,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import path from "path";

import { generateUidIdentifier } from "../../util/generate-uid";
import { getTagName } from "../../util/get-tag-name";
import { isOutputHTML } from "../../util/marko-config";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  getAttrTagIdentifier,
} from "../../util/nested-attribute-tags";
import { filterMap, fromIter, mapToString } from "../../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  dropReferences,
  getAllTagReferenceNodes,
  getInputDebugName,
  getScopeAccessorLiteral,
  type InputBinding,
  mergeReferences,
  setBindingValueExpr,
  trackParamsReferences,
  trackVarReferences,
} from "../../util/references";
import { callRuntime, importRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  startSection,
} from "../../util/sections";
import {
  addBindingSerializeReasonExpr,
  getBindingSerializeReason,
} from "../../util/serialize-reasons";
import {
  addStatement,
  getResumeRegisterId,
  initValue,
  setBindingSerializedValue,
  writeHTMLResumeStatements,
} from "../../util/signals";
import {
  toMemberExpression,
  toObjectProperty,
} from "../../util/to-property-name";
import {
  addDynamicAttrTagStatements,
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import translateVar from "../../util/translate-var";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import { withLeadingComment } from "../../util/with-comment";
import * as writer from "../../util/writer";
import {
  type InputSerializeReason,
  scopeIdentifier,
  type TemplateExport,
} from "../program";
import { getSerializeGuard, getTemplateContentName } from "../program/html";

type AttrTagGroup = AttrTagLookup[string]["group"];
interface InputExpr {
  known?: Record<string, InputExpr>;
  value?: t.NodeExtra;
}

const kChildScopeBinding = Symbol("custom tag child scope");
const kChildOffsetScopeBinding = Symbol("custom tag scope offset");
const kChildInputSerializePropIds = Symbol(
  "custom tag child serialize reasons",
);

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kChildScopeBinding]?: Binding;
    [kChildOffsetScopeBinding]?: Binding;
    [kChildInputSerializePropIds]?: [symbol, ...symbol[]];
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
              `Local variables must be in a dynamic tag unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
            );
        }
        throw tag
          .get("name")
          .buildCodeFrameError("Unable to find entry point for custom tag.");
      }

      const section = getOrCreateSection(tag);
      const tagBody = tag.get("body");
      const tagExtra = (tag.node.extra ??= {});
      const childScopeBinding = (tagExtra[kChildScopeBinding] = createBinding(
        "#childScope",
        BindingType.dom,
        section,
      ));
      const attrExprs = new Set([tagExtra]);
      startSection(tagBody);
      trackParamsReferences(tagBody, BindingType.param);

      const childFile = loadFileForTag(tag);

      if (!childFile) {
        throw tag
          .get("name")
          .buildCodeFrameError("Unable to resolve file for tag.");
      }

      const varBinding = trackVarReferences(tag, BindingType.derived);
      if (varBinding) {
        varBinding.scopeOffset = tagExtra[kChildOffsetScopeBinding] =
          createBinding("#scopeOffset", BindingType.dom, section);
      }

      if (childFile.opts.filename === tag.hub.file.opts.filename) {
        mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));

        if (varBinding) {
          const varSerializeReason = getProgram().node.extra.returnValueExpr;
          setBindingValueExpr(varBinding, varSerializeReason);
          addBindingSerializeReasonExpr(
            section,
            childScopeBinding,
            varSerializeReason,
          );
        }
      } else {
        const childProgram = childFile.ast.program;
        const childExtra = childProgram.extra;
        const childInputBinding = childProgram.params[0].extra?.binding as
          | undefined
          | InputBinding;
        const inputExpr: InputExpr = {};
        analyzeAttrs(
          tagExtra,
          section,
          tag,
          childExtra?.domExports!.input,
          attrExprs,
          inputExpr,
        );

        if (varBinding) {
          const varSerializeReason = mapChildReasonToLocalReason(
            childExtra.returnSerializeReason,
            childInputBinding,
            inputExpr,
          );
          setBindingValueExpr(varBinding, varSerializeReason);
          addBindingSerializeReasonExpr(
            section,
            childScopeBinding,
            varSerializeReason,
          );
        }

        if (childExtra.inputSerializeReasons) {
          const childInputSerializePropIds = (tagExtra[
            kChildInputSerializePropIds
          ] = [] as unknown as NonNullable<
            (typeof tagExtra)[typeof kChildInputSerializePropIds]
          >);
          for (const reason of childExtra.inputSerializeReasons) {
            const propId = Symbol();
            childInputSerializePropIds.push(propId);
            addBindingSerializeReasonExpr(
              section,
              childScopeBinding,
              mapChildReasonToLocalReason(reason, childInputBinding, inputExpr),
              propId,
            );
          }
        }
        // TODO: should check individual inputs to see if they are intersecting with state
        getProgram().node.extra!.hasInteractiveChild =
          childExtra?.isInteractive || childExtra?.hasInteractiveChild || false;
      }

      addBindingSerializeReasonExpr(
        section,
        childScopeBinding,
        fromIter(attrExprs),
      );
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
  const tagExtra = node.extra!;
  let tagIdentifier: t.Expression;

  writer.flushInto(tag);
  writeHTMLResumeStatements(tagBody);

  if (t.isStringLiteral(node.name)) {
    const relativePath = getTagRelativePath(tag);
    tagIdentifier = isCircularRequest(tag.hub.file, relativePath)
      ? t.identifier(getTemplateContentName())
      : importDefault(tag.hub.file, relativePath, getTagName(tag));
  } else {
    tagIdentifier = node.name;
  }

  const tagVar = node.var;
  const section = getSection(tag);
  const childProgram = loadFileForTag(tag)!.ast.program;
  const childExtra = childProgram.extra;
  const inputExport = childExtra.domExports?.input;
  const { properties, statements } = inputExport
    ? translateAttrs(tag, inputExport.props)
    : {
        properties: [],
        statements: [],
      };

  const childScopeBinding = tagExtra[kChildScopeBinding]!;
  const childScopeSerializeReason = getBindingSerializeReason(
    section,
    childScopeBinding,
  );
  const childSerializeReasonIds = tagExtra[kChildInputSerializePropIds];
  let childSerializeReasonExpr: t.Expression | undefined;

  if (childSerializeReasonIds) {
    if (childSerializeReasonIds.length === 1) {
      // Special case single reason to pass either 1 or undefined.
      const reason = getBindingSerializeReason(
        section,
        childScopeBinding,
        childSerializeReasonIds[0],
      );
      childSerializeReasonExpr = !reason
        ? undefined
        : reason == true || reason.state
          ? t.numericLiteral(1)
          : getSerializeGuard(reason, true);
    } else {
      const props: t.ObjectExpression["properties"] = [];
      let hasDynamicReasons = false;
      let hasSkippedReasons = false;
      for (let i = 0; i < childSerializeReasonIds.length; i++) {
        const reason = getBindingSerializeReason(
          section,
          childScopeBinding,
          childSerializeReasonIds[i],
        );
        if (reason) {
          hasDynamicReasons ||= reason !== true && !reason.state;
          const childReason = childExtra.inputSerializeReasons![i];
          props.push(
            t.objectProperty(
              withLeadingComment(
                t.numericLiteral(i),
                mapToString(childReason, ", ", getInputDebugName),
              ),
              reason === true || reason.state
                ? t.numericLiteral(1)
                : getSerializeGuard(reason, false)!,
            ),
          );
        } else {
          hasSkippedReasons = true;
        }
      }

      if (props.length) {
        childSerializeReasonExpr =
          hasDynamicReasons || hasSkippedReasons
            ? t.objectExpression(props)
            : t.numericLiteral(1);
      }
    }
  }

  if (childScopeSerializeReason) {
    const peekScopeId = generateUidIdentifier(childScopeBinding?.name);
    tag.insertBefore(
      t.variableDeclaration("const", [
        t.variableDeclarator(peekScopeId, callRuntime("peekNextScopeId")),
      ]),
    );

    setBindingSerializedValue(
      section,
      childScopeBinding,
      callRuntime("writeExistingScope", peekScopeId),
    );

    if (tagVar) {
      statements.push(
        t.expressionStatement(
          callRuntime(
            "setTagVar",
            getScopeIdIdentifier(section),
            getScopeAccessorLiteral(tag.node.extra![kChildOffsetScopeBinding]!),
            peekScopeId,
            t.stringLiteral(
              getResumeRegisterId(
                section,
                (node.var as t.Identifier).extra?.binding, // TODO: node.var is not always an identifier.
                "var",
              ),
            ),
          ),
        ),
      );
    }
  }

  if (node.extra!.tagNameNullable) {
    const contentProp = getTranslatedBodyContentProperty(properties);
    let contentId: t.Identifier | undefined = undefined;

    if (contentProp) {
      const contentExpression = contentProp.value;
      contentProp.value = contentId = generateUidIdentifier("content");
      const [contentPath] = tag.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            contentId,
            // TODO: only register if needed (child template analysis)
            contentExpression,
          ),
        ]),
      );
      contentPath.skip();
    }

    let renderTagExpr: t.Expression = callExpression(
      tagIdentifier,
      propsToExpression(properties),
      childSerializeReasonExpr,
    );

    if (tagVar) {
      translateVar(tag, t.unaryExpression("void", t.numericLiteral(0)), "let");
      renderTagExpr = t.assignmentExpression("=", tagVar, renderTagExpr);
    }

    statements.push(
      t.ifStatement(
        tagIdentifier,
        t.expressionStatement(renderTagExpr),
        contentId && callStatement(contentId),
      ),
    );
  } else if (tagVar) {
    translateVar(
      tag,
      callExpression(
        tagIdentifier,
        propsToExpression(properties),
        childSerializeReasonExpr,
      ),
      "let",
    );
  } else {
    statements.push(
      callStatement(
        tagIdentifier,
        propsToExpression(properties),
        childSerializeReasonExpr,
      ),
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
  const inputExport = childExports.input;

  if (node.var) {
    const source = initValue(
      // TODO: support destructuring
      node.var.extra!.binding!,
    );
    source.register = true;
    source.buildAssignment = (valueSection, value) => {
      return t.callExpression(importRuntime("tagVarSignalChange"), [
        createScopeReadExpression(valueSection, childScopeBinding),
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

  if (inputExport) {
    writeAttrsToExports(tag, inputExport, `${getTagName(tag) || "tag"}_input`, {
      circular: childFile.opts.filename === file.opts.filename,
      tagSection,
      relativePath,
      childScopeBinding,
      attrTagCallsByTag: undefined,
    });
  }

  write`${importNamed(file, relativePath, childExports.template, `${tagName}_template`)}`;
  walks.injectWalks(
    tag,
    importNamed(file, relativePath, childExports.walks, `${tagName}_walks`),
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
          `Local variables must be in a dynamic tag unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
        );
    }
    throw tag
      .get("name")
      .buildCodeFrameError("Unable to find entry point for custom tag.");
  }

  return relativePath;
}

function analyzeAttrs(
  rootTagExtra: t.MarkoTagExtra,
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  templateExport: TemplateExport | undefined,
  rootAttrExprs: Set<t.NodeExtra>,
  inputExpr: InputExpr,
) {
  if (!templateExport) {
    dropReferences(getAllTagReferenceNodes(tag.node));
    return;
  }

  if (!templateExport.props || tag.node.arguments?.length) {
    inputExpr.value = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );
    return;
  }

  const known: NonNullable<InputExpr["known"]> = (inputExpr.known = {});
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
              analyzeAttrs(
                rootTagExtra,
                section,
                child,
                childAttrExports,
                rootAttrExprs,
                (known[attrTagMeta.name] = {}),
              );
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

    for (const [
      group,
      {
        firstTag: { node },
        referenceNodes,
      },
    ] of nodeReferencesByGroup) {
      const groupExtra = mergeReferences(section, node, referenceNodes);
      const groupKnownValue: InputExpr = { value: groupExtra };
      rootAttrExprs.add(groupExtra);

      for (const name of group) {
        known[attrTagLookup[name].name] = groupKnownValue;
      }
    }
  }

  if (!seen.has("content")) {
    const bodySection = getSectionForBody(tag.get("body"));
    if (bodySection) {
      seen.add("content");
      known.content = { value: undefined }; // Should probably be default params extra.
      bodySection.downstreamBinding = (
        templateExport.props.content || templateExport.props
      ).binding;
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
    } else {
      const attrValueExtra = (attr.value.extra ??= {});
      known[attr.name] = { value: attrValueExtra };
      rootAttrExprs.add(attrValueExtra);
    }
  }

  if (spreadReferenceNodes) {
    inputExpr.value = mergeReferences(section, tag.node, spreadReferenceNodes);
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
    attrTagCallsByTag:
      | undefined
      | Map<
          t.NodePath<t.MarkoTag>,
          Map<
            string,
            t.ParenthesizedExpression & { expression: t.CallExpression }
          >
        >;
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
    addStatement(
      "render",
      info.tagSection,
      // technically this should be `arg.extra?.referencedBindings`
      // but we should probably ensure all other references are dropped in this case before we do that.
      tag.node.extra?.referencedBindings,
      t.expressionStatement(
        t.callExpression(tagInputIdentifier, [
          createScopeReadExpression(info.tagSection, info.childScopeBinding),
          t.isSpreadElement(arg)
            ? t.memberExpression(arg.argument, t.numericLiteral(0), true)
            : arg,
        ]),
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

    let translatedProps = propsToExpression(translatedAttrs.properties);
    if (isAttributeTag(tag)) {
      const attrTagName = getTagName(tag);
      const parentTag = tag.parentPath as t.NodePath<t.MarkoTag>;
      const repeated = analyzeAttributeTags(parentTag)?.[attrTagName]?.repeated;

      if (repeated) {
        let attrTagCallsForTag = (info.attrTagCallsByTag ||= new Map()).get(
          parentTag,
        );
        if (!attrTagCallsForTag) {
          info.attrTagCallsByTag.set(
            parentTag,
            (attrTagCallsForTag = new Map()),
          );
        }

        const attrTagCall = attrTagCallsForTag.get(attrTagName);
        if (attrTagCall) {
          attrTagCall.expression = callRuntime(
            "attrTags",
            attrTagCall.expression,
            translatedProps,
          );
          return;
        } else {
          // Uses parenthesized expressions since they are simple to mutate after the fact
          // and do not impact the output.
          attrTagCallsForTag.set(
            attrTagName,
            (translatedProps = t.parenthesizedExpression(
              callRuntime("attrTag", translatedProps),
            ) as t.ParenthesizedExpression & {
              expression: t.CallExpression;
            }),
          );
        }
      } else {
        translatedProps = callRuntime("attrTag", translatedProps);
      }
    }

    addStatement(
      "render",
      info.tagSection,
      referencedBindings,
      t.expressionStatement(
        t.callExpression(tagInputIdentifier, [
          createScopeReadExpression(info.tagSection, info.childScopeBinding),
          translatedProps,
        ]),
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
        addStatement("render", info.tagSection, referencedBindings, [
          t.variableDeclaration("let", decls),
          ...statements,
        ]);
        addStatement(
          "render",
          info.tagSection,
          referencedBindings,
          t.expressionStatement(
            t.callExpression(attrExportIdentifier, [
              createScopeReadExpression(
                info.tagSection,
                info.childScopeBinding,
              ),
              getAttrTagIdentifier(attrTagMeta),
            ]),
          ),
        );
      }
    }
  }

  const bodySection = tag.node.body.extra?.section;
  if (bodySection && !seen.has("content")) {
    seen.add("content");
    if (templateExport.props.content) {
      const contentExportIdentifier = importNamed(
        tag.hub.file,
        info.relativePath,
        templateExport.props.content.id,
        `${importAlias}_content`,
      );
      addStatement(
        "render",
        info.tagSection,
        undefined, // TODO: pretty sure content needs to have the reference group of it's param defaults.
        t.expressionStatement(
          t.callExpression(contentExportIdentifier, [
            createScopeReadExpression(info.tagSection, info.childScopeBinding),
            t.callExpression(t.identifier(bodySection.name), [scopeIdentifier]),
          ]),
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
        spreadProps.push(toObjectProperty(attr.name, attr.value));
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
    addStatement(
      "render",
      info.tagSection,
      attr.value.extra?.referencedBindings,
      t.expressionStatement(
        t.callExpression(attrExportIdentifier, [
          createScopeReadExpression(info.tagSection, info.childScopeBinding),
          attr.value,
        ]),
      ),
    );
  }

  const missing = new Set<string>(Object.keys(templateExport.props));
  for (const name of seen) missing.delete(name);

  if (missing.size) {
    const referencedBindings = tag.node.extra?.referencedBindings;
    let getMissingPropValue: (name: string) => t.Expression = buildUndefined;
    if (spreadProps) {
      const spreadId = generateUidIdentifier(`${importAlias}_spread`);
      spreadProps.reverse();
      getMissingPropValue = (name) => toMemberExpression(spreadId, name);
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
      addStatement(
        "render",
        info.tagSection,
        referencedBindings,
        t.expressionStatement(
          t.callExpression(attrExportIdentifier, [
            createScopeReadExpression(info.tagSection, info.childScopeBinding),
            getMissingPropValue(name),
          ]),
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

function mapChildReasonToLocalReason(
  childReason: undefined | boolean | InputSerializeReason,
  childInputBinding: InputBinding | undefined,
  inputExpr: InputExpr,
) {
  if (childReason) {
    if (childReason === true) return true;
    return filterMap(childReason, (inputBinding) =>
      resolveChildInputExpr(childInputBinding!, inputBinding, inputExpr),
    );
  }
}

function resolveChildInputExpr(
  inputBinding: InputBinding,
  propBinding: InputBinding,
  expr: InputExpr | undefined,
) {
  if (expr) {
    let curExpr = expr;

    if (inputBinding !== propBinding) {
      const props = [propBinding.property!];
      let curBinding = propBinding;
      while (
        inputBinding !== (curBinding = curBinding.upstreamAlias as InputBinding)
      ) {
        props.push(curBinding.property!);
      }

      for (let i = props.length; i--; ) {
        const nestedExpr = curExpr.known?.[props[i]];
        if (nestedExpr) {
          curExpr = nestedExpr;
        } else {
          break;
        }
      }
    }

    return curExpr.value;
  }
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

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}

export function getChildScopeBinding(path: t.NodePath<t.MarkoTag>) {
  return path.node.extra![kChildScopeBinding]!;
}
