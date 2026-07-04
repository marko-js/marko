import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import { type AccessorPrefix, AccessorProp } from "../../common/types";
import { getSectionReturnValueIdentifier } from "../core/return";
import { scopeIdentifier } from "../visitors/program";
import { forEachIdentifier } from "./for-each-identifier";
import { isForSelectorValue } from "./for-selector";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-char";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import {
  isOptimize,
  isOutputHTML,
  isPersisted,
  isRegisterEntryBuild,
} from "./marko-config";
import { find, forEach, type Opt, push, some } from "./optional";
import {
  type AssignedBindingExtra,
  type Binding,
  BindingType,
  bindingUtil,
  collapsedIntersectionSource,
  getCanonicalBinding,
  getDebugName,
  getDebugNames,
  getDebugNamesAsIdentifier,
  getDebugScopeAccess,
  getReadReplacement,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getSectionInstancesAccessorLiteral,
  type Getter,
  hasNonConstantPropertyAlias,
  intersectionMeta,
  isAssignedBindingExtra,
  isGlobalBinding,
  isRegisteredFnExtra,
  type ReferencedBindings,
} from "./references";
import { callRuntime } from "./runtime";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import {
  getDynamicClosureIndex,
  getScopeIdIdentifier,
  getSectionForBody,
  isDynamicClosure,
  isImmediateOwner,
  type Section,
  sectionUtil,
} from "./sections";
import { getExprGuardSerialized, getExprIfSerialized } from "./serialize-guard";
import {
  getSerializeReason,
  isReasonDynamic,
  isSameReason,
  type SerializeReason,
} from "./serialize-reasons";
import { simplifyFunction } from "./simplify-fn";
import { createSectionState } from "./state";
import {
  toFirstExpressionOrBlock,
  toParenthesizedExpressionIfNeeded,
} from "./to-first-expression-or-block";
import {
  toMemberExpression,
  toObjectProperty,
  toPropertyName,
} from "./to-property-name";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";

export interface Signal {
  identifier: t.Identifier;
  referencedBindings: ReferencedBindings;
  section: Section;
  build: undefined | (() => t.Expression | undefined);
  register?: boolean;
  /**
   * Overrides the `_var_resume` id when `register` is set. Needed when the
   * default (derived from the referenced bindings' names) is ambiguous, eg
   * conditional signals whose node binding name (`#text`) repeats within a
   * section.
   */
  registerId?: string;
  /**
   * Persisted builds: skip this signal's compute invocation while an update
   * patch applies (the payload delivers the result). Set for await promise
   * signals whose body is request-derived -- the promise expression may
   * live behind a `server import`, and the body's own frame is the
   * resolution.
   */
  updateGuard?: boolean;
  values: Array<{
    signal: Signal;
    value: t.Expression;
  }>;
  intersection: Opt<Signal>;
  render: t.Statement[];
  renderReferencedBindings: ReferencedBindings;
  effect: t.Statement[];
  effectReferencedBindings: ReferencedBindings;
  hasDynamicSubscribers: boolean;
  hasSideEffect: boolean;
  forcePersist: boolean;
  inline: { value: t.Expression } | undefined;
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
export const [getSignals] = createSectionState<Map<unknown, Signal>>(
  "signals",
  () => new Map(),
);
const [getClosureSignalBuilder, _setClosureSignalBuilder] = createSectionState<
  closureSignalBuilder | undefined
>("queue");
export function setClosureSignalBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: closureSignalBuilder,
) {
  _setClosureSignalBuilder(getSectionForBody(tag.get("body"))!, builder);
}

export const [getTryHasPlaceholder, setTryHasPlaceholder] = createSectionState<
  true | undefined
>("tryWithPlaceholder");

// A branch section whose scope ids are guaranteed to ride a resume marker
// carrying the parent scope id whenever its scopes serialize; the client
// links the owner from the marker so `_` is not serialized.
const [getOwnerResumedByMarker, setOwnerResumedByMarker] = createSectionState<
  true | undefined
>("ownerResumedByMarker");
export function setSectionOwnerResumedByMarker(section: Section) {
  setOwnerResumedByMarker(section, true);
}

const [getSerializedAccessors] = createSectionState<
  Map<string, { expression: t.Expression; reason: SerializeReason }>
