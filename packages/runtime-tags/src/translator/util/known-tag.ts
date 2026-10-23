import { types as t } from "@marko/compiler";
import { getProgram, isAttributeTag } from "@marko/compiler/babel-utils";

import { ReservedId } from "../../common/types";
import {
  type Binding,
  BindingType,
  bindingUtil,
  createBinding,
  type ParamBinding,
  getDebugNames,
  ensurePropertyAlias,
  getPropertyAlias,
  isInvokeOnlyBinding,
  isOwnBinding,
  reserveId,
} from "./bindings";
import { setTagContentDerives } from "./content-derives";
import { generateUidIdentifier } from "./generate-uid";
import { getTagName, getTagNameHint } from "./get-tag-name";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  type AttrTagMeta,
  getAttrTagIdentifier,
  getAttrTagPaths,
} from "./nested-attribute-tags";
import { forEach, fromIter, type SortedOpt } from "./optional";
import {
  type ParamsTree,
  getAllKnownPropNames,
  exposeParamsTree,
  getParamsTreeAt,
  getSettledParamsTree,
} from "./params-tree";
import {
  addAlwaysReason,
  addReasonExprs,
  addReason,
  getSourcesForExpr,
  getSourcesForExprs,
  type KnownExprs,
  getKnownExprsAt,
  mapParamBindingToExpr,
  mapParamReasonToExpr,
} from "./reasons";
import {
  addRead,
  dropContent,
  dropNodes,
  getAllTagReferenceNodes,
  mergeReferences,
  type ReferencedExtra,
  setDerivedFrom,
  trackParamsReferences,
  trackVarReferences,
  mergeTagReferences,
} from "./references";
import { callRuntime } from "./runtime";
import {
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
} from "./scope-accessor";
import { createScopeReadExpression, scopeIdentifier } from "./scope-read";
import { getSectionRendererIdentifier } from "./section-renderer";
import {
  ensureSection,
  ensureBodySection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isSameOrAncestorSection,
  type ParamReasonGroups,
  type Section,
  sectionUtil,
} from "./sections";
import { addSetupExpr, addSetupWork } from "./setup-work";
import {
  addStatement,
  getResumeRegisterId,
  initValue,
  writeHTMLResumeStatements,
  writeSlot,
} from "./signals";
import { findSlot, ensureSlot, SlotKind } from "./slots";
import { mergeSources, type Sources } from "./sources";
import { createAnalysisState, createOutputSectionState } from "./state";
import {
  toMemberExpression,
  toObjectProperty,
  toPropertyName,
} from "./to-property-name";
import {
  addDynamicAttrTagStatements,
  addAttrTag,
  appendAttrTag,
  propsToExpression,
  translateAttrs,
  getSingleKnownSpread,
} from "./translate-attrs";
import translateVar, {
  buildVarChange,
  isTagVarAssigned,
} from "./translate-var";
import { buildGroupMask, getExprIfWritten, getWriteGuard } from "./write-guard";

type AttrTagGroup = AttrTagLookup[string]["group"];

// Bound after every tag in the section is set up, so a `<return>` a setup
// sends early reaches tags that read it only once they are set up too.
const [getTagVarBindings] = createOutputSectionState(() => [] as t.Statement[]);

// Call sites settle with sources, before anything maps a param through them.
const [getCallSiteSourcesByParam] = createAnalysisState(
  () => new Map<ParamBinding, Sources | undefined>(),
);

const kChildSection = Symbol("known tag child section");
const kParamsTree = Symbol("known tag params tree");
const kKnownExprs = Symbol("known tag exprs");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    /** The dom binding a known tag holds its child's scope in. */
    childScopeBinding?: Binding;
    [kChildSection]?: Section;
    /** The child's params tree the call site was analyzed against. */
    [kParamsTree]?: ParamsTree;
    [kKnownExprs]?: KnownExprs;
  }
}

// A recursive tag (a `<define>` or template rendering itself) waits for its
// body's analysis, as a call after a `<define>` does by position.
const [getRecursiveTags] = createAnalysisState(
  () => [] as t.NodePath<t.MarkoTag>[],
);

// `childParamsTree` is another template's settled params tree.
export function knownTagAnalyze(
  tag: t.NodePath<t.MarkoTag>,
  childSection: Section,
  childParamsTree?: ParamsTree,
) {
  analyzeAttributeTags(tag);

  const section = ensureSection(tag);
  const tagBody = tag.get("body");
  const tagExtra = (tag.node.extra ??= {});
  tagExtra.childScopeBinding = createBinding(
    "#childScope",
    BindingType.dom,
    section,
  );
  ensureBodySection(tagBody);
  trackParamsReferences(tagBody, BindingType.param);
  (section.knownTags ||= []).push(tagExtra);
  tagExtra[kChildSection] = childSection;
  const varBinding = trackVarReferences(tag, BindingType.derived);
  const recursive = isSameOrAncestorSection(childSection, section);
  let exprs: KnownExprs | undefined;
  // A `<define>` body, or the template rendering itself, renders in place of
  // this call.
  if (childSection.program === section.program) {
    childSection.callSections = sectionUtil.add(
      childSection.callSections,
      section,
    );
    if (recursive) {
      getRecursiveTags().push(tag);
    } else {
      exprs = analyzeKnownTagParams(tag, exposeChildParamsTree(childSection));
    }
  } else {
    exprs = analyzeKnownTagParams(tag, childParamsTree);
  }

  if (varBinding) {
    // Tag variables emit a `_var` statement in the parent's setup.
    addSetupWork(section);
    const { childScopeBinding } = tagExtra;
    varBinding.returnedBy = {
      scope: childScopeBinding,
      section: childSection,
      exprs,
    };
    reserveId(childScopeBinding, ReservedId.ScopeOffset);
    if (isTagVarAssigned(tag)) addAlwaysReason(childScopeBinding);
    // A recursive call's var derives once its content's `<return>` settles.
    if (!recursive) {
      assertReturns(tag, childSection);
      const varExpr = tagExtra.defineBodySection
        ? childSection.returnValueExpr
        : mapParamReasonToExpr(exprs!, getReturnParams(childSection));
      setDerivedFrom(varBinding, varExpr);
      if (varExpr === true) addAlwaysReason(childScopeBinding);
    }
  }
}

