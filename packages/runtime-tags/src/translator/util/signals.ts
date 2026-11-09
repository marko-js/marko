import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import { toAccess } from "../../html/serializer";
import {
  type Binding,
  BindingType,
  getCanonicalBinding,
  getDebugName,
  getDebugNames,
  getDebugNamesAsIdentifier,
  getDebugAccess,
  type Getter,
  hasNonConstantPropertyAlias,
  type Intersection,
  isDirectAlias,
  isRest,
  type ReferencedBindings,
  someAlias,
} from "./bindings";
import { getLastOwnSourceReturn } from "./finalize-references";
import { forEachIdentifier } from "./for-each-identifier";
import { isForSelectorValue } from "./for-selector";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-enums";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { isOptimize, isOutputHTML } from "./marko-config";
import { every, forEach, type Opt, push, reduce, some } from "./optional";
import {
  createResolvedReadExpression,
  getReadReplacement,
} from "./read-replacement";
import {
  getNodeReasons,
  isGuardedReason,
  type Reason,
  type Reasons,
} from "./reasons";
import {
  type AssignedBindingExtra,
  getBindingsDerivedFrom,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  hasResumableAssignment,
  isAssignedBindingExtra,
  isPureExpr,
  isRegisteredFnExtra,
} from "./references";
import {
  insertStatementBefore,
  replaceWithStatements,
} from "./replace-with-statements";
import { callRuntime, registerRuntimeValue, trimFalsyArgs } from "./runtime";
import {
  getClosureAccessorLiteral,
  getLocalsScopeAccessor,
  getPrefixedScopeAccessor,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
  getSectionScopesAccessorLiteral,
  getSlotAccessor,
} from "./scope-accessor";
import {
  createScopeReadExpression,
  getScopeExpression,
  localsIdentifier,
  scopeIdentifier,
} from "./scope-read";
import {
  forEachAncestorSection,
  getDynamicTagContentClosures,
  getDynamicClosureIndex,
  getForClosureIndex,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isDirectClosure,
  isDynamicClosure,
  isInParentSection,
  type Section,
  sectionUtil,
} from "./sections";
import { replaceMethodNode, simplifyFunction } from "./simplify-fn";
import { findSectionSlot, findSlot, type PlaceSlot, SlotKind } from "./slots";
import { sourcesUtil } from "./sources";
import { createOutputState, createOutputSectionState } from "./state";
import { toOnlyExpressionOrBlock } from "./to-only-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { getRestPattern, withRestFallback } from "./translate-var";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";
import {
  andGuard,
  getExprIfWritten,
  getWriteGuardForAny,
  getWriteReason,
  isBranchAlwaysMarked,
  isSameReason,
} from "./write-guard";
import { flushInto } from "./writer";

export interface Signal {
  identifier: t.Identifier;
  referencedBindings: ReferencedBindings;
  section: Section;
  build: undefined | (() => t.Expression | undefined);
  register?: boolean;
  // Other emitted statements reference this signal's identifier directly (eg
  // the `_var` setup call), so even an empty signal keeps its declaration.
  referenced?: boolean;
  values: Array<{
    signal: Signal;
    /** None for a signal that runs on the scope alone. */
    value: t.Expression | undefined;
  }>;
  intersections: Opt<Signal>;
  /** Signals this one forwards into: they must declare first when the
   * forward simplifies to a bare, eagerly evaluated reference. */
  forwards: Opt<Signal>;
  render: t.Statement[];
  effect: t.Statement[];
  hasHTMLEffect: boolean;
  storesValue: boolean;
  forceStore: boolean;
  inline: { value: t.Expression | undefined } | undefined;
  export: boolean;
  extraArgs: t.Expression[] | undefined;
  prependStatements: t.Statement[] | undefined;
  buildAssignment:
    | ((valueSection: Section, value: t.Expression) => t.Expression | undefined)
    | undefined;
}

type closureSignalBuilder = (
  closure: Binding,
  render: t.Expression,
) => t.Expression;
export const [getSignals] = createOutputSectionState<Map<unknown, Signal>>(
  () => new Map(),
);
const [getClosureSignalBuilder, _setClosureSignalBuilder] =
  createOutputSectionState<closureSignalBuilder | undefined>();
export function setClosureSignalBuilder(
  tag: t.NodePath<t.MarkoTag>,
  build?: closureSignalBuilder,
) {
  const section = getSectionForBody(tag.get("body"))!;
  _setClosureSignalBuilder(
    section,
    build || ((closure, render) => buildClosureHop(section, closure, render)),
  );
}

// The hop from a branch of an `<if>` or `<for>` to the scope its closure is in.
export function buildClosureHop(
  section: Section,
  closure: Binding,
  render: t.Expression,
) {
  const branch = section.branch!;
  const accessor = getScopeAccessorLiteral(branch.tag.nodeBinding, true);
  return branch.kind === "if"
    ? callRuntime(
        "_if_closure",
        accessor,
        t.numericLiteral(branch.index),
        render,
      )
    : callRuntime(
        "_for_closure",
        accessor,
        render,
        t.numericLiteral(
          closure.closureId! + getForClosureIndex(closure, section),
        ),
        getLoopRenderOrder(section),
      );
}

// A loop settles its rows in its value's render, which waits for the scope offset
// of the last child whose returned value that value reads.
export function getLoopRenderOrder(bodySection: Section) {
  const returnedBy = getLastOwnSourceReturn(
    getReferencedBindings(bodySection.branch!.tag),
    bodySection.parent!,
  );
  return returnedBy && getScopeOffsetAccessorLiteral(returnedBy, true);
}

// A branch section whose scope ids ride a resume marker carrying the parent scope
// id when its scopes serialize, so the client links the owner and `_` is not serialized.
const [getOwnerResumedByMarker, setOwnerResumedByMarker] =
  createOutputSectionState<true | undefined>();
export function setSectionOwnerResumedByMarker(section: Section) {
  setOwnerResumedByMarker(section, true);
}

// Registered content's closures its owners' scope flushes may lack, by section:
// one values object per owner down to the content's own.
export function getContentClosureValues(bodySection: Section) {
  const contentClosures = getDynamicTagContentClosures(bodySection);
  if (!contentClosures) return;
  const scope = generateUidIdentifier("scope");
  const closures = Array.isArray(contentClosures)
    ? contentClosures
    : [contentClosures];
  const ownerAccessor = getAccessorProp().Owner;
  const levels: t.Expression[] = [];
  for (let i = closures.length, section = bodySection.parent!; i;) {
    const props: t.ObjectProperty[] = [];
    while (i && closures[i - 1].section === section) {
      const closure = closures[--i];
      props.push(
        toObjectProperty(
          getScopeAccessor(closure),
          getDeclaredBindingExpression(closure),
        ),
      );
    }
    // Resume walks up through each owner while the payload evaluates, before
    // any scope flush could link it, so every level below another links its owner.
    if (i) {
      props.push(
        toObjectProperty(
          ownerAccessor,
          t.callExpression(scope, [getScopeIdIdentifier(section.parent!)]),
        ),
      );
    }
    levels.push(t.objectExpression(props));
    section = section.parent!;
  }
  return { scope, levels: levels.reverse() };
}

