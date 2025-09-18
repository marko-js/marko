import { types as t } from "@marko/compiler";
import {
  assertAttributesOrSingleArg,
  getProgram,
  getTagTemplate,
  isAttributeTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { scopeIdentifier } from "../visitors/program";
import type { BindingPropTree } from "./binding-prop-tree";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getTagName } from "./get-tag-name";
import { isOptimize } from "./marko-config";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  getAttrTagIdentifier,
} from "./nested-attribute-tags";
import {
  filterMap,
  forEach,
  fromIter,
  type OneMany,
  type Opt,
} from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  createBinding,
  dropReferences,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  type InputBinding,
  mergeReferences,
  type ParamBinding,
  setBindingDownstream,
  trackParamsReferences,
  trackVarReferences,
} from "./references";
import { callRuntime, importRuntime } from "./runtime";
import { createScopeReadExpression } from "./scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  startSection,
} from "./sections";
import { getPropertySerializeGuard } from "./serialize-guard";
import {
  addBindingSerializeReasonExpr,
  getBindingSerializeReason,
} from "./serialize-reasons";
import {
  addStatement,
  getResumeRegisterId,
  initValue,
  setBindingSerializedValue,
  writeHTMLResumeStatements,
} from "./signals";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import {
  addDynamicAttrTagStatements,
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "./translate-attrs";
import translateVar from "./translate-var";
import * as writer from "./writer";

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

export function knownTagAnalyze(
  tag: t.NodePath<t.MarkoTag>,
  contentSection: Section,
  propTree: BindingPropTree | undefined,
) {
  assertAttributesOrSingleArg(tag);
  analyzeAttributeTags(tag);

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

  const varBinding = trackVarReferences(tag, BindingType.derived);
  const mutatesTagVar = !!(
    tag.node.var?.type === "Identifier" &&
    tag.scope.getBinding(tag.node.var.name)?.constantViolations.length
  );
  if (varBinding) {
    varBinding.scopeOffset = tagExtra[kChildOffsetScopeBinding] = createBinding(
      "#scopeOffset",
      BindingType.dom,
      section,
    );
  }

  const programExtra = getProgram().node.extra;
  if (programExtra.section === contentSection) {
    mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));

    if (varBinding) {
      const varSerializeReason = programExtra.returnValueExpr;
      setBindingDownstream(varBinding, varSerializeReason);
      addBindingSerializeReasonExpr(
        section,
        childScopeBinding,
        mutatesTagVar || varSerializeReason,
      );
    }
  } else {
    const childInputBinding = contentSection.params?.propertyAliases.get(
      "0",
    ) as undefined | InputBinding | ParamBinding;
    const inputExpr = analyzeAttrs(tagExtra, section, tag, propTree, attrExprs);

    if (varBinding) {
      const { returnSerializeReason } = contentSection;

      const varSerializeReason = mapChildReasonToLocalReason(
        returnSerializeReason &&
          (returnSerializeReason === true ||
            !!returnSerializeReason.state ||
            (returnSerializeReason.param as Opt<InputBinding>)),
        childInputBinding,
        inputExpr,
      );
      setBindingDownstream(varBinding, varSerializeReason);
      addBindingSerializeReasonExpr(
        section,
        childScopeBinding,
        mutatesTagVar || varSerializeReason,
      );
    }

    if (contentSection.paramReasonGroups) {
      const childInputSerializePropIds = (tagExtra[
        kChildInputSerializePropIds
      ] = [] as unknown as NonNullable<
        (typeof tagExtra)[typeof kChildInputSerializePropIds]
      >);
      for (const reason of contentSection.paramReasonGroups) {
        const propId = Symbol();
        childInputSerializePropIds.push(propId);
        addBindingSerializeReasonExpr(
          section,
          childScopeBinding,
          mapChildReasonToLocalReason(
            reason as OneMany<InputBinding>,
            childInputBinding,
            inputExpr,
          ),
          propId,
        );
      }
    }
  }

  addBindingSerializeReasonExpr(
    section,
    childScopeBinding,
    fromIter(attrExprs),
  );
}