// Every body is analyzed now, so each recursive tag takes its callee's tree.
export function analyzeRecursiveTags() {
  for (const tag of getRecursiveTags()) {
    const childSection = tag.node.extra![kChildSection]!;
    assertTerminates(tag, childSection);
    const exprs = analyzeKnownTagParams(
      tag,
      exposeChildParamsTree(childSection),
    );
    if (tag.node.var) {
      assertReturns(tag, childSection);
      const varBinding = tag.node.var.extra!.binding!;
      varBinding.returnedBy!.exprs = exprs;
      setDerivedFrom(varBinding, childSection.returnValueExpr);
    }
  }
}

// A recursive tag reached from its callee through calls alone, with no branch
// between them, renders that callee again on every render.
function assertTerminates(tag: t.NodePath<t.MarkoTag>, childSection: Section) {
  const callers = new Set([getSection(tag)]);
  for (const caller of callers) {
    if (caller === childSection) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `A ${childSection === getProgram().node.extra.section ? "template" : "`<define>`"} that renders itself outside a branch never terminates. Render \`<${getTagNameHint(tag.node)}>\` inside a branch that eventually stops, such as \`<if>\`.`,
        );
    }
    forEach(caller.callSections, (callSection) => {
      callers.add(callSection);
    });
  }
}

// A body in this template is analyzed when its tree is taken: `<define>`
// rejects hoisted calls, and a recursive tag waits for program exit.
function exposeChildParamsTree(childSection: Section) {
  return childSection.params && exposeParamsTree(childSection.params, true);
}

function analyzeKnownTagParams(
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree | undefined,
) {
  const tagExtra = tag.node.extra!;
  const attrExprs = new Set([tagExtra]);
  tagExtra[kParamsTree] = paramsTree;
  const exprs = (tagExtra[kKnownExprs] = analyzeParams(
    tagExtra,
    getSection(tag),
    tag,
    paramsTree,
    attrExprs,
  ));
  // A body follows the call's arguments, like any attribute tags, so it belongs
  // to the param at the argument count: `props[0]` put the derives on a value
  // argument instead, and a body next to arguments then looked unread.
  setTagContentDerives(
    tag,
    paramsTree?.props?.[tag.node.arguments?.length || 0]?.binding,
    exprs,
  );
  addReasonExprs(ensureSlot(tagExtra.childScopeBinding!), fromIter(attrExprs));
  return exprs;
}

// The params another template's return value is computed from, or `true` when
// it also reads state.
function getReturnParams(section: Section) {
  const sources = getSourcesForExpr(section.returnValueExpr!);
  return sources && (sources.always || !!sources.state || sources.param);
}

// A tag variable is the value its tag's content `<return>`s.
function assertReturns(tag: t.NodePath<t.MarkoTag>, childSection: Section) {
  if (!childSection.returnValueExpr) {
    throw tag
      .get("var")
      .buildCodeFrameError(
        `The \`${getTagNameHint(tag.node)}\` tag does not [\`<return>\`](https://markojs.com/docs/reference/core-tag#return) a value, so it does not support a [tag variable](https://markojs.com/docs/reference/language#tag-variables). Remove the variable, or add a \`<return>\` to the tag.`,
      );
  }
}

// The child's scope resumes, and with it any tag variable, which HTML wires
// with `_var` and DOM registers for.
function isChildScopeResumed(tagExtra: t.MarkoTagExtra) {
  return !!findSlot(tagExtra.childScopeBinding!)?.reason;
}

// Arguments a child reads none of are dropped, so the render call passes
// none; among ones it reads, a dropped argument holds its place as undefined.
function getRenderArgs(
  tag: t.NodePath<t.MarkoTag>,
  properties: t.ObjectExpression["properties"],
) {
  const args = tag.node.arguments;
  const renderArgs: (t.Expression | t.SpreadElement)[] =
    args?.length && !args.every(isDroppedNode) ? args.map(toRenderArg) : [];
  if (!renderArgs.length || properties.length) {
    if (properties.length) {
      // The input is positional, so each dropped argument keeps its slot:
      // without it the body slides into the first param and reads `undefined`.
      while (renderArgs.length < (args?.length ?? 0)) {
        renderArgs.push(t.buildUndefinedNode());
      }
    }
    renderArgs.push(propsToExpression(properties));
  }
  return renderArgs;
}

function isDroppedNode(node: t.Node) {
  return !!node.extra?.dropped;
}

function toRenderArg(arg: t.Expression | t.SpreadElement) {
  return isDroppedNode(arg) ? t.buildUndefinedNode() : arg;
}