>("serializedScopeProperties", () => new Map());
export function setSectionSerializedValue(
  section: Section,
  prop: AccessorProp,
  expression: t.Expression,
) {
  const reason = getSerializeReason(section, prop);
  if (reason) {
    getSerializedAccessors(section).set(prop, { expression, reason });
  }
}
export function setBindingSerializedValue(
  section: Section,
  binding: Binding,
  expression: t.Expression,
  prefix?: AccessorPrefix,
) {
  const reason = getSerializeReason(section, binding, prefix);
  if (reason) {
    getSerializedAccessors(section).set(
      (prefix || "") + getScopeAccessor(binding),
      { expression, reason },
    );
  }
}

const nonAnalyzedForceSerializedSection = new WeakSet<Section>();
export function setSerializedValue(
  section: Section,
  key: string,
  expression: t.Expression,
) {
  nonAnalyzedForceSerializedSection.add(section);
  getSerializedAccessors(section).set(key, { expression, reason: true });
}
const [getSectionWriteScopeBuilder, setSectionWriteScopeBuilder] =
  createSectionState<undefined | ((expr: t.Expression) => t.Expression)>(
    "sectionWriteScopeBuilder",
  );
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

export const [getHTMLSectionStatements] = createSectionState<t.Statement[]>(
  "htmlScopeStatements",
  () => [],
);

const [getBindingGetterIdMap] = createSectionState<Map<Binding, t.Identifier>>(
  "bindingGetterIdMap",
  () => new Map(),
);

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

    if (
      referencedBindings.type !== BindingType.local &&
      referencedBindings.section !== section
    ) {
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
        referencedBindings.export
      : !section.parent && getProgram().node.extra.domExports?.setup;

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
        intersection: undefined,
        render: [],
        renderReferencedBindings: undefined,
        effect: [],
        effectReferencedBindings: undefined,
        build: undefined,
        export: !!exportName,
        hasSideEffect: !!(
          referencedBindings &&
          (Array.isArray(referencedBindings) ||
            referencedBindings.type === BindingType.dom ||
            referencedBindings.type === BindingType.let ||
            referencedBindings.section !== section ||
            referencedBindings.closureSections ||
            referencedBindings.hoists)
        ),
        hasDynamicSubscribers: false,
        forcePersist: false,
        inline: undefined,
        extraArgs: undefined,
        prependStatements: undefined,
        buildAssignment: undefined,
      }),
    );

    if (isOutputHTML()) {
      return signal;
    } else if (!referencedBindings) {
      signal.build = () => getSignalFn(signal);
    } else if (Array.isArray(referencedBindings)) {
      const collapseSource =
        collapsedIntersectionSource.get(referencedBindings);
      subscribe(collapseSource || referencedBindings, signal);
      if (collapseSource) {
        const sourceSignal = getSignal(section, collapseSource);
        forEach(referencedBindings, (member) => {
          const memberSignal = getSignal(section, member);
          const inline =
            member.type === BindingType.derived &&
            !member.upstreamAlias &&
            member.reads.size === 1 &&
            sourceSignal.values.find((v) => v.signal === memberSignal);
          if (inline) {
            memberSignal.inline = inline;
          } else {
            memberSignal.hasSideEffect = memberSignal.forcePersist = true;
          }
        });
        signal.build = () => getSignalFn(signal);
      } else {
        signal.build = () => {
          const { id, scopeOffset } = intersectionMeta.get(referencedBindings)!;
          // Promoted `$global` reads (persisted builds) have no client-side
          // value signal, so nothing invokes the join for them during a
          // fresh render window -- they don't count toward the pending
          // gate. (Matched scopes re-render through the queue path, which
          // ignores it.)
          let pending = -1;
          forEach(referencedBindings, (member) => {
            const sources = member.sources;
            if (
              !isPersisted() ||
              !sources?.global ||
              sources.state ||
              sources.param
            ) {
              pending++;
            }
          });
          return callRuntime(
            "_or",
            t.numericLiteral(id),
            getSignalFn(signal),
            scopeOffset || pending !== 1
              ? t.numericLiteral(Math.max(pending, 0))
              : undefined,
            scopeOffset && getScopeAccessorLiteral(scopeOffset, true),
          );
        };
      }
    } else if (
      referencedBindings.section !== section &&
      sectionUtil.has(referencedBindings.closureSections, section)
    ) {
      signal.build = () => {
        const closure = referencedBindings;
        const render = getSignalFn(signal);
        const closureSignalBuilder = getClosureSignalBuilder(section);

        if (closureSignalBuilder && !isDynamicClosure(section, closure)) {
          return closureSignalBuilder(closure, render);
        }

        return callRuntime(
          "_closure_get",
          getScopeAccessorLiteral(closure, true),
          render,
          isImmediateOwner(section, closure)
            ? undefined
            : t.arrowFunctionExpression(
                [scopeIdentifier],
                getScopeExpression(section, closure.section),
              ),
          some(closure.closureSections, underTryPlaceholder)
            ? t.stringLiteral(getResumeRegisterId(section, closure, "pending"))
            : undefined,
        );
      };
    }
  }
  return signal;
}