const [getScopeProperties] = createOutputSectionState<
  Map<string, { expression: t.Expression; reason: Reason }>
>(() => new Map());
export function writeSlot(
  slot: PlaceSlot | undefined,
  expression: t.Expression,
) {
  const reason = slot?.reason;
  if (reason) {
    const accessor = getSlotAccessor(slot!);
    getScopeProperties(slot!.section).set(accessor, {
      expression,
      reason,
    });
    return accessor;
  }
}

const [getSectionDebugVars] = createOutputSectionState<
  Map<string, [name: string, loc?: string]>
>(() => new Map());
// Names a runtime-serialized internal slot (eg a controllable's handler) in
// debug "Unable to serialize" errors; these never pass through `writeScope`.
export function setSectionDebugVar(
  section: Section,
  accessor: string,
  name: string,
  loc: t.SourceLocation | null | undefined,
) {
  if (!isOptimize()) {
    getSectionDebugVars(section).set(
      accessor,
      loc ? [name, getDebugLoc(loc)] : [name],
    );
  }
}

const [getSectionWriteScopeBuilder, setSectionWriteScopeBuilder] =
  createOutputSectionState<
    undefined | ((expr: t.Expression) => t.Expression)
  >();
export function addWriteScopeBuilder(
  section: Section,
  builder: (writeCall: t.Expression) => t.Expression,
) {
  const prev = getSectionWriteScopeBuilder(section);
  setSectionWriteScopeBuilder(
    section,
    prev ? (expr) => builder(prev(expr)) : builder,
  );
}

const htmlDynamicClosureInstancesIdentifier = new WeakMap<
  Signal,
  t.Identifier
>();

export const [getHTMLSectionStatements] = createOutputSectionState<
  t.Statement[]
>(() => []);

// What a section's html renderer returns: its `<return>` value.
const [getSectionReturnValueIdentifier, setReturnValueIdentifier] =
  createOutputSectionState<t.Identifier | undefined>();
export { setReturnValueIdentifier };

const [getBindingGetterIdMap] = createOutputSectionState<
  Map<Binding, t.Identifier>
>(() => new Map());

export function getBindingGetterIdentifier(
  binding: Binding,
  getterSection: Getter["hoisted"],
) {
  const section = getterSection || binding.section;
  const idsMap = getBindingGetterIdMap(section);
  let identifier = idsMap.get(binding);
  if (!identifier) {
    idsMap.set(
      binding,
      (identifier = generateUidIdentifier(
        `${section.name ? `${section.name}__` : ""}${binding.originalName ?? binding.name}_getter`,
      )),
    );
  }
  return identifier;
}

export function getSignal(
  section: Section,
  referencedBindings: ReferencedBindings,
  name?: string,
) {
  if (referencedBindings && !Array.isArray(referencedBindings)) {
    if (referencedBindings.type === BindingType.constant) {
      return getSignal(section, undefined);
    }

    if (referencedBindings.section !== section) {
      const canonicalReference = getCanonicalBinding(referencedBindings);
      if (canonicalReference !== referencedBindings) {
        return getSignal(section, canonicalReference);
      }
    }
  }

  const signals = getSignals(section);
  let signal = signals.get(referencedBindings)!;
  if (!signal) {
    const signalName =
      name ??
      (referencedBindings
        ? getDebugNamesAsIdentifier(referencedBindings)
        : "setup");
    const exportName = referencedBindings
      ? !Array.isArray(referencedBindings) &&
        referencedBindings.section === section &&
        getProgram().node.extra.exportNames!.params.get(referencedBindings)
      : !section.parent && getProgram().node.extra.exportNames!.setup;

    signals.set(
      referencedBindings,
      (signal = {
        identifier: exportName
          ? t.identifier(exportName)
          : generateUidIdentifier(
              section.name ? `${section.name}__${signalName}` : signalName,
            ),
        referencedBindings,
        section,
        values: [],
        intersections: undefined,
        forwards: undefined,
        render: [],
        effect: [],
        hasHTMLEffect: false,
        build: undefined,
        export: !!exportName,
        storesValue: !!(
          referencedBindings &&
          (Array.isArray(referencedBindings) ||
            referencedBindings.type === BindingType.dom ||
            referencedBindings.type === BindingType.let ||
            referencedBindings.section !== section ||
            referencedBindings.closureSections ||
            referencedBindings.hoists ||
            referencedBindings.localOf ||
            getWriteReason(referencedBindings))
        ),
        forceStore: false,
        inline: undefined,
        extraArgs: undefined,
        prependStatements: undefined,
        buildAssignment: undefined,
      }),
    );

    if (isOutputHTML()) {
      return signal;
    } else if (!referencedBindings) {
      signal.build = () => buildSignalFn(signal);
    } else if (Array.isArray(referencedBindings)) {
      const meta = section.intersections!.get(referencedBindings)!;
      subscribe(meta.source || referencedBindings, signal);
      if (meta.source) {
        const sourceSignal = getSignal(section, meta.source);
        forEach(referencedBindings, (member) => {
          const memberSignal = getSignal(section, member);
          // A member only its intersection reads is computed there from the source,
          // unless client code reads it after resume: then it reads what the server wrote.
          const inline =
            !member.propertyAliases.size &&
            member.reads.size === 1 &&
            !getWriteReason(member) &&
            sourceSignal.values.find((v) => v.signal === memberSignal);
          if (inline) {
            memberSignal.inline = inline;
          } else {
            memberSignal.storesValue = memberSignal.forceStore = true;
          }
        });
      }
      signal.build = () =>
        buildIntersection(section, referencedBindings, buildSignalFn(signal));
    } else if (
      referencedBindings.section !== section &&
      sectionUtil.has(referencedBindings.closureSections, section)
    ) {
      signal.build = () => {
        const closure = referencedBindings;
        const render = buildSignalFn(signal);
        const closureSignalBuilder = getClosureSignalBuilder(section);

        if (closureSignalBuilder && isDirectClosure(section, closure)) {
          return closureSignalBuilder(closure, render);
        }

        return callRuntime(
          "_closure_get",
          getClosureAccessorLiteral(closure),
          render,
          isInParentSection(closure, section)
            ? undefined
            : t.arrowFunctionExpression(
                [scopeIdentifier],
                getScopeExpression(section, closure.section),
              ),
          // Match the HTML registration, which is gated on this subscriber
          // section (writeHTMLResumeStatements); keying on any sibling closure
          // section would ship a subscribe id that nothing looks up.
          isChangeableDynamicClosure(section, closure)
            ? t.stringLiteral(
                getResumeRegistryId(section, closure, "subscribe"),
              )
            : undefined,
        );
      };
    }
  }
  return signal;
}