export function knownTagTranslateHTML(
  tag: t.NodePath<t.MarkoTag>,
  tagIdentifier: t.Expression,
) {
  const { node } = tag;
  const tagExtra = node.extra!;
  const childSection = tagExtra[kChildSection]!;
  const paramsTree = getSettledParamsTree(tagExtra[kParamsTree]);

  writeHTMLResumeStatements(tag);

  const tagVar = node.var;
  const section = getSection(tag);

  const attrsTree = paramsTree?.props?.[tag.node.arguments?.length || 0];
  const { properties, statements } =
    (paramsTree && !paramsTree.props) || attrsTree
      ? translateAttrs(tag, attrsTree)
      : {
          properties: [],
          statements: [],
        };

  const childScopeBinding = tagExtra.childScopeBinding!;

  let varStatement: t.Statement | undefined;
  if (isChildScopeResumed(tagExtra)) {
    const peekScopeId = generateUidIdentifier(childScopeBinding?.name);
    // After the attr statements: building attribute tags can consume scope
    // ids (eg `_resume_locals`), and the peek must see the child's root id.
    statements.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(peekScopeId, callRuntime("_peek_scope_id")),
      ]),
    );

    const childScopeSlot = findSlot(childScopeBinding)!;
    writeSlot(childScopeSlot, callRuntime("_existing_scope", peekScopeId));

    if (tagVar) {
      // Below the render call, `_var` mints the scope offset's post-render id;
      // guarded, as its registration ships only where the guard holds.
      varStatement = t.expressionStatement(
        getExprIfWritten(
          section,
          childScopeSlot.reason!,
          callRuntime(
            "_var",
            getScopeIdIdentifier(section),
            getScopeOffsetAccessorLiteral(childScopeBinding),
            peekScopeId,
            t.stringLiteral(
              getResumeRegisterId(section, tagVar.extra?.binding, "var"),
            ),
          ),
        ),
      );
    }
  }

  if (childSection.paramReasonGroups) {
    const childGroupMask = buildChildGroupMask(
      section,
      childScopeBinding,
      childSection.paramReasonGroups,
    );

    if (childGroupMask) {
      tag.insertBefore(
        t.expressionStatement(callRuntime("_set_scope_reason", childGroupMask)),
      );
    }
  }

  if (tagVar) {
    // The render call reads attr-tag bindings, so its declaration must follow
    // the attr statements rather than precede the tag.
    translateVar(
      tag,
      t.callExpression(tagIdentifier, getRenderArgs(tag, properties)),
      "let",
      statements,
    );
    if (varStatement) statements.push(varStatement);
  } else {
    statements.push(
      t.expressionStatement(
        t.callExpression(tagIdentifier, getRenderArgs(tag, properties)),
      ),
    );
  }

  for (const replacement of tag.replaceWithMultiple(statements)) {
    replacement.skip();
  }
}

export function knownTagTranslateDOM(
  tag: t.NodePath<t.MarkoTag>,
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
  const paramsTree = getSettledParamsTree(extra[kParamsTree]);
  const childScopeBinding = extra.childScopeBinding!;

  if (node.var) {
    const varBinding = node.var.extra!.binding!;
    const signal = initValue(varBinding);
    // The `_var` setup call below references the signal.
    signal.register = isChildScopeResumed(extra);
    signal.referenced = true;
    signal.buildAssignment = (valueSection, value) =>
      buildVarChange(
        createScopeReadExpression(childScopeBinding, valueSection),
        value,
        varBinding,
      );
    getTagVarBindings(tagSection).push(
      t.expressionStatement(
        callRuntime(
          "_var",
          scopeIdentifier,
          getScopeAccessorLiteral(childScopeBinding, true),
          signal.identifier,
        ),
      ),
    );
  }
  callSetup?.(tagSection, childScopeBinding);

  if (paramsTree) {
    writeParamsToSignals(tag, paramsTree, getTagName(tag) || "tag", {
      tagSection,
      knownExprs: extra[kKnownExprs]!,
      getBindingIdentifier,
      childScopeBinding,
    });
  }
}

// What a `<define>` body's calls pass for its param. Another renderer reading
// the body on the client already makes what the body reads always.
export function getCallSiteSources(param: ParamBinding) {
  const sourcesByParam = getCallSiteSourcesByParam();
  if (sourcesByParam.has(param)) return sourcesByParam.get(param);
  const body = param.section;
  let sources: Sources | undefined;
  forEach(body.callSections, (callSection) => {
    for (const tagExtra of callSection.knownTags!) {
      if (tagExtra[kChildSection] === body) {
        sources = mergeSources(
          sources,
          getSourcesForExprs(
            mapParamBindingToExpr(tagExtra[kKnownExprs]!, param),
          ),
        );
      }
    }
  });
  sourcesByParam.set(param, sources);
  return sources;
}

export function addTagVarBindings(section: Section) {
  const bindings = getTagVarBindings(section);
  if (bindings.length) addStatement("render", section, undefined, bindings);
}