function underTryPlaceholder(section: Section) {
  let curSection = section.parent;
  while (curSection) {
    if (getTryHasPlaceholder(curSection)) {
      return true;
    }
    curSection = curSection.parent;
  }
  return false;
}

export function initValue(binding: Binding, isLet = false) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  // Keep persisting the scope slot for lazy reads.
  if (binding.forcePersist) signal.forcePersist = true;
  signal.build = () => {
    if (isPureMemberForwarder(binding)) {
      return undefined;
    }

    const fn = getSignalFn(signal);
    const isDirectAlias =
      binding.upstreamAlias &&
      binding.property === undefined &&
      binding.excludeProperties === undefined;
    if (
      !signal.forcePersist &&
      (isDirectAlias || !signal.hasSideEffect || !signalHasStatements(signal))
    ) {
      return fn;
    }

    return callRuntime(
      isLet ? (signal.extraArgs ? "_let_change" : "_let") : "_const",
      getScopeAccessorLiteral(binding, true, isLet),
      fn,
    );
  };

  for (const alias of binding.aliases) {
    if (alias.type !== BindingType.constant) {
      initValue(alias);
    }
  }

  for (const alias of binding.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      initValue(alias);
    }
  }

  return signal;
}

/**
 * True when this value signal's binding is patched by persisted updates
 * (state-free input/param/derived -- the values the server serializes as
 * the update payload), so its compute invocation is skippable while a
 * patch applies.
 */
function isUpdatePatchedValueSignal(signal: Signal) {
  const binding = signal.referencedBindings;
  return (
    binding &&
    !Array.isArray(binding) &&
    (binding.type === BindingType.input ||
      binding.type === BindingType.param ||
      binding.type === BindingType.derived) &&
    !binding.sources?.state
  );
}

export function signalHasStatements(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.forcePersist ||
    signal.render.length ||
    signal.effect.length ||
    signal.values.length ||
    signal.intersection
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
    binding.assignmentSections ||
    isForSelectorValue(binding) ||
    getSerializeReason(binding.section, binding) ||
    getSignal(binding.section, binding).hasSideEffect
  ) {
    return false;
  }

  for (const alias of binding.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      return true;
    }
  }

  return false;
}

function pushMemberForwards(
  renderStatements: t.Statement[],
  value: t.Expression,
  alias: Binding,
) {
  if (isPureMemberForwarder(alias)) {
    for (const [key, child] of alias.propertyAliases) {
      if (child.type !== BindingType.constant) {
        pushMemberForwards(
          renderStatements,
          toMemberExpression(t.cloneNode(value, true), key, alias.nullable),
          child,
        );
      }
    }
  } else {
    const aliasSignal = getSignal(alias.section, alias);
    renderStatements.push(
      t.expressionStatement(
        t.callExpression(aliasSignal.identifier, [
          scopeIdentifier,
          value,
          ...getTranslatedExtraArgs(aliasSignal),
        ]),
      ),
    );
  }
}

