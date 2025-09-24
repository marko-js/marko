import { types as t } from "@marko/compiler";
import {
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
  mapToString,
  type Opt,
} from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  createBinding,
  dropReferences,
  getAllTagReferenceNodes,
  getDebugName,
  getInputDebugName,
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
import { getSerializeGuard } from "./serialize-guard";
import {
  addBindingSerializeReasonExpr,
  getBindingSerializeReason,
  getSerializeSourcesForExprs,
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
import { withLeadingComment } from "./with-comment";
import * as writer from "./writer";

type AttrTagGroup = AttrTagLookup[string]["group"];
interface KnownExprs {
  known?: Record<string, KnownExprs>;
  value?: t.NodeExtra;
}

const kChildScopeBinding = Symbol("custom tag child scope");
const kChildOffsetScopeBinding = Symbol("custom tag scope offset");
const kKnownExprs = Symbol("known exprs");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kChildScopeBinding]?: Binding;
    [kChildOffsetScopeBinding]?: Binding;
    [kKnownExprs]?: KnownExprs;
  }
}

export function knownTagAnalyze(
  tag: t.NodePath<t.MarkoTag>,
  contentSection: Section,
  propTree: BindingPropTree | undefined,
) {
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

  const exprs = (tagExtra[kKnownExprs] = analyzeParams(
    tagExtra,
    section,
    tag,
    propTree,
    attrExprs,
  ));

  if (varBinding) {
    const { returnSerializeReason } = contentSection;

    const varExpr = mapParamReasonToExpr(
      exprs,
      contentSection.params,
      returnSerializeReason &&
        (returnSerializeReason === true ||
          !!returnSerializeReason.state ||
          (returnSerializeReason.param as Opt<InputBinding>)),
    );
    setBindingDownstream(varBinding, varExpr);
    addBindingSerializeReasonExpr(
      section,
      childScopeBinding,
      mutatesTagVar || varExpr,
    );
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

  const attrsPropTree = propTree?.props?.[tag.node.arguments?.length || 0];
  const { properties, statements } =
    (propTree && !propTree.props) || attrsPropTree
      ? translateAttrs(tag, attrsPropTree?.props)
      : {
          properties: [],
          statements: [],
        };

  const childScopeBinding = tagExtra[kChildScopeBinding]!;
  const childScopeSerializeReason = getBindingSerializeReason(
    section,
    childScopeBinding,
  );

  const childSerializeReasonExpr = getParamGroupsSerializeGuard(
    contentSection,
    tagExtra[kKnownExprs]!,
    contentSection.params,
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

  // TODO: make this better
  const getArgs = () => {
    let renderArgs: (t.Expression | t.SpreadElement)[] = [];
    if (tag.node.arguments) {
      renderArgs = [...renderArgs, ...tag.node.arguments];
    }
    if (!tag.node.arguments?.length || properties.length) {
      renderArgs.push(propsToExpression(properties));
    }
    return renderArgs;
  };

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
      ...getArgs(),
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
    translateVar(tag, callExpression(tagIdentifier, ...getArgs()), "let");
  } else {
    statements.push(callStatement(tagIdentifier, ...getArgs()));
  }

  for (const replacement of tag.replaceWithMultiple(statements)) {
    replacement.skip();
  }
}

export function knownTagTranslateDOM(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree | undefined,
  getBindingIdentifier: (
    binding: Binding,
    preferedName?: string,
  ) => t.Identifier,
  callSetup: (section: Section, childBinding: Binding) => void,
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
  callSetup(tagSection, childScopeBinding);

  if (propTree) {
    writeParamsToSignals(tag, propTree, getTagName(tag) || "tag", {
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

function analyzeParams(
  rootTagExtra: t.MarkoTagExtra,
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree | undefined,
  rootAttrExprs: Set<t.NodeExtra>,
): KnownExprs {
  const inputExpr: KnownExprs = {};
  if (!propTree) {
    dropReferences(getAllTagReferenceNodes(tag.node));
    return inputExpr;
  }

  if (
    !propTree.props ||
    tag.node.arguments?.some((node) => t.isSpreadElement(node))
  ) {
    const extra = (inputExpr.value = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    ));

    setBindingDownstream(propTree.binding, extra);
    return inputExpr;
  }

  const known: NonNullable<KnownExprs["known"]> = (inputExpr.known = {});

  let i = 0;
  if (tag.node.arguments) {
    for (const arg of tag.node.arguments) {
      const argExport = propTree.props[i];
      if (!argExport) {
        // drop references for duplicated attributes and unused attributes.
        dropReferences(arg);
        continue;
      }

      const argValueExtra = (arg.extra ??= {});
      known[i++] = { value: argValueExtra };
      rootAttrExprs.add(argValueExtra);
    }
  }

  const attrPropsTree = propTree.props[i];
  if (attrPropsTree) {
    known[i] = analyzeAttrs(
      rootTagExtra,
      section,
      tag,
      attrPropsTree,
      rootAttrExprs,
    );
  } else {
    const args = tag.node.arguments;
    tag.node.arguments = null;
    dropReferences(getAllTagReferenceNodes(tag.node));
    tag.node.arguments = args;
  }

  return inputExpr;
}

function analyzeAttrs(
  rootTagExtra: t.MarkoTagExtra,
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  rootAttrExprs: Set<t.NodeExtra>,
): KnownExprs {
  const inputExpr: KnownExprs = {};
  if (!propTree.props) {
    const extra = (inputExpr.value = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    ));

    setBindingDownstream(propTree.binding, extra);
    return inputExpr;
  }

  const known: NonNullable<KnownExprs["known"]> = (inputExpr.known = {});
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
          const childAttrExports = propTree.props[attrTagMeta.name];
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
            if (propTree.props[attrTagLookup[name].name]) {
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
      const groupKnownValue: KnownExprs = { value: groupExtra };
      let bindings: Opt<Binding>;
      rootAttrExprs.add(groupExtra);

      for (const tagName of group) {
        const attrName = tagName.slice(1);
        const templateExportAttr = propTree.props[attrName];
        if (!templateExportAttr) {
          bindings = propTree.binding;
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
        propTree.props.content || propTree.props
      ).binding;
    }
  }

  const { attributes } = tag.node;
  let spreadReferenceNodes: t.Node[] | undefined;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      const templateExportAttr = propTree.props[attr.name];
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
    let spreadBinding = propTree.binding;
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

function writeParamsToSignals(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  importAlias: string,
  info: {
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
  if (
    !propTree.props ||
    tag.node.arguments?.some((node) => t.isSpreadElement(node))
  ) {
    const referencedBindings = tag.node.extra?.referencedBindings;
    const tagInputIdentifier = info.getBindingIdentifier(
      propTree.binding,
      `${importAlias}_params`,
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

    let renderArgs: (t.Expression | t.SpreadElement)[] = [
      createScopeReadExpression(info.tagSection, info.childScopeBinding),
    ];
    if (tag.node.arguments) {
      renderArgs = [...renderArgs, ...tag.node.arguments];
    }
    if (!tag.node.arguments?.length || translatedAttrs.properties.length) {
      renderArgs.push(propsToExpression(translatedAttrs.properties));
    }

    addStatement(
      "render",
      info.tagSection,
      referencedBindings,
      t.expressionStatement(
        t.callExpression(tagInputIdentifier, [t.arrayExpression(renderArgs)]),
      ),
    );

    return;
  }

  let i = 0;
  if (tag.node.arguments) {
    for (const arg of tag.node.arguments) {
      const argExport = propTree.props[i];
      if (argExport) {
        const argExportIdentifier = info.getBindingIdentifier(
          argExport.binding,
          `${importAlias}_param_${i}`,
        );
        addStatement(
          "render",
          info.tagSection,
          arg.extra?.referencedBindings, // TODO: pretty sure content needs to have the reference group of it's param defaults.
          t.expressionStatement(
            t.callExpression(argExportIdentifier, [
              createScopeReadExpression(
                info.tagSection,
                info.childScopeBinding,
              ),
              arg,
            ]),
          ),
        );
      }

      i++;
    }
  }

  const attrPropsTree = propTree.props[i];
  if (attrPropsTree) {
    writeAttrsToSignals(tag, attrPropsTree, `${importAlias}_input`, info);
  }
}

function writeAttrsToSignals(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  importAlias: string,
  info: {
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
  if (!propTree.props) {
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
              writeAttrsToSignals(
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

function mapParamReasonToExpr(
  exprs: KnownExprs,
  param: InputBinding | ParamBinding | undefined,
  reason: boolean | Opt<InputBinding | ParamBinding>,
) {
  if (reason) {
    if (reason === true) return true;
    return filterMap(reason, (prop) => {
      if (exprs) {
        let curExpr = exprs;
        if (param !== prop) {
          const props = [prop.property!];
          let curBinding = prop;
          while (
            param !==
            (curBinding = curBinding.upstreamAlias as
              | InputBinding
              | ParamBinding)
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
    });
  }
}

function callStatement(
  id: t.Expression,
  ...args: Array<t.Expression | t.SpreadElement | undefined>
) {
  return t.expressionStatement(callExpression(id, ...args));
}

function callExpression(
  id: t.Expression,
  ...args: Array<t.Expression | t.SpreadElement | undefined>
) {
  return t.callExpression(id, args.filter(Boolean) as t.Expression[]);
}

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}

function getParamGroupsSerializeGuard(
  contentSection: Section,
  knownExprs: KnownExprs,
  paramBinding: undefined | InputBinding | ParamBinding,
) {
  let childSerializeReasonExpr: t.Expression | undefined;
  const reasonGroups = contentSection.paramReasonGroups;
  if (!reasonGroups) {
    return;
  }

  if (reasonGroups.length === 1) {
    // Special case single reason to pass either 1 or undefined.
    const [group] = reasonGroups;
    const exprs = mapParamReasonToExpr(knownExprs, paramBinding, group);
    const reason =
      exprs && (exprs === true || getSerializeSourcesForExprs(exprs));
    childSerializeReasonExpr = reason && getSerializeGuard(reason, false);
  } else {
    const props: t.ObjectExpression["properties"] = [];
    let hasDynamicReasons = false;
    let hasSkippedReasons = false;
    for (let i = 0; i < reasonGroups.length; i++) {
      const group = reasonGroups[i];
      const exprs = mapParamReasonToExpr(knownExprs, paramBinding, group);
      const reason =
        exprs && (exprs === true || getSerializeSourcesForExprs(exprs));

      if (reason) {
        hasDynamicReasons ||= reason !== true && !reason.state;
        props.push(
          t.objectProperty(
            withLeadingComment(
              t.numericLiteral(i),
              mapToString(
                group as InputBinding,
                ", ",
                contentSection.parent ? getDebugName : getInputDebugName,
              ),
            ),
            getSerializeGuard(reason, false)!,
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
  return childSerializeReasonExpr;
}
