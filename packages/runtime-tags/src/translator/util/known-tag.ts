import { types as t } from "@marko/compiler";
import { getProgram, isAttributeTag } from "@marko/compiler/babel-utils";

import { scopeIdentifier } from "../visitors/program";
import {
  type BindingPropTree,
  getAllKnownPropNames,
  getKnownFromPropTree,
  hasAllKnownProps,
} from "./binding-prop-tree";
import { generateUidIdentifier } from "./generate-uid";
import { getTagName } from "./get-tag-name";
import { isOptimize, isPersisted } from "./marko-config";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  type AttrTagMeta,
  getAttrTagIdentifier,
  getAttrTagPaths,
} from "./nested-attribute-tags";
import { forEach, fromIter, includes, type Opt, toIter } from "./optional";
  some,
import {
  addPersistedChildRenderer,
  hasServerRequiredParam,
  kPatchClientOwned,
  recordGlobalMixedParams,
  recordStructuralParams,
} from "./persisted";
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
  isInvokeOnlyBinding,
  type KnownExprs,
  mapParamReasonToExpr,
  mergeReferences,
  mergeSources,
  type ReferencedExtra,
  setBindingDownstream,
  type Sources,
  trackParamsReferences,
  trackVarReferences,
} from "./references";
import {
  addRuntimeFeatureAsset,
  callRuntime,
  importRuntime,
  importRuntimeFeature,
} from "./runtime";
import { createScopeReadExpression } from "./scope-read";
import {
  ensureReasonGroups,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  startSection,
} from "./sections";
import {
  getOwnershipGroupValue,
  getSerializeGuard,
  scopeReasonIdentifier,
} from "./serialize-guard";
import {
  addSerializeExpr,
  addSerializeProvenance,
  addSerializeReason,
  getSerializeProvenance,
  getSerializeReason,
  getSerializeSourcesForExprs,
  getSerializeSourcesForRef,
} from "./serialize-reasons";
import { setTagDownstream } from "./set-tag-sections-downstream";
import { addSetupExpr, addSetupStatement } from "./setup-statements";
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

const [getKnownTags] = createSectionState(
  "known tags",
  () => [] as t.MarkoTagExtra[],
);