export function addKnownTagReasons(section: Section) {
  for (const tagExtra of section.knownTags || []) {
    const { childScopeBinding } = tagExtra;
    const knownExprs = tagExtra[kKnownExprs];
    const childSection = tagExtra[kChildSection]!;
    if (knownExprs && childScopeBinding && childSection.paramReasonGroups) {
      for (const group of childSection.paramReasonGroups) {
        // Sources settle before solving, so a group maps once: a later pass
        // only meets the groups it added.
        if (!findSlot(childScopeBinding, SlotKind.ParamGroup, section, group)) {
          const slot = ensureSlot(
            childScopeBinding,
            SlotKind.ParamGroup,
            section,
            group,
          );
          slot.reasonExprs = mapParamReasonToExpr(knownExprs, group);
          addReason(slot, getSourcesForExprs(slot.reasonExprs));
        }
      }
    }
  }
}

// A known tag rendering another template calls its setup in the section's
// setup: a load tag always, any other when that template has setup work.
export function callsOtherTemplateSetup(section: Section) {
  for (const tagExtra of section.knownTags || []) {
    const childSection = tagExtra[kChildSection]!;
    if (
      tagExtra.tagNameLoad ||
      (childSection.program !== section.program && childSection.hasSetupWork)
    ) {
      return true;
    }
  }
  return false;
}

// Each group's serialize guard is its bit; groups sharing a guard still shift it
// once each, since folding them into one term would only save server bytes.
function buildChildGroupMask(
  section: Section,
  childScopeBinding: Binding,
  reasonGroups: ParamReasonGroups,
) {
  return buildGroupMask(
    reasonGroups.map((group) => {
      const reason = findSlot(
        childScopeBinding,
        SlotKind.ParamGroup,
        section,
        group,
      )?.reason;
      const guard = reason && getWriteGuard(section, reason, false)!;
      return {
        value: !guard
          ? undefined
          : guard.type === "NumericLiteral"
            ? guard.value
            : guard,
        names: getDebugNames(group),
      };
    }),
  );
}

function analyzeParams(
  rootTagExtra: t.MarkoTagExtra,
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree | undefined,
  rootAttrExprs: Set<t.NodeExtra>,
): KnownExprs {
  const paramsExpr: KnownExprs = {};
  if (!paramsTree) {
    dropAllTagNodes(tag.node);
    return paramsExpr;
  }

  if (!readsParamsByName(tag, paramsTree)) {
    paramsExpr.value = setDerivedFromTag(
      section,
      tag,
      paramsTree.binding,
      paramsExpr,
    );
    return paramsExpr;
  }

  const known: NonNullable<KnownExprs["known"]> = (paramsExpr.known = {});

  let i = 0;
  if (tag.node.arguments) {
    for (const arg of tag.node.arguments) {
      const argTree = paramsTree.props[i];
      if (argTree) {
        const argValueExtra = (arg.extra ??= {});
        known[i] = { value: argValueExtra };
        rootAttrExprs.add(argValueExtra);
        addSetupExpr(section, arg);
        setDerivedFrom(argTree.binding, argValueExtra, paramsExpr);
      } else {
        dropNodes(arg);
      }

      i++;
    }
  }

  const attrsTree = paramsTree.props[i];
  if (attrsTree) {
    known[i] = analyzeAttrs(
      rootTagExtra,
      section,
      tag,
      attrsTree,
      rootAttrExprs,
      paramsExpr,
    );
  } else {
    const args = tag.node.arguments;
    tag.node.arguments = null;
    dropAllTagNodes(tag.node);
    tag.node.arguments = args;
  }

  return paramsExpr;
}