// A dynamic closure the client can change before a subscriber that resumes
// after its owner; state no resumed instance can write never changes.
function isChangeableDynamicClosure(section: Section, closure: Binding) {
  const { sources } = closure;
  return (
    !!sources &&
    isDynamicClosure(section, closure) &&
    (!sources.state || some(sources.state, hasResumableAssignment))
  );
}

export function initValue(binding: Binding, isLet = false) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  // Lazy reads read the value from its scope slot.
  signal.forceStore ||= binding.hasLazyReads;
  signal.build = () => {
    if (isPureMemberForwarder(binding)) {
      return undefined;
    }

    const fn = buildSignalFn(signal);
    if (
      !signal.forceStore &&
      (isDirectAlias(binding) ||
        (!signal.storesValue &&
          !someAlias(binding, aliasStoresValue, binding, true)) ||
        !signalHasWork(signal))
    ) {
      return fn;
    }

    return callRuntime(
      isLet ? (signal.extraArgs ? "_let_change" : "_let") : "_const",
      getScopeAccessorLiteral(binding, true, isLet),
      fn,
    );
  };

  binding.aliases.forEach(initAliasValue);
  binding.propertyAliases.forEach(initAliasValue);
  return signal;
}

function initAliasValue(alias: Binding) {
  if (alias.type !== BindingType.constant) initValue(alias);
}

// A direct alias's work reads the slot of the binding it aliases.
function aliasStoresValue(alias: Binding, binding: Binding) {
  return alias !== binding && getSignal(alias.section, alias).storesValue;
}

export function signalHasWork(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.forceStore ||
    signal.render.length ||
    signal.effect.length ||
    signal.hasHTMLEffect ||
    signal.values.length ||
    signal.intersections
  ) {
    return true;
  }
  const binding = signal.referencedBindings;
  if (binding) {
    if (
      !Array.isArray(binding) &&
      (binding.closureSections ||
        binding.type === BindingType.dom ||
        (binding.section === signal.section &&
          (binding.hoists ||
            binding.aliases.size ||
            hasNonConstantPropertyAlias(binding))))
    ) {
      return true;
    }
  } else if (signal.section.referencedClosures) {
    return true;
  }
  return false;
}

function isPureMemberForwarder(binding: Binding): boolean {
  if (
    binding.property === undefined ||
    binding.reads.size ||
    binding.exposed ||
    binding.aliases.size ||
    binding.assignments ||
    isForSelectorValue(binding) ||
    getWriteReason(binding) ||
    getSignal(binding.section, binding).storesValue
  ) {
    return false;
  }

  return hasNonConstantPropertyAlias(binding);
}

function pushMemberForwards(
  signal: Signal,
  value: t.Expression,
  alias: Binding,
) {
  if (isPureMemberForwarder(alias)) {
    for (const [key, child] of alias.propertyAliases) {
      if (child.type !== BindingType.constant) {
        pushMemberForwards(
          signal,
          toMemberExpression(t.cloneNode(value, true), key, alias.nullable),
          child,
        );
      }
    }
  } else {
    pushForward(signal, getSignal(alias.section, alias), value);
  }
}

function pushForward(signal: Signal, target: Signal, value: t.Expression) {
  if (pushSignalCall(signal, target, value)) {
    signal.forwards = push(signal.forwards, target);
  }
}

// Calls `target` with `value`, or runs its statements in place when it is
// inlined; true for a call.
function pushSignalCall(
  signal: Signal,
  target: Signal,
  value: t.Expression | undefined,
) {
  if (isInlinedValue(target)) {
    // Its one read, now in the caller, reads the value as the caller reads it.
    target.inline = { value };
    traverseReplace(target.inline, "value", replaceRenderNode, signal);
    buildSignalFn(target);
    signal.render.push(...target.render);
    return false;
  }

  signal.render.push(
    t.expressionStatement(
      t.callExpression(
        target.identifier,
        trimFalsyArgs([
          scopeIdentifier,
          value,
          ...getTranslatedExtraArgs(target),
        ]),
      ),
    ),
  );
  return true;
}

// A derived value or property alias read once has one caller, the signal
// computing it, so its read runs there with its value in place.
function isInlinedValue(signal: Signal) {
  const binding = signal.referencedBindings;
  if (
    !binding ||
    Array.isArray(binding) ||
    binding.reads.size !== 1 ||
    signal.storesValue ||
    signal.referenced ||
    binding.exposed ||
    binding.assignments ||
    binding.aliases.size ||
    binding.propertyAliases.size ||
    (binding.property === undefined &&
      (binding.type !== BindingType.derived ||
        binding.aliasOf ||
        // Moved into its read, it must not depend on running first.
        !every(binding.derivedFrom || undefined, isPureExpr)))
  ) {
    return false;
  }

  // A read in a function names the value lexically, so it needs the param.
  const [read] = binding.reads.values();
  if (Array.isArray(read) || read!.fnRoot) return false;

  // A local closure's signal is built after its reads resolve, too late to
  // take in what it computes.
  const from = getBindingsDerivedFrom(binding);
  return Array.isArray(from) || !from?.localOf;
}

// A source intersection runs in its source's pass, so it needs no `_or`.
function buildIntersection(
  section: Section,
  intersection: Intersection,
  fn: t.Expression,
) {
  const { source, id, returnedBy } = section.intersections!.get(intersection)!;
  if (source) return fn;
  return callRuntime(
    "_or",
    t.numericLiteral(id),
    fn,
    returnedBy || intersection.length > 2
      ? t.numericLiteral(intersection.length - 1)
      : undefined,
    returnedBy && getScopeOffsetAccessorLiteral(returnedBy, true),
  );
}