const kContentSection = Symbol("known tag content section");
const kOwnershipRecordedGroups = Symbol("known tag ownership recorded groups");
const kChildScopeBinding = Symbol("known tag scope binding");
const kChildOffsetScopeBinding = Symbol("known tag scope offset binding");
const kKnownExprs = Symbol("known tag exprs");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kContentSection]?: Section;
    [kOwnershipRecordedGroups]?: number;
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
  if (isPersisted()) {
    // Frame ids are local labels: a patch pairs the child scope through a
    // parent entry, so the ref must serialize (a scriptless child could
    // otherwise skip it, leaving its fills and effects unreachable).
    addSerializeReason(section, true, childScopeBinding);
    addRuntimeFeatureAsset(tag.hub.file, "patch-child");
  }
  startSection(tagBody);
  trackParamsReferences(tagBody, BindingType.param);
  getKnownTags(section).push(tagExtra);
  tagExtra[kContentSection] = contentSection;

  const varBinding = trackVarReferences(tag, BindingType.derived);

  const exprs = (tagExtra[kKnownExprs] = analyzeParams(
    tagExtra,
    section,
    tag,
    propTree,
    attrExprs,
  ));
  setTagDownstream(tag, propTree?.props?.[0]?.binding, exprs);

  if (varBinding) {
    // Tag variables emit a `_var` statement in the parent's setup.
    addSetupStatement(section);
    const mutatesTagVar = !!(
      tag.node.var!.type === "Identifier" &&
      tag.scope.getBinding(tag.node.var.name)?.constantViolations.length
    );
    const varExpr = tagExtra.defineBodySection
      ? contentSection.returnValueExpr
      : mapParamReasonToExpr(
          exprs,
          contentSection.returnSerializeReason &&
            (contentSection.returnSerializeReason === true ||
              !!contentSection.returnSerializeReason.state ||
              (contentSection.returnSerializeReason
                .param as Opt<InputBinding>)),
        );
    varBinding.scopeOffset = tagExtra[kChildOffsetScopeBinding] = createBinding(
      "#scopeOffset",
      BindingType.dom,
      section,
    );
    setBindingDownstream(varBinding, varExpr);
    // Split so the force cannot swallow the exprs' provenance.
    if (mutatesTagVar) addSerializeExpr(section, true, childScopeBinding);
    addSerializeExpr(section, varExpr, childScopeBinding);
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
  // Every child renderer joins this template's intrinsics union, so a
  // parent's patch-skip decision sees the whole subtree at render time.
  if (isPersisted()) addPersistedChildRenderer(tagIdentifier);
  // A client-owned instance renders nothing into a patch: the link and the
  // child render skip together, and the absent entry keeps the live child.
  let clientOwnedStatements: t.Statement[] | undefined =
    isPersisted() && tagExtra[kPatchClientOwned] ? [] : undefined;

  let varStatement: t.Statement | undefined;
  if (childScopeSerializeReason) {
    const peekScopeId = generateUidIdentifier(childScopeBinding?.name);
    // After the attr statements: building attribute tags can consume scope
    // ids (eg `_resume_locals`), and the peek must see the child's root id.
    statements.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(peekScopeId, callRuntime("_peek_scope_id")),
      ]),
    );

    setBindingSerializedValue(
      section,
      childScopeBinding,
      callRuntime("_existing_scope", peekScopeId),
    );

    if (isPersisted()) {
      const patchChildStatement = t.expressionStatement(
        callRuntime(
          "_patch_child",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(childScopeBinding),
          peekScopeId,
        ),
      );
      if (tagExtra[kPatchClientOwned]) {
        clientOwnedStatements = [patchChildStatement];
      } else {
        statements.push(patchChildStatement);
      }
    }

    if (tagVar) {
      // Deferred below the render call: `_var` mints the post-render scope id
      // for the scope offset.
      varStatement = t.expressionStatement(
        callRuntime(
          "_var",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(tag.node.extra![kChildOffsetScopeBinding]!),
          peekScopeId,
          t.stringLiteral(
            getResumeRegisterId(section, tagVar.extra?.binding, "var"),
          ),
        ),
      );
    }
  }

  if (contentSection.paramReasonGroups) {
    let childSerializeReasonExpr: t.Expression | undefined;
    if (isPersisted()) {
      // Pages serialize fully, so the ambient slot carries the ownership
      // mask instead. A client-owned candidate needs it exactly when it
      // RENDERS (`_must_render` can render it on a patch, and all-server
      // ambient would ship its client-owned values); a skipped instance
      // leaves the all-server default.
      const ownership = getPersistedGroupOwnership(tagExtra);
      if (ownership) {
        childSerializeReasonExpr = buildOwnershipMaskExpr(section, ownership);
      }
    } else if (contentSection.paramReasonGroups.length === 1) {
      // Special case single reason to pass either 1 or undefined.
      const [group] = contentSection.paramReasonGroups;
      const reason = getSerializeReason(section, childScopeBinding, group.id);
      childSerializeReasonExpr =
        reason && getSerializeGuard(section, reason, false);
    } else {
      const props: t.ObjectExpression["properties"] = [];
      // Reason groups whose guard is statically `1` are encoded as a bitmask
      // (offset by one bit so a lone group 0 cannot collide with the plain
      // `1` "serialize everything" sentinel); -1 means a group's guard was
      // dynamic or out of bit range and an object must be used instead.
      let bitmask = 0;
      let bitmaskNames = "";
      let hasDynamicReasons = false;
      let hasSkippedReasons = false;
      for (let i = 0; i < contentSection.paramReasonGroups.length; i++) {
        const group = contentSection.paramReasonGroups[i];
        const reason = getSerializeReason(section, childScopeBinding, group.id);
        if (reason) {
          hasDynamicReasons ||= reason !== true && !reason.state;
          const guard = getSerializeGuard(section, reason, false)!;
          if (bitmask >= 0) {
            if (
              guard.type === "NumericLiteral" &&
              guard.value === 1 &&
              i < 30
            ) {
              bitmask |= 1 << (i + 1);
              const names = getDebugNames(group.reason);
              if (names) {
                bitmaskNames += bitmaskNames ? ` | ${names}` : names;
              }
            } else {
              bitmask = -1;
            }
          }
          props.push(
            t.objectProperty(
              withLeadingComment(
                t.numericLiteral(i),
                getDebugNames(group.reason),
              ),
              guard,
            ),
          );
        } else {
          hasSkippedReasons = true;
        }
      }

      if (props.length) {
        childSerializeReasonExpr = !(hasDynamicReasons || hasSkippedReasons)
          ? t.numericLiteral(1)
          : bitmask > 0
            ? withLeadingComment(t.numericLiteral(bitmask), bitmaskNames)
            : t.objectExpression(props);
      }
    }

    if (childSerializeReasonExpr) {
      const setReason = t.expressionStatement(
        callRuntime("_set_serialize_reason", childSerializeReasonExpr),
      );
      if (clientOwnedStatements) {
        clientOwnedStatements.unshift(setReason);
      } else {
        tag.insertBefore(setReason);
      }
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
    // The render call reads attr-tag bindings, so its declaration must follow
    // the attr statements rather than precede the tag.
    translateVar(
      tag,
      callExpression(tagIdentifier, ...getArgs()),
      "let",
      statements,
    );
    if (varStatement) statements.push(varStatement);
  } else if (clientOwnedStatements) {
    // The render-wide persisted reason is the page-vs-patch bit: truthy on
    // a page render (serialize + render the child), falsy on a patch. A
    // patch still renders when the child's intrinsics demand it (global
    // reads anywhere in its subtree, or an unknown renderer).
    let rootSection = section;
    while (rootSection.parent) rootSection = rootSection.parent;
    clientOwnedStatements.push(callStatement(tagIdentifier, ...getArgs()));
    statements.push(
      t.ifStatement(
        t.logicalExpression(
          "||",
          scopeReasonIdentifier(rootSection),
          callRuntime("_must_render", t.cloneNode(tagIdentifier)),
        ),
        t.blockStatement(clientOwnedStatements),
      ),
    );
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
    preferredName?: string,
    directContent?: boolean,
  ) => t.Identifier,
  callSetup: ((section: Section, childBinding: Binding) => void) | undefined,
) {
  const tagSection = getSection(tag);
  const { node } = tag;
  const extra = node.extra!;
  const childScopeBinding = extra[kChildScopeBinding]!;

  // An interactive page receives assets transitively through its dom
  // program, so the feature import rides both outputs.
  if (isPersisted()) importRuntimeFeature("patch-child");

  if (node.var) {
    const varBinding = node.var.extra!.binding!;
    const source = initValue(varBinding);
    // Register for resume only when the child scope serializes (mirrors the
    // HTML `_var` gate); the `_var` setup call below references the signal.
    source.register = !!getSerializeReason(tagSection, childScopeBinding);
    source.referenced = true;
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
      "prepare",
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
  callSetup?.(tagSection, childScopeBinding);

  if (propTree) {
    writeParamsToSignals(tag, propTree, getTagName(tag) || "tag", {
      tagSection,
      getBindingIdentifier,
      childScopeBinding,
      attrTagCallsByTag: undefined,
    });
  }
}

// The child's return reason for call-site classification (persisted
// rejects returns whose provenance cannot map through ownership).
export function getKnownTagReturnReason(tagExtra: t.MarkoTagExtra) {
  return tagExtra[kContentSection]?.returnSerializeReason;
}

export function finalizeKnownTags(section: Section) {
  for (const tagExtra of getKnownTags(section)) {
    const scopeBinding = tagExtra[kChildScopeBinding];
    const knownExprs = tagExtra[kKnownExprs];
    const contentSection = tagExtra[kContentSection]!;
    if (knownExprs && scopeBinding && contentSection.paramReasonGroups) {
      if (isPersisted()) {
        tagExtra[kOwnershipRecordedGroups] =
          contentSection.paramReasonGroups.length;
      }
      for (const group of contentSection.paramReasonGroups) {
        const feeders = mapParamReasonToExpr(knownExprs, group.reason);
        addSerializeReason(
          section,
          getSerializeSourcesForExprs(feeders),
          scopeBinding,
          group.id,
        );
        if (isPersisted()) {
          // Fn-body reads inform ownership but never serialization, so
          // they join the group's provenance only.
          let fnSources: Sources | undefined;
          forEach(feeders as Opt<t.NodeExtra>, (extra) => {
            forEach(
              (extra as t.FunctionExtra).referencedBindingsInFunction,
              (binding) => {
                fnSources = mergeSources(
                  fnSources,
                  getSerializeSourcesForRef(binding),
                );
              },
            );
          });
          addSerializeProvenance(section, fnSources, scopeBinding, group.id);
          // The ownership mask composes over these groups at translate
          // time; group order freezes here.
          ensureReasonGroups(
            getSerializeProvenance(section, scopeBinding, group.id),
          );
          // The facts roll up: feeding a param the child uses structurally
          // (or global-mixed) makes this template's feeders so too.
          if (some(group.reason, (binding) => binding.selectsStructure)) {
            recordStructuralParams(
              getSerializeProvenance(section, scopeBinding, group.id),
            );
          }
          if (some(group.reason, (binding) => binding.globalMixed)) {
            recordGlobalMixedParams(
              getSerializeProvenance(section, scopeBinding, group.id),
            );
          }
        }
      }
    }
  }
}

export interface PersistedGroupOwnership {
  /** The child params this group covers. */
  params: NonNullable<Opt<Binding>>;
  /** Client state feeds this group: server ownership is statically 0. */
  stateFed: boolean;
  /** Server-changeable feeds (params or globals). */
  serverable: boolean;
  /** State mixed with `$global` in one group: no delivery path. */
  globalMixed: boolean;
  /** `$global` feeds this group (a server contribution). */
  globalFed: boolean;
  /** Parent-side param feeds: fill delivery under state, else composition. */
  parentParams: Sources["param"];
  /** The child needs this group server-owned (structure or `$global` mix). */
  serverRequired: boolean;
}

// Per-group ownership for a known templated call site, aligned with the
// child's `paramReasonGroups` indices.
export function getPersistedGroupOwnership(
  tagExtra: t.MarkoTagExtra,
): PersistedGroupOwnership[] | undefined {
  const scopeBinding = tagExtra[kChildScopeBinding];
  const contentSection = tagExtra[kContentSection];
  const groups = contentSection?.paramReasonGroups;
  if (!tagExtra[kKnownExprs] || !scopeBinding || !groups) return;
  // Groups born after the record (circular same-file tags) have no
  // provenance: fail closed as unanalyzable input.
  if (groups.length !== tagExtra[kOwnershipRecordedGroups]) return;
  return groups.map((group) => {
    // The group's recorded provenance is the feed classification: it
    // includes fn-body reads and survives any force on the key.
    const sources = getSerializeProvenance(
      scopeBinding.section,
      scopeBinding,
      group.id,
    );
    return {
      params: group.reason,
      stateFed: !!sources?.state,
      serverable: !!(sources?.param || sources?.global),
      globalMixed: !!(sources?.state && sources.global),
      globalFed: !!sources?.global,
      parentParams: sources?.param,
      serverRequired: hasServerRequiredParam(group.reason),
    };
  });
}

// The instance's sources mask (2 bits per group at `1 + 2i`; keyed when
// dynamic), or undefined when the all-server default is equivalent.
function buildOwnershipMaskExpr(
  section: Section,
  ownership: PersistedGroupOwnership[],
): t.Expression | undefined {
  const rootSection = getRootSection(section);
  const values = ownership.map((group) => {
    if (group.stateFed) return group.serverable ? 3 : 1;
    let subset: Opt<Binding>;
    forEach(group.parentParams, (binding) => {
      if (binding.section === rootSection) {
        subset = bindingUtil.add(subset, binding);
      }
    });
    if (!subset) return group.serverable || group.parentParams ? 2 : 0;
    const composed = getOwnershipGroupValue(
      rootSection,
      subset as NonNullable<Sources["param"]>,
    );
    // A `$global` feed adds a static server bit beside the composition.
    return group.globalFed
      ? t.binaryExpression("|", t.numericLiteral(2), composed)
      : composed;
  });
  if (!values.some((value) => typeof value !== "number" || value !== 2)) {
    return;
  }

  let mask = 0;
  let maskNames = "";
  let needsObject = false;
  const props: t.ObjectExpression["properties"] = [];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value === 0) continue;
    if (typeof value === "number" && i < 15) {
      mask |= value << (1 + 2 * i);
      const names = getDebugNames(ownership[i].params);
      if (names) maskNames += maskNames ? ` | ${names}` : names;
    } else {
      needsObject = true;
    }
    props.push(
      t.objectProperty(
        withLeadingComment(
          t.numericLiteral(i),
          getDebugNames(ownership[i].params),
        ),
        typeof value === "number" ? t.numericLiteral(value) : value,
      ),
    );
  }
  return needsObject
    ? t.objectExpression(props)
    : withLeadingComment(t.numericLiteral(mask), maskNames);
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
    propTree.rest ||
    tag.node.arguments?.some((node) => t.isSpreadElement(node))
  ) {
    const extra = (inputExpr.value = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    ));

    setBindingDownstream(propTree.binding, extra, inputExpr);
    return inputExpr;
  }

  const known: NonNullable<KnownExprs["known"]> = (inputExpr.known = {});

  let i = 0;
  if (tag.node.arguments) {
    for (const arg of tag.node.arguments) {
      const argExport = propTree.props[i];
      if (argExport) {
        const argValueExtra = (arg.extra ??= {});
        known[i] = { value: argValueExtra };
        rootAttrExprs.add(argValueExtra);
        addSetupExpr(section, arg);
      } else {
        // drop references for duplicated attributes and unused attributes.
        dropNodes(arg);
      }

      i++;
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
      inputExpr,
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
  rootExprs: KnownExprs,
): KnownExprs {
  const inputExpr: KnownExprs = {};
  if (!propTree.props) {
    const extra = (inputExpr.value = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    ));

    setBindingDownstream(propTree.binding, extra, rootExprs);
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

    const attrTags = getAttrTagPaths(tag);
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
              rootExprs,
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
        setBindingDownstream(binding, groupExtra, rootExprs);
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
        // The content signal call is applied unconditionally in setup.
        addSetupStatement(section);
      }
    }
  }

  let knownSpread: ReturnType<typeof getSingleKnownSpread>;
  let spreadReferenceNodes: t.Node[] | undefined;
  const { attributes } = tag.node;
  for (let i = attributes.length; i--;) {
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
        addSetupExpr(section, attr.value);
        setBindingDownstream(templateExportAttr.binding, attrExtra, rootExprs);
        // A cross template child that only ever invokes this input makes the attribute
        // `invokeOnly`; same-program prop trees may be mid-analysis with incomplete reads, so skipped.
        if (
          getRootSection(templateExportAttr.binding.section) !==
            getProgram().node.extra.section &&
          isInvokeOnlyBinding(templateExportAttr.binding)
        ) {
          attrExtra.invokeOnly = true;
        }
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
        rootExprs,
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
        rootExprs,
      );
    } else {
      dropNodes(spreadReferenceNodes);
    }
  } else {
    if (restReferenceNodes) {
      inputExpr.value = mergeReferences(section, tag.node, restReferenceNodes);
      setBindingDownstream(propTree.rest!.binding, inputExpr.value, rootExprs);
    }

    if (remaining.size) {
      // Unset props are applied with no value (and no references) in setup.
      addSetupStatement(section);
    }

    if (propTree.rest && !propTree.rest.props) {
      // The rest signal call is keyed by the tag's merged references.
      addSetupExpr(section, tag.node);
    }
  }

  dropNodes(dropReferenceNodes);

  return inputExpr;
}