function analyzeAttrs(
  rootTagExtra: t.MarkoTagExtra,
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree,
  rootAttrExprs: Set<t.NodeExtra>,
  rootExprs: KnownExprs,
): KnownExprs {
  const inputExpr: KnownExprs = {};
  if (!paramsTree.props) {
    inputExpr.value = setDerivedFromTag(
      section,
      tag,
      paramsTree.binding,
      rootExprs,
    );
    return inputExpr;
  }

  const known: NonNullable<KnownExprs["known"]> = (inputExpr.known = {});
  const attrTagLookup = analyzeAttributeTags(tag);
  const seen = new Set<string>();
  const remaining = new Set(getAllKnownPropNames(paramsTree));
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
      // Within control flow, an attribute tag the child never reads is dropped
      // with its content, while the flow around it stays.
      const referenceNodes: t.Node[] = [];
      const collectAttrTag = (attrTag: t.MarkoTag) =>
        collectAttrTagReferenceNodes(
          attrTag,
          attrTagLookup,
          paramsTree,
          referenceNodes,
          dropReferenceNodes,
        );
      if (isAttributeTag(child)) {
        collectAttrTag(child.node);
      } else {
        getAllTagReferenceNodes(child.node, referenceNodes, collectAttrTag);
      }
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
          const childAttrTree = getParamsTreeAt(paramsTree, attrTagMeta.name);
          if (!childAttrTree) {
            dropAttrTag(child.node, dropReferenceNodes);
          } else if (attrTagMeta.dynamic) {
            analyzeDynamicAttrTagChildGroup(attrTagMeta.group, child);
          } else if (childAttrTree === true) {
            getAllTagReferenceNodes(child.node, (restReferenceNodes ||= []));
            known[attrTagMeta.name] = {
              value: rootTagExtra as ReferencedExtra,
            };
          } else if (
            childAttrTree.props &&
            !(attrTagMeta.repeated && childAttrTree.rest)
          ) {
            // Members read the first occurrence; only a whole read or a rest
            // reaches the others.
            if (remaining.delete(attrTagMeta.name)) {
              known[attrTagMeta.name] = analyzeAttrs(
                rootTagExtra,
                section,
                child,
                childAttrTree,
                rootAttrExprs,
                rootExprs,
              );
            } else {
              dropAttrTag(child.node, dropReferenceNodes);
            }
          } else {
            analyzeDynamicAttrTagChildGroup(attrTagMeta.group, child);
          }
        } else {
          const group = child.node.extra!.attributeTagGroup!;
          if (hasGroupReads(group, attrTagLookup, paramsTree)) {
            analyzeDynamicAttrTagChildGroup(group, child);
          } else {
            dropAttrTag(child.node, dropReferenceNodes);
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
      let bindings: SortedOpt<Binding>;
      let hasRest = false;

      const trees = getGroupParamsTrees(group, attrTagLookup, paramsTree);
      for (const [, tree] of trees) {
        if (tree === true) {
          hasRest = true;
        } else {
          bindings = bindingUtil.add(bindings, tree.binding);
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

        // A chain can mix rest members with known ones, which read the same
        // statement as the rest.
        forEach(bindings, (binding) => {
          setDerivedFrom(binding, rootTagExtra, rootExprs);
        });
        for (const [attrTagMeta, tree] of trees) {
          if (tree !== true) remaining.delete(attrTagMeta.name);
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
        setDerivedFrom(binding, groupExtra, rootExprs);
      });

      for (const name of group) {
        const attrTagMeta = attrTagLookup[name];
        remaining.delete(attrTagMeta.name);
        known[attrTagMeta.name] = groupKnownValue;
      }
    }
  }

  const contentTree = getParamsTreeAt(paramsTree, "content");
  if (!contentTree) {
    dropContent(tag.node.body);
  } else if (!seen.has("content")) {
    const bodySection = getSectionForBody(tag.get("body"));
    if (bodySection) {
      seen.add("content");
      if (contentTree === true) {
        // TODO: update when supporting default params
        known.content = { value: rootTagExtra as ReferencedExtra };
      } else {
        remaining.delete("content");
        known.content = { value: undefined }; // TODO: update when supporting default params
        // The content signal call is applied unconditionally in setup.
        addSetupWork(section);
      }
    }
  }

  let knownSpread: ReturnType<typeof getSingleKnownSpread>;
  let spreadReferenceNodes: t.Node[] | undefined;
  const { attributes } = tag.node;
  for (let i = attributes.length; i--;) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      const attrTree = getParamsTreeAt(paramsTree, attr.name);
      if (!attrTree || seen.has(attr.name)) {
        // drop references for duplicated attributes and unused attributes.
        dropReferenceNodes.push(attr.value);
        continue;
      }

      seen.add(attr.name);

      if (spreadReferenceNodes) {
        spreadReferenceNodes.push(attr.value);
      } else if (attrTree === true) {
        (restReferenceNodes ||= []).push(attr.value);
        known[attr.name] = { value: rootTagExtra as ReferencedExtra };
      } else {
        const attrExtra = (attr.value.extra ??= {}) as ReferencedExtra;
        remaining.delete(attr.name);
        known[attr.name] = { value: attrExtra };
        rootAttrExprs.add(attrExtra);
        addSetupExpr(section, attr.value);
        setDerivedFrom(attrTree.binding, attrExtra, rootExprs);
        // A cross template child that only ever invokes this input makes the attribute
        // `invokeOnly`; same-program params trees may be mid-analysis with incomplete reads, so skipped.
        if (
          !isOwnBinding(attrTree.binding) &&
          isInvokeOnlyBinding(attrTree.binding)
        ) {
          attrExtra.invokeOnly = true;
        }
      }
    } else if (spreadReferenceNodes) {
      spreadReferenceNodes.push(attr.value);
    } else {
      knownSpread = getSingleKnownSpread(paramsTree, attributes);

      if (knownSpread) {
        // Read prop by prop, so it is written as what those props read.
        dropNodes(attr.value);
      } else {
        (spreadReferenceNodes = restReferenceNodes || []).push(attr.value);
      }
    }
  }

  if (knownSpread) {
    for (const prop of remaining) {
      const propBinding = ensurePropertyAlias(knownSpread, prop);
      const propExtra: ReferencedExtra = { section };
      const attrTree = getParamsTreeAt(paramsTree, prop)!;

      known[prop] = { value: propExtra };
      rootAttrExprs.add(propExtra);
      addRead(propExtra, propExtra, propBinding, section, undefined);
      setDerivedFrom(
        attrTree === true ? paramsTree.rest!.binding : attrTree.binding,
        propExtra,
        rootExprs,
      );
    }
  } else if (spreadReferenceNodes) {
    if (remaining.size || (paramsTree.rest && !paramsTree.rest.props)) {
      inputExpr.value = mergeReferences(
        section,
        tag.node,
        spreadReferenceNodes,
      );
      setDerivedFrom(
        paramsTree.rest?.binding || paramsTree.binding,
        inputExpr.value,
        rootExprs,
      );
    } else {
      dropNodes(spreadReferenceNodes);
    }
  } else {
    if (restReferenceNodes) {
      inputExpr.value = mergeReferences(section, tag.node, restReferenceNodes);
      setDerivedFrom(paramsTree.rest!.binding, inputExpr.value, rootExprs);
    }

    if (remaining.size) {
      // Unset props are applied with no value (and no references) in setup.
      addSetupWork(section);
    }

    if (paramsTree.rest && !paramsTree.rest.props) {
      // The rest signal call is keyed by the tag's merged references.
      addSetupExpr(section, tag.node);
    }
  }

  dropNodes(dropReferenceNodes);

  return inputExpr;
}

