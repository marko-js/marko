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
  bindingUtil,
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
import { forEachIdentifier } from "./for-each-identifier";
import { isForSelectorValue } from "./for-selector";
import {
  ensureSharedUid,
  generateUid,
  generateUidIdentifier,
} from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-enums";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { isOptimize, isOutputHTML } from "./marko-config";
import { forEach, type Opt, push, reduce, some } from "./optional";
import { getReadReplacement } from "./read-replacement";
import {
  getNodeReasons,
  isConditionalReason,
  isUnconditionalReason,
  type Reason,
} from "./reasons";
import {
  type AssignedBindingExtra,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  hasResumableAssignment,
  isAssignedBindingExtra,
  isRegisteredFnExtra,
} from "./references";
import { callRuntime, registerRuntimeValue } from "./runtime";
import {
  getClosureAccessorLiteral,
  getLocalsScopeAccessor,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
  getSectionInstancesAccessorLiteral,
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
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isDynamicClosure,
  isInParentSection,
  isOptionalBranch,
  type Section,
  sectionUtil,
} from "./sections";
import { replaceMethodNode, simplifyFunction } from "./simplify-fn";
import { findSectionSlot, findSlot, type PlaceSlot, SlotKind } from "./slots";
import { createOutputState, createOutputSectionState } from "./state";
import { toOnlyExpressionOrBlock } from "./to-only-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { getRestPattern, withRestFallback } from "./translate-var";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";
import {
  getExprIfWritten,
  getStatementsIfWritten,
  getWriteGuardForAny,
  getWriteReason,
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
// Structured facts about a branch section's closure hop: what kind of
// branch it is and which node binding (plus branch index) addresses it.
export type ClosureHop =
  | { kind: "if"; nodeBinding: Binding; index: number }
  | { kind: "for"; nodeBinding: Binding };
export const [getSignals] = createOutputSectionState<Map<unknown, Signal>>(
  () => new Map(),
);
const [getClosureSignalBuilder, _setClosureSignalBuilder] =
  createOutputSectionState<closureSignalBuilder | undefined>();
export function setClosureSignalBuilder(
  tag: t.NodePath<t.MarkoTag>,
  hop: ClosureHop,
  build: closureSignalBuilder = (_closure, render) =>
    buildClosureHop(hop, render),
) {
  _setClosureSignalBuilder(getSectionForBody(tag.get("body"))!, build);
}

export function buildClosureHop(hop: ClosureHop, render: t.Expression) {
  const accessor = getScopeAccessorLiteral(hop.nodeBinding, true);
  return hop.kind === "if"
    ? callRuntime("_if_closure", accessor, t.numericLiteral(hop.index), render)
    : callRuntime("_for_closure", accessor, render);
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
  const contentClosures = bindingUtil.filter(
    getDynamicTagContentClosures(bodySection),
    mayBeUnwritten,
  );
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

function mayBeUnwritten(closure: Binding) {
  return !isUnconditionalReason(getWriteReason(closure));
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

// A subscription a section's html renderer makes to the scope it writes. One
// per closure it reads, kept apart so they can follow the write in order:
// nesting them inside it would make a section reading N closures nest N deep.
interface SectionSubscriber {
  subscribers: t.Expression;
  // Built when emitted: a resume id is assigned in the order they are first
  // asked for, so a subscription must not ask before the mount effects did.
  resumeId?: () => t.StringLiteral;
}
const [getSectionSubscribers] = createOutputSectionState<SectionSubscriber[]>(
  () => [],
);
export function addSectionSubscriber(
  section: Section,
  subscribers: t.Expression,
  closure?: Binding,
) {
  getSectionSubscribers(section).push({
    subscribers,
    resumeId:
      closure &&
      (() =>
        t.stringLiteral(getResumeRegisterId(section, closure, "subscribe"))),
  });
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
            referencedBindings.localOf)
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
          const inline =
            member.type === BindingType.derived &&
            !member.aliasOf &&
            !member.propertyAliases.size &&
            member.reads.size === 1 &&
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

        if (closureSignalBuilder && !isDynamicClosure(section, closure)) {
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
                getResumeRegisterId(section, closure, "subscribe"),
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
  if (binding.hasLazyReads) signal.forceStore = true;
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
    findSlot(binding)?.reason ||
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
  signal.forwards = push(signal.forwards, target);
  signal.render.push(
    t.expressionStatement(
      t.callExpression(target.identifier, [
        scopeIdentifier,
        value,
        ...getTranslatedExtraArgs(target),
      ]),
    ),
  );
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
    signal.render.push(
      t.expressionStatement(
        signalHasWork(value.signal)
          ? t.callExpression(value.signal.identifier, [
              scopeIdentifier,
              ...(value.value ? [value.value] : []),
              ...getTranslatedExtraArgs(value.signal),
            ])
          : withLeadingComment(
              value.value!,
              getDebugNames(value.signal.referencedBindings),
            ),
      ),
    );
  }

  forEach(signal.intersections, (intersection) => {
    pushScopeCall(signal.render, intersection.identifier);
  });

  if (isValue && binding.sources) {
    let dynamicClosureArgs: t.Expression[] | undefined;
    let dynamicClosureSignalIdentifier: t.Identifier | undefined;
    forEach(binding.closureSections, (closureSection) => {
      if (isDynamicClosure(closureSection, binding)) {
        if (!dynamicClosureArgs) {
          dynamicClosureArgs = [];
          dynamicClosureSignalIdentifier = generateUidIdentifier(
            signal.identifier.name + "__closure",
          );
          pushScopeCall(signal.render, dynamicClosureSignalIdentifier);
        }

        dynamicClosureArgs.push(getSignal(closureSection, binding).identifier);
      } else {
        pushScopeCall(
          signal.render,
          getSignal(closureSection, binding).identifier,
        );
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

  if (isValue && findSlot(binding)?.reason) {
    signal.storesValue = true;
  }

  if (!signal.storesValue) {
    const call = isValue && getOnlyCall(signal.render);
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
      isValue
        ? [scopeIdentifier, getSignalValueIdentifier(signal)]
        : [scopeIdentifier],
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
    read.props === undefined &&
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
  const statements = (signal[type] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(
      t.isExpression(statement) ? t.expressionStatement(statement) : statement,
    );
  }

  if (!isPure || type === "effect") {
    signal.storesValue = true;
  }
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
    tag.insertBefore(statement);
  } else {
    addStatement(
      "render",
      getSection(tag),
      tag.node.attributes[0]?.value.extra,
      statement,
    );
  }

  tag.remove();
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

  if (
    t.isFunction(value) &&
    value.extra &&
    getReferencedBindingsInFunction(value.extra)
  ) {
    parentSignal.storesValue = true;
  }
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

export function getResumeRegisterId(
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
            getResumeRegisterId(section, signal.referencedBindings),
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
            getResumeRegisterId(section, signal.referencedBindings, "var"),
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
                      getResumeRegisterId(hoistSection, binding, "hoist"),
                    ),
                    ...accessors,
                  )
                : callRuntime("_hoist", ...accessors)
              : callRuntime(
                  "_el",
                  t.stringLiteral(getResumeRegisterId(section, binding)),
                  ...accessors,
                ),
          ),
        ]),
      );
    }
  });
}