export function getSignalFn(signal: Signal): t.Expression {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue = isBinding && binding.section === section;
  const assertsHoists = isValue && binding.hoists && !isOptimize();

  if (isValue) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      if (signalHasStatements(aliasSignal)) {
        if (alias.excludeProperties !== undefined) {
          const aliasId = t.identifier(alias.name);
          let pattern: t.ArrayPattern | t.ObjectPattern;
          if (alias.restOffset) {
            // A shifted array rest must destructure as an array to keep
            // true indices/length, with holes for the leading params.
            pattern = t.arrayPattern(
              new Array<null | t.RestElement>(alias.restOffset)
                .fill(null)
                .concat(t.restElement(aliasId)),
            );
          } else {
            const props: t.ObjectPattern["properties"] = [];
            forEach(alias.excludeProperties, (name) => {
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

            props.push(t.restElement(aliasId));
            pattern = t.objectPattern(props);
          }

          signal.render.push(
            t.expressionStatement(
              t.callExpression(
                t.arrowFunctionExpression(
                  [pattern],
                  t.callExpression(aliasSignal.identifier, [
                    scopeIdentifier,
                    aliasId,
                    ...getTranslatedExtraArgs(aliasSignal),
                  ]),
                ),
                [
                  binding.nullable
                    ? t.logicalExpression(
                        "||",
                        createScopeReadExpression(binding),
                        alias.restOffset
                          ? t.arrayExpression([])
                          : t.objectExpression([]),
                      )
                    : createScopeReadExpression(binding),
                ],
              ),
            ),
          );
        } else {
          signal.render.push(
            t.expressionStatement(
              t.callExpression(aliasSignal.identifier, [
                scopeIdentifier,
                createScopeReadExpression(binding),
                ...getTranslatedExtraArgs(aliasSignal),
              ]),
            ),
          );
        }
      }
    }

    for (const [key, alias] of binding.propertyAliases) {
      if (alias.type !== BindingType.constant) {
        pushMemberForwards(
          signal.render,
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
    if (signalHasStatements(value.signal)) {
      const invocation = t.expressionStatement(
        t.callExpression(value.signal.identifier, [
          scopeIdentifier,
          value.value,
          ...getTranslatedExtraArgs(value.signal),
        ]),
      );
      signal.render.push(
        // Persisted builds skip state-free request-derived compute
        // invocations while an update patch applies: their values are the
        // patch's payload (delivered by the merge; same predicate as
        // `forEachUpdateValueBinding` in update-merges), and the compute
        // may live behind a `server import` -- fresh branches created
        // during an apply must not evaluate it. Client-state and
        // state-mixing computations (excluded here) keep firing. Signals
        // flagged `updateGuard` (await promises over request-derived
        // bodies) opt in explicitly.
        isPersisted() &&
          (value.signal.updateGuard || isUpdatePatchedValueSignal(value.signal))
          ? t.ifStatement(
              t.unaryExpression("!", callRuntime("_updating")),
              invocation,
            )
          : invocation,
      );
    } else {
      signal.render.push(
        t.expressionStatement(
          withLeadingComment(
            value.value,
            getDebugNames(value.signal.referencedBindings),
          ),
        ),
      );
    }
  }

  forEach(signal.intersection, (intersection) => {
    signal.render.push(
      t.expressionStatement(
        t.callExpression(intersection.identifier, [scopeIdentifier]),
      ),
    );
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

          signal.render.push(
            t.expressionStatement(
              t.callExpression(dynamicClosureSignalIdentifier, [
                scopeIdentifier,
              ]),
            ),
          );
        }

        dynamicClosureArgs.push(getSignal(closureSection, binding).identifier);
      } else {
        signal.render.push(
          t.expressionStatement(
            t.callExpression(getSignal(closureSection, binding).identifier, [
              scopeIdentifier,
            ]),
          ),
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
    const effectIdentifier = t.identifier(`${signal.identifier.name}__script`);
    signal.render.push(
      t.expressionStatement(
        t.callExpression(effectIdentifier, [scopeIdentifier]),
      ),
    );
  }

  if (isValue && getSerializeReason(section, binding)) {
    signal.hasSideEffect = true;
  }

  if (!signal.hasSideEffect) {
    if (isValue && signal.render.length === 1) {
      const render = signal.render[0];
      if (render.type === "ExpressionStatement") {
        const { expression } = render;
        if (
          expression.type === "CallExpression" &&
          expression.callee.type === "Identifier" &&
          expression.arguments.length === 2 &&
          expression.arguments[0] === scopeIdentifier &&
          isOwnValueRead(expression.arguments[1], binding as Binding)
        ) {
          // The signal only forwards its scope and value to another signal:
          // `(scope, value) => fn(scope, value)` is equivalent to `fn`.
          return expression.callee;
        }
      }
    }

    return t.arrowFunctionExpression(
      isValue
        ? [scopeIdentifier, getSignalValueIdentifier(signal)]
        : [scopeIdentifier],
      toFirstExpressionOrBlock(signal.render),
    );
  }

  if (signal.render.length === 1) {
    const render = signal.render[0];
    if (render.type === "ExpressionStatement") {
      const { expression } = render;
      if (expression.type === "CallExpression") {
        const args = expression.arguments;
        if (args.length === 1 && args[0] === scopeIdentifier) {
          if (
            expression.callee.type === "MemberExpression" &&
            expression.callee.property.type === "Identifier" &&
            expression.callee.property.name === getAccessorProp().Owner
          ) {
            // Special case closure reads of `IDENTIFIER._`.
            return expression.callee.object;
          }

          return expression.callee as t.Expression;
        }
      }
    }
  }

  return t.arrowFunctionExpression(
    [scopeIdentifier],
    t.blockStatement(signal.render),
  );
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

function subscribe(references: ReferencedBindings, subscriber: Signal) {
  if (references) {
    forEach(references, (binding) => {
      if (binding.type !== BindingType.constant) {
        const source =
          (binding.property === undefined &&
            binding.excludeProperties === undefined &&
            binding.upstreamAlias) ||
          binding;
        const providerSignal = getSignal(subscriber.section, source);
        providerSignal.hasSideEffect = true;
        providerSignal.intersection = push(
          providerSignal.intersection,
          subscriber,
        );
      }
    });
  }
}

export function replaceNullishAndEmptyFunctionsWith0(
  args: (t.Expression | undefined | false)[],
): t.Expression[] {
  const len = args.length;
  let finalLen: undefined | number = undefined;

  for (let i = len; i--; ) {
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
        arg.body = toParenthesizedExpressionIfNeeded(body[0].expression);
      }
    }

    if (finalLen === undefined) {
      finalLen = i + 1;
    }
  }

  args.length = finalLen || 0;
  return args as t.Expression[];
}
export function addStatement(
  type: "render" | "effect",
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
  usedReferences?: ReferencedBindings[] | false,
  isPure?: boolean,
): void {
  referencedBindings = stripOwnGlobalRefs(targetSection, referencedBindings);
  const signal = getSignal(targetSection, referencedBindings);
  const statements = (signal[type] ??= []);
  const add = type === "effect" ? addEffectReferences : addRenderReferences;

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }

  if (usedReferences !== false) {
    if (usedReferences) {
      for (const ref of usedReferences) {
        add(signal, ref);
      }
    } else {
      add(signal, referencedBindings);
    }
  }

  if (!isPure || type === "effect") {
    signal.hasSideEffect = true;
  }
}

function addEffectReferences(
  signal: Signal,
  referencedBindings: ReferencedBindings,
) {
  signal.effectReferencedBindings = bindingUtil.union(
    signal.effectReferencedBindings,
    referencedBindings,
  );
}

function addRenderReferences(
  signal: Signal,
  referencedBindings: ReferencedBindings,
) {
  signal.renderReferencedBindings = bindingUtil.union(
    signal.renderReferencedBindings,
    referencedBindings,
  );
}

// Promoted `$global` bindings (persisted option) have no client-side value
// application chain: reads stay live member accesses on the global object,
// so statements/values referencing only them run once at setup, exactly like
// unpromoted `$global` reads today. Cross-section reads keep the closure
// path and mixed intersections keep their `_or` signal.
function stripOwnGlobalRefs(
  section: Section,
  refs: ReferencedBindings,
): ReferencedBindings {
  if (refs) {
    if (Array.isArray(refs)) {
      if (
        !refs.some(
          (binding) => binding.section !== section || !isGlobalBinding(binding),
        )
      ) {
        return undefined;
      }
    } else if (refs.section === section && isGlobalBinding(refs)) {
      return undefined;
    }
  }
  return refs;
}

export function addValue(
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  signal: Signal,
  value: t.Expression,
) {
  referencedBindings = stripOwnGlobalRefs(targetSection, referencedBindings);
  const parentSignal = getSignal(targetSection, referencedBindings);
  addRenderReferences(parentSignal, referencedBindings);
  parentSignal.values.push({
    signal,
    value,
  });

  if (
    (value.extra as t.FunctionExtra | undefined)?.referencedBindingsInFunction
  ) {
    parentSignal.hasSideEffect = true;
  }
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
  let name = "";
  if (referencedBindings) {
    if (typeof referencedBindings === "string") {
      name += `_${referencedBindings}`;
    } else if (Array.isArray(referencedBindings)) {
      for (const ref of referencedBindings) {
        name += `_${ref.name}`;
      }
    } else {
      name += `_${referencedBindings.name}`;
    }
  }
  return getTemplateId(
    markoOpts,
    filename as string,
    `${section.id}${name}${type ? "/" + type : ""}`,
  );
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

    forEach(signal.intersection, writeSignal);

    let effectDeclarator: t.VariableDeclarator | undefined;
    if (signal.effect.length) {
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = t.identifier(
        `${signal.identifier.name}__script`,
      );
      const effectFn = t.arrowFunctionExpression(
        [scopeIdentifier],
        toFirstExpressionOrBlock(signal.effect),
      );
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        // Persisted builds skip setup-time effect queueing during update
        // applies -- fresh-branch wiring comes from payload effect
        // entries instead (running both would double-bind). Register
        // builds keep that behavior but must NOT re-register the id: the
        // main module registered it, and payload entries must keep
        // resolving the copies resume wired.
        isRegisterEntryBuild()
          ? callRuntime("_script_shared", effectFn)
          : callRuntime(
              isPersisted() ? "_script_update" : "_script",
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

      if (
        !value ||
        (!signal.register &&
          t.isFunction(value) &&
          t.isBlockStatement(value.body) &&
          !value.body.body.length)
      ) {
        return;
      }

      if (t.isCallExpression(value)) {
        replaceNullishAndEmptyFunctionsWith0(value.arguments as t.Expression[]);
      }

      if (signal.register) {
        value = callRuntime(
          "_var_resume",
          t.stringLiteral(
            signal.registerId ??
              getResumeRegisterId(section, signal.referencedBindings, "var"),
          ),
          value,
        );
      }

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
        let currentSection: Section | undefined = binding.section;
        while (currentSection && currentSection !== hoistSection) {
          const parentSection: Section | undefined = currentSection.parent;
          if (parentSection) {
            accessors.push(getSectionInstancesAccessorLiteral(currentSection)!);
          }
          currentSection = parentSection;
        }
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

export function writeRegisteredFns() {
  const registeredFns = registeredFnsForProgram.get(getProgram().node);
  const statements: t.Statement[] = [];
  if (registeredFns) {
    for (const registeredFn of registeredFns) {
      let fn: t.FunctionDeclaration;
      if (registeredFn.referencedBindings || registeredFn.referencesScope) {
        fn = t.functionDeclaration(
          t.identifier(registeredFn.id),
          [scopeIdentifier],
          t.blockStatement(toReturnedFunction(registeredFn.node)),
        );
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

    // Register builds keep the declarations (setups reference them) but
    // never re-register: registry resolutions (payload effect entries,
    // change handlers) must keep hitting the main module's copies, whose
    // module-scope state resume wired.
    if (!isRegisterEntryBuild()) {
      for (const registeredFn of registeredFns) {
        statements.push(
          t.expressionStatement(
            callRuntime(
              "_resume",
              t.stringLiteral(registeredFn.registerId),
              t.identifier(registeredFn.id),
            ),
          ),
        );
      }
    }

    getProgram().node.body.push(...statements);
  }
}

function toReturnedFunction(rawFn: t.Function) {
  const fn = simplifyFunction(rawFn);
  return fn.type === "FunctionDeclaration"
    ? [fn, t.returnStatement(fn.id!)]
    : [t.returnStatement(fn)];
}

export function addHTMLEffectCall(
  section: Section,
  referencedBindings?: ReferencedBindings,
) {
  // TODO: this should not add an undefined statement.
  addStatement("effect", section, referencedBindings, undefined as any, false);
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
) {
  const section = getSectionForBody(path);
  if (!section) return;

  const body = path.node.body as t.Statement[];
  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);
  const sectionSerializeReason = nonAnalyzedForceSerializedSection.has(section)
    ? true
    : section.serializeReason;
  // Under the `persisted` option, spine emission (scope writes, owner links,
  // structural bookkeeping) gates on any reason bit so persisted-only renders
  // keep an addressable scope tree, while binding values stay gated on the
  // stateful bit and are elided (updates always supply fresh values).
  const exprSpineSerialized = isPersisted()
    ? getExprGuardSerialized
    : getExprIfSerialized;
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
          setBindingSerializedValue(
            closure.section,
            closure,
            identifier,
            getAccessorPrefix().ClosureScopes,
          );
        }

        const closureIndex = getDynamicClosureIndex(closure, section);
        if (closureIndex) {
          setBindingSerializedValue(
            section,
            closure,
            t.numericLiteral(closureIndex),
            getAccessorPrefix().ClosureSignalIndex,
          );
        }

        if (underTryPlaceholder(section)) {
          const reason = getSerializeReason(section);
          if (reason) {
            getHTMLSectionStatements(section).push(
              t.expressionStatement(
                exprSpineSerialized(
                  section,
                  reason,
                  callRuntime(
                    "_script",
                    getScopeIdIdentifier(section),
                    t.stringLiteral(
                      getResumeRegisterId(section, closure, "pending"),
                    ),
                  ),
                ),
              ),
            );
          }
        } else {
          const closureScopesReason = getSerializeReason(
            closure.section,
            closure,
            getAccessorPrefix().ClosureScopes,
          );
          const subscribeArg =
            isReasonDynamic(closureScopesReason) &&
            !isSameReason(closureScopesReason, sectionSerializeReason)
              ? exprSpineSerialized(
                  closure.section,
                  closureScopesReason,
                  identifier,
                )
              : identifier;
          addWriteScopeBuilder(section, (expr) =>
            callRuntime("_subscribe", subscribeArg, expr),
          );
        }
      }
    }
  });

  for (let i = allSignals.length; i--; ) {
    if (allSignals[i].effect.length) {
      const signalRefs = allSignals[i].referencedBindings;
      body.push(
        t.expressionStatement(
          callRuntime(
            "_script",
            scopeIdIdentifier,
            t.stringLiteral(getResumeRegisterId(section, signalRefs)),
          ),
        ),
      );
    }
  }

  const debug = !isOptimize();
  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const serializedLookup = getSerializedAccessors(section);
  const serializedProperties: t.ObjectProperty[] = [];
  const ifSerialized = (reason: SerializeReason, expr: t.Expression) => {
    if (isSameReason(sectionSerializeReason, reason)) return expr;
    return exprSpineSerialized(section, reason, expr);
  };
  // Binding values are gated by source class under `persisted` (see
  // `getExprIfSerialized`): state-sourced values serialize for stateful
  // resume but never ride update patches; request-derived values serialize
  // in update renders (they are the payload) but not in initial persisted
  // renders. The same-reason hoisting shortcut is skipped -- the section
  // gate is spine-class and would leak values.
  const ifSerializedValue = (
    binding: Binding,
    reason: SerializeReason,
    expr: t.Expression,
  ) =>
    isPersisted()
      ? getExprIfSerialized(section, reason, expr, binding.sources)
      : ifSerialized(reason, expr);

  let debugVars: t.ObjectProperty[] | undefined;
  const writeSerializedBinding = (binding: Binding) => {
    const reason = getSerializeReason(section, binding);
    if (!reason) return;
    // Promoted `$global` bindings (persisted option) never serialize values:
    // client reads stay member accesses on the live global object, which
    // serializes through the existing serialized-globals channel.
    if (binding.noSerialize || isGlobalBinding(binding)) {
      serializedLookup.delete(getScopeAccessor(binding));
      return;
    }
    const accessor = getScopeAccessor(binding);
    serializedLookup.delete(accessor);
    let expr: t.Expression = getDeclaredBindingExpression(binding);
    if (binding.noSerializeProperties) {
      const props: t.ObjectExpression["properties"] = [t.spreadElement(expr)];
      forEach(binding.noSerializeProperties, (prop) => {
        props.push(toObjectProperty(prop, t.identifier("undefined")));
      });
      expr = t.objectExpression(props);
    }
    // Undefined means the value provably never serializes (purely
    // global-sourced reason under the persisted option).
    const serializedValue = ifSerializedValue(binding, reason, expr);
    if (serializedValue) {
      serializedProperties.push(toObjectProperty(accessor, serializedValue));
    }

    if (debug) {
      const { root, access } = getDebugScopeAccess(binding);
      const locExpr =
        root.loc &&
        t.stringLiteral(`${root.loc.start.line}:${root.loc.start.column + 1}`);
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
    if (
      binding.type !== BindingType.dom &&
      binding.type !== BindingType.local
    ) {
      writeSerializedBinding(binding);
    }
  });

  forEach(section.referencedLocalClosures, writeSerializedBinding);

  if (section.parent) {
    const ownerAccessor = getAccessorProp().Owner;
    const ownerReason = getSerializeReason(section, ownerAccessor);
    if (ownerReason) {
      serializedLookup.delete(ownerAccessor);
      if (!getOwnerResumedByMarker(section)) {
        serializedProperties.push(
          toObjectProperty(
            ownerAccessor,
            ifSerialized(
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

  for (const [key, { expression, reason }] of serializedLookup) {
    serializedProperties.push(
      toObjectProperty(key, ifSerialized(reason, expression)),
    );
  }

  if (sectionSerializeReason) {
    for (const prop of serializedProperties) {
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
      t.objectExpression(serializedProperties),
    ];

    if (debug) {
      writeScopeArgs.push(
        t.stringLiteral(path.hub.file.opts.filenameRelative as string),
        section.loc && section.loc.start.line != null
          ? t.stringLiteral(
              `${section.loc.start.line}:${section.loc.start.column + 1}`,
            )
          : t.numericLiteral(0),
      );

      if (debugVars) {
        writeScopeArgs.push(t.objectExpression(debugVars));
      }
    }

    body.push(
      t.expressionStatement(
        exprSpineSerialized(
          section,
          sectionSerializeReason,
          writeScopeBuilder
            ? writeScopeBuilder(callRuntime("_scope", ...writeScopeArgs))
            : callRuntime("_scope", ...writeScopeArgs),
        ),
      ),
    );
  }

  const resumeClosestBranch =
    !section.isBranch &&
    (section.hasAbortSignal ||
      !!section.referencedClosures ||
      !!find(section.bindings, (binding) => binding.type === BindingType.let));

  if (resumeClosestBranch) {
    body.push(
      t.expressionStatement(callRuntime("_resume_branch", scopeIdIdentifier)),
    );
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
  return section.hoistedTo
    ? getSignal(section, undefined)
    : getSignals(section).get(undefined);
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
    case "CallExpression": {
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
        let builtAssignment = getBuildAssignment(extra)?.(
          extra.section,
          t.binaryExpression(
            node.operator === "++" ? "+" : "-",
            createScopeReadExpression(extra.assignment, extra.section),
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
          return (
            (isAssignedBindingExtra(extra) &&
              getBuildAssignment(extra)?.(
                extra.section,
                node.operator === "="
                  ? node.right
                  : t.binaryExpression(
                      node.operator.slice(
                        0,
                        -1,
                      ) as t.BinaryExpression["operator"],
                      createScopeReadExpression(
                        extra.assignment,
                        extra.section,
                      ),
                      node.right,
                    ),
              )) ||
            (extra?.assignment &&
              withLeadingComment(node.right, getDebugName(extra.assignment)))
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
      let scopeRead: t.Expression;
      if (assignmentTo.pruned) {
        // The change binding was pruned because an ancestor binding is
        // already tracked. Read the change handler via property chain
        // from the nearest non-pruned ancestor.
        let cur = assignmentTo;
        const props: string[] = [];
        while (cur.pruned && cur.property !== undefined && cur.upstreamAlias) {
          props.push(cur.property);
          cur = cur.upstreamAlias;
        }
        scopeRead = createScopeReadExpression(cur, section);
        for (let i = props.length; i--; ) {
          scopeRead = toMemberExpression(scopeRead, props[i], false);
        }
      } else {
        scopeRead = createScopeReadExpression(assignmentTo, section);
      }
      const replacement = callRuntime("_call", scopeRead, value);
      updateExpressions.add(replacement);
      return replacement;
    };
  }

  return getSignal(assignment.section, assignment).buildAssignment;
}

const registeredFnsForProgram = new WeakMap<
  t.Program,
  {
    id: string;
    registerId: string;
    node: t.Function;
    section: Section;
    referencesScope: undefined | boolean;
    referencedBindings: ReferencedBindings;
  }[]
>();
export function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.classProperty(node.key, replacement);
    }
    case "ClassPrivateMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.classPrivateProperty(node.key, replacement);
    }
    case "ObjectMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.objectProperty(node.key, replacement);
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression": {
      return getRegisteredFnExpression(node);
    }
    case "FunctionDeclaration": {
      const replacement = getRegisteredFnExpression(node);
      if (replacement) {
        return t.variableDeclaration("const", [
          t.variableDeclarator(node.id!, replacement),
        ]);
      }
      break;
    }
  }
}

function getRegisteredFnExpression(node: t.Function) {
  const { extra } = node;
  if (isRegisteredFnExtra(extra)) {
    const id = extra.name;
    const referencesScope = extra.referencesScope;
    const referencedBindings = extra.referencedBindingsInFunction;
    let registeredFns = registeredFnsForProgram.get(getProgram().node);
    if (!registeredFns) {
      registeredFnsForProgram.set(getProgram().node, (registeredFns = []));
    }

    registeredFns.push({
      id,
      node,
      registerId: extra.registerId,
      section: extra.section,
      referencesScope,
      referencedBindings,
    });

    if (referencesScope || referencedBindings) {
      return t.callExpression(t.identifier(id), [scopeIdentifier]);
    } else {
      return t.identifier(id);
    }
  }
}