// A child reading its params as one value (with a rest, or from a spread
// argument) reads them through every expression in the tag.
function readsParamsByName(
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree,
): paramsTree is ParamsTree & {
  props: NonNullable<ParamsTree["props"]>;
} {
  return (
    !!paramsTree.props &&
    !paramsTree.rest &&
    !tag.node.arguments?.some(isSpreadArgument)
  );
}

function isSpreadArgument(arg: t.Expression | t.SpreadElement) {
  return arg.type === "SpreadElement";
}

function setDerivedFromTag(
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  binding: Binding,
  rootExprs: KnownExprs,
) {
  const extra = mergeTagReferences(section, tag.node);
  setDerivedFrom(binding, extra, rootExprs);
  return extra;
}

// A child reading no attribute of a tag leaves every expression, attribute tag
// and content in it emitted by neither output.
function dropAllTagNodes(tag: t.MarkoTag) {
  const nodes: t.Node[] = [];
  dropContent(tag.body);
  dropNodes(
    getAllTagReferenceNodes(tag, nodes, (attrTag) =>
      dropAttrTag(attrTag, nodes),
    ),
  );
}

// An attribute tag the child reads collects into `referenceNodes`, except for
// the attribute tags nested in it that the child never reads.
function collectAttrTagReferenceNodes(
  attrTag: t.MarkoTag,
  attrTagLookup: AttrTagLookup,
  paramsTree: ParamsTree | true,
  referenceNodes: t.Node[],
  dropReferenceNodes: t.Node[],
) {
  const attrTagTree = getParamsTreeAt(
    paramsTree,
    attrTagLookup[(attrTag.name as t.StringLiteral).value].name,
  );
  if (attrTagTree) {
    if (!getParamsTreeAt(attrTagTree, "content")) {
      dropContent(attrTag.body);
    }
    getAllTagReferenceNodes(attrTag, referenceNodes, (nestedAttrTag) =>
      collectAttrTagReferenceNodes(
        nestedAttrTag,
        attrTag.extra!.attrTagLookup!,
        attrTagTree,
        referenceNodes,
        dropReferenceNodes,
      ),
    );
  } else {
    dropAttrTag(attrTag, dropReferenceNodes);
  }
}

// Neither output emits an attribute tag or control flow the child never reads,
// nor anything nested in it.
function dropAttrTag(tag: t.MarkoTag, dropReferenceNodes: t.Node[]) {
  dropReferenceNodes.push(tag);
  // Control flow holds attribute tags, which this walk reaches, not content.
  if (!tag.body.attributeTags) dropContent(tag.body);
  getAllTagReferenceNodes(tag, dropReferenceNodes, (attrTag) =>
    dropAttrTag(attrTag, dropReferenceNodes),
  );
}

type TranslateDOMInfo = {
  tagSection: Section;
  knownExprs: KnownExprs;
  getBindingIdentifier: (
    binding: Binding,
    preferredName?: string,
    directContent?: boolean,
  ) => t.Identifier;
  childScopeBinding: Binding;
};

function writeParamsToSignals(
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree,
  hint: string,
  info: TranslateDOMInfo,
) {
  if (!readsParamsByName(tag, paramsTree)) {
    const tagExtra = tag.node.extra;
    const tagInputIdentifier = info.getBindingIdentifier(
      paramsTree.binding,
      `${hint}_params`,
    );
    const translatedAttrs = translateAttrs(tag);

    if (translatedAttrs.statements.length) {
      addStatement(
        "render",
        info.tagSection,
        tagExtra,
        translatedAttrs.statements,
      );
    }

    writeToSignal(
      info,
      tagInputIdentifier,
      tagExtra,
      t.arrayExpression(getRenderArgs(tag, translatedAttrs.properties)),
    );
    return;
  }

  let i = 0;
  if (tag.node.arguments) {
    for (const arg of tag.node.arguments) {
      const argTree = paramsTree.props[i];
      if (argTree) {
        writeToSignal(
          info,
          info.getBindingIdentifier(argTree.binding, `${hint}_param_${i}`),
          arg.extra, // TODO: pretty sure content needs to have the reference group of it's param defaults.
          arg as t.Expression,
          true,
        );
      }

      i++;
    }
  }

  const attrsTree = paramsTree.props[i];
  if (attrsTree) {
    writeAttrsToSignals(tag, attrsTree, `${hint}_input`, info);
  }
}

function applyAttrObject(
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree,
  tagInputIdentifier: t.Identifier,
  info: TranslateDOMInfo,
) {
  const tagExtra = tag.node.extra;
  const statements: t.Statement[] = [];
  let translatedProps: t.Expression | undefined;

  if (isAttributeTag(tag)) {
    // Analysis merges every occurrence's references into the first, so its
    // signal builds them all.
    const attrTagName = getTagName(tag);
    for (const attrTag of (tag.parentPath as t.NodePath<t.MarkoTag>).get(
      "attributeTags",
    )) {
      if (attrTag.isMarkoTag() && getTagName(attrTag) === attrTagName) {
        translatedProps = appendAttrTag(
          translatedProps,
          t.objectExpression(
            translateAttrs(attrTag, paramsTree, undefined, statements)
              .properties,
          ),
        );
      }
    }
  } else {
    translatedProps = propsToExpression(
      translateAttrs(tag, paramsTree, undefined, statements).properties,
    );
  }

  if (statements.length) {
    addStatement("render", info.tagSection, tagExtra, statements);
  }

  writeToSignal(info, tagInputIdentifier, tagExtra, translatedProps!, true);
}