export function buildSignalFn(signal: Signal): t.Expression {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue = isBinding && binding.section === section;
  const assertsHoists = isValue && binding.hoists && !isOptimize();

  if (isValue) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      if (signalHasWork(aliasSignal)) {
        let value: t.Expression = createScopeReadExpression(binding);
        if (isRest(alias)) {
          const aliasId = t.identifier(alias.name);
          value = t.callExpression(
            t.arrowFunctionExpression(
              [getRestPattern(alias, aliasId, binding, true)],
              aliasId,
            ),
            [withRestFallback(alias, binding, value)],
          );
        }
        pushForward(signal, aliasSignal, value);
      }
    }

    for (const [key, alias] of binding.propertyAliases) {
      if (alias.type !== BindingType.constant) {
        pushMemberForwards(
          signal,
          toMemberExpression(
            createScopeReadExpression(binding),
            key,
            binding.nullable,
          ),
          alias,
        );
      }
    }

    if (assertsHoists) {
      signal.render.push(
        t.expressionStatement(
          callRuntime("_assert_hoist", createScopeReadExpression(binding)),
        ),
      );
    }
  }

  for (const value of signal.values) {
    if (value.signal.inline) {
      continue;
    }
    if (signalHasWork(value.signal)) {
      pushSignalCall(signal, value.signal, value.value);
    } else {
      signal.render.push(
        t.expressionStatement(
          withLeadingComment(
            value.value!,
            getDebugNames(value.signal.referencedBindings),
          ),
        ),
      );
    }
  }

  forEach(signal.intersections, (intersection) => {
    pushScopeCall(signal.render, intersection.identifier);
  });

  if (isBinding && binding.sources) {
    let dynamicClosureArgs: t.Expression[] | undefined;
    let dynamicClosureSignalIdentifier: t.Identifier | undefined;
    forEach(binding.closureSections, (closureSection) => {
      if (!isDynamicClosure(closureSection, binding)) {
        // An optional branch's direct closure comes from its parent's signal.
        if (closureSection.parent === section) {
          pushScopeCall(
            signal.render,
            getSignal(closureSection, binding).identifier,
          );
        }
      } else if (isValue) {
        if (!dynamicClosureArgs) {
          dynamicClosureArgs = [];
          dynamicClosureSignalIdentifier = generateUidIdentifier(
            signal.identifier.name + "__closure",
          );
          pushScopeCall(signal.render, dynamicClosureSignalIdentifier);
        }

        dynamicClosureArgs.push(getSignal(closureSection, binding).identifier);
      }
    });

    if (dynamicClosureSignalIdentifier) {
      (signal.prependStatements ||= []).push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            dynamicClosureSignalIdentifier,
            callRuntime("_closure", ...dynamicClosureArgs!),
          ),
        ]),
      );
    }
  }

  if (signal.effect.length) {
    pushScopeCall(signal.render, getSignalEffectIdentifier(signal));
  }

  if (isValue && !signal.storesValue) {
    const call = getOnlyCall(signal.render);
    if (
      call &&
      call.callee.type === "Identifier" &&
      call.arguments.length === 2 &&
      call.arguments[0] === scopeIdentifier &&
      isOwnValueRead(call.arguments[1], binding)
    ) {
      // The signal only forwards its scope and value to another signal:
      // `(scope, value) => fn(scope, value)` is equivalent to `fn`.
      return call.callee;
    }

    return t.arrowFunctionExpression(
      [scopeIdentifier, getSignalValueIdentifier(signal)],
      toOnlyExpressionOrBlock(signal.render),
    );
  }

  return toScopeFn(signal.render);
}

// `(scope) => fn(scope)` is `fn`.
function toScopeFn(render: t.Statement[]): t.Expression {
  const call = getOnlyCall(render);
  if (
    call &&
    call.arguments.length === 1 &&
    call.arguments[0] === scopeIdentifier
  ) {
    if (
      call.callee.type === "MemberExpression" &&
      call.callee.property.type === "Identifier" &&
      call.callee.property.name === getAccessorProp().Owner
    ) {
      // Special case closure reads of `IDENTIFIER._`.
      return call.callee.object;
    }

    return call.callee as t.Expression;
  }

  return t.arrowFunctionExpression(
    [scopeIdentifier],
    toOnlyExpressionOrBlock(render),
  );
}

// The call a render of a single call statement makes.
function getOnlyCall(render: t.Statement[]) {
  if (render.length === 1) {
    const [first] = render;
    if (
      first.type === "ExpressionStatement" &&
      first.expression.type === "CallExpression"
    ) {
      return first.expression;
    }
  }
}

function pushScopeCall(render: t.Statement[], callee: t.Expression) {
  render.push(
    t.expressionStatement(t.callExpression(callee, [scopeIdentifier])),
  );
}

function getSignalEffectIdentifier(signal: Signal) {
  return t.identifier(`${signal.identifier.name}__script`);
}

const hasTranslatedExtraArgs = new WeakSet<{ extraArgs?: t.Expression[] }>();
const emptyExtraArgs: never[] = [];
function getTranslatedExtraArgs(signal: { extraArgs?: t.Expression[] }) {
  if (signal.extraArgs) {
    if (!hasTranslatedExtraArgs.has(signal)) {
      hasTranslatedExtraArgs.add(signal);
      traverseReplace(signal, "extraArgs", replaceRenderNode);
    }

    return signal.extraArgs;
  }

  return emptyExtraArgs;
}

export function getSignalValueIdentifier(signal: Signal) {
  const canonicalBinding = getCanonicalBinding(
    signal.referencedBindings as Binding,
  );
  return t.identifier(canonicalBinding.name);
}

function isOwnValueRead(node: t.Node, binding: Binding) {
  const extra = (node as { extra?: t.NodeExtra }).extra;
  const read = extra?.read;
  return (
    !!read &&
    !extra!.assignment &&
    read.binding === binding &&
    read.properties === undefined &&
    !read.getter?.invoked
  );
}

function subscribe(references: ReferencedBindings, intersection: Signal) {
  if (references) {
    forEach(references, (binding) => {
      if (binding.type !== BindingType.constant) {
        const source = getCanonicalBinding(binding);
        const providerSignal = getSignal(intersection.section, source);
        providerSignal.storesValue = true;
        providerSignal.intersections = push(
          providerSignal.intersections,
          intersection,
        );
      }
    });
  }
}

export function trimEmptyArgs(
  args: (t.Expression | undefined | false)[],
): t.Expression[] {
  const len = args.length;
  let finalLen: undefined | number = undefined;

  for (let i = len; i--;) {
    const arg = args[i];
    if (!arg) {
      args[i] = t.numericLiteral(0);
      continue;
    }

    if (
      t.isNullLiteral(arg) ||
      (t.isUnaryExpression(arg) && arg.operator === "void")
    ) {
      args[i] = t.numericLiteral(0);
      continue;
    }

    if (t.isArrowFunctionExpression(arg) && t.isBlockStatement(arg.body)) {
      const body = arg.body.body;
      if (body.length === 0) {
        args[i] = t.numericLiteral(0);
        continue;
      }

      if (body.length === 1 && t.isExpressionStatement(body[0])) {
        arg.body = body[0].expression;
      }
    }

    if (finalLen === undefined) {
      finalLen = i + 1;
    }
  }

  args.length = finalLen || 0;
  return args as t.Expression[];
}
// Work for `expr` runs when what it references changes, in setup if nothing
// (or no `expr`); a `statement` given as an expression is wrapped as one.
export function addStatement(
  type: "render" | "effect",
  targetSection: Section,
  expr: t.NodeExtra | undefined,
  statement: t.Statement | t.Statement[] | t.Expression,
  isPure?: boolean,
): void {
  const signal = getSignal(targetSection, getReferencedBindings(expr));
  const statements = signal[type];

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(
      t.isExpression(statement) ? t.expressionStatement(statement) : statement,
    );
  }

  signal.storesValue ||= !isPure || type === "effect";
}

