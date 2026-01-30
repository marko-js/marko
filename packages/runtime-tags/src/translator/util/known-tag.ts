import { types as t } from "@marko/compiler";
import {
  getTagTemplate,
  isAttributeTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { scopeIdentifier } from "../visitors/program";
import {
  type BindingPropTree,
  getAllKnownPropNames,
  getKnownFromPropTree,
  hasAllKnownProps,
} from "./binding-prop-tree";
import { generateUidIdentifier } from "./generate-uid";
import { getTagName } from "./get-tag-name";
import { isOptimize } from "./marko-config";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  type AttrTagMeta,
  getAttrTagIdentifier,
} from "./nested-attribute-tags";
import {
  filterMap,
  forEach,
  fromIter,
  includes,
  type Opt,
  toIter,
} from "./optional";
import {
  addRead,
  type Binding,
  BindingType,
  bindingUtil,
  createBinding,
  dropNodes,
  getAllTagReferenceNodes,
  getDebugNames,
  getOrCreatePropertyAlias,
  getScopeAccessorLiteral,
  type InputBinding,
  mergeReferences,
  type ParamBinding,
  type ReferencedExtra,
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
  addSerializeExpr,
  addSerializeReason,
  getSerializeReason,
  getSerializeSourcesForExprs,
} from "./serialize-reasons";
import { setTagDownstream } from "./set-tag-sections-downstream";
import {
  addStatement,
  getResumeRegisterId,
  initValue,
  setBindingSerializedValue,
  writeHTMLResumeStatements,
} from "./signals";
import { createSectionState } from "./state";
import {
  toMemberExpression,
  toObjectProperty,
  toPropertyName,
} from "./to-property-name";
import {
  addDynamicAttrTagStatements,
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

const [getKnownTags] = createSectionState(
  "known tags",
  () => [] as t.MarkoTagExtra[],
);

const kContentSection = Symbol("known tag content section");
const kChildScopeBinding = Symbol("known tag scope binding");
const kChildOffsetScopeBinding = Symbol("known tag scope offset binding");
const kKnownExprs = Symbol("known tag exprs");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kContentSection]?: Section;
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
  getKnownTags(section).push(tagExtra);
  setTagDownstream(tag, propTree?.props?.[0]?.binding);
  tagExtra[kContentSection] = contentSection;

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
      returnSerializeReason &&
        (returnSerializeReason === true ||
          !!returnSerializeReason.state ||
          (returnSerializeReason.param as Opt<InputBinding>)),
    );
    setBindingDownstream(varBinding, varExpr);
    addSerializeExpr(section, mutatesTagVar || varExpr, childScopeBinding);
  }

  addSerializeExpr(section, fromIter(attrExprs), childScopeBinding);
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
      ? translateAttrs(tag, attrsPropTree)
      : {
          properties: [],
          statements: [],
        };

  const childScopeBinding = tagExtra[kChildScopeBinding]!;
  const childScopeSerializeReason = getSerializeReason(
    section,
    childScopeBinding,
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

  if (contentSection.paramReasonGroups) {
    let childSerializeReasonExpr: t.Expression | undefined;
    if (contentSection.paramReasonGroups.length === 1) {
      // Special case single reason to pass either 1 or undefined.
      const [group] = contentSection.paramReasonGroups;
      const reason = getSerializeReason(section, childScopeBinding, group.id);
      childSerializeReasonExpr =
        reason && getSerializeGuard(section, reason, false);
    } else {
      const props: t.ObjectExpression["properties"] = [];
      let hasDynamicReasons = false;
      let hasSkippedReasons = false;
      for (let i = 0; i < contentSection.paramReasonGroups.length; i++) {
        const group = contentSection.paramReasonGroups[i];
        const reason = getSerializeReason(section, childScopeBinding, group.id);
        if (reason) {
          hasDynamicReasons ||= reason !== true && !reason.state;
          props.push(
            t.objectProperty(
              withLeadingComment(
                t.numericLiteral(i),
                getDebugNames(group.reason),
              ),
              getSerializeGuard(section, reason, false)!,
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

    if (childSerializeReasonExpr) {
      tag.insertBefore(
        t.expressionStatement(
          callRuntime("_set_serialize_reason", childSerializeReasonExpr),
        ),
      );
    }
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

  if (tagVar) {
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
        createScopeReadExpression(childScopeBinding, valueSection),
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
          getScopeAccessorLiteral(childScopeBinding, true),
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

export function finalizeKnownTags(section: Section) {
  for (const tagExtra of getKnownTags(section)) {
    const scopeBinding = tagExtra[kChildScopeBinding];
    const knownExprs = tagExtra[kKnownExprs];
    const contentSection = tagExtra[kContentSection];
    if (knownExprs && scopeBinding && contentSection?.paramReasonGroups) {
      for (const group of contentSection.paramReasonGroups) {
        addSerializeReason(
          section,
          getSerializeSourcesForExprs(
            mapParamReasonToExpr(knownExprs, group.reason),
          ),
          scopeBinding,
          group.id,
        );
      }
    }
  }
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
    dropNodes(getAllTagReferenceNodes(tag.node));
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
        dropNodes(arg);
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
    dropNodes(getAllTagReferenceNodes(tag.node));
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
  const remaining = new Set(getAllKnownPropNames(propTree));
  const dropReferenceNodes: t.Node[] = [];
  let restReferenceNodes: t.Node[] | undefined;

  if (attrTagLookup) {
    const nodeReferencesByGroup = new Map<
      AttrTagGroup,
      { firstTag: t.NodePath<t.MarkoTag>; referenceNodes: t.Node[] }
    >();

    const analyzeDynamicAttrTagChildGroup = (
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
          const childAttrExport = getKnownFromPropTree(
            propTree,
            attrTagMeta.name,
          );
          if (!childAttrExport) {
            getAllTagReferenceNodes(child.node, dropReferenceNodes);
          } else if (attrTagMeta.dynamic) {
            analyzeDynamicAttrTagChildGroup(attrTagMeta.group, child);
          } else if (childAttrExport === true) {
            getAllTagReferenceNodes(child.node, (restReferenceNodes ||= []));
            known[attrTagMeta.name] = {
              value: rootTagExtra as ReferencedExtra,
            };
          } else if (childAttrExport.props) {
            remaining.delete(attrTagMeta.name);
            known[attrTagMeta.name] = analyzeAttrs(
              rootTagExtra,
              section,
              child,
              childAttrExport,
              rootAttrExprs,
            );
          } else {
            analyzeDynamicAttrTagChildGroup(attrTagMeta.group, child);
          }
        } else {
          const group = child.node.extra!.attributeTagGroup!;
          let childUsesGroupProp = false;
          for (const name of group) {
            if (getKnownFromPropTree(propTree, attrTagLookup[name].name)) {
              childUsesGroupProp = true;
              break;
            }
          }

          if (childUsesGroupProp) {
            analyzeDynamicAttrTagChildGroup(group, child);
          } else {
            getAllTagReferenceNodes(child.node, dropReferenceNodes);
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
      let bindings: Opt<Binding>;
      let hasRest = false;

      for (const tagName of group) {
        const attrName = tagName.slice(1);
        const templateExportAttr = getKnownFromPropTree(propTree, attrName)!;
        if (templateExportAttr === true) {
          hasRest = true;
          break;
        } else {
          bindings = bindingUtil.add(bindings, templateExportAttr.binding);
        }
      }

      if (hasRest) {
        const groupKnownValue: KnownExprs = {
          value: rootTagExtra as ReferencedExtra,
        };
        restReferenceNodes ||= [];
        for (const node of referenceNodes) {
          restReferenceNodes.push(node);
        }

        for (const name of group) {
          const attrTagMeta = attrTagLookup[name];
          known[attrTagMeta.name] = groupKnownValue;
        }
        continue;
      }

      const groupExtra = mergeReferences(section, node, referenceNodes);
      const groupKnownValue: KnownExprs = { value: groupExtra };
      rootAttrExprs.add(groupExtra);

      forEach(bindings, (binding) => {
        setBindingDownstream(binding, groupExtra);
      });

      for (const name of group) {
        const attrTagMeta = attrTagLookup[name];
        remaining.delete(attrTagMeta.name);
        known[attrTagMeta.name] = groupKnownValue;
      }
    }
  }

  const contentExport = getKnownFromPropTree(propTree, "content");
  if (contentExport && !seen.has("content")) {
    const bodySection = getSectionForBody(tag.get("body"));
    if (bodySection) {
      seen.add("content");
      if (contentExport === true) {
        // TODO: update when supporting default params
        known.content = { value: rootTagExtra as ReferencedExtra };
      } else {
        remaining.delete("content");
        known.content = { value: undefined }; // TODO: update when supporting default params
      }
    }
  }

  let knownSpread: ReturnType<typeof getSingleKnownSpread>;
  let spreadReferenceNodes: t.Node[] | undefined;
  const { attributes } = tag.node;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      const templateExportAttr = getKnownFromPropTree(propTree, attr.name);
      if (!templateExportAttr || seen.has(attr.name)) {
        // drop references for duplicated attributes and unused attributes.
        dropReferenceNodes.push(attr.value);
        continue;
      }

      seen.add(attr.name);

      if (spreadReferenceNodes) {
        spreadReferenceNodes.push(attr.value);
      } else if (templateExportAttr === true) {
        (restReferenceNodes ||= []).push(attr.value);
        known[attr.name] = { value: rootTagExtra as ReferencedExtra };
      } else {
        const attrExtra = (attr.value.extra ??= {}) as ReferencedExtra;
        remaining.delete(attr.name);
        known[attr.name] = { value: attrExtra };
        rootAttrExprs.add(attrExtra);
        setBindingDownstream(templateExportAttr.binding, attrExtra);
        if (
          knownSpread &&
          !includes(knownSpread.binding.excludeProperties, attr.name)
        ) {
          const propBinding = getOrCreatePropertyAlias(
            knownSpread.binding,
            attr.name,
          );
          addRead(attrExtra, {}, propBinding, section, undefined);
        }
      }
    } else if (spreadReferenceNodes) {
      spreadReferenceNodes.push(attr.value);
    } else {
      knownSpread = hasAllKnownProps(propTree)
        ? getSingleKnownSpread(attributes)
        : undefined;

      if (knownSpread) {
        dropNodes(attr.value);
      } else {
        (spreadReferenceNodes = restReferenceNodes || []).push(attr.value);
      }
    }
  }

  if (knownSpread) {
    for (const prop of remaining) {
      const propBinding = getOrCreatePropertyAlias(knownSpread.binding, prop);
      const propExtra: ReferencedExtra = { section };
      const templateExportAttr = getKnownFromPropTree(propTree, prop)!;

      known[prop] = { value: propExtra };
      rootAttrExprs.add(propExtra);
      addRead(propExtra, propExtra, propBinding, section, undefined);
      setBindingDownstream(
        templateExportAttr === true
          ? propTree.rest!.binding
          : templateExportAttr.binding,
        propExtra,
      );
    }
  } else if (spreadReferenceNodes) {
    if (remaining.size || (propTree.rest && !propTree.rest.props)) {
      inputExpr.value = mergeReferences(
        section,
        tag.node,
        spreadReferenceNodes,
      );
      setBindingDownstream(
        propTree.rest?.binding || propTree.binding,
        inputExpr.value,
      );
    } else {
      dropNodes(spreadReferenceNodes);
    }
  } else if (restReferenceNodes) {
    inputExpr.value = mergeReferences(section, tag.node, restReferenceNodes);
    setBindingDownstream(propTree.rest!.binding, inputExpr.value);
  }

  dropNodes(dropReferenceNodes);

  return inputExpr;
}

function getSingleKnownSpread(
  attributes: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
) {
  let binding: Binding | undefined;
  let extra: t.NodeExtra | undefined;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    if (
      attr.type === "MarkoSpreadAttribute"
        ? binding || !(binding = (extra = attr.value.extra)?.spreadFrom)
        : binding && !includes(binding.excludeProperties, attr.name)
    ) {
      return;
    }
  }
  if (binding) {
    return { extra, binding };
  }
}

type TranslateDOMInfo = {
  tagSection: Section;
  getBindingIdentifier: (
    binding: Binding,
    preferredName?: string,
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
};

function writeParamsToSignals(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  importAlias: string,
  info: TranslateDOMInfo,
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
      createScopeReadExpression(info.childScopeBinding, info.tagSection),
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
                info.childScopeBinding,
                info.tagSection,
              ),
              arg,
            ]),
          ),
          undefined,
          true,
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

function applyAttrObject(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  tagInputIdentifier: t.Identifier,
  info: TranslateDOMInfo,
) {
  const referencedBindings = tag.node.extra?.referencedBindings;
  const translatedAttrs = translateAttrs(
    tag,
    true,
    propTree.rest && new Set(toIter(propTree.rest.binding.excludeProperties)),
  );
  let translatedProps = propsToExpression(translatedAttrs.properties);

  if (translatedAttrs.statements.length) {
    addStatement(
      "render",
      info.tagSection,
      referencedBindings,
      translatedAttrs.statements,
    );
  }

  if (isAttributeTag(tag)) {
    const attrTagName = getTagName(tag);
    const parentTag = tag.parentPath as t.NodePath<t.MarkoTag>;
    const repeated = analyzeAttributeTags(parentTag)?.[attrTagName]?.repeated;

    if (repeated) {
      let attrTagCallsForTag = (info.attrTagCallsByTag ||= new Map()).get(
        parentTag,
      );
      if (!attrTagCallsForTag) {
        info.attrTagCallsByTag.set(parentTag, (attrTagCallsForTag = new Map()));
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
        createScopeReadExpression(info.childScopeBinding, info.tagSection),
        translatedProps,
      ]),
    ),
    undefined,
    true,
  );
}

function translateAttrTag(
  tag: t.NodePath<t.MarkoTag>,
  attrTagMeta: AttrTagMeta,
  info: TranslateDOMInfo,
  statements: t.Statement[],
) {
  const translatedAttrs = translateAttrs(tag, true, undefined, statements);
  let translatedProps = propsToExpression(translatedAttrs.properties);
  const attrTagName = getTagName(tag);
  const parentTag = tag.parentPath as t.NodePath<t.MarkoTag>;

  if (attrTagMeta.repeated) {
    let attrTagCallsForTag = (info.attrTagCallsByTag ||= new Map()).get(
      parentTag,
    );
    if (!attrTagCallsForTag) {
      info.attrTagCallsByTag.set(parentTag, (attrTagCallsForTag = new Map()));
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

  return translatedProps;
}

function writeAttrsToSignals(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree,
  importAlias: string,
  info: TranslateDOMInfo,
) {
  if (!propTree.props) {
    applyAttrObject(
      tag,
      propTree,
      info.getBindingIdentifier(propTree.binding, importAlias),
      info,
    );

    return;
  }

  const attrTagLookup = analyzeAttributeTags(tag);
  const seen = new Set<string>();
  const tagReferencedBindings = tag.node.extra?.referencedBindings;
  const remaining = new Set(getAllKnownPropNames(propTree));
  let restProps: t.ObjectExpression["properties"] | undefined;

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
        propTree,
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
          const childAttrExport = getKnownFromPropTree(
            propTree,
            attrTagMeta.name,
          );
          if (!childAttrExport) {
            // ignore
          } else if (attrTagMeta.dynamic) {
            i = translateDynamicAttrTagChildInGroup(attrTagMeta.group, i);
          } else if (childAttrExport === true) {
            const statements: t.Statement[] = [];
            const translatedAttrs = translateAttrTag(
              child,
              attrTagMeta,
              info,
              statements,
            );

            addStatement(
              "render",
              info.tagSection,
              tagReferencedBindings,
              statements,
            );

            if (translatedAttrs) {
              (restProps ||= []).push(
                toObjectProperty(attrTagMeta.name, translatedAttrs),
              );
            }
          } else {
            remaining.delete(attrTagMeta.name);
            writeAttrsToSignals(
              child,
              childAttrExport,
              `${importAlias}_${attrTagMeta.name}`,
              info,
            );
          }
        } else {
          const group = child.node.extra!.attributeTagGroup!;
          let childUsesGroupProp = false;
          for (const name of group) {
            if (getKnownFromPropTree(propTree, attrTagLookup[name].name)) {
              childUsesGroupProp = true;
              break;
            }
          }

          if (childUsesGroupProp) {
            i = translateDynamicAttrTagChildInGroup(group, i);
          } else if (getTagName(child) === "if") {
            while (++i < attrTags.length) {
              const nextTag = attrTags[i];
              switch (nextTag.isMarkoTag() && getTagName(nextTag)) {
                case "else":
                case "else-if":
                  continue;
              }

              i--;
              break;
            }
          }
        }
      }
    }

    for (const [
      group,
      { referencedBindings, statements },
    ] of statementsByGroup) {
      const decls: t.VariableDeclaration["declarations"] = [];

      let hasRest = false;
      for (const name of group) {
        const attrTagMeta = attrTagLookup[name];
        const childAttrExports = getKnownFromPropTree(
          propTree,
          attrTagMeta.name,
        )!;
        decls.push(t.variableDeclarator(getAttrTagIdentifier(attrTagMeta)));
        if (childAttrExports === true) {
          hasRest = true;
        }
      }

      addStatement(
        "render",
        info.tagSection,
        hasRest ? tagReferencedBindings : referencedBindings,
        [t.variableDeclaration("let", decls), ...statements],
      );

      if (hasRest) {
        for (const name of group) {
          const attrTagMeta = attrTagLookup[name];
          (restProps ||= []).push(
            toObjectProperty(
              attrTagMeta.name,
              getAttrTagIdentifier(attrTagMeta),
            ),
          );
        }
      } else {
        for (const name of group) {
          const attrTagMeta = attrTagLookup[name];
          const childAttrExports = getKnownFromPropTree(
            propTree,
            attrTagMeta.name,
          ) as BindingPropTree;

          remaining.delete(attrTagMeta.name);
          addStatement(
            "render",
            info.tagSection,
            referencedBindings,
            t.expressionStatement(
              t.callExpression(
                info.getBindingIdentifier(
                  childAttrExports.binding,
                  `${importAlias}_${attrTagMeta.name}`,
                ),
                [
                  createScopeReadExpression(
                    info.childScopeBinding,
                    info.tagSection,
                  ),
                  getAttrTagIdentifier(attrTagMeta),
                ],
              ),
            ),
          );
        }
      }
    }
  }

  const contentExport = getKnownFromPropTree(propTree, "content");
  if (!seen.has("content") && contentExport) {
    const bodySection = getSectionForBody(tag.get("body"));
    if (bodySection) {
      seen.add("content");
      const bodyValue = t.callExpression(t.identifier(bodySection.name), [
        scopeIdentifier,
      ]);
      if (contentExport === true) {
        (restProps ||= []).push(toObjectProperty("content", bodyValue));
      } else {
        remaining.delete("content");
        addStatement(
          "render",
          info.tagSection,
          undefined, // TODO: pretty sure content needs to have the reference group of it's param defaults.
          t.expressionStatement(
            t.callExpression(
              info.getBindingIdentifier(
                contentExport.binding,
                `${importAlias}_content`,
              ),
              [
                createScopeReadExpression(
                  info.childScopeBinding,
                  info.tagSection,
                ),
                bodyValue,
              ],
            ),
          ),
          undefined,
          true,
        );
      }
    }
  }

  let knownSpread: ReturnType<typeof getSingleKnownSpread>;
  let spreadProps: t.ObjectExpression["properties"] | undefined;

  const staticAttrs: t.MarkoAttribute[] = [];
  const { attributes } = tag.node;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      const templateExportAttr = getKnownFromPropTree(propTree, attr.name);
      if (!templateExportAttr || seen.has(attr.name)) {
        continue;
      }

      seen.add(attr.name);

      if (spreadProps) {
        spreadProps.push(toObjectProperty(attr.name, attr.value));
      } else if (templateExportAttr === true) {
        (restProps ||= []).push(toObjectProperty(attr.name, attr.value));
      } else {
        staticAttrs.push(attr);
      }
    } else if (spreadProps) {
      spreadProps.push(t.spreadElement(attr.value));
    } else {
      knownSpread = hasAllKnownProps(propTree)
        ? getSingleKnownSpread(attributes)
        : undefined;
      if (!knownSpread) {
        (spreadProps = restProps || []).push(t.spreadElement(attr.value));
      }
    }
  }

  for (let i = staticAttrs.length; i--; ) {
    const attr = staticAttrs[i];
    const childAttrExports = getKnownFromPropTree(
      propTree,
      attr.name,
    ) as BindingPropTree;
    const attrExportIdentifier = info.getBindingIdentifier(
      childAttrExports.binding,
      `${importAlias}_${attr.name}`,
    );
    remaining.delete(attr.name);
    addStatement(
      "render",
      info.tagSection,
      attr.value.extra?.referencedBindings,
      t.expressionStatement(
        t.callExpression(attrExportIdentifier, [
          createScopeReadExpression(info.childScopeBinding, info.tagSection),
          attr.value, // TODO: use spreadBinding property alias after we optimize `in`
        ]),
      ),
      undefined,
      true,
    );
  }

  if (knownSpread) {
    for (const prop of remaining) {
      const childAttrExports = getKnownFromPropTree(
        propTree,
        prop,
      ) as BindingPropTree;
      const attrExportIdentifier = info.getBindingIdentifier(
        childAttrExports.binding,
        `${importAlias}_${prop}`,
      );
      const propBinding = knownSpread.binding.propertyAliases.get(prop)!;
      addStatement(
        "render",
        info.tagSection,
        propBinding,
        t.expressionStatement(
          t.callExpression(attrExportIdentifier, [
            createScopeReadExpression(info.childScopeBinding, info.tagSection),
            createScopeReadExpression(propBinding, info.tagSection),
          ]),
        ),
        undefined,
        true,
      );
    }
  } else if (spreadProps) {
    const spreadExpr = propsToExpression(spreadProps.reverse());
    let spreadId = spreadExpr;

    if (!isSimpleReference(spreadExpr)) {
      spreadId = generateUidIdentifier(`${importAlias}_spread`);
      addStatement("render", info.tagSection, tagReferencedBindings, [
        t.variableDeclaration("const", [
          t.variableDeclarator(spreadId, spreadExpr),
        ]),
      ]);
    }

    for (const name of remaining) {
      const childAttrExports = getKnownFromPropTree(
        propTree,
        name,
      ) as BindingPropTree;
      const attrExportIdentifier = info.getBindingIdentifier(
        childAttrExports.binding,
        `${importAlias}_${name}`,
      );
      addStatement(
        "render",
        info.tagSection,
        tagReferencedBindings,
        t.expressionStatement(
          t.callExpression(attrExportIdentifier, [
            createScopeReadExpression(info.childScopeBinding, info.tagSection),
            toMemberExpression(t.cloneNode(spreadId, true), name),
          ]),
        ),
      );
    }

    if (propTree.rest && !propTree.rest.props) {
      const props: t.ObjectPattern["properties"] = [];
      const restId = t.identifier(propTree.rest.binding.name);
      forEach(propTree.rest.binding.excludeProperties, (name) => {
        const propId = toPropertyName(name);
        const shorthand =
          propId.type === "Identifier" && t.isValidIdentifier(name);
        props.push(
          t.objectProperty(
            propId,
            shorthand ? propId : generateUidIdentifier(name),
            false,
            shorthand,
          ),
        );
      });

      props.push(t.restElement(restId));
      addStatement(
        "render",
        info.tagSection,
        tagReferencedBindings,
        t.expressionStatement(
          t.callExpression(
            info.getBindingIdentifier(
              propTree.rest.binding,
              importAlias + "_$rest",
            ),
            [
              createScopeReadExpression(
                info.childScopeBinding,
                info.tagSection,
              ),
              t.callExpression(
                t.arrowFunctionExpression([t.objectPattern(props)], restId),
                [spreadId],
              ),
            ],
          ),
        ),
        undefined,
        true,
      );
    }
  } else {
    for (const name of remaining) {
      const childAttrExports = getKnownFromPropTree(
        propTree,
        name,
      ) as BindingPropTree;
      const attrExportIdentifier = info.getBindingIdentifier(
        childAttrExports.binding,
        `${importAlias}_${name}`,
      );
      addStatement(
        "render",
        info.tagSection,
        undefined,
        t.expressionStatement(
          t.callExpression(attrExportIdentifier, [
            createScopeReadExpression(info.childScopeBinding, info.tagSection),
          ]),
        ),
      );
    }

    if (propTree.rest && !propTree.rest.props) {
      addStatement(
        "render",
        info.tagSection,
        tagReferencedBindings,
        t.expressionStatement(
          t.callExpression(
            info.getBindingIdentifier(
              propTree.rest.binding,
              importAlias + "_$rest",
            ),
            [
              createScopeReadExpression(
                info.childScopeBinding,
                info.tagSection,
              ),
              t.objectExpression(restProps || []),
            ],
          ),
        ),
        undefined,
        true,
      );
    }
  }
}

function mapParamReasonToExpr(
  exprs: KnownExprs,
  reason: boolean | Opt<InputBinding | ParamBinding>,
) {
  if (reason) {
    if (reason === true) return true;
    return filterMap(reason, (prop) => {
      if (exprs) {
        let curExpr = exprs;
        let curBinding = prop;
        if (curBinding.property) {
          const props: string[] = [];
          do {
            props.push(curBinding.property);
          } while (
            (curBinding = curBinding.upstreamAlias as
              | InputBinding
              | ParamBinding) &&
            curBinding.property
          );

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

function isSimpleReference(expr: t.Expression): boolean {
  switch (expr.type) {
    case "Identifier":
      return true;
    case "MemberExpression":
      return !expr.computed && isSimpleReference(expr.object);
    default:
      return false;
  }
}