function pushInstancesAccessor(section: Section, accessors: t.Expression[]) {
  const instancesAccessor = getSectionInstancesAccessorLiteral(section);
  const { branch } = section;
  // The branches of an `<if>` chain share one slot, so the read checks which renders.
  accessors.push(
    branch?.index !== undefined &&
      Array.isArray(branch.nodeBinding.branchBodies)
      ? t.arrayExpression([
          instancesAccessor,
          t.stringLiteral(
            getAccessorPrefix().ConditionalRenderer +
              getScopeAccessor(branch.nodeBinding),
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
    if (
      registeredFn.referencedBindings ||
      registeredFn.referencesScope ||
      registeredFn.referencedLocals
    ) {
      let params: (t.Identifier | t.Pattern)[];
      let prologue: t.Statement[] | undefined;
      if (registeredFn.referencedLocals) {
        // The scope hop stays inside the returned function: resume may call
        // the factory before its scopes hydrate (stubs fill in place).
        params = [localsIdentifier];
        if (registeredFn.referencedBindings || registeredFn.referencesScope) {
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
          registeredFn.registerId,
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
  let markerGuard = getWriteGuardForAny(section, getNodeReasons(section), true);
  const sectionReason = section.reason;
  forEach(section.referencedClosures, (closure) => {
    // A constant never changes, so nothing subscribes to it.
    if (closure.sources && closure.type !== BindingType.constant) {
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
          isConditionalReason(closureScopesReason) &&
          !isSameReason(closureScopesReason, sectionReason)
            ? getExprIfWritten(closure.section, closureScopesReason, identifier)
            : identifier;
        const changeable = isChangeableDynamicClosure(section, closure);
        addSectionSubscriber(
          section,
          subscribeArg,
          changeable ? closure : undefined,
        );
      }
    }
  });

  const subscribers = getSectionSubscribers(section);
  const resumeClosestBranch =
    !isOptionalBranch(section) &&
    (section.hasAbortSignal ||
      !!section.referencedClosures ||
      (sectionReason && some(section.bindings, isLetBinding)));

  // A guard over several node reasons reads once per subscription, mount
  // effect and branch link; naming it lets a section that reads many closures
  // refer to it instead of reprinting the whole chain each time.
  if (
    markerGuard &&
    t.isLogicalExpression(markerGuard) &&
    subscribers.filter((subscriber) => subscriber.resumeId).length +
      allSignals.filter((signal) => signal.hasHTMLEffect).length +
      (resumeClosestBranch ? 1 : 0) >
      1
  ) {
    const name = ensureSharedUid(`scope${section.id}_guard`, section);
    body.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(t.identifier(name), markerGuard),
      ]),
    );
    markerGuard = t.identifier(name);
  }

  // Mount-effect order is unspecified: resume runs these in reverse
  // signal order, CSR runs the signal graph forward — the two paths differ.
  for (let i = allSignals.length; i--;) {
    if (allSignals[i].hasHTMLEffect) {
      const signalRefs = allSignals[i].referencedBindings;
      body.push(
        t.expressionStatement(
          callRuntime(
            "_script",
            scopeIdIdentifier,
            t.stringLiteral(getResumeRegisterId(section, signalRefs)),
            markerGuard,
          ),
        ),
      );
    }
  }

  const debug = !isOptimize();
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
    scopeProperties.push(
      toObjectProperty(
        accessor,
        ifWritten(reason, getDeclaredBindingExpression(binding)),
      ),
    );

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
      if (!getOwnerResumedByMarker(section)) {
        scopeProperties.push(
          toObjectProperty(
            ownerAccessor,
            ifWritten(
              ownerReason,
              callRuntime(
                "_scope_with_id",
                getScopeIdIdentifier(section.parent),
              ),
            ),
          ),
        );
      }
    }
  }

  for (const [key, { expression, reason }] of pendingProperties) {
    scopeProperties.push(toObjectProperty(key, ifWritten(reason, expression)));
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

    const writeCall = callRuntime("_scope", ...writeScopeArgs);
    const toSubscribe = (
      { subscribers, resumeId }: SectionSubscriber,
      scopeExpr: t.Expression,
    ) => {
      const id = resumeId?.();
      return callRuntime(
        "_subscribe",
        subscribers,
        scopeExpr,
        id,
        id && markerGuard,
      );
    };

    if (subscribers.length > 1) {
      // One statement each, in the order the subscriptions ran nested: the
      // write, then the closures that read the scope.
      const scopeName = ensureSharedUid(`scope${section.id}_write`, section);
      const stmts = getStatementsIfWritten(section, sectionReason, [
        t.variableDeclaration("const", [
          t.variableDeclarator(t.identifier(scopeName), writeCall),
        ]),
        ...subscribers.map((subscriber) =>
          t.expressionStatement(
            toSubscribe(subscriber, t.identifier(scopeName)),
          ),
        ),
      ]);
      if (stmts) body.push(...stmts);
    } else {
      body.push(
        t.expressionStatement(
          getExprIfWritten(
            section,
            sectionReason,
            subscribers.length
              ? toSubscribe(subscribers[0], writeCall)
              : writeCall,
          ),
        ),
      );
    }
  }

  // The walker places a scope whose marker it visits, so a section that always
  // writes one needs no link; a dynamic marker guards it, none writes it plain.
  if (resumeClosestBranch && markerGuard) {
    // An abort signal's effect always ships; a closure subscription only with
    // the scope write, so the link borrows that guard.
    const call = callRuntime("_resume_branch", scopeIdIdentifier);
    const link = section.hasAbortSignal
      ? call
      : getExprIfWritten(section, sectionReason, call);
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
            callRuntime("_assert_hoist", t.identifier(binding.name)),
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
          const replacement = createScopeReadExpression(
            binding,
            extra!.section,
          );
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
              createScopeReadExpression(extra.assignment, extra.section),
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
              createScopeReadExpression(extra.assignment, extra.section);
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

// A pruned change binding (an ancestor is already tracked) reads through the
// nearest kept ancestor's property chain.
function getChangeHandlerRead(
  binding: Binding,
  section: Section,
): t.Expression {
  return binding.pruned && binding.property !== undefined && binding.aliasOf
    ? toMemberExpression(
        getChangeHandlerRead(binding.aliasOf, section),
        binding.property,
        false,
      )
    : createScopeReadExpression(binding, section);
}

function getBuildAssignment(extra: AssignedBindingExtra) {
  const { assignmentTo, assignment } = extra;
  if (assignmentTo) {
    return (section: Section, value: t.Expression) => {
      const replacement = callRuntime(
        "_call",
        getChangeHandlerRead(assignmentTo, section),
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
    registerId: string;
    node: t.Function;
    section: Section;
    referencesScope: undefined | boolean;
    referencedBindings: ReferencedBindings;
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
    const referencedBindings = getReferencedBindingsInFunction(extra);
    const referencedLocals = extra.referencedLocalBindingsInFunction;
    getRegisteredFns().push({
      id,
      node,
      registerId: extra.registerId,
      section: extra.section,
      referencesScope,
      referencedBindings,
      referencedLocals,
    });

    if (referencedLocals) {
      // The argument mirrors the locals scope `_resume_locals` serializes.
      const properties: t.ObjectExpression["properties"] = [];
      if (referencesScope || referencedBindings) {
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
    } else if (referencesScope || referencedBindings) {
      return t.callExpression(t.identifier(id), [scopeIdentifier]);
    } else {
      return t.identifier(id);
    }
  }
}

function appendBindingKey(name: string, binding: Binding, section: Section) {
  return `${name}_${binding.name}#${binding.section === section ? "" : binding.section.id + ":"}${binding.id}`;
}

function isLetBinding(binding: Binding) {
  return binding.type === BindingType.let;
}

function getDebugLoc({ start }: t.SourceLocation) {
  return `${start.line}:${start.column + 1}`;
}