// Runs a `<log>` or `<debug>` statement where the tag is: in place on the
// server, and on the client whenever its value changes.
export function addTagStatement(
  tag: t.NodePath<t.MarkoTag>,
  statement: t.Statement,
) {
  if (isOutputHTML()) {
    // Buffered markup is deliberately not flushed first: source-order
    // interleaving of a dev statement is not worth splitting the html write.
    insertStatementBefore(tag, statement);
  } else {
    addStatement(
      "render",
      getSection(tag),
      tag.node.attributes[0]?.value.extra,
      statement,
    );
    replaceWithStatements(tag);
  }
}

export function addValue(
  targetSection: Section,
  expr: t.NodeExtra | undefined,
  signal: Signal,
  value?: t.Expression,
) {
  const parentSignal = getSignal(targetSection, getReferencedBindings(expr));
  parentSignal.values.push({
    signal,
    value,
  });

  parentSignal.storesValue ||= !!(
    t.isFunction(value) &&
    value.extra &&
    getReferencedBindingsInFunction(value.extra)
  );
}

function buildResumeRegisterKey(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  // Every segment is self-delimiting (`#id` per binding, `*` for string kinds),
  // and a binding another section owns names that section, since ids restart.
  let name = "";
  if (referencedBindings) {
    if (typeof referencedBindings === "string") {
      name += `*${referencedBindings}`;
    } else {
      name = reduce(
        referencedBindings,
        (name, binding) => appendBindingKey(name, binding, section),
        name,
      );
    }
  }
  return `${section.id}${name}${type ? "/" + type : ""}`;
}

export function getResumeRegistryId(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  const {
    markoOpts,
    opts: { filename },
  } = getFile();
  const key = buildResumeRegisterKey(section, referencedBindings, type);
  return getTemplateId(markoOpts, filename as string, key);
}

export function writeSignals(section: Section) {
  const seen = new Set<Signal>();
  const written = new Set<Signal>();
  writeGetters(section);

  for (const signal of getSignals(section).values()) {
    writeSignal(signal);
  }

  function writeSignal(signal: Signal) {
    if (seen.has(signal)) return;
    seen.add(signal);

    for (const value of signal.values) {
      writeSignal(value.signal);
      traverseReplace(value, "value", replaceRenderNode);
    }

    forEach(signal.intersections, writeSignal);

    // Its caller writes its reads in place.
    if (isInlinedValue(signal)) return;

    let effectDeclarator: t.VariableDeclarator | undefined;
    if (signal.effect.length) {
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = getSignalEffectIdentifier(signal);
      const effectFn = t.arrowFunctionExpression(
        [scopeIdentifier],
        toOnlyExpressionOrBlock(signal.effect),
      );
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        callRuntime(
          "_script",
          t.stringLiteral(
            getResumeRegistryId(section, signal.referencedBindings),
          ),
          effectFn,
        ),
      );
    }

    let signalDeclaration: t.Statement | undefined;
    if (signal.build) {
      let value = signal.build();
      // A built bare identifier, or one a `_const`/`_let` store takes as its
      // fn, references its forward target when the module evaluates.
      const buildsEagerForward =
        t.isIdentifier(value) ||
        (t.isCallExpression(value) && t.isIdentifier(value.arguments.at(-1)));

      if (
        !value ||
        (!signal.register &&
          !signal.referenced &&
          t.isFunction(value) &&
          t.isBlockStatement(value.body) &&
          !value.body.body.length)
      ) {
        return;
      }

      if (t.isCallExpression(value)) {
        trimEmptyArgs(value.arguments as t.Expression[]);
      }

      if (signal.register) {
        value = callRuntime(
          "_var_resume",
          t.stringLiteral(
            getResumeRegistryId(section, signal.referencedBindings, "var"),
          ),
          value,
        );
      }

      if (buildsEagerForward) forEach(signal.forwards, writeSignal);
      const signalDeclarator = t.variableDeclarator(signal.identifier, value);
      signalDeclaration =
        !section.parent &&
        !signal.referencedBindings &&
        (t.isFunctionExpression(value) || t.isArrowFunctionExpression(value))
          ? t.functionDeclaration(
              signal.identifier,
              value.params,
              t.isExpression(value.body)
                ? t.blockStatement([t.expressionStatement(value.body)])
                : value.body,
            )
          : t.variableDeclaration("const", [signalDeclarator]);
      if (signal.export) {
        signalDeclaration = t.exportNamedDeclaration(signalDeclaration);
      }
    }

    traverseReplace(signal, "render", replaceRenderNode, signal);

    const signalStatements = signal.prependStatements || [];

    if (effectDeclarator) {
      signalStatements.push(t.variableDeclaration("const", [effectDeclarator]));
    }

    if (signalDeclaration) {
      signalStatements.push(signalDeclaration);
    }
    getProgram().node.body.push(...signalStatements);

    written.add(signal);
  }

  return written;
}

function writeGetters(section: Section) {
  forEach(section.bindings, (binding) => {
    for (const [hoistSection, hasReference] of binding.getters) {
      const getterIdentifier = getBindingGetterIdentifier(
        binding,
        hoistSection,
      );
      const accessors: t.Expression[] = [
        getScopeAccessorLiteral(binding, true),
      ];

      if (hoistSection) {
        forEachAncestorSection(
          binding.section,
          hoistSection,
          pushInstancesAccessor,
          accessors,
        );
      }

      getProgram().node.body.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            getterIdentifier,
            hoistSection
              ? hasReference
                ? callRuntime(
                    "_hoist_resume",
                    t.stringLiteral(
                      getResumeRegistryId(hoistSection, binding, "hoist"),
                    ),
                    ...accessors,
                  )
                : callRuntime("_hoist", ...accessors)
              : callRuntime(
                  "_el",
                  t.stringLiteral(getResumeRegistryId(section, binding)),
                  ...accessors,
                ),
          ),
        ]),
      );
    }
  });
}