function getSingleKnownSpread(
  attributes: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
) {
  let binding: Binding | undefined;
  let extra: t.NodeExtra | undefined;
  for (let i = attributes.length; i--;) {
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
    directContent?: boolean,
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
    propTree.rest ||
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

    const renderParams: (t.Expression | t.SpreadElement)[] = tag.node.arguments
      ? [...tag.node.arguments]
      : [];
    if (!tag.node.arguments?.length || translatedAttrs.properties.length) {
      renderParams.push(propsToExpression(translatedAttrs.properties));
    }

    addStatement(
      "render",
      info.tagSection,
      referencedBindings,
      t.expressionStatement(
        t.callExpression(tagInputIdentifier, [
          createScopeReadExpression(info.childScopeBinding, info.tagSection),
          t.arrayExpression(renderParams),
        ]),
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
    const repeated = analyzeAttributeTags(
      tag.parentPath as t.NodePath<t.MarkoTag>,
    )?.[getTagName(tag)]?.repeated;
    const mergedProps = getAttrTagProps(
      tag,
      repeated,
      t.objectExpression(translatedAttrs.properties),
      info,
    );
    if (!mergedProps) return;
    translatedProps = mergedProps;
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
  return getAttrTagProps(
    tag,
    attrTagMeta.repeated,
    t.objectExpression(translatedAttrs.properties),
    info,
  );
}

function getAttrTagProps(
  tag: t.NodePath<t.MarkoTag>,
  repeated: boolean | undefined,
  translatedProps: t.ObjectExpression,
  info: TranslateDOMInfo,
) {
  if (!repeated) return callRuntime("attrTag", translatedProps);

  const attrTagName = getTagName(tag);
  const parentTag = tag.parentPath as t.NodePath<t.MarkoTag>;
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
  }

  // Uses parenthesized expressions since they are simple to mutate after the fact
  // and do not impact the output.
  const wrappedProps = t.parenthesizedExpression(
    callRuntime("attrTag", translatedProps),
  ) as t.ParenthesizedExpression & {
    expression: t.CallExpression;
  };
  attrTagCallsForTag.set(attrTagName, wrappedProps);
  return wrappedProps;
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
        // The direct content signal applies no parameters, so it can only be
        // used when the body declares none.
        const directContent = !bodySection.params;
        addStatement(
          "render",
          info.tagSection,
          undefined, // TODO: pretty sure content needs to have the reference group of it's param defaults.
          t.expressionStatement(
            t.callExpression(
              info.getBindingIdentifier(
                contentExport.binding,
                `${importAlias}_content`,
                directContent,
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
          true,
        );
      }
    }
  }

  let knownSpread: ReturnType<typeof getSingleKnownSpread>;
  let spreadProps: t.ObjectExpression["properties"] | undefined;

  const staticAttrs: t.MarkoAttribute[] = [];
  const { attributes } = tag.node;
  for (let i = attributes.length; i--;) {
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

  for (let i = staticAttrs.length; i--;) {
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
        true,
      );
    }
  } else if (
    spreadProps &&
    (remaining.size || (propTree.rest && !propTree.rest.props))
  ) {
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
        true,
      );
    }
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

function getRootSection(section: Section) {
  while (section.parent) section = section.parent;
  return section;
}