function writeAttrsToSignals(
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree,
  hint: string,
  info: TranslateDOMInfo,
) {
  if (!paramsTree.props) {
    applyAttrObject(
      tag,
      paramsTree,
      info.getBindingIdentifier(paramsTree.binding, hint),
      info,
    );

    return;
  }

  const attrTagLookup = analyzeAttributeTags(tag);
  const seen = new Set<string>();
  const tagExtra = tag.node.extra;
  const remaining = new Set(getAllKnownPropNames(paramsTree));
  const contentProps: t.ObjectExpression["properties"] = [];

  if (attrTagLookup) {
    const attrTags = tag.get("attributeTags");
    const statementsByGroup = new Map<
      AttrTagGroup,
      {
        expr: t.NodeExtra | undefined;
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
          expr: child.node.extra,
          statements,
        });
      }

      return addDynamicAttrTagStatements(
        attrTags,
        index,
        attrTagLookup,
        statements,
        paramsTree,
      );
    };

    // The rest input keeps the `translateAttrs` key order HTML passes:
    // attributes, then dynamic attribute tags, static ones, and content.
    for (const attrTagName in attrTagLookup) {
      const attrTagMeta = attrTagLookup[attrTagName];
      seen.add(attrTagMeta.name);
      if (
        attrTagMeta.dynamic &&
        getParamsTreeAt(paramsTree, attrTagMeta.name) === true
      ) {
        contentProps.push(
          toObjectProperty(attrTagMeta.name, getAttrTagIdentifier(attrTagMeta)),
        );
      }
    }

    for (let i = 0; i < attrTags.length; i++) {
      const child = attrTags[i];
      if (child.isMarkoTag()) {
        if (isAttributeTag(child)) {
          const attrTagMeta = attrTagLookup[getTagName(child)];
          const childAttrTree = getParamsTreeAt(paramsTree, attrTagMeta.name);
          if (!childAttrTree) {
            // ignore
          } else if (attrTagMeta.dynamic) {
            i = translateDynamicAttrTagChildInGroup(attrTagMeta.group, i);
          } else if (childAttrTree === true) {
            const statements: t.Statement[] = [];
            const translatedAttrs = translateAttrs(
              child,
              true,
              undefined,
              statements,
            );

            addStatement("render", info.tagSection, tagExtra, statements);

            addAttrTag(
              contentProps,
              attrTagMeta,
              t.objectExpression(translatedAttrs.properties),
            );
          } else if (
            attrTagMeta.repeated &&
            (!childAttrTree.props || childAttrTree.rest)
          ) {
            // Like HTML, the first occurrence passes the whole `attrTags` value,
            // since a whole read or a rest reaches the others.
            if (remaining.delete(attrTagMeta.name)) {
              applyAttrObject(
                child,
                childAttrTree,
                info.getBindingIdentifier(
                  childAttrTree.binding,
                  `${hint}_${attrTagMeta.name}`,
                ),
                info,
              );
            }
          } else {
            remaining.delete(attrTagMeta.name);
            writeAttrsToSignals(
              child,
              childAttrTree,
              `${hint}_${attrTagMeta.name}`,
              info,
            );
          }
        } else {
          const group = child.node.extra!.attributeTagGroup!;
          if (hasGroupReads(group, attrTagLookup, paramsTree)) {
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

    for (const [group, { expr, statements }] of statementsByGroup) {
      const trees = getGroupParamsTrees(group, attrTagLookup, paramsTree);
      const hasRest = trees.some(([, tree]) => tree === true);

      addStatement("render", info.tagSection, hasRest ? tagExtra : expr, [
        t.variableDeclaration(
          "let",
          trees.map(([attrTagMeta]) =>
            t.variableDeclarator(getAttrTagIdentifier(attrTagMeta)),
          ),
        ),
        ...statements,
      ]);

      for (const [attrTagMeta, tree] of trees) {
        if (tree !== true) {
          remaining.delete(attrTagMeta.name);
          writeToSignal(
            info,
            info.getBindingIdentifier(
              tree.binding,
              `${hint}_${attrTagMeta.name}`,
            ),
            hasRest ? tagExtra : expr,
            getAttrTagIdentifier(attrTagMeta),
          );
        }
      }
    }
  }

  const contentTree = getParamsTreeAt(paramsTree, "content");
  if (!seen.has("content") && contentTree) {
    const bodySection = getSectionForBody(tag.get("body"));
    if (bodySection) {
      seen.add("content");
      const bodyValue = t.callExpression(
        getSectionRendererIdentifier(bodySection)!,
        [scopeIdentifier],
      );
      if (contentTree === true) {
        contentProps.push(toObjectProperty("content", bodyValue));
      } else {
        remaining.delete("content");
        // The direct content signal applies no parameters, so it can only be
        // used when the body declares none.
        const directContent = !bodySection.params;
        writeToSignal(
          info,
          info.getBindingIdentifier(
            contentTree.binding,
            `${hint}_content`,
            directContent,
          ),
          undefined, // TODO: pretty sure content needs to have the reference group of it's param defaults.
          bodyValue,
          true,
        );
      }
    }
  }

  let knownSpread: ReturnType<typeof getSingleKnownSpread>;
  let hasSpread = false;
  const attrProps: t.ObjectExpression["properties"] = [];

  const staticAttrs: t.MarkoAttribute[] = [];
  const { attributes } = tag.node;
  for (let i = attributes.length; i--;) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      const attrTree = getParamsTreeAt(paramsTree, attr.name);
      if (!attrTree || seen.has(attr.name)) {
        continue;
      }

      seen.add(attr.name);

      if (hasSpread || attrTree === true) {
        attrProps.push(toObjectProperty(attr.name, attr.value));
      } else {
        staticAttrs.push(attr);
      }
    } else if (hasSpread) {
      attrProps.push(t.spreadElement(attr.value));
    } else {
      knownSpread = getSingleKnownSpread(paramsTree, attributes);
      if (!knownSpread) {
        hasSpread = true;
        attrProps.push(t.spreadElement(attr.value));
      }
    }
  }

  // Attributes were gathered last to first so the last duplicate wins.
  const inputProps = attrProps.reverse().concat(contentProps);

  for (let i = staticAttrs.length; i--;) {
    const attr = staticAttrs[i];
    const attrSignal = getSignalIdentifier(info, paramsTree, hint, attr.name);
    remaining.delete(attr.name);
    writeToSignal(
      info,
      attrSignal,
      attr.value.extra,
      attr.value, // TODO: use spreadBinding property alias after we optimize `in`
      true,
    );
  }

  if (knownSpread) {
    for (const prop of remaining) {
      const propSignal = getSignalIdentifier(info, paramsTree, hint, prop);
      const propBinding = getPropertyAlias(knownSpread, prop)!;
      writeToSignal(
        info,
        propSignal,
        getKnownExprsAt(
          info.knownExprs,
          (getParamsTreeAt(paramsTree, prop) as ParamsTree).binding,
        ).value,
        createScopeReadExpression(propBinding, info.tagSection),
        true,
      );
    }
  } else if (
    hasSpread &&
    (remaining.size || (paramsTree.rest && !paramsTree.rest.props))
  ) {
    const spreadExpr = propsToExpression(inputProps);
    let spreadId = spreadExpr;

    if (!isSimpleReference(spreadExpr)) {
      spreadId = generateUidIdentifier(`${hint}_spread`);
      addStatement("render", info.tagSection, tagExtra, [
        t.variableDeclaration("const", [
          t.variableDeclarator(spreadId, spreadExpr),
        ]),
      ]);
    }

    for (const name of remaining) {
      writeToSignal(
        info,
        getSignalIdentifier(info, paramsTree, hint, name),
        tagExtra,
        toMemberExpression(t.cloneNode(spreadId, true), name),
      );
    }

    if (paramsTree.rest && !paramsTree.rest.props) {
      const props: t.ObjectPattern["properties"] = [];
      const restId = t.identifier(paramsTree.rest.binding.name);
      forEach(paramsTree.rest.binding.excludeProperties, (name) => {
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
      writeToSignal(
        info,
        info.getBindingIdentifier(paramsTree.rest.binding, hint + "_$rest"),
        tagExtra,
        t.callExpression(
          t.arrowFunctionExpression([t.objectPattern(props)], restId),
          [spreadId],
        ),
        true,
      );
    }
  } else {
    for (const name of remaining) {
      writeToSignal(
        info,
        getSignalIdentifier(info, paramsTree, hint, name),
        undefined,
      );
    }

    if (paramsTree.rest && !paramsTree.rest.props) {
      writeToSignal(
        info,
        info.getBindingIdentifier(paramsTree.rest.binding, hint + "_$rest"),
        tagExtra,
        t.objectExpression(inputProps),
        true,
      );
    }
  }
}

// Calls a child signal with the child scope (and the value it takes) when
// what `expr` references changes.
function writeToSignal(
  info: TranslateDOMInfo,
  signal: t.Identifier,
  expr: t.NodeExtra | undefined,
  value?: t.Expression,
  isPure?: boolean,
) {
  const scope = createScopeReadExpression(
    info.childScopeBinding,
    info.tagSection,
  );
  addStatement(
    "render",
    info.tagSection,
    expr,
    t.callExpression(signal, value ? [scope, value] : [scope]),
    isPure,
  );
}

// The child signal setting the prop `name` of `paramsTree`.
function getSignalIdentifier(
  info: TranslateDOMInfo,
  paramsTree: ParamsTree,
  hint: string,
  name: string,
) {
  return info.getBindingIdentifier(
    (getParamsTreeAt(paramsTree, name) as ParamsTree).binding,
    `${hint}_${name}`,
  );
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

function hasGroupReads(
  group: AttrTagGroup,
  attrTagLookup: AttrTagLookup,
  paramsTree: ParamsTree,
) {
  return group.some(
    (name) => !!getParamsTreeAt(paramsTree, attrTagLookup[name].name),
  );
}

// The attribute tags of a group the child reads, with the params tree of each.
function getGroupParamsTrees(
  group: AttrTagGroup,
  attrTagLookup: AttrTagLookup,
  paramsTree: ParamsTree,
) {
  const trees: [AttrTagMeta, ParamsTree | true][] = [];
  for (const name of group) {
    const attrTagMeta = attrTagLookup[name];
    const tree = getParamsTreeAt(paramsTree, attrTagMeta.name);
    if (tree) trees.push([attrTagMeta, tree]);
  }
  return trees;
}