function pushInstancesAccessor(section: Section, accessors: t.Expression[]) {
  const instancesAccessor = getSectionScopesAccessorLiteral(section);
  const { branch } = section;
  // The branches of an `<if>` chain share one slot, so the read checks which renders.
  accessors.push(
    branch?.kind === "if" && Array.isArray(branch.tag.nodeBinding.branchBodies)
      ? t.arrayExpression([
          instancesAccessor,
          t.stringLiteral(
            getPrefixedScopeAccessor(
              branch.tag.nodeBinding,
              getAccessorPrefix().ConditionalRenderer,
            ),
          ),
          t.numericLiteral(branch.index),
        ])
      : instancesAccessor,
  );
}

export function writeRegisteredFns() {
  const registeredFns = getRegisteredFns();
  const statements: t.Statement[] = [];
  for (const registeredFn of registeredFns) {
    let fn: t.Statement;
    if (registeredFn.referencesScope || registeredFn.referencedLocals) {
      let params: (t.Identifier | t.Pattern)[];
      let prologue: t.Statement[] | undefined;
      if (registeredFn.referencedLocals) {
        // The scope hop stays inside the returned function: resume may call
        // the factory before its scopes resume (stubs fill in place).
        params = [localsIdentifier];
        if (registeredFn.referencesScope) {
          prologue = [
            t.variableDeclaration("const", [
              t.variableDeclarator(
                scopeIdentifier,
                t.memberExpression(
                  localsIdentifier,
                  t.identifier(getAccessorProp().Owner),
                ),
              ),
            ]),
          ];
        }
      } else {
        params = [scopeIdentifier];
      }
      // A const arrow (unlike a function declaration) lets the minifier fold
      // the factory into its lone `_resume` call site.
      const body = toReturnedFunction(registeredFn.node, prologue);
      fn = t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(registeredFn.id),
          t.arrowFunctionExpression(
            params,
            body.length === 1 && body[0].type === "ReturnStatement"
              ? body[0].argument!
              : t.blockStatement(body),
          ),
        ),
      ]);
    } else if (
      registeredFn.node.type === "FunctionDeclaration" &&
      registeredFn.node.id?.name === registeredFn.id
    ) {
      fn = registeredFn.node;
    } else {
      fn = t.functionDeclaration(
        t.identifier(registeredFn.id),
        registeredFn.node.params as t.FunctionDeclaration["params"],
        registeredFn.node.body.type === "BlockStatement"
          ? registeredFn.node.body
          : t.blockStatement([t.returnStatement(registeredFn.node.body)]),
        registeredFn.node.generator,
        registeredFn.node.async,
      );
    }

    statements.push(fn);
  }

  for (const registeredFn of registeredFns) {
    statements.push(
      t.expressionStatement(
        registerRuntimeValue(
          registeredFn.registryId,
          t.identifier(registeredFn.id),
        ),
      ),
    );
  }

  getProgram().node.body.push(...statements);
}

function toReturnedFunction(rawFn: t.Function, prologue?: t.Statement[]) {
  const fn = simplifyFunction(rawFn);
  if (prologue) {
    if (fn.body.type !== "BlockStatement") {
      fn.body = t.blockStatement([t.returnStatement(fn.body)]);
    }
    fn.body.body.unshift(...prologue);
  }
  return fn.type === "FunctionDeclaration"
    ? [fn, t.returnStatement(fn.id!)]
    : [t.returnStatement(fn)];
}

