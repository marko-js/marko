import { types as t } from "@marko/compiler";
import { getProgram, isAttributeTag } from "@marko/compiler/babel-utils";

import { UpdatesFrom, ReservedId } from "../../common/types";
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
  propertiesUtil,
  type ReferencedBindings,
  reserveId,
} from "./bindings";
import { setTagContentDerives } from "./content-derives";
import { createPassMemo } from "./cyclic-memo";
import { generateUidIdentifier } from "./generate-uid";
import { getTagName, getTagNameHint } from "./get-tag-name";
import { isOptimize, isPage, isPatch } from "./marko-config";
import { getModuleRead } from "./module-read";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  type AttrTagMeta,
  getAttrTagIdentifier,
  getAttrTagPaths,
} from "./nested-attribute-tags";
import {
  every,
  forEach,
  fromIter,
  type Opt,
  push,
  reduce,
  some,
  type SortedOpt,
  toArray,
} from "./optional";
import {
  type ParamsTree,
  getAllKnownPropertyNames,
  exposeParamsTree,
  getParamsTreeAt,
  getSettledParamsTree,
  hasAllKnownProperties,
} from "./params-tree";
import {
  hasClientState,
  isPatchKeyedSlot,
  onReasonsSettled,
} from "./patch/decisions";
import {
  getFilledReferences,
  hasFilledReferences,
  holdsRegisteredFn,
  namesBodyOwner,
  someReturnedFnValue,
} from "./patch/refresh";
import {
  calleeKeepsInput,
  getParamSelectedStructure,
  patchFillsSection,
  hasStructuralParam,
  recordStructuralParams,
} from "./patch/structure";
import {
  getCallerGroupBit,
  getCallerGroupGuard,
  mayHoldScopeBoundFn,
} from "./patch/writers";
import {
  addAlwaysReason,
  addReasonExprs,
  addReason,
  getSourcesForExpr,
  getSourcesForExprs,
  getSourcesForReferencedBindings,
  type KnownExprs,
  mapParamBindingToExpr,
  mapParamReasonToExpr,
} from "./reasons";
import {
  addRead,
  dropContent,
  dropNodes,
  getAllTagReferenceNodes,
  getChildTagReferenceNodes,
  isRegisteredFnExtra,
  mergeReferences,
  type ReferencedExtra,
  setDerivedFrom,
  trackParamsReferences,
  trackVarReferences,
  getReferencedBindings,
  getReferencedBindingsInFunction,
} from "./references";
import { replaceWithStatements } from "./replace-with-statements";
import {
  absentArg,
  linkRuntimeFeature,
  callRuntime,
  importRuntimeFeature,
} from "./runtime";
import {
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
} from "./scope-accessor";
import { createScopeReadExpression, scopeIdentifier } from "./scope-read";
import { getSectionRendererIdentifier } from "./section-renderer";
import {
  ensureReasonGroups,
  ensureSection,
  ensureBodySection,
  forEachSection,
  getCallerParamGroups,
  getCallerParamGroupsAt,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isSameOrAncestorSection,
  mayMergeWithText,
  type ParamReasonGroup,
  type ParamReasonGroups,
  type Section,
} from "./sections";
import { addSetupExpr, addSetupWork } from "./setup-work";
import { addParamFill, getParamEntries, type ParamFill } from "./shell";
import {
  addStatement,
  getResumeRegistryId,
  initValue,
  writeHTMLResumeStatements,
  writeSlot,
} from "./signals";
import { findSlot, ensureSlot, SlotKind } from "./slots";
import {
  hasCallerParamSource,
  hasParamOrGlobalSource,
  mergeSources,
  type Sources,
  withSources,
} from "./sources";
import {
  createAnalysisState,
  createOutputSectionState,
  createOutputState,
} from "./state";
import { hasScopeOffset } from "./structure";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import {
  addDynamicAttrTagStatements,
  addAttrTag,
  appendAttrTag,
  propsToExpression,
  translateAttrs,
} from "./translate-attrs";
import translateVar, {
  buildVarChange,
  getRestPattern,
  isTagVarAssigned,
} from "./translate-var";
import {
  andGuard,
  buildGroupsValue,
  buildGroupMask,
  getExprIfWritten,
  getWriteGuard,
  getGroupsConstant,
  getWriteReason,
  isEverWritten,
  scopePageIdentifier,
} from "./write-guard";

type AttrTagGroup = AttrTagLookup[string]["group"];

// Bound after every tag in the section is set up, so a `<return>` a setup
// sends early reaches tags that read it only once they are set up too.
const [getTagVarBindings] = createOutputSectionState(() => [] as t.Statement[]);

// Call sites settle with sources, before anything maps a param through them.
const [getCallSiteSourcesByParam] = createAnalysisState(
  () => new Map<ParamBinding, Sources | undefined>(),
);

const kParamsTree = Symbol("known tag params tree");
const kKnownExprs = Symbol("known tag exprs");
const kPassesInput = Symbol("known tag passes input");
const kModuleReadInput = Symbol("known tag module read input");

declare module "@marko/compiler/dist/types" {
  export interface MarkoSpreadAttributeExtra {
    /** The binding it spreads, which its known child reads prop by prop. */
    knownSpread?: Binding;
  }
  export interface NodeExtra {
    /** An argument or attribute value the call passes that is a module read. */
    [kModuleReadInput]?: true;
  }
  export interface MarkoTagExtra {
    /** The dom binding a known tag holds its child's scope in. */
    childScopeBinding?: Binding;
    /** The section a known tag renders: another template's, a `<define>` body. */
    childSection?: Section;
    /** The child's params tree the call site was analyzed against. */
    [kParamsTree]?: ParamsTree;
    [kKnownExprs]?: KnownExprs;
    /** The call passes its input after its arguments, as written in source. */
    [kPassesInput]?: boolean;
  }
}

