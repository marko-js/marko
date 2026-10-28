import { types as t } from "@marko/compiler";
import { getProgram, isAttributeTag } from "@marko/compiler/babel-utils";

import { UpdatesFrom, ReservedId } from "../../common/types";
import {
  type Binding,
  BindingType,
  bindingUtil,
  createBinding,
  type ParamBinding,
  getCanonicalBinding,
  getDebugNames,
  ensurePropertyAlias,
  getPropertyAlias,
  isInvokeOnlyBinding,
  isOwnBinding,
  type ReferencedBindings,
  reserveId,
} from "./bindings";
import { setTagContentDerives } from "./content-derives";
import { createAnalysisMemo, createPassMemo } from "./cyclic-memo";
import { generateUidIdentifier } from "./generate-uid";
import { getTagName, getTagNameHint } from "./get-tag-name";
import { isPage, isPatch } from "./marko-config";
import { getModuleRead, isResolvedModuleRead } from "./module-read";
import {
  analyzeAttributeTags,
  type AttrTagLookup,
  type AttrTagMeta,
  getAttrTagIdentifier,
  getAttrTagPaths,
} from "./nested-attribute-tags";
import {
  every,
  first,
  forEach,
  fromIter,
  type Opt,
  reduce,
  some,
  type SortedOpt,
  toArray,
} from "./optional";
import {
  type ParamsTree,
  getAllKnownPropNames,
  exposeParamsTree,
  getParamsTreeAt,
  getSettledParamsTree,
} from "./params-tree";
import {
  hasClientState,
  isPatchKeyedSlot,
  keepsFirstValue,
  onReasonsSettled,
} from "./patch/decisions";
import {
  getPassedDeps,
  getLiveCaptures,
  holdsBuiltObject,
  rerunsEffectOnPatch,
  getPatchFill,
  holdsLiveFn,
  namesBodyOwner,
  patchCreatesOrComposes,
  isClientDerivedParam,
} from "./patch/refresh";
import {
  calleeKeepsInput,
  getParamSelectedStructure,
  patchWrites,
  hasStructuralParam,
  recordStructuralParams,
} from "./patch/structure";
import { mayHoldReturnedLiveFn, mayHoldScopeBoundFn } from "./patch/writers";
import {
  addAlwaysReason,
  addReasonExprs,
  addReason,
  getSourcesForExpr,
  getSourcesForExprs,
  getSourcesForRef,
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
  isRegisteredFnExtra,
  mergeReferences,
  type ReferencedExtra,
  setDerivedFrom,
  trackParamsReferences,
  trackVarReferences,
  mergeTagReferences,
  getReferencedBindings,
  getReferencedBindingsInFunction,
} from "./references";
import {
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
  type ParamReasonGroup,
  type ParamReasonGroups,
  type Section,
  sectionUtil,
} from "./sections";
import { addSetupExpr, addSetupWork } from "./setup-work";
import { addParamFill, getParamEntries, type ParamFill } from "./shell";
import {
  addStatement,
  getResumeRegisterId,
  initValue,
  writeHTMLResumeStatements,
  writeSlot,
} from "./signals";
import { findSlot, ensureSlot, SlotKind } from "./slots";
import {
  hasCallerParamSource,
  hasCallerParamSourceAt,
  hasParamOrGlobalSource,
  mergeSources,
  type Sources,
} from "./sources";
import {
  createAnalysisState,
  createOutputSectionState,
  createOutputState,
} from "./state";
import { hasScopeOffset } from "./structure";
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
import {
  andGuard,
  buildComposedGroupValue,
  buildGroupMask,
  getClientGuard,
  getExprIfWritten,
  getGroupArgs,
  getWriteGuard,
  getWriteReason,
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
  if (isPatch()) {
    // Children inside unpatched structure never pair from a patch.
    onReasonsSettled(() => {
      if (patchWrites(section)) linkRuntimeFeature("patches/child");
    });
  }
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
  setTagContentDerives(tag, paramsTree?.props?.[0]?.binding, exprs);
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

  const childScopeReason = findSlot(childScopeBinding)?.reason;
  let liveInput: ((input: t.Expression) => t.Expression) | undefined;
  // A patch pairs the child through its scope ref, whatever the reason.
  const childScopeWriteReason = getWriteReason(childScopeBinding);
  let varStatement: t.Statement | undefined;
  if (childScopeWriteReason) {
    const peekScopeId = generateUidIdentifier(childScopeBinding?.name);
    const childScopeSlot = findSlot(childScopeBinding)!;
    const varId =
      tagVar &&
      childScopeReason &&
      t.stringLiteral(
        getResumeRegisterId(section, tagVar.extra?.binding, "var"),
      );
    // A patch keys the child's scope, so it writes it even for a constant group;
    // the wiring resolves only where the group updates from the client.
    const guardVar = (expr: t.Expression) =>
      isPatchKeyedSlot(childScopeSlot)
        ? andGuard(getClientGuard(section, childScopeReason!), expr)
        : getExprIfWritten(section, childScopeReason!, expr);
    // Only a patch render of a section patches write reads these two; `0` reads
    // as no wiring where an owner follows.
    const wiresVar =
      isPatch() && patchWrites(section) && varId && guardVar(t.numericLiteral(1));
    const ownerScopeId =
      isPatch() &&
      patchWrites(section) &&
      childSection.parent !== section &&
      namesBodyOwner(section, childSection) &&
      getScopeIdIdentifier(childSection.parent!);
    // After the attr statements: building attribute tags can consume scope
    // ids (eg `_resume_locals`), and the peek must see the child's root id.
    statements.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          peekScopeId,
          callRuntime(
            "_peek_scope_id",
            ...(isPatch()
              ? [
                  getScopeIdIdentifier(section),
                  getScopeAccessorLiteral(childScopeBinding),
                  t.numericLiteral(nextIdSite()),
                  wiresVar || (ownerScopeId && t.numericLiteral(0)),
                  ownerScopeId,
                ]
              : []),
          ),
        ),
      ]),
    );

    writeSlot(childScopeSlot, callRuntime("_existing_scope", peekScopeId));

    // An object the call builds anew: the child's readers depend on its sources.
    if (isPatch() && patchWrites(section)) {
      const inputDeps = new Set<string>();
      for (const prop of properties) {
        if (t.isObjectProperty(prop) && t.isExpression(prop.value)) {
          const { extra } = prop.value;
          if (!extra) continue;
          const deps = getPassedDeps(section, extra);
          for (const dep of deps) inputDeps.add(dep);
          if (isBuiltObjectExpr(extra)) {
            prop.value = callRuntime(
              "_patch_live",
              peekScopeId,
              prop.value,
              getScopeIdIdentifier(section),
              t.stringLiteral([...deps].join(" ")),
            );
          }
        }
      }
      // A child reading its whole input: the object the call builds anew.
      if (some(tagExtra.derives, rerunsEffectOnPatch)) {
        liveInput = (input) =>
          callRuntime(
            "_patch_live",
            peekScopeId,
            input,
            getScopeIdIdentifier(section),
            t.stringLiteral([...inputDeps].join(" ")),
          );
      }
    }

    if (varId) {
      // Below the render call, `_var` mints the scope offset's post-render id;
      // guarded, as its registration ships only where the guard holds.
      varStatement = t.expressionStatement(
        guardVar(
          callRuntime(
            "_var",
            getScopeIdIdentifier(section),
            getScopeOffsetAccessorLiteral(childScopeBinding),
            peekScopeId,
            varId,
          ),
        ),
      );
    }
  } else if (isPatch()) {
    statements.push(
      t.expressionStatement(
        callRuntime(
          "_patch_child",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(childScopeBinding),
          t.numericLiteral(nextIdSite()),
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
        childGroupMask = buildGroupMaskExpr(
          section,
          tag.node,
          childScopeBinding,
          childSection.paramReasonGroups,
          groups,
          tagExtra[kKnownExprs]!,
        );
      }
    } else {
      childGroupMask = buildChildGroupMask(
        section,
        childScopeBinding,
        childSection.paramReasonGroups,
      );
    }

    if (childGroupMask) {
      tag.insertBefore(
        t.expressionStatement(callRuntime("_set_scope_reason", childGroupMask)),
      );
    }
  }

  const renderArgs = getRenderArgs(tag, properties);
  if (liveInput) {
    renderArgs[renderArgs.length - 1] = liveInput(
      renderArgs[renderArgs.length - 1] as t.Expression,
    );
  }
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

// A known tag var's wiring guard asks whether the client holds the child's
// scope, by its ref's own reason (a patch keys the ref, so writes it always).
export function ensureKnownTagPatchGroups(section: Section) {
  for (const { childScopeBinding } of section.knownTags || []) {
    if (childScopeBinding && hasScopeOffset(childScopeBinding)) {
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

// Once param entries are recorded (`linkPatchSends`), each call links the
// patchers its known child's params need; its callers link what it forwards.
export function linkKnownTagPatchEntries() {
  let grew: boolean;
  do {
    grew = false;
    forEachSection((section) => {
      if (!patchWrites(section)) return;
      for (const tagExtra of section.knownTags || []) {
        const groups = getParamGroupSources(tagExtra);
        if (!groups) continue;
        const child = getParamEntries(first(groups[0].params).section);
        for (const fill of child.fills) {
          grew = linkParamFill(tagExtra[kKnownExprs]!, fill) || grew;
        }
        for (const { params, sources, exprs } of groups) {
          const written = bindingUtil.intersects(params, child.written);
          const marked = bindingUtil.intersects(params, child.marked);
          if (!(written || marked)) continue;
          const forwarded = getCallerParamGroups(sources?.param);
          for (const [caller, group] of forwarded) {
            if (written) grew = rollUp(caller, "written", group) || grew;
            if (marked) grew = rollUp(caller, "marked", group) || grew;
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
          if (mayHoldReturnedLiveFn(exprs)) {
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
export function passesBoundContent(
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
        init: fill.init,
        fillChange: fill.fillChange,
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

function linkParamFillFeatures({ init, fillChange }: ParamFill) {
  if (init) {
    linkRuntimeFeature("patches/init");
    if (fillChange) linkRuntimeFeature("patches/fill-change");
  } else {
    linkRuntimeFeature("patches/fill");
  }
}

function getPassedSources(knownExprs: KnownExprs, params: Sources["param"]) {
  return (
    params &&
    reduce(mapParamReasonToExpr(knownExprs, params), mergeAllSourcesForExpr)
  );
}

function rollUp(
  section: Section,
  key: "written" | "marked",
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
  return some(body.callSections, (callSection) =>
    callSection.knownTags!.some(
      (tagExtra) =>
        tagExtra[kChildSection] === body &&
        test(
          reduce(
            mapParamReasonToExpr(tagExtra[kKnownExprs]!, params),
            mergeAllSourcesForExpr,
          ),
        ),
    ),
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
  /** The call site's sources for this group (fn-body reads included;
   * survives any force on the key). */
  sources: Sources | undefined;
  /** The call site's expressions for this group. */
  exprs: Opt<t.NodeExtra>;
}

// A tag analyzed as a known child template (vs a `<define>` var's tag).
export function isKnownTagExtra(tagExtra: t.MarkoTagExtra) {
  return !!tagExtra[kKnownExprs];
}

// A child's param the call `expr` passes joins with another, client state among what
// it passes them: the child fills it where that group is the client's.
export function isJoinedWithClientState(param: Binding, expr: t.NodeExtra) {
  const exprs = expr.callSiteExprs;
  return (
    !!exprs &&
    !!param.section.paramReasonGroups?.some(
      (params) =>
        Array.isArray(params) &&
        bindingUtil.has(params, param) &&
        !!reduce(mapParamReasonToExpr(exprs, params), mergeAllSourcesForExpr)
          ?.state,
    )
  );
}

// Per-group sources for a known templated call site, aligned with the
// child's `paramReasonGroups` indices.
export function getParamGroupSources(
  tagExtra: t.MarkoTagExtra,
): ParamGroupSources[] | undefined {
  const knownExprs = tagExtra[kKnownExprs];
  const groups = tagExtra[kChildSection]?.paramReasonGroups;
  if (knownExprs && tagExtra.childScopeBinding && groups) {
    return groups.map((params) => {
      const exprs = mapParamReasonToExpr(knownExprs, params);
      return { params, sources: reduce(exprs, mergeAllSourcesForExpr), exprs };
    });
  }
}

// A call input the client derives from the fills of what it reads, which ship
// wherever their group is the server's: no flush creates the call, no hole is written.
function isClientDerivedInput(
  callSection: Section,
  param: Binding,
  exprs: Opt<t.NodeExtra>,
) {
  const sources = reduce(exprs, mergeAllSourcesForExpr);
  return (
    !!exprs &&
    isClientDerivedParam(param) &&
    !patchCreatesOrComposes(callSection) &&
    !sources?.state &&
    hasCallerParamSourceAt(sources, callSection) &&
    every(exprs, shipsOwnFills)
  );
}

function shipsOwnFills(expr: t.NodeExtra) {
  return every(getReferencedBindings(expr), shipsOwnFill);
}

// Per call in the section, the groups every param of which is such an input:
// the mask composes them from fills, and the call's fill runs push into them.
const [getClientDerivedGroups] = createAnalysisMemo((callSection: Section) => {
  const byCall = new Map<KnownExprs, Set<ParamReasonGroup>>();
  for (const tagExtra of callSection.knownTags || []) {
    const knownExprs = tagExtra[kKnownExprs];
    if (!knownExprs) continue;
    const groups = new Set<ParamReasonGroup>();
    for (const params of tagExtra[kChildSection]!.paramReasonGroups || []) {
      if (
        every(params, (param) =>
          isClientDerivedInput(
            callSection,
            param,
            mapParamReasonToExpr(knownExprs, param),
          ),
        )
      ) {
        groups.add(params);
      }
    }
    if (groups.size) byCall.set(knownExprs, groups);
  }
  return byCall;
}, new Map());

// A template input whose fill ships wherever its group is the server's, by its
// declaration's own registration.
function shipsOwnFill(ref: Binding) {
  const root = getCanonicalBinding(ref);
  const { fill, ownRegistration } = getPatchFill(root);
  return fill === true && !!ownRegistration;
}

// The binding is such a param.
export function derivesConstantInput(binding: Binding) {
  const params = getSourcesForRef(binding)?.param;
  return (
    !!params &&
    !Array.isArray(params) &&
    params === binding &&
    derivesConstantParam(params)
  );
}

// A `<define>` param every call passing a constant where the client renders it passes
// a module read, which that call's fill runs push: the client derives it.
export const derivesConstantParam = createPassMemo(
  (param: ParamBinding): boolean => {
    const body = param.section;
    let derives = false;
    return (
      !!body.parent &&
      !some(body.callSections, (callSection) =>
        callSection.knownTags!.some((tagExtra) => {
          if (tagExtra[kChildSection] !== body) return false;
          const exprs = mapParamReasonToExpr(tagExtra[kKnownExprs]!, param);
          const sources = reduce(exprs, mergeAllSourcesForExpr);
          if (
            hasClientState(sources) ||
            hasParamOrGlobalSource(sources) ||
            !rendersCallOnClient(callSection) ||
            feedsClientStateBeside(tagExtra, body, param)
          ) {
            return false;
          }
          derives = true;
          return !exprs || !every(exprs, isResolvedModuleRead);
        }),
      ) &&
      derives
    );
  },
  false,
);

// A call feeding client state to a param joined with this one: the client
// re-runs the join (main serializes the module read for it), so none derive it.
function feedsClientStateBeside(
  tagExtra: t.MarkoTagExtra,
  body: Section,
  param: ParamBinding,
) {
  return !!body.paramReasonGroups?.some(
    (group) =>
      bindingUtil.has(group, param) &&
      hasClientState(
        reduce(
          mapParamReasonToExpr(tagExtra[kKnownExprs]!, group),
          mergeAllSourcesForExpr,
        ),
      ),
  );
}

// The instance's sources mask (2 bits per group at `1 + 2i`; keyed when
// dynamic), or undefined when the all-server default is equivalent.
function buildGroupMaskExpr(
  section: Section,
  tag: t.MarkoTag,
  childScopeBinding: Binding,
  reasonGroups: ParamReasonGroups,
  groups: ParamGroupSources[],
  knownExprs: KnownExprs,
): t.Expression | undefined {
  const values = groups.map(({ params, sources, exprs }, i) => {
    const clientDerived = !!getClientDerivedGroups(section)
      .get(knownExprs)
      ?.has(params);
    const value = getGroupSourcesValue(
      section,
      childScopeBinding,
      reasonGroups[i],
      sources,
      clientDerived,
    );
    if (!exprs || !every(exprs, (expr) => isScopeBoundExpr(tag, expr))) {
      return value;
    }
    // A function its scope registers is fixed for the child's life: a page writes it
    // as its sources say, a patch as the captures it writes say, else as a constant.
    const patchValue = some(exprs, isLiveArg)
      ? getGroupSourcesValue(
          section,
          childScopeBinding,
          reasonGroups[i],
          {
            state: undefined,
            param: sources?.param,
            global: sources?.global,
            always: undefined,
          },
          clientDerived,
        )
      : 0;
    const pageExpr =
      typeof value === "number" ? t.numericLiteral(value) : value;
    const patchExpr =
      typeof patchValue === "number"
        ? t.numericLiteral(patchValue)
        : patchValue;
    return t.isNodesEquivalent(pageExpr, patchExpr)
      ? value
      : t.conditionalExpression(
          scopePageIdentifier(section.program),
          pageExpr,
          patchExpr,
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

// A group's bits from its call site's sources: state's, its callers' composed
// at render, else the server's, or none for a constant the child never reads.
function getGroupSourcesValue(
  section: Section,
  childScopeBinding: Binding,
  group: ParamReasonGroup,
  sources: Sources | undefined,
  clientDerived: boolean,
): number | t.Expression {
  // State alone that the client never changes is a call-site constant.
  if (
    sources?.state &&
    (sources.param || sources.global || !every(sources.state, keepsFirstValue))
  ) {
    return sources.param
      ? UpdatesFrom.Client | UpdatesFrom.Server
      : UpdatesFrom.Client;
  }
  // Params this section's callers pass compose their groups' bits at render.
  const callerGroups = getCallerParamGroupsAt(sources?.param, section);
  if (callerGroups.length) {
    let composed = buildComposedGroupValue(callerGroups);
    // Where their fills ship, the client renders the group from them as well.
    if (clientDerived) {
      for (const [paramSection, group] of callerGroups) {
        composed = t.binaryExpression(
          "|",
          composed,
          callRuntime("_filled_guard", ...getGroupArgs(paramSection, group)),
        );
      }
    }
    // A `$global` source adds a static server bit beside the composition.
    return sources!.global
      ? t.binaryExpression("|", t.numericLiteral(UpdatesFrom.Server), composed)
      : composed;
  }
  if (isUngatedGroup(sources)) return UpdatesFrom.Server;
  // A constant group (a call-site constant) the child still reads
  // client-side is the server's to supply; one it never reads ships not.
  return findSlot(childScopeBinding, SlotKind.ParamGroup, section, group)
    ?.reason
    ? UpdatesFrom.Server
    : 0;
}

// The server alone contributes the group, as the all-server default says.
function isServerOnly(value: number | t.Expression) {
  return value === UpdatesFrom.Server;
}

// A group with param or `$global` sources but none from state or a param a
// caller passes: no caller gates it, so its mask is fixed and a patch writes it.
function isUngatedGroup(sources: Sources | undefined) {
  return (
    !sources?.state &&
    hasParamOrGlobalSource(sources) &&
    !hasCallerParamSource(sources)
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
        getModuleRead(tag, arg as t.Expression);
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
        getModuleRead(tag, attr.value);
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

// An object the call builds anew each time it runs: a literal, or a binding holding one.
function isBuiltObjectExpr(extra: t.NodeExtra) {
  if (extra.buildsObject) return true;
  const ref = getReferencedBindings(extra);
  return !!ref && !Array.isArray(ref) && holdsBuiltObject(ref);
}

// A live function as the call passes it: a literal reading a capture a patch
// writes, or a binding holding one.
function isLiveArg(extra: t.NodeExtra | undefined) {
  if (!extra) return false;
  if (isRegisteredFnExtra(extra)) return !!getLiveCaptures(extra);
  const ref = getReferencedBindings(extra);
  return !!ref && !Array.isArray(ref) && holdsLiveFn(ref);
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
      undefined,
      paramsTree,
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
            paramsTree.props[j]?.binding,
            `${hint}_param_${j}`,
            arg as t.Expression,
          ] as const,
      ),
    );
    for (const arg of tag.node.arguments) {
      const argTree = paramsTree.props[i];
      if (argTree) {
        pushDerivedConstants(info, constants, arg.extra, argTree.binding);
        writeToSignal(
          info,
          info.getBindingIdentifier(argTree.binding, `${hint}_param_${i}`),
          arg.extra, // TODO: pretty sure content needs to have the reference group of it's param defaults.
          arg as t.Expression,
          true,
          argTree,
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

  writeToSignal(
    info,
    tagInputIdentifier,
    tagExtra,
    translatedProps!,
    true,
    paramsTree,
  );
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
      tree,
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
  tree?: ParamsTree,
) {
  const scope = createScopeReadExpression(
    info.childScopeBinding,
    info.tagSection,
  );
  addStatement(
    getForwardType(info, expr, tree),
    info.tagSection,
    expr,
    t.callExpression(signal, value ? [scope, value] : [scope]),
    isPure,
  );
}

// A call some instance of which the client renders: in stateful structure, or
// in param-selected structure a caller may hand it.
function rendersCallOnClient(section: Section) {
  return !patchWrites(section) || !!getParamSelectedStructure(section);
}

// Where the client renders the call, its module reads the callee stores (a join
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
        isResolvedModuleRead(value.extra) &&
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

// A fill reaching the call by an input a join reads with a constant pushes the
// constant first, as setup does (the signal sees the same value, so it re-runs nothing).
function pushDerivedConstants(
  info: TranslateDOMInfo,
  constants: DerivedConstant[],
  expr: t.NodeExtra | undefined,
  param: Binding,
) {
  const refs = expr && getReferencedBindings(expr);
  if (!refs) return;
  for (const constant of constants) {
    if (
      !constant.signals.has(refs) &&
      param.section.paramReasonGroups?.some(
        (group) =>
          bindingUtil.has(group, constant.binding) &&
          bindingUtil.has(group, param),
      )
    ) {
      constant.signals.add(refs);
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
// statement, which a fill's run leaves; one into a group the client derives stays.
function getForwardType(
  info: TranslateDOMInfo,
  expr: t.NodeExtra | undefined,
  tree?: ParamsTree,
) {
  const derived = getClientDerivedGroups(info.tagSection).get(info.knownExprs);
  return calleeKeepsInput(info.tagSection, expr && getSourcesForExpr(expr)) &&
    !(derived && (!tree || someTreeParam(derived, tree)))
    ? "patch"
    : "render";
}

// Whether a param the forward covers is in one of the groups (a spread covers any).
function someTreeParam(
  groups: Set<ParamReasonGroup>,
  tree: ParamsTree,
): boolean {
  for (const params of groups) {
    if (bindingUtil.has(params, tree.binding)) return true;
  }
  for (const prop in tree.props) {
    if (someTreeParam(groups, tree.props[prop])) return true;
  }
  return false;
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

// Everything a group's call-site expressions may read, reads inside function
// values included: they inform where it updates from, never serialization.
function mergeAllSourcesForExpr(
  sources: Sources | undefined,
  expr: t.NodeExtra,
) {
  return mergeSources(
    mergeSources(sources, getSourcesForExpr(expr)),
    getSourcesForRef(getReferencedBindingsInFunction(expr as t.FunctionExtra)),
  );
}