export function addHTMLEffectCall(section: Section, expr?: t.NodeExtra) {
  const signal = getSignal(section, getReferencedBindings(expr));
  signal.hasHTMLEffect = signal.storesValue = true;
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>,
) {
  const bodyPath = flushInto(path);
  const section = getSectionForBody(bodyPath);
  if (!section) return;

  const body = bodyPath.node.body as t.Statement[];
  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);
  // Whether any node of the section writes a marker, as the same argument
  // shape `_if` and `_await` take: absent when always, `0` when never.
  const nodeReasons = getNodeReasons(section);
  const markerGuard = getWriteGuardForAny(section, nodeReasons, true);
  const sectionReason = section.reason;
  // The client reads the scope's closest branch wherever the server writes
  // state its handlers assign or a subscription for it: with the scope, or with
  // subscriber sets written only for some renders.
  let linkedWithScope = some(section.bindings, isClientAssignedLet);
  let linkReasons: Reasons | undefined;
  forEach(section.referencedClosures, (closure) => {
    if (closure.sources) {
      if (isDynamicClosure(section, closure)) {
        const closureSignal = getSignal(closure.section, closure);
        let identifier =
          htmlDynamicClosureInstancesIdentifier.get(closureSignal);
        if (!identifier) {
          htmlDynamicClosureInstancesIdentifier.set(
            closureSignal,
            (identifier = generateUidIdentifier(
              closureSignal.identifier.name + "__closures",
            )),
          );

          getHTMLSectionStatements(closure.section).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                t.newExpression(t.identifier("Set"), []),
              ),
            ]),
          );
          writeSlot(findSlot(closure, SlotKind.ClosureScopes), identifier);
        }

        const closureIndex = getDynamicClosureIndex(closure, section);
        if (closureIndex) {
          writeSlot(
            findSlot(closure, SlotKind.ClosureSignalIndex, section),
            t.numericLiteral(closureIndex),
          );
        }

        const closureScopesReason = findSlot(
          closure,
          SlotKind.ClosureScopes,
        )?.reason;
        const subscribeArg =
          isGuardedReason(closureScopesReason) &&
          !isSameReason(closureScopesReason, sectionReason)
            ? getExprIfWritten(closure.section, closureScopesReason, identifier)
            : identifier;
        // No call writes the subscriber set: the scope joins none.
        if (subscribeArg) {
          const changeable = isChangeableDynamicClosure(section, closure);
          if (subscribeArg === identifier) {
            linkedWithScope = true;
          } else {
            linkReasons = sourcesUtil.add(linkReasons, closureScopesReason!);
          }
          addWriteScopeBuilder(section, (expr) => {
            const resumeId =
              changeable &&
              t.stringLiteral(
                getResumeRegistryId(section, closure, "subscribe"),
              );
            return callRuntime(
              "_subscribe",
              subscribeArg,
              expr,
              resumeId,
              resumeId && markerGuard,
            );
          });
        }
      }
    }
  });

  // Effects carry no order (CONTEXT.md Effect), so neither this loop's direction
  // nor its place after the section's body holds one.
  for (let i = allSignals.length; i--;) {
    if (allSignals[i].hasHTMLEffect) {
      const signalRefs = allSignals[i].referencedBindings;
      body.push(
        t.expressionStatement(
          callRuntime(
            "_script",
            scopeIdIdentifier,
            t.stringLiteral(getResumeRegistryId(section, signalRefs)),
            markerGuard,
          ),
        ),
      );
    }
  }

  const debug = !isOptimize();
  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const pendingProperties = getScopeProperties(section);
  const scopeProperties: t.ObjectProperty[] = [];
  const ifWritten = (reason: Reason, expr: t.Expression) => {
    if (isSameReason(sectionReason, reason)) return expr;
    return getExprIfWritten(section, reason, expr);
  };

  let debugVars: t.ObjectProperty[] | undefined;
  const writeBinding = (binding: Binding) => {
    const reason = getWriteReason(binding);
    if (!reason) return;
    const accessor = getScopeAccessor(binding);
    pendingProperties.delete(accessor);
    const value = ifWritten(reason, getDeclaredBindingExpression(binding));
    if (value) scopeProperties.push(toObjectProperty(accessor, value));

    if (debug) {
      const { root, access } = getDebugAccess(binding, false, toAccess);
      const locExpr = root.loc && t.stringLiteral(getDebugLoc(root.loc));
      (debugVars ||= []).push(
        toObjectProperty(
          getScopeAccessor(binding),
          root !== binding
            ? t.arrayExpression(
                locExpr
                  ? [t.stringLiteral(root.name + access), locExpr]
                  : [t.stringLiteral(root.name + access)],
              )
            : locExpr || t.numericLiteral(0),
        ),
      );
    }
  };

  forEach(section.bindings, (binding) => {
    if (binding.type !== BindingType.dom) {
      writeBinding(binding);
    }
  });

  if (section.parent) {
    const ownerAccessor = getAccessorProp().Owner;
    const ownerReason = findSectionSlot(section, SlotKind.Owner)?.reason;
    if (ownerReason) {
      pendingProperties.delete(ownerAccessor);
      const owner =
        !getOwnerResumedByMarker(section) &&
        ifWritten(
          ownerReason,
          callRuntime("_scope_with_id", getScopeIdIdentifier(section.parent)),
        );
      if (owner) scopeProperties.push(toObjectProperty(ownerAccessor, owner));
    }
  }

  for (const [key, { expression, reason }] of pendingProperties) {
    const value = ifWritten(reason, expression);
    if (value) scopeProperties.push(toObjectProperty(key, value));
  }

  if (sectionReason) {
    for (const prop of scopeProperties) {
      if (
        prop.key.type === "Identifier" &&
        prop.value.type === "Identifier" &&
        prop.key.name === prop.value.name
      ) {
        prop.shorthand = true;
      }
    }

    const writeScopeArgs: t.Expression[] = [
      scopeIdIdentifier,
      t.objectExpression(scopeProperties),
    ];

    if (debug) {
      writeScopeArgs.push(
        t.stringLiteral(getFile().opts.filenameRelative as string),
        section.loc && section.loc.start.line != null
          ? t.stringLiteral(getDebugLoc(section.loc))
          : t.numericLiteral(0),
      );

      for (const [accessor, varLoc] of getSectionDebugVars(section)) {
        (debugVars ||= []).push(
          toObjectProperty(accessor, t.valueToNode(varLoc)),
        );
      }

      if (debugVars) {
        writeScopeArgs.push(t.objectExpression(debugVars));
      }
    }

    const writeCall = writeScopeBuilder
      ? writeScopeBuilder(callRuntime("_scope", ...writeScopeArgs))
      : callRuntime("_scope", ...writeScopeArgs);
    const write = getExprIfWritten(section, sectionReason, writeCall);
    if (write) body.push(t.expressionStatement(write));
  }

  // The walker places a scope whose marker it visits, so a section that always
  // writes one needs no link; a dynamic marker guards it, none writes it plain.
  if (markerGuard && !isBranchAlwaysMarked(section)) {
    let link: t.Expression | undefined;
    if (section.hasAbortSignal) {
      // An abort signal's effect always ships.
      link = callRuntime("_resume_branch", scopeIdIdentifier);
    } else if (sectionReason && !sourcesUtil.has(nodeReasons, sectionReason)) {
      // The rest ship with the scope write, but where a marker written for the
      // same reason places the scope.
      const guard = linkedWithScope
        ? undefined
        : getWriteGuardForAny(
            section,
            sourcesUtil.difference(linkReasons, nodeReasons),
            true,
          );
      if (guard?.type !== "NumericLiteral") {
        const call = callRuntime("_resume_branch", scopeIdIdentifier);
        link = getExprIfWritten(section, sectionReason, andGuard(guard, call));
      }
    }
    if (link) {
      body.push(
        t.expressionStatement(
          markerGuard.type === "NumericLiteral"
            ? link
            : t.logicalExpression("||", markerGuard, link),
        ),
      );
    }
  }

  const additionalStatements = getHTMLSectionStatements(section);
  if (body.length || additionalStatements.length) {
    body.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(scopeIdIdentifier, callRuntime("_scope_id")),
      ]),
      ...additionalStatements,
    );
  }

  if (debug) {
    forEach(section.bindings, (binding) => {
      if (binding.hoists && binding.type !== BindingType.dom) {
        body.push(
          t.expressionStatement(
            callRuntime("_assert_hoist", getDeclaredBindingExpression(binding)),
          ),
        );
      }
    });
  }

  const returnIdentifier = getSectionReturnValueIdentifier(section);
  if (returnIdentifier !== undefined) {
    body.push(t.returnStatement(returnIdentifier));
  }
}

export function getSetup(section: Section) {
  return getSignals(section).get(undefined);
}

function replaceRenderNode(node: t.Node, signal?: Signal) {
  return (
    replaceAssignedNode(node) ||
    replaceBindingReadNode(node, signal) ||
    replaceRegisteredFunctionNode(node)
  );
}

function replaceEffectNode(node: t.Node) {
  return replaceAssignedNode(node) || replaceBindingReadNode(node);
}

function replaceBindingReadNode(node: t.Node, signal?: Signal) {
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "OptionalMemberExpression": {
      return getReadReplacement(node, signal);
    }
    case "CallExpression":
    case "OptionalCallExpression": {
      const { extra } = node.callee;

      if (extra?.read) {
        const { binding, getter } = extra.read;

        if (binding.type === BindingType.dom && !getter) {
          const replacement = createScopeReadExpression(binding, extra.section);
          return isOptimize()
            ? replacement
            : callRuntime("_el_read", replacement);
        } else if (getter?.hoisted) {
          node.callee = t.callExpression(
            getBindingGetterIdentifier(binding, getter.hoisted),
            [getScopeExpression(extra.section!, getter.hoisted)],
          );
        }
      }
      break;
    }
  }
}