export function knownTagTranslateHTML(
  tag: t.NodePath<t.MarkoTag>,
  tagIdentifier: t.Expression,
  contentSection: Section,
  propTree: BindingPropTree | undefined,
) {
  const tagBody = tag.get("body");
  const { node } = tag;
  const tagExtra = node.extra!;

  writer.flushInto(tag);
  writeHTMLResumeStatements(tagBody);

  const tagVar = node.var;
  const section = getSection(tag);
  const { properties, statements } = propTree
    ? translateAttrs(tag, propTree.props)
    : {
        properties: [],
        statements: [],
      };

  const childScopeBinding = tagExtra[kChildScopeBinding]!;
  const childScopeSerializeReason = getBindingSerializeReason(
    section,
    childScopeBinding,
  );

  const childInputSerializePropIds = tagExtra[kChildInputSerializePropIds];
  const childSerializeReasonExpr =
    childInputSerializePropIds &&
    getPropertySerializeGuard(
      section,
      contentSection,
      childScopeBinding,
      childInputSerializePropIds,
    );

  if (childScopeSerializeReason) {
    const peekScopeId = generateUidIdentifier(childScopeBinding?.name);
    tag.insertBefore(
      t.variableDeclaration("const", [
        t.variableDeclarator(peekScopeId, callRuntime("_peek_scope_id")),
      ]),
    );

    setBindingSerializedValue(
      section,
      childScopeBinding,
      callRuntime("_existing_scope", peekScopeId),
    );

    if (tagVar) {
      statements.push(
        t.expressionStatement(
          callRuntime(
            "_var",
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

  if (childSerializeReasonExpr) {
    statements.push(
      t.expressionStatement(
        callRuntime("_set_serialize_reason", childSerializeReasonExpr),
      ),
    );
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
      callExpression(tagIdentifier, propsToExpression(properties)),
      "let",
    );
  } else {
    statements.push(
      callStatement(tagIdentifier, propsToExpression(properties)),
    );
  }

  for (const replacement of tag.replaceWithMultiple(statements)) {
    replacement.skip();
  }
}

export function knownTagTranslateDOM(
  tag: t.NodePath<t.MarkoTag>,
  tagIdentifier: t.Expression,
  contentSection: Section,
  propTree: BindingPropTree | undefined,
  getBindingIdentifier: (
    binding: Binding,
    preferedName?: string,
  ) => t.Identifier,
) {
  const tagSection = getSection(tag);
  const { node } = tag;
  const extra = node.extra!;
  const childScopeBinding = extra[kChildScopeBinding]!;

  if (node.var) {
    const varBinding = node.var.extra!.binding!;
    const source = initValue(
      // TODO: support destructuring
      varBinding,
    );
    source.register = true;
    source.buildAssignment = (valueSection, value) => {
      const changeArgs = [
        createScopeReadExpression(valueSection, childScopeBinding),
        value,
      ];
      if (!isOptimize()) {
        changeArgs.push(t.stringLiteral(varBinding.name));
      }
      return t.callExpression(importRuntime("_var_change"), changeArgs);
    };
    addStatement(
      "render",
      tagSection,
      undefined,
      t.expressionStatement(
        callRuntime(
          "_var",
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

  if (propTree) {
    writeAttrsToExports(tag, propTree, `${getTagName(tag) || "tag"}_input`, {
      circular: getProgram().node.extra.section === contentSection,
      tagSection,
      getBindingIdentifier,
      childScopeBinding,
      attrTagCallsByTag: undefined,
    });
  }
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
          `Local variables must be in a [dynamic tag](https://markojs.com/docs/reference/language#dynamic-tags) unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
        );
    }
    throw tag
      .get("name")
      .buildCodeFrameError(
        `Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) \`<${tagName}>\`.`,
      );
  }

  return relativePath;
}

function analyzeAttrs(
  rootTagExtra: t.MarkoTagExtra,
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  templateExport: BindingPropTree | undefined,
  rootAttrExprs: Set<t.NodeExtra>,
): InputExpr {
  const inputExpr: InputExpr = {};
  if (!templateExport) {
    dropReferences(getAllTagReferenceNodes(tag.node));
    return inputExpr;
  }

  if (!templateExport.props || tag.node.arguments?.length) {
    const extra = (inputExpr.value = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    ));

    setBindingDownstream(templateExport.binding, extra);
    return inputExpr;
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
            const childBodySection = startSection(child.get("body"));
            if (childBodySection) {
              childBodySection.downstreamBinding = childAttrExports.binding;
            }

            if (childAttrExports.props && !attrTagMeta.dynamic) {
              known[attrTagMeta.name] = analyzeAttrs(
                rootTagExtra,
                section,
                child,
                childAttrExports,
                rootAttrExprs,
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
      let bindings: Opt<Binding>;
      rootAttrExprs.add(groupExtra);

      for (const tagName of group) {
        const attrName = tagName.slice(1);
        const templateExportAttr = templateExport.props[attrName];
        if (!templateExportAttr) {
          bindings = templateExport.binding;
          break;
        }

        bindings = bindingUtil.add(bindings, templateExportAttr.binding);
      }

      if (bindings) {
        forEach(bindings, (binding) => {
          setBindingDownstream(binding, groupExtra);
        });
      }

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
      const templateExportAttr = templateExport.props[attr.name];
      if (!templateExportAttr || seen.has(attr.name)) {
        // drop references for duplicated attributes and unused attributes.
        dropReferences(attr.value);
        continue;
      }

      seen.add(attr.name);
      setBindingDownstream(
        templateExportAttr.binding,
        (attr.value.extra ??= {}),
      );
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
    const extra = (inputExpr.value = mergeReferences(
      section,
      tag.node,
      spreadReferenceNodes,
    ));
    let spreadBinding = templateExport.binding;
    if (seen.size) {
      spreadBinding = createBinding(
        generateUid(`${getTagName(tag)}_attrs`),
        spreadBinding.type,
        spreadBinding.section,
        spreadBinding,
        undefined,
        fromIter(seen),
        spreadReferenceNodes[0].loc,
        true,
      );
    }

    setBindingDownstream(spreadBinding, extra);
  }

  return inputExpr;
}

function writeAttrsToExports(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  importAlias: string,
  info: {
    circular: boolean;
    tagSection: Section;
    getBindingIdentifier: (
      binding: Binding,
      preferedName?: string,
    ) => t.Identifier;
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
    const tagInputIdentifier = info.getBindingIdentifier(
      propTree.binding,
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

  if (!propTree.props || info.circular) {
    const referencedBindings = tag.node.extra?.referencedBindings;
    const tagInputIdentifier = info.getBindingIdentifier(
      propTree.binding,
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
        propTree.props,
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
          const childAttrExport = propTree.props[attrTagMeta.name];
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
        const childAttrExports = propTree.props[attrTagMeta.name];
        if (!childAttrExports) continue;
        const attrExportIdentifier = info.getBindingIdentifier(
          childAttrExports.binding,
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
    if (propTree.props.content) {
      const contentExportIdentifier = info.getBindingIdentifier(
        propTree.props.content.binding,
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
      const childAttrExports = propTree.props[attr.name];
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
    const childAttrExports = propTree.props[attr.name];
    const attrExportIdentifier = info.getBindingIdentifier(
      childAttrExports.binding,
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

  const missing = new Set<string>(Object.keys(propTree.props));
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
      const childAttrExports = propTree.props[name]!;
      const attrExportIdentifier = info.getBindingIdentifier(
        childAttrExports.binding,
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

function mapChildReasonToLocalReason(
  childReason: boolean | Opt<InputBinding | ParamBinding>,
  childInputBinding: InputBinding | ParamBinding | undefined,
  inputExpr: InputExpr,
) {
  if (childReason) {
    if (childReason === true) return true;
    return filterMap(childReason, (inputBinding) =>
      resolveAttrExpr(childInputBinding!, inputBinding, inputExpr),
    );
  }
}

function resolveAttrExpr(
  inputBinding: InputBinding | ParamBinding,
  propBinding: InputBinding | ParamBinding,
  expr: InputExpr | undefined,
) {
  if (expr) {
    let curExpr = expr;

    if (inputBinding !== propBinding) {
      const props = [propBinding.property!];
      let curBinding = propBinding;
      while (
        inputBinding !==
        (curBinding = curBinding.upstreamAlias as InputBinding | ParamBinding)
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