// A known tag's extra, which always holds its child's section and scope binding.
export interface KnownTagExtra extends t.MarkoTagExtra {
  childScopeBinding: Binding;
  childSection: Section;
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
  const tagExtra = (tag.node.extra ??= {}) as KnownTagExtra;
  tagExtra.textBefore = mayMergeWithText(tag, true);
  tagExtra.childScopeBinding = createBinding(
    "#childScope",
    BindingType.dom,
    section,
  );
  tagExtra.childSection = childSection;
  if (isPatch()) {
    // Children inside unpatched structure never pair from a patch.
    onReasonsSettled(() => {
      if (patchFillsSection(section)) linkRuntimeFeature("patches/child");
    });
  }
  ensureBodySection(tagBody);
  trackParamsReferences(tagBody, BindingType.param);
  (section.knownTags ||= []).push(tagExtra);
  const varBinding = trackVarReferences(tag, BindingType.derived);
  const recursive = isSameOrAncestorSection(childSection, section);
  let exprs: KnownExprs | undefined;
  // A `<define>` body, or the template rendering itself, renders in place of
  // this call.
  if (childSection.program === section.program) {
    childSection.renderedBy = push(childSection.renderedBy, tagExtra);
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
    const childSection = tag.node.extra!.childSection!;
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
    forEach(caller.renderedBy, (call) => {
      callers.add(call.childScopeBinding.section);
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
  const { node } = tag;
  const tagExtra = node.extra!;
  const attrExprs = new Set([tagExtra]);
  tagExtra[kParamsTree] = paramsTree;
  // Attributes beside arguments are an error, so a call with arguments passes
  // its input only to carry a body or attribute tags.
  tagExtra[kPassesInput] =
    !node.arguments?.length ||
    !!node.body.body.length ||
    !!node.attributeTags.length;
  const exprs = (tagExtra[kKnownExprs] = analyzeParams(
    tagExtra,
    getSection(tag),
    tag,
    paramsTree,
    attrExprs,
  ));
  setTagContentDerives(
    tag,
    paramsTree?.properties?.[node.arguments?.length ?? 0]?.binding,
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

// Arguments are dropped when a child reads none of them nor the input after
// them; otherwise a dropped argument holds its place as undefined.
function getRenderArgs(
  tag: t.NodePath<t.MarkoTag>,
  properties: t.ObjectExpression["properties"],
) {
  const args = tag.node.arguments;
  const withInput = tag.node.extra![kPassesInput];
  const renderArgs: (t.Expression | t.SpreadElement)[] =
    args?.length && (withInput || !args.every(isDroppedNode))
      ? args.map(toRenderArg)
      : [];
  if (withInput) renderArgs.push(propsToExpression(properties));
  return renderArgs;
}

function isDroppedNode(node: t.Node) {
  return !!node.extra?.dropped;
}

function toRenderArg(arg: t.Expression | t.SpreadElement) {
  return isDroppedNode(arg) ? absentArg(0) : arg;
}

export function knownTagTranslateHTML(
  tag: t.NodePath<t.MarkoTag>,
  tagIdentifier: t.Expression,
) {
  const { node } = tag;
  const tagExtra = node.extra!;
  const childSection = tagExtra.childSection!;
  const paramsTree = getSettledParamsTree(tagExtra[kParamsTree]);

  writeHTMLResumeStatements(tag);

  const tagVar = node.var;
  const section = getSection(tag);

  const attrsTree = paramsTree?.properties?.[tag.node.arguments?.length || 0];
  const { properties, statements } =
    (paramsTree && !paramsTree.properties) || attrsTree
      ? translateAttrs(tag, attrsTree)
      : {
          properties: [],
          statements: [],
        };

  const childScopeBinding = tagExtra.childScopeBinding!;

  let varStatement: t.Statement | undefined;
  // A patch pairs the child through its scope ref, whatever the reason.
  if (isEverWritten(section, getWriteReason(childScopeBinding))) {
    const peekScopeId = generateUidIdentifier(childScopeBinding.name);
    const childScopeSlot = findSlot(childScopeBinding)!;
    const childScopeReason = childScopeSlot.reason;
    const varId =
      tagVar &&
      childScopeReason &&
      t.stringLiteral(
        getResumeRegistryId(section, tagVar.extra?.binding, "var"),
      );
    // A patch keys the child's scope, so it writes it even for a constant group;
    // the wiring resolves where no patch fills the variable (`_unfilled_if`).
    const keyed = isPatchKeyedSlot(childScopeSlot);
    // None where no call leaves the variable unfilled, decided before the wiring is built.
    const wires =
      !keyed ||
      getCallerGroupBit(section, "_unfilled_if", childScopeReason) !== 0;
    const guardVar = (expr: t.Expression) =>
      keyed
        ? andGuard(
            getCallerGroupGuard(section, "_unfilled_if", childScopeReason),
            expr,
          )
        : getExprIfWritten(section, childScopeReason!, expr);
    // After the attr statements: building attribute tags can consume scope
    // ids (eg `_resume_locals`), and the peek must see the child's root id.
    statements.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          peekScopeId,
          isPatch()
            ? callRuntime(
                "_peek_scope_id",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(childScopeBinding),
                t.numericLiteral(nextIdSite()),
                // Only a patch render of a section the patch fills reads these two.
                (patchFillsSection(section) &&
                  varId &&
                  wires &&
                  guardVar(t.numericLiteral(1))) ||
                  absentArg(0),
                patchFillsSection(section) &&
                  childSection.parent !== section &&
                  namesBodyOwner(section, childSection) &&
                  getScopeIdIdentifier(childSection.parent!),
              )
            : callRuntime("_peek_scope_id"),
        ),
      ]),
    );

    writeSlot(childScopeSlot, callRuntime("_existing_scope", peekScopeId));

    // Below the render call, `_var` mints the scope offset's post-render id;
    // guarded, as its registration ships only where the guard holds.
    const varCall =
      varId &&
      wires &&
      guardVar(
        callRuntime(
          "_var",
          getScopeIdIdentifier(section),
          getScopeOffsetAccessorLiteral(childScopeBinding),
          peekScopeId,
          varId,
        ),
      );
    if (varCall) varStatement = t.expressionStatement(varCall);
  } else if (isPatch()) {
    statements.push(
      t.expressionStatement(
        callRuntime(
          "_patch_child",
          t.numericLiteral(nextIdSite()),
          !isOptimize() && getScopeAccessorLiteral(childScopeBinding),
        ),
      ),
    );
  }

  if (childSection.paramReasonGroups) {
    let childGroupMask: t.Expression | undefined;
    if (isPatch()) {
      // The scope reason carries the group mask, which an instance in stateful
      // structure (patch renders skip it) needs for what its page resumes.
      const groups = getParamGroupSources(tagExtra);
      if (groups) {
        childGroupMask = buildGroupMaskExpr(section, tag.node, groups);
      }
    } else {
      childGroupMask = buildChildGroupMask(
        section,
        childScopeBinding,
        childSection.paramReasonGroups,
      );
    }

    if (childGroupMask) {
      statements.unshift(
        t.expressionStatement(callRuntime("_set_scope_reason", childGroupMask)),
      );
    }
  }

  const renderArgs = getRenderArgs(tag, properties);
  if (tagVar) {
    // The render call reads attr-tag bindings, so its declaration must follow
    // the attr statements rather than precede the tag.
    translateVar(
      tag,
      t.callExpression(tagIdentifier, renderArgs),
      "let",
      statements,
    );
    if (varStatement) statements.push(varStatement);
  } else {
    statements.push(
      t.expressionStatement(t.callExpression(tagIdentifier, renderArgs)),
    );
  }
  if (isPatch()) {
    statements.push(t.expressionStatement(callRuntime("_patch_child_end")));
  }

  replaceWithStatements(tag, statements);
}

export function knownTagTranslateDOM(
  tag: t.NodePath<t.MarkoTag>,
  getBindingIdentifier: TranslateDOMInfo["getBindingIdentifier"],
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
    // Registered where HTML wires it, where the client reads the child's scope:
    // a patch keying that scope is no reason.
    signal.register = isEverWritten(
      tagSection,
      findSlot(childScopeBinding)!.reason,
    );
    // The `_var` setup call below references the signal.
    signal.referenced = true;
    signal.buildAssignment = (valueSection, value) =>
      buildVarChange(
        createScopeReadExpression(childScopeBinding, valueSection),
        value,
        varBinding,
      );
    // A flush creating the child seeds the wiring through its setup.
    if (isPatch()) importRuntimeFeature("patches/var");
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
  forEach(body.renderedBy, (call) => {
    sources = mergeSources(
      sources,
      getSourcesForExprs(mapParamBindingToExpr(call[kKnownExprs]!, param)),
    );
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
    const { childSection } = tagExtra;
    if (knownExprs && childSection.paramReasonGroups) {
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

// A known tag var's wiring guard asks whether the client holds the child's
// scope, by its ref's own reason (a patch keys the ref, so writes it always).
export function ensureKnownTagPatchGroups(section: Section) {
  for (const { childScopeBinding } of section.knownTags || []) {
    if (hasScopeOffset(childScopeBinding)) {
      ensureReasonGroups(section, findSlot(childScopeBinding)?.reason);
    }
  }
}

// The params a patch template's known children make structural: a param passed
// to a child's structural param makes this template's params so too.
export function recordKnownTagPatchFacts(section: Section) {
  for (const tagExtra of section.knownTags || []) {
    for (const { params, sources } of getParamGroupSources(tagExtra) || []) {
      if (hasStructuralParam(params)) recordStructuralParams(sources);
    }
  }
}

// Once param entries are recorded (`linkPatchFills`), each call links the
// patchers its known child's params need; its callers link what it forwards.
export function linkKnownTagPatchEntries() {
  let grew: boolean;
  do {
    grew = false;
    forEachSection((section) => {
      if (!patchFillsSection(section)) return;
      for (const tagExtra of section.knownTags || []) {
        const groups = getParamGroupSources(tagExtra);
        if (!groups) continue;
        const child = getParamEntries(tagExtra.childSection);
        for (const fill of child.fills) {
          grew = linkParamFill(tagExtra[kKnownExprs]!, fill) || grew;
        }
        for (const { params, sources, exprs } of groups) {
          const written = bindingUtil.intersects(params, child.written);
          const marked = bindingUtil.intersects(params, child.marked);
          const bound = bindingUtil.intersects(params, child.bound);
          if (!(written || marked || bound)) continue;
          const forwarded = getCallerParamGroups(sources?.param);
          for (const [caller, group] of forwarded) {
            if (written) grew = rollUp(caller, "written", group) || grew;
            if (marked) grew = rollUp(caller, "marked", group) || grew;
            if (bound) grew = rollUp(caller, "bound", group) || grew;
          }
          // Content or a function it passes a fill carries ships as a bind.
          if (
            bound &&
            (mayHoldScopeBoundFn(exprs) || passesBoundContent(tagExtra, params))
          ) {
            linkRuntimeFeature("patches/bind");
          }
          // A value the call passes of its own, no param of its own in it.
          if (written && !forwarded.length) linkRuntimeFeature("patches/write");
          // A bound value a marked slot takes keeps its identity record.
          if (
            marked &&
            (mayHoldScopeBoundFn(exprs) || passesBoundContent(tagExtra, params))
          ) {
            linkRuntimeFeature("patches/marked-bind");
          }
          // A child's returned function it passes on binds where that child isn't.
          if (someReturnedFnValue(exprs, hasFilledReferences)) {
            linkRuntimeFeature("patches/marked-bind");
          }
        }
      }
    });
  } while (grew);
  // A patched entry is a page (a build contract: debug builds refuse an embedded
  // render's patch), and no call links its own input.
  const root = getParamEntries(getProgram().node.extra.section!);
  if (isPage()) {
    for (const fill of root.fills) {
      if (fill.client === true) linkParamFillFeatures(fill);
    }
    if (root.written) linkRuntimeFeature("patches/write");
    if (root.marked) linkRuntimeFeature("patches/marked-write");
  }
}

// Whether the call passes its child content (a body's or an attribute tag's) that
// reaches one of `params`: a patch sends written content as a bind, as it registers.
function passesBoundContent(
  tagExtra: t.MarkoTagExtra,
  params: Sources["param"],
) {
  return !!getContentReaches()
    .get(tagExtra)
    ?.some((binding) => bindingUtil.has(params, binding));
}

// Each call's child bindings its content reaches, along each content's property path.
const [getContentReaches] = createAnalysisState(() => {
  const reaches = new Map<t.MarkoTagExtra, Binding[]>();
  forEachSection(({ derives }) => {
    if (!derives) return;
    const path = toArray(derives.properties, identity);
    let reached = reaches.get(derives.tag);
    if (!reached) reaches.set(derives.tag, (reached = []));
    forEach(derives.binding, (binding) => {
      for (
        let cur: Binding | undefined = binding, i = 0;
        cur;
        cur = cur.propertyAliases.get(path[i++])
      ) {
        reached.push(cur);
      }
    });
  });
  return reaches;
});

function identity<T>(value: T) {
  return value;
}

// The call sends the fill where it passes the server's value for the fill's
// params and the client's for a param its guard checks, as the server's masks do.
function linkParamFill(knownExprs: KnownExprs, fill: ParamFill) {
  const own = getPassedSources(knownExprs, fill.params);
  // Its own group the call's client state sets: `_filled_guard` is 0, so it
  // never ships.
  if (hasClientState(own)) return false;
  const client =
    fill.client === true || getPassedSources(knownExprs, fill.client);
  const clientState = client === true || !!client?.state;
  const clientGroups = clientState ? [] : getCallerParamGroups(client?.param);
  if (!clientState && !clientGroups.length) return false;
  const ownGroups = getCallerParamGroups(own?.param);
  if (!ownGroups.length && clientState) {
    linkParamFillFeatures(fill);
    return false;
  }
  let grew = false;
  // Its own params roll up with the client ones. The call's own value ($global,
  // a constant) has none: its client ones roll up alone, to their callers.
  for (const [caller, params] of ownGroups.length ? ownGroups : clientGroups) {
    const clientParams = !ownGroups.length
      ? params
      : clientState ||
        clientGroups.reduce<Sources["param"]>(unionGroup, undefined)!;
    grew =
      addParamFill(caller, {
        params: ownGroups.length ? params : undefined,
        client: clientParams,
        render: fill.render,
      }) || grew;
  }
  return grew;
}

function unionGroup(
  all: Sources["param"],
  [, group]: ReturnType<typeof getCallerParamGroups>[number],
) {
  return bindingUtil.union(all, group);
}

function linkParamFillFeatures({ render }: ParamFill) {
  linkRuntimeFeature(render ? "patches/render" : "patches/fill");
}

function getPassedSources(knownExprs: KnownExprs, params: Sources["param"]) {
  return (
    params &&
    reduce(mapParamReasonToExpr(knownExprs, params), mergeAllSourcesForExpr)
  );
}

function rollUp(
  section: Section,
  key: "written" | "marked" | "bound",
  params: ParamReasonGroup,
) {
  const entries = getParamEntries(section);
  if (bindingUtil.isSuperset(entries[key], params)) return false;
  entries[key] = bindingUtil.union(entries[key], params);
  return true;
}

// Whether some call of the `<define>` body passes the params what `test` holds
// of: the sources of their call-site expressions.
export function someCallPasses(
  body: Section,
  params: Sources["param"],
  test: (sources: Sources | undefined) => boolean,
) {
  return some(body.renderedBy, (call) =>
    test(getPassedSources(call[kKnownExprs]!, params)),
  );
}

// Whether every call of the `<define>` body passes the params what `test` holds of.
export function everyCallPasses(
  body: Section,
  params: Sources["param"],
  test: (sources: Sources | undefined) => boolean,
) {
  return !someCallPasses(body, params, (sources) => !test(sources));
}

// A known tag rendering another template calls its setup in the section's
// setup: a load tag always, any other when that template has setup work.
export function callsOtherTemplateSetup(section: Section) {
  for (const tagExtra of section.knownTags || []) {
    const { childSection } = tagExtra;
    if (
      tagExtra.tagNameLoad ||
      (childSection.program !== section.program && childSection.hasSetupWork)
    ) {
      return true;
    }
  }
  return false;
}

// An `<id>`'s address numbers each call site rendering another scope's content
// across its template: a branch adds nothing, so accessors could repeat.
const [getIdSites, setIdSites] = createOutputState(() => 0);
export function nextIdSite() {
  const site = getIdSites();
  setIdSites(site + 1);
  return site;
}

// An `<if>`'s branches never render together, so each numbers its sites from
// the first branch's, and what follows numbers past all of them.
const [getBranchIdSites] = createOutputState(
  () => new Map<object, [first: number, next: number]>(),
);
export function enterBranchIdSites(branches: object) {
  const range = getBranchIdSites().get(branches);
  if (range) setIdSites(range[0]);
  else getBranchIdSites().set(branches, [getIdSites(), 0]);
}
export function exitBranchIdSites(branches: object) {
  const range = getBranchIdSites().get(branches)!;
  setIdSites((range[1] = Math.max(range[1], getIdSites())));
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

export interface ParamGroupSources {
  /** The child params this group covers. */
  params: ParamReasonGroup;
  /** The call site's sources for this group, function-body reads included. */
  sources: Sources | undefined;
  /** The call site's expressions for this group. */
  exprs: Opt<t.NodeExtra>;
}

// A tag analyzed as a known child template (vs a `<define>` var's tag).
export function isKnownTagExtra(tagExtra: t.MarkoTagExtra) {
  return !!tagExtra[kKnownExprs];
}

// A child's param intersects another, the call (`exprs`) passing client state among
// them: the client re-runs that intersection where its group is the client's.
export function intersectsClientState(
  param: Binding,
  exprs: KnownExprs | undefined,
) {
  return (
    !!exprs &&
    !!param.section.paramReasonGroups?.some(
      (params) =>
        Array.isArray(params) &&
        bindingUtil.has(params, param) &&
        hasClientState(getPassedSources(exprs, params)),
    )
  );
}

// Per-group sources for a known templated call site, aligned with the
// child's `paramReasonGroups` indices.
export function getParamGroupSources(
  tagExtra: t.MarkoTagExtra,
): ParamGroupSources[] | undefined {
  const groups = tagExtra.childSection!.paramReasonGroups;
  if (groups) {
    const knownExprs = tagExtra[kKnownExprs]!;
    return groups.map((params) => {
      const exprs = mapParamReasonToExpr(knownExprs, params);
      return { params, sources: reduce(exprs, mergeAllSourcesForExpr), exprs };
    });
  }
}

// A param every call derives from a module read (`derivesConstantParam`).
export function derivesConstantInput(binding: Binding) {
  const params = binding.sources?.param;
  return params === binding && derivesConstantParam(params);
}

// A `<define>` param every call passing a constant where the client renders it passes
// a module read, which that call's fill runs push: the client derives it.
const derivesConstantParam = createPassMemo((param: ParamBinding): boolean => {
  const body = param.section;
  let derives = false;
  return (
    !!body.parent &&
    !some(body.renderedBy, (call) => {
      const exprs = mapParamReasonToExpr(call[kKnownExprs]!, param);
      const sources = reduce(exprs, mergeAllSourcesForExpr);
      if (
        hasClientState(sources) ||
        hasParamOrGlobalSource(sources) ||
        !rendersCallOnClient(call.childScopeBinding.section) ||
        // Main serializes the module read for that intersection.
        intersectsClientState(param, call[kKnownExprs])
      ) {
        return false;
      }
      derives = true;
      return !exprs || !every(exprs, isModuleReadInput);
    }) &&
    derives
  );
}, false);

function isModuleReadInput(extra: t.NodeExtra | undefined) {
  return !!extra?.[kModuleReadInput];
}

// The instance's sources mask (2 bits per group at `1 + 2i`; keyed when
// dynamic), or undefined when the all-server default is equivalent.
function buildGroupMaskExpr(
  section: Section,
  tag: t.MarkoTag,
  groups: ParamGroupSources[],
): t.Expression | undefined {
  const isScopeBound = (expr: t.NodeExtra) => isScopeBoundExpr(tag, expr);
  const values = groups.map(({ sources, exprs }) => {
    const value = getGroupSourcesValue(section, sources, buildGroupsValue);
    if (
      !exprs ||
      !every(exprs, isScopeBound) ||
      passesOneValue(section, sources, exprs)
    ) {
      return value;
    }
    const patchValue = getPatchGroupValue(
      section,
      sources,
      exprs,
      buildGroupsValue,
    );
    return t.conditionalExpression(
      scopePageIdentifier(section.program),
      typeof value === "number" ? t.numericLiteral(value) : value,
      typeof patchValue === "number"
        ? t.numericLiteral(patchValue)
        : patchValue,
    );
  });
  if (values.every(isServerOnly)) return;
  return buildGroupMask(
    values.map((value, i) => ({
      value,
      names: getDebugNames(groups[i].params),
    })),
  );
}

// A group's value from its call site's sources: state's, the server's, or none for a
// constant; its callers' groups `combine` with them.
function getGroupSourcesValue<R>(
  section: Section,
  sources: Sources | undefined,
  combine: (groups: [Section, ParamReasonGroup][], bits: number) => R,
) {
  if (sources?.state) {
    return sources.param
      ? UpdatesFrom.Client | UpdatesFrom.Server
      : UpdatesFrom.Client;
  }
  // Params this section's callers pass compose their groups' bits; `$global` adds a server bit.
  const callerGroups = getCallerParamGroupsAt(sources?.param, section);
  if (callerGroups.length) {
    return combine(callerGroups, sources!.global ? UpdatesFrom.Server : 0);
  }
  return isUngatedGroup(sources) ? UpdatesFrom.Server : 0;
}

// Where a patch call's child group updates from, where every render passes a constant.
// A merged input is scope-bound by its tag's attributes, which only its node holds.
export function getCallUpdatesFrom(
  call: KnownTagExtra,
  group: ParamReasonGroup,
) {
  const exprs = mapParamReasonToExpr(call[kKnownExprs]!, group);
  if (some(exprs, isKnownTagExtra)) return;
  const section = call.childScopeBinding.section;
  const sources = reduce(exprs, mergeAllSourcesForExpr);
  if (
    !exprs ||
    !every(exprs, isRegisteredFnExtra) ||
    passesOneValue(section, sources, exprs)
  ) {
    return getGroupSourcesValue(section, sources, getGroupsConstant);
  }
}

// A function its scope registers changes on a patch as the client makes it anew, on a change
// of state it references, and as a patch binds it anew (its filled references); else never.
function getPatchGroupValue<R>(
  section: Section,
  sources: Sources | undefined,
  exprs: Opt<t.NodeExtra>,
  combine: (groups: [Section, ParamReasonGroup][], bits: number) => R,
) {
  const state = getSourcesForExprs(exprs)?.state;
  if (some(exprs, passesFilledReferences)) {
    return getGroupSourcesValue(
      section,
      withSources(sources!, state, sources!.param),
      combine,
    );
  }
  return state ? UpdatesFrom.Client : 0;
}

// Whether a scope-bound group passes one value on page and patch renders: the same
// sources, or the same constant.
function passesOneValue(
  section: Section,
  sources: Sources | undefined,
  exprs: Opt<t.NodeExtra>,
) {
  if (!sources?.state && some(exprs, passesFilledReferences)) return true;
  const value = getGroupSourcesValue(section, sources, getGroupsConstant);
  return (
    value !== undefined &&
    value === getPatchGroupValue(section, sources, exprs, getGroupsConstant)
  );
}

// The server alone contributes the group, as the all-server default says.
function isServerOnly(value: number | t.Expression) {
  return value === UpdatesFrom.Server;
}

// A group with param or `$global` sources but none a caller passes: no
// caller gates it, so its mask is fixed and a patch writes it.
function isUngatedGroup(sources: Sources | undefined) {
  return hasParamOrGlobalSource(sources) && !hasCallerParamSource(sources);
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
      const argTree = paramsTree.properties[i];
      if (argTree) {
        const argValueExtra = (arg.extra ??= {});
        known[i] = { value: argValueExtra };
        rootAttrExprs.add(argValueExtra);
        addSetupExpr(section, arg);
        if (getModuleRead(tag, arg as t.Expression)) {
          argValueExtra[kModuleReadInput] = true;
        }
        setDerivedFrom(argTree.binding, argValueExtra, paramsExpr);
      } else {
        dropNodes(arg);
      }

      i++;
    }
  }

  const attrsTree = paramsTree.properties[i];
  if (attrsTree && rootTagExtra[kPassesInput]) {
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

  // A param the call passes nothing for is written `undefined` in setup.
  for (const key in paramsTree.properties) {
    if (!known[key]) {
      addSetupWork(section);
      break;
    }
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
  if (!paramsTree.properties) {
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
  const remaining = new Set(getAllKnownPropertyNames(paramsTree));
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
            childAttrTree.properties &&
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

  let knownSpread: Binding | undefined;
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
        if (getModuleRead(tag, attr.value)) attrExtra[kModuleReadInput] = true;
        setDerivedFrom(attrTree.binding, attrExtra, rootExprs);
        if (isInvokeOnlyInput(attrTree.binding)) attrExtra.invokeOnly = true;
      }
    } else if (spreadReferenceNodes) {
      spreadReferenceNodes.push(attr.value);
    } else {
      knownSpread = getKnownSpread(paramsTree, attributes, i);

      if (knownSpread) {
        // Read prop by prop, so it is written as what those props read.
        (attr.extra ??= {}).knownSpread = knownSpread;
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
      addRead(propExtra, propExtra, propExtra, propBinding, section, undefined);
      setDerivedFrom(
        attrTree === true ? paramsTree.rest!.binding : attrTree.binding,
        propExtra,
        rootExprs,
      );
    }
  } else if (spreadReferenceNodes) {
    if (remaining.size || (paramsTree.rest && !paramsTree.rest.properties)) {
      inputExpr.value = mergeReferences(
        section,
        tag.node,
        spreadReferenceNodes,
      );
      rootAttrExprs.add(inputExpr.value);
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
      rootAttrExprs.add(inputExpr.value);
      setDerivedFrom(paramsTree.rest!.binding, inputExpr.value, rootExprs);
    }

    if (remaining.size) {
      // Unset props are applied with no value (and no references) in setup.
      addSetupWork(section);
    }

    if (paramsTree.rest && !paramsTree.rest.properties) {
      // The rest signal call is keyed by the tag's merged references.
      addSetupExpr(section, tag.node);
    }
  }

  dropNodes(dropReferenceNodes);

  return inputExpr;
}

// The binding the last spread passes, when a child reading every prop by name
// reads it prop by prop: no attribute before it holds a prop it may override.
function getKnownSpread(
  paramsTree: ParamsTree,
  attributes: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
  index: number,
) {
  const binding = attributes[index].value.extra?.spreadFrom;
  if (
    !binding ||
    Array.isArray(binding) ||
    !hasAllKnownProperties(paramsTree)
  ) {
    return;
  }
  for (let i = index; i--;) {
    const attr = attributes[i];
    if (
      attr.type === "MarkoSpreadAttribute" ||
      !propertiesUtil.has(binding.excludeProperties, attr.name)
    ) {
      return;
    }
  }
  return binding;
}

// A child reading its params as one value (with a rest, or from a spread
// argument) reads them through every expression in the tag.
function readsParamsByName(
  tag: t.NodePath<t.MarkoTag>,
  paramsTree: ParamsTree,
): paramsTree is ParamsTree & {
  properties: NonNullable<ParamsTree["properties"]>;
} {
  return (
    !!paramsTree.properties &&
    !paramsTree.rest &&
    !tag.node.arguments?.some(isSpreadArgument)
  );
}

function isSpreadArgument(arg: t.Expression | t.SpreadElement) {
  return arg.type === "SpreadElement";
}

// A function with filled references as the call passes it: a literal reading a reference a patch
// writes, or a binding holding one.
function passesFilledReferences(extra: t.NodeExtra) {
  if (isRegisteredFnExtra(extra)) return !!getFilledReferences(extra);
  const ref = getReferencedBindings(extra);
  return !!ref && !Array.isArray(ref) && holdsRegisteredFn(ref);
}

// A function its scope registers, or the tag's own merged expression where each
// attribute is one, it passes no attribute tag, and the child only calls into it.
function isScopeBoundExpr(tag: t.MarkoTag, expr: t.NodeExtra) {
  return isKnownTagExtra(expr)
    ? !tag.attributeTags.length &&
        every(expr.derives, isInvokeOnlyBinding) &&
        tag.attributes.every(isRegisteredFnAttr)
    : isRegisteredFnExtra(expr);
}

function isRegisteredFnAttr(attr: t.MarkoAttribute | t.MarkoSpreadAttribute) {
  return isRegisteredFnExtra(attr.value.extra);
}

function setDerivedFromTag(
  section: Section,
  tag: t.NodePath<t.MarkoTag>,
  binding: Binding,
  rootExprs: KnownExprs,
) {
  const extra = mergeReferences(
    section,
    tag.node,
    isInvokeOnlyInput(binding)
      ? collectInvokeOnlyInputNodes(tag.node)
      : getAllTagReferenceNodes(tag.node),
  );
  setDerivedFrom(binding, extra, rootExprs);
  return extra;
}

// A child in another template that only ever invokes this input; same-program
// params trees may be mid-analysis with incomplete reads, so are skipped.
function isInvokeOnlyInput(binding: Binding) {
  return !isOwnBinding(binding) && isInvokeOnlyBinding(binding);
}

// Collects a tag's reference nodes, making the input it passes `invokeOnly`:
// its attributes and its attribute tags', never what its control flow reads.
function collectInvokeOnlyInputNodes(
  tag: t.MarkoTag,
  referenceNodes: t.Node[] = [],
) {
  if (tag.arguments) {
    for (const arg of tag.arguments) referenceNodes.push(arg);
  }
  for (const attr of tag.attributes) {
    (attr.value.extra ??= {}).invokeOnly = true;
    referenceNodes.push(attr.value);
  }
  return getChildTagReferenceNodes(tag, referenceNodes, (attrTag) =>
    collectInvokeOnlyInputNodes(attrTag, referenceNodes),
  );
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
    // Read whole, so the child reads every attribute tag nested in it.
    if (attrTagTree !== true && isInvokeOnlyInput(attrTagTree.binding)) {
      collectInvokeOnlyInputNodes(attrTag, referenceNodes);
    } else {
      getAllTagReferenceNodes(attrTag, referenceNodes, (nestedAttrTag) =>
        collectAttrTagReferenceNodes(
          nestedAttrTag,
          attrTag.extra!.attrTagLookup!,
          attrTagTree,
          referenceNodes,
          dropReferenceNodes,
        ),
      );
    }
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
    const constants = getDerivedConstants(
      info,
      tag.node.arguments.map(
        (arg, j) =>
          [
            paramsTree.properties[j]?.binding,
            `${hint}_param_${j}`,
            arg as t.Expression,
          ] as const,
      ),
    );
    for (const arg of tag.node.arguments) {
      const argTree = paramsTree.properties[i];
      if (argTree) {
        pushDerivedConstants(info, constants, arg.extra, argTree.binding);
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

  const attrsTree = paramsTree.properties[i];
  const { known } = tag.node.extra![kKnownExprs]!;
  if (attrsTree && tag.node.extra![kPassesInput]) {
    writeAttrsToSignals(tag, attrsTree, known![i], `${hint}_input`, info);
  }

  // A param the call passes nothing for is undefined, as the server leaves it.
  for (const key in paramsTree.properties) {
    if (!known![key]) {
      writeToSignal(
        info,
        info.getBindingIdentifier(
          paramsTree.properties[key].binding,
          `${hint}_param_${key}`,
        ),
        undefined,
        undefined,
        true,
      );
    }
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
            translateAttrs(attrTag, paramsTree, statements).properties,
          ),
        );
      }
    }
  } else {
    translatedProps = propsToExpression(
      translateAttrs(tag, paramsTree, statements).properties,
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
  exprs: KnownExprs,
  hint: string,
  info: TranslateDOMInfo,
) {
  if (!paramsTree.properties) {
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
  const remaining = new Set(getAllKnownPropertyNames(paramsTree));
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
            const translatedAttrs = translateAttrs(child, true, statements);

            addStatement("render", info.tagSection, tagExtra, statements);

            addAttrTag(
              contentProps,
              attrTagMeta,
              t.objectExpression(translatedAttrs.properties),
            );
          } else if (exprs.known![attrTagMeta.name].known) {
            // Analysis read its members from the one occurrence it kept.
            remaining.delete(attrTagMeta.name);
            writeAttrsToSignals(
              child,
              childAttrTree,
              exprs.known![attrTagMeta.name],
              `${hint}_${attrTagMeta.name}`,
              info,
            );
          } else if (remaining.delete(attrTagMeta.name)) {
            // Like HTML, the first occurrence passes the whole `attrTags` value.
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
          const group = child.node.extra!.attributeTagGroup!;
          if (hasGroupReads(group, attrTagLookup, paramsTree)) {
            i = translateDynamicAttrTagChildInGroup(group, i);
          }
        }
      }
    }

    for (const [group, { expr, statements }] of statementsByGroup) {
      const trees = getGroupParamsTrees(group, attrTagLookup, paramsTree);
      const hasRest = trees.some(isRestTree);

      addStatement("render", info.tagSection, hasRest ? tagExtra : expr, [
        t.variableDeclaration("let", trees.map(toAttrTagDeclarator)),
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

  let knownSpread: Binding | undefined;
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
    } else if (attr.extra?.knownSpread) {
      knownSpread = attr.extra.knownSpread;
    } else {
      hasSpread = true;
      attrProps.push(t.spreadElement(attr.value));
    }
  }

  // Attributes were gathered last to first so the last duplicate wins.
  const inputProps = attrProps.reverse().concat(contentProps);

  const constants = getDerivedConstants(
    info,
    staticAttrs.map(
      (attr) =>
        [
          (getParamsTreeAt(paramsTree, attr.name) as ParamsTree).binding,
          `${hint}_${attr.name}`,
          attr.value,
        ] as const,
    ),
  );
  for (let i = staticAttrs.length; i--;) {
    const attr = staticAttrs[i];
    const attrSignal = getSignalIdentifier(info, paramsTree, hint, attr.name);
    const tree = getParamsTreeAt(paramsTree, attr.name) as ParamsTree;
    remaining.delete(attr.name);
    pushDerivedConstants(info, constants, attr.value.extra, tree.binding);
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
        exprs.known![prop].value,
        createScopeReadExpression(propBinding, info.tagSection),
        true,
      );
    }
  } else if (
    hasSpread &&
    (remaining.size || (paramsTree.rest && !paramsTree.rest.properties))
  ) {
    const spreadExpr = propsToExpression(inputProps);
    let spreadId = spreadExpr;

    if (!isSimpleReference(spreadExpr)) {
      spreadId = generateUidIdentifier(`${hint}_spread`);
      addStatement(getForwardType(info, tagExtra), info.tagSection, tagExtra, [
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

    if (paramsTree.rest && !paramsTree.rest.properties) {
      const rest = paramsTree.rest.binding;
      const restId = t.identifier(rest.name);
      writeToSignal(
        info,
        info.getBindingIdentifier(rest, hint + "_$rest"),
        tagExtra,
        t.callExpression(
          t.arrowFunctionExpression(
            [getRestPattern(rest, restId, paramsTree.binding, true)],
            restId,
          ),
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

    if (paramsTree.rest && !paramsTree.rest.properties) {
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
    getForwardType(info, expr),
    info.tagSection,
    expr,
    t.callExpression(signal, value ? [scope, value] : [scope]),
    isPure,
  );
}

// A call some instance of which the client renders: in stateful structure, or
// in param-selected structure a caller may hand it.
function rendersCallOnClient(section: Section) {
  return !patchFillsSection(section) || !!getParamSelectedStructure(section);
}

// Where the client renders the call, its module reads the callee stores (an intersection
// reads them): resumed, it holds none, which no page writes, so it derives them.
function getDerivedConstants(
  info: TranslateDOMInfo,
  inputs: (readonly [Binding | undefined, string, t.Expression])[],
) {
  const constants: DerivedConstant[] = [];
  if (isPatch() && rendersCallOnClient(info.tagSection)) {
    for (const [binding, name, value] of inputs) {
      if (
        binding &&
        isModuleReadInput(value.extra) &&
        derivesConstantInput(binding) &&
        findSlot(binding)?.reason
      ) {
        constants.push({ binding, name, value, signals: new Set() });
      }
    }
  }
  return constants;
}

interface DerivedConstant {
  binding: Binding;
  name: string;
  value: t.Expression;
  // The signals of other inputs it is pushed in, once each.
  signals: Set<ReferencedBindings>;
}

// A fill reaching the call by an input an intersection reads with a constant pushes the
// constant first, as setup does (the signal sees the same value, so it re-runs nothing).
function pushDerivedConstants(
  info: TranslateDOMInfo,
  constants: DerivedConstant[],
  expr: t.NodeExtra | undefined,
  param: Binding,
) {
  const referencedBindings = expr && getReferencedBindings(expr);
  if (!referencedBindings) return;
  for (const constant of constants) {
    if (
      !constant.signals.has(referencedBindings) &&
      param.section.paramReasonGroups?.some(
        (group) =>
          bindingUtil.has(group, constant.binding) &&
          bindingUtil.has(group, param),
      )
    ) {
      constant.signals.add(referencedBindings);
      writeToSignal(
        info,
        info.getBindingIdentifier(constant.binding, constant.name),
        expr,
        t.cloneNode(constant.value, true),
        true,
      );
    }
  }
}

// A forward the child patches itself (holes it writes, its own fills) is a patch
// statement, which a fill's run leaves.
function getForwardType(info: TranslateDOMInfo, expr: t.NodeExtra | undefined) {
  return calleeKeepsInput(info.tagSection, expr && getSourcesForExpr(expr))
    ? "patch"
    : "render";
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

function isRestTree([, tree]: [AttrTagMeta, ParamsTree | true]) {
  return tree === true;
}

function toAttrTagDeclarator([attrTagMeta]: [AttrTagMeta, ParamsTree | true]) {
  return t.variableDeclarator(getAttrTagIdentifier(attrTagMeta));
}

// Everything a group's call-site expressions may read, reads inside function
// values included: they inform where it updates from, never serialization.
function mergeAllSourcesForExpr(
  sources: Sources | undefined,
  expr: t.NodeExtra,
) {
  return mergeSources(
    mergeSources(sources, getSourcesForExpr(expr)),
    getSourcesForReferencedBindings(
      getReferencedBindingsInFunction(expr as t.FunctionExtra),
    ),
  );
}