const updateExpressions = new WeakSet<t.Node>();
function replaceAssignedNode(node: t.Node): t.Node | undefined {
  switch (node.type) {
    case "ExpressionStatement": {
      if (
        node.expression.type === "BinaryExpression" &&
        updateExpressions.delete(node.expression)
      ) {
        node.expression = node.expression.left as t.Expression;
      }

      if (
        node.expression.type === "CallExpression" &&
        updateExpressions.delete(node.expression)
      ) {
        node.expression.callee = node.expression
          .arguments[0] as t.MemberExpression;
        node.expression.arguments = [node.expression.arguments[1]];
      }
      break;
    }
    case "UpdateExpression": {
      const { extra } = node.argument;
      if (isAssignedBindingExtra(extra)) {
        // `+` applies `ToNumber` so a string tag variable increments numerically;
        // a bigint one throws either way and is deliberately unsupported here.
        let builtAssignment = getBuildAssignment(extra)?.(
          extra.section,
          t.binaryExpression(
            node.operator === "++" ? "+" : "-",
            t.unaryExpression(
              "+",
              createResolvedReadExpression(extra.read!, extra.section),
            ),
            t.numericLiteral(1),
          ),
        );
        if (builtAssignment) {
          if (!node.prefix) {
            builtAssignment = t.binaryExpression(
              node.operator === "++" ? "-" : "+",
              builtAssignment,
              t.numericLiteral(1),
            );
            updateExpressions.add(builtAssignment);
          }

          return builtAssignment;
        }
      }
      break;
    }
    case "AssignmentExpression":
      switch (node.left.type) {
        case "Identifier": {
          const { extra } = node.left;
          if (isAssignedBindingExtra(extra)) {
            const { operator } = node;
            const shortCircuits =
              operator === "||=" || operator === "&&=" || operator === "??=";
            const readAssigned = () =>
              createResolvedReadExpression(extra.read!, extra.section);
            const builtAssignment = getBuildAssignment(extra)?.(
              extra.section,
              operator === "=" || shortCircuits
                ? node.right
                : t.binaryExpression(
                    operator.slice(0, -1) as t.BinaryExpression["operator"],
                    readAssigned(),
                    node.right,
                  ),
            );

            if (builtAssignment) {
              // Short circuits as the source does, so the setter — and any
              // `valueChange` it calls — is skipped when the read decides.
              return shortCircuits
                ? t.logicalExpression(
                    operator.slice(0, -1) as t.LogicalExpression["operator"],
                    readAssigned(),
                    builtAssignment,
                  )
                : builtAssignment;
            }
          }

          return (
            extra?.assignment &&
            withLeadingComment(node.right, getDebugName(extra.assignment))
          );
        }
        case "ArrayPattern":
        case "ObjectPattern": {
          let params: undefined | t.Identifier[];
          let assignments: undefined | t.Expression[];
          forEachIdentifier(node.left, (id) => {
            const { extra } = id;
            if (isAssignedBindingExtra(extra)) {
              const buildAssignment = getBuildAssignment(extra);
              if (buildAssignment) {
                const uid = generateUid(id.name);
                const builtAssignment = buildAssignment(
                  extra.section,
                  t.identifier(uid),
                );
                if (builtAssignment) {
                  id.name = uid;
                  (params ||= []).push(t.identifier(uid));
                  (assignments ||= []).push(builtAssignment);
                  return;
                }
              }
            }

            if (extra?.assignment) {
              (params ||= []).push(t.identifier(id.name));
            }
          });
          if (assignments || params) {
            const resultId = generateUid("result");
            return t.callExpression(
              t.arrowFunctionExpression(
                [t.identifier(resultId), ...(params || [])],
                t.sequenceExpression([
                  t.assignmentExpression(
                    "=",
                    node.left,
                    t.identifier(resultId),
                  ),
                  ...(assignments || []),
                  t.identifier(resultId),
                ]),
              ),
              [node.right],
            );
          }
          break;
        }
      }
      break;
  }
}

function getBuildAssignment(extra: AssignedBindingExtra) {
  const { assignmentTo, assignment } = extra;
  if (assignmentTo) {
    return (section: Section, value: t.Expression) => {
      const replacement = callRuntime(
        "_call",
        createResolvedReadExpression(extra.changeHandlerRead!, section),
        value,
      );
      updateExpressions.add(replacement);
      return replacement;
    };
  }

  return getSignal(assignment.section, assignment).buildAssignment;
}

const [getRegisteredFns] = createOutputState<
  {
    id: string;
    registryId: string;
    node: t.Function;
    section: Section;
    referencesScope: undefined | boolean;
    referencedLocals: Opt<Binding>;
  }[]
>(() => []);
export function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod": {
      const replacement = registerFnExpression(node);
      return replacement && replaceMethodNode(node, replacement);
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return registerFnExpression(node);
    case "FunctionDeclaration": {
      const replacement = registerFnExpression(node);
      return (
        replacement &&
        t.variableDeclaration("const", [
          t.variableDeclarator(node.id!, replacement),
        ])
      );
    }
  }
}

function registerFnExpression(node: t.Function) {
  const { extra } = node;
  if (isRegisteredFnExtra(extra)) {
    const id = extra.name;
    const referencesScope = extra.referencesScope;
    const referencedLocals = extra.referencedLocalBindingsInFunction;
    getRegisteredFns().push({
      id,
      node,
      registryId: extra.registryId,
      section: extra.section,
      referencesScope,
      referencedLocals,
    });

    if (referencedLocals) {
      // The argument mirrors the locals scope `_resume_locals` serializes.
      const properties: t.ObjectExpression["properties"] = [];
      if (referencesScope) {
        properties.push(
          t.objectProperty(
            t.identifier(getAccessorProp().Owner),
            scopeIdentifier,
          ),
        );
      }
      forEach(referencedLocals, (binding) => {
        properties.push(
          toObjectProperty(
            getLocalsScopeAccessor(binding),
            getDeclaredBindingExpression(binding),
          ),
        );
      });
      return t.callExpression(t.identifier(id), [
        t.objectExpression(properties),
      ]);
    } else if (referencesScope) {
      return t.callExpression(t.identifier(id), [scopeIdentifier]);
    } else {
      return t.identifier(id);
    }
  }
}

function appendBindingKey(name: string, binding: Binding, section: Section) {
  return `${name}_${binding.name}#${binding.section === section ? "" : binding.section.id + ":"}${binding.id}`;
}

// State a resumed handler or effect can assign, which queues the scope's render.
function isClientAssignedLet(binding: Binding) {
  return binding.type === BindingType.let && hasResumableAssignment(binding);
}

function getDebugLoc({ start }: t.SourceLocation) {
  return `${start.line}:${start.column + 1}`;
}
