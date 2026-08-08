import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import { type AccessorPrefix, AccessorProp } from "../../common/types";
import { getSectionReturnValueIdentifier } from "../core/return";
import { localsIdentifier, scopeIdentifier } from "../visitors/program";
import { forEachIdentifier } from "./for-each-identifier";
import { isForSelectorValue } from "./for-selector";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-enums";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { isOptimize, isOutputHTML, isPersisted } from "./marko-config";
import { find, forEach, type Opt, push, toArray } from "./optional";
import {
  getPatchFillBindings,
  getPatchFillKey,
  hasUnfillablePatchReads,
  inClientOwnedStructure,
  isPatchCaptureSection,
  isPatchEffectBinding,
  isPatchFillBinding,
} from "./persisted";
import {
  type AssignedBindingExtra,
  type Binding,
  BindingType,
  collapsedIntersectionSource,
  getCanonicalBinding,
  getClosureAccessorId,
  getDebugName,
  getDebugNames,
  getDebugNamesAsIdentifier,
  getDebugScopeAccess,
  getPrefixedScopeAccessor,
  getReadReplacement,
  getLocalsScopeAccessor,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getSectionInstancesAccessorLiteral,
  type Getter,
  hasNonConstantPropertyAlias,
  intersectionMeta,
  isAssignedBindingExtra,
  isRegisteredFnExtra,
  mergeGlobalReads,
  type ReferencedBindings,
} from "./references";
import { callRuntime } from "./runtime";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import {
  getDynamicClosureIndex,
  getScopeIdIdentifier,
  getSectionForBody,
  isDirectClosure,
  isDynamicClosure,
  isImmediateOwner,
  type Section,
  sectionUtil,
} from "./sections";
import {
  getExprIfSerialized,
  getOwnershipGuard,
  scopeReasonIdentifier,
} from "./serialize-guard";
import {
  getSerializeReason,
  getSerializeSourcesForRef,
  isReasonDynamic,
  isSameReason,
  type SerializeReason,
} from "./serialize-reasons";
import { isShellDropped } from "./shell";
import { simplifyFunction } from "./simplify-fn";
import { createSectionState } from "./state";
import { toFirstExpressionOrBlock } from "./to-first-expression-or-block";
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
  // Other emitted statements reference this signal's identifier directly (eg
  // the `_var` setup call), so even an empty signal keeps its declaration.
  referenced?: boolean;
  values: Array<{
    signal: Signal;
    value: t.Expression;
  }>;
  intersection: Opt<Signal>;
  /** Signals this one forwards into: they must declare first when the
   * forward simplifies to a bare, eagerly evaluated reference. */
  forwards: Opt<Signal>;
  /** Runs before `render`: registrations (eg `_var`) that an earlier tag's
   * synchronous `_return` may reach before the registering tag's own setup. */
  prepare: t.Statement[];
  render: t.Statement[];
  effect: t.Statement[];
  hasHTMLEffect: boolean;
  globalEffectReads: true | Set<string> | undefined;
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

// A branch section whose scope ids ride a resume marker carrying the parent scope
// id when its scopes serialize, so the client links the owner and `_` is not serialized.
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
    if (prefix === undefined) {
      getSerializedAccessors(section).set(getScopeAccessor(binding), {
        expression,
        reason,
      });
    } else {
      const accessor = getPrefixedScopeAccessor(binding, prefix);
      getSerializedAccessors(section).set(accessor, { expression, reason });
      // Name the change handler slot after the author's binding; structural
      // prefixed slots are described generically by the serializer instead.
      if (!isOptimize() && prefix === getAccessorPrefix().TagVariableChange) {
        const { root, access } = getDebugScopeAccess(binding);
        setSectionDebugVar(
          section,
          accessor,
          `${root.name + access}Change`,
          root.loc,
        );
      }
    }
  }
}

const [getSectionDebugVars] = createSectionState<
  Map<string, [name: string, loc?: string]>
>("sectionDebugVars", () => new Map());
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
      loc ? [name, `${loc.start.line}:${loc.start.column + 1}`] : [name],
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

// Input props this section renders as fed renderers: a patch of the
// section only applies faithfully while they are nullish. Translate
// scratch (recorded by the patch assert), never section metadata.
const [getOpaqueRenderProps, setOpaqueRenderProps] = createSectionState<
  string[] | undefined
>("opaqueRenderProps");

export function addOpaqueRenderProp(section: Section, prop: string) {
  const props = getOpaqueRenderProps(section);
  if (!props) {
    setOpaqueRenderProps(section, [prop]);
  } else if (!props.includes(prop)) {
    props.push(prop);
  }
}

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
        forwards: undefined,
        prepare: [],
        render: [],
        effect: [],
        hasHTMLEffect: false,
        globalEffectReads: undefined,
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
          return callRuntime(
            "_or",
            t.numericLiteral(id),
            getSignalFn(signal),
            scopeOffset || referencedBindings.length > 2
              ? t.numericLiteral(referencedBindings.length - 1)
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
          // Optimized builds pass the reserved closure accessor id.
          isOptimize()
            ? t.numericLiteral(getClosureAccessorId(closure))
            : getScopeAccessorLiteral(closure, true),
          render,
          isImmediateOwner(section, closure)
            ? undefined
            : t.arrowFunctionExpression(
                [scopeIdentifier],
                getScopeExpression(section, closure.section),
              ),
          // Match the HTML registration, which is gated on this subscriber
          // section (writeHTMLResumeStatements); keying on any sibling closure
          // section would ship a pending id that nothing looks up.
          underTryPlaceholder(section)
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

export function signalHasStatements(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.forcePersist ||
    signal.prepare.length ||
    signal.render.length ||
    signal.effect.length ||
    signal.hasHTMLEffect ||
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
    const aliasSignal = getSignal(alias.section, alias);
    signal.forwards = push(signal.forwards, aliasSignal);
    signal.render.push(
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
        signal.forwards = push(signal.forwards, aliasSignal);
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
    if (signalHasStatements(value.signal)) {
      const invocation = t.expressionStatement(
        t.callExpression(value.signal.identifier, [
          scopeIdentifier,
          value.value,
          ...getTranslatedExtraArgs(value.signal),
        ]),
      );
      signal.render.push(invocation);
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

  const render = signal.prepare.length
    ? signal.prepare.concat(signal.render)
    : signal.render;

  if (!signal.hasSideEffect) {
    if (isValue && render.length === 1) {
      const first = render[0];
      if (first.type === "ExpressionStatement") {
        const { expression } = first;
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
      toFirstExpressionOrBlock(render),
    );
  }

  if (render.length === 1) {
    const first = render[0];
    if (first.type === "ExpressionStatement") {
      const { expression } = first;
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

  return t.arrowFunctionExpression([scopeIdentifier], t.blockStatement(render));
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
export function addStatement(
  type: "prepare" | "render" | "effect",
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
  isPure?: boolean,
): void {
  const signal = getSignal(targetSection, referencedBindings);
  const statements = (signal[type] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }

  if (!isPure || type === "effect") {
    signal.hasSideEffect = true;
  }
}

export function addValue(
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  signal: Signal,
  value: t.Expression,
) {
  const parentSignal = getSignal(targetSection, referencedBindings);
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

function buildResumeRegisterKey(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  // Every segment is self-delimiting (`#id` per binding, `*` for string
  // kinds), so same-named bindings and `_`-joined names cannot collide.
  let name = "";
  if (referencedBindings) {
    if (typeof referencedBindings === "string") {
      name += `*${referencedBindings}`;
    } else if (Array.isArray(referencedBindings)) {
      for (const ref of referencedBindings) {
        name += `_${ref.name}#${ref.id}`;
      }
    } else {
      name += `_${referencedBindings.name}#${referencedBindings.id}`;
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
      // Eagerness is judged BEFORE wrappers (`_var_resume`/fill wraps keep
      // their argument eager): a built bare identifier references its
      // forward target at module evaluation.
      const buildsEagerForward = t.isIdentifier(value);

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
        replaceNullishAndEmptyFunctionsWith0(value.arguments as t.Expression[]);
      }

      // Fill registration rides the intersection's own declaration, so
      // tree-shaking keeps it exactly when the intersection is retained.
      if (isPersisted()) {
        if (Array.isArray(signal.referencedBindings)) {
          for (const member of signal.referencedBindings) {
            if (isPatchFillBinding(member)) {
              let helper: "_fill_join" | "_fill_join_if" | "_fill_join_for" =
                "_fill_join";
              let hopExprs: t.Expression[] = [];
              if (member.section !== signal.section) {
                // Each branch's closure builder is the source of truth
                // for its hop; deeper reads compose the chain.
                const hopArgs: t.Expression[][] = [];
                for (
                  let hopSection: Section | undefined = signal.section;
                  hopSection && hopSection !== member.section;
                  hopSection = hopSection.parent
                ) {
                  const hop = getClosureSignalBuilder(hopSection)?.(
                    member,
                    t.numericLiteral(0),
                  );
                  if (!hop || !t.isCallExpression(hop)) {
                    throw new Error(
                      "Marko: expected a branch closure builder for a patch fill read.",
                    );
                  }
                  // 3 args is `_if_closure(accessor, index, render)`;
                  // loop forms redispatch as `_for_closure` (all items).
                  const args = hop.arguments as t.Expression[];
                  hopArgs.push(
                    args.length === 3 ? [args[0], args[1]] : [args[0]],
                  );
                }
                const conditional = hopArgs[0].length === 2;
                if (
                  hopArgs.every((args) => (args.length === 2) === conditional)
                ) {
                  // Homogeneous chains flatten onto the per-kind helper,
                  // owner-first: the runtime folds trailing hops outward.
                  helper = conditional ? "_fill_join_if" : "_fill_join_for";
                  hopExprs = hopArgs.reverse().flat();
                } else {
                  // Mixed chains compile a dispatch builder: the arrow
                  // pulls in only the closure kinds its chain uses.
                  const joinId = generateUidIdentifier("join");
                  let dispatch: t.Expression = joinId;
                  for (const args of hopArgs) {
                    dispatch =
                      args.length === 2
                        ? callRuntime("_if_closure", args[0], args[1], dispatch)
                        : callRuntime("_for_closure", args[0], dispatch);
                  }
                  hopExprs = [t.arrowFunctionExpression([joinId], dispatch)];
                }
              }
              value = callRuntime(
                helper,
                t.stringLiteral(getPatchFillKey(member)),
                getScopeAccessorLiteral(member, true),
                value,
                ...hopExprs,
              );
            }
          }
        } else if (
          signal.referencedBindings &&
          !Array.isArray(signal.referencedBindings) &&
          !signal.referencedBindings.sources?.state &&
          inClientOwnedStructure(signal.section) &&
          isPatchFillBinding(signal.referencedBindings) &&
          signal.section !== signal.referencedBindings.section &&
          isBranchChainTo(signal.section, signal.referencedBindings.section) &&
          hasDirectRenderedRead(signal.referencedBindings, signal.section)
        ) {
          // Inside client-owned structure a lone closure over a server
          // fill IS the delivery channel: it registers the join itself.
          const closureShape =
            t.isCallExpression(value) &&
            t.isIdentifier(value.callee) &&
            value.callee.name;
          if (
            closureShape !== "_if_closure" &&
            closureShape !== "_for_closure" &&
            closureShape !== "_closure_get"
          ) {
            throw new Error(
              "Marko: expected a branch closure shape for a client-owned fill read.",
            );
          }
          value =
            closureShape === "_closure_get"
              ? // Deep closure positions reassemble the indexed composite via a
                // shared per-key table, selected by the serialized index.
                callRuntime(
                  "_fill_join_closure",
                  t.stringLiteral(getPatchFillKey(signal.referencedBindings)),
                  getScopeAccessorLiteral(signal.referencedBindings, true),
                  value,
                  t.numericLiteral(
                    getDynamicClosureIndex(
                      signal.referencedBindings,
                      signal.section,
                    ),
                  ),
                )
              : callRuntime(
                  "_fill_join",
                  t.stringLiteral(getPatchFillKey(signal.referencedBindings)),
                  getScopeAccessorLiteral(signal.referencedBindings, true),
                  value,
                );
        } else if (
          signal.referencedBindings &&
          isPatchFillBinding(signal.referencedBindings) &&
          signal.section === signal.referencedBindings.section
        ) {
          // Only the binding's own declaration registers as the fill (its
          // downstream reaches closures in child sections), fused into the
          // `_let`/`_const` call every fill declares with.
          if (
            !t.isCallExpression(value) ||
            !t.isIdentifier(value.callee) ||
            (value.callee.name !== "_let" &&
              value.callee.name !== "_let_change" &&
              value.callee.name !== "_const")
          ) {
            throw new Error(
              "Marko: expected a _let or _const declaration for a patch fill binding.",
            );
          }
          value = callRuntime(
            ("_fill" + value.callee.name) as
              | "_fill_let"
              | "_fill_let_change"
              | "_fill_const",
            t.stringLiteral(getPatchFillKey(signal.referencedBindings)),
            ...(value.arguments as t.Expression[]),
          );
        } else if (
          signal.referencedBindings &&
          !Array.isArray(signal.referencedBindings) &&
          !!signal.referencedBindings.sources?.state &&
          signal.section.isBranch &&
          isPatchCaptureSection(signal.section) &&
          isDirectClosure(signal.section, signal.referencedBindings) &&
          !isShellDropped(signal.section) &&
          !sectionHasServerEffect(signal.section)
        ) {
          // A direct state closure anchors its construct render on itself:
          // shaken with the signal, and a construct then fails closed.
          value = callRuntime(
            "_resume_init",
            t.stringLiteral(
              getResumeRegisterId(
                signal.section,
                signal.referencedBindings,
                "init",
              ),
            ),
            value,
          );
        }
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

// Whether every hop to `owner` dispatches from the owner scope: branches
// always; inside client-owned, content sections too (lexical owners).
function isBranchChainTo(section: Section, owner: Section) {
  const clientOwned = inClientOwnedStructure(section);
  while (section !== owner) {
    if ((!section.isBranch && !clientOwned) || !section.parent) return false;
    section = section.parent;
  }
  return true;
}

// A lone read renders through the closure itself; intersections render
// through their own self-registering signals (over-counting is safe).
function hasDirectRenderedRead(binding: Binding, section: Section) {
  for (const read of binding.reads) {
    if (
      !read.isEffect &&
      read.section === section &&
      !Array.isArray(read.referencedBindings)
    ) {
      return true;
    }
  }
  return false;
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
            accessors.push(getSectionInstancesAccessorLiteral(currentSection));
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
          callRuntime(
            "_resume",
            t.stringLiteral(registeredFn.registerId),
            t.identifier(registeredFn.id),
          ),
        ),
      );
    }

    getProgram().node.body.push(...statements);
  }
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

export function addHTMLEffectCall(
  section: Section,
  referencedBindings?: ReferencedBindings,
  globalReads?: true | Set<string>,
) {
  const signal = getSignal(section, referencedBindings);
  signal.hasHTMLEffect = signal.hasSideEffect = true;
  if (globalReads) {
    signal.globalEffectReads = mergeGlobalReads(
      signal.globalEffectReads,
      globalReads,
    );
  }
}

function toSequenceExpression(exprs: t.Expression[]) {
  return exprs.length === 1 ? exprs[0] : t.sequenceExpression(exprs);
}

// A global-reading effect observes the reserved root globals stamp, so
// its section ships the effect patcher even without effect-read bindings.
export function sectionHasGlobalEffect(section: Section) {
  for (const signal of getSignals(section).values()) {
    if (signal.globalEffectReads) return true;
  }
  return false;
}

// An effect read the wire cannot keep current (unfillable params, global-
// derived bindings) blocks constructs; direct `$global` reads re-queue.
export function sectionHasServerEffect(section: Section) {
  for (const signal of getSignals(section).values()) {
    if (signal.hasHTMLEffect) {
      if (
        getSerializeSourcesForRef(signal.referencedBindings)?.global ||
        hasUnfillablePatchReads(signal.referencedBindings)
      ) {
        return true;
      }
    }
  }
  return false;
}

// The section's mount effects as space-joined register ids, in hydration
// replay order, for its shell to ship.
export function getSectionEffectRegisterIds(section: Section) {
  let ids = "";
  const allSignals = Array.from(getSignals(section).values());
  for (let i = allSignals.length; i--;) {
    if (allSignals[i].hasHTMLEffect) {
      ids +=
        (ids && " ") +
        getResumeRegisterId(section, allSignals[i].referencedBindings);
    }
  }
  return ids;
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
                getExprIfSerialized(
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
              ? getExprIfSerialized(
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

  // Mount-effect order is unspecified: hydration replays these in reverse
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
          ),
        ),
      );
    }
  }

  const debug = !isOptimize();
  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const serializedLookup = getSerializedAccessors(section);
  const serializedProperties: t.ObjectProperty[] = [];
  // Under persisted the reason is binary (`1` page render, `undefined`
  // patch) and the whole scope write rides it below, so per-property guards
  // are redundant inside it.
  const persisted = isPersisted();
  const ifSerialized = (reason: SerializeReason, expr: t.Expression) => {
    if (persisted || isSameReason(sectionSerializeReason, reason)) return expr;
    return getExprIfSerialized(section, reason, expr);
  };

  let debugVars: t.ObjectProperty[] | undefined;
  const writeSerializedBinding = (binding: Binding) => {
    const reason = getSerializeReason(section, binding);
    if (!reason) return;
    if (binding.noSerialize) {
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
    serializedProperties.push(
      toObjectProperty(accessor, ifSerialized(reason, expr)),
    );

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

  // Fills are the scope write's complement under `_persisted_reason`: the
  // reason picks serialization on a page render, fills on a patch (emitted
  // as the write's else branch below); the client applies those whose
  // intersections survived tree-shaking.
  // A param-fed write runs only when the instance's ownership mask marks
  // its group server-owned (state-fed seeds have no param gate).
  const gatePatchWrite = (binding: Binding, write: t.Expression) => {
    const owned = getOwnershipGuard(getSerializeSourcesForRef(binding));
    return owned ? t.logicalExpression("&&", owned, write) : write;
  };
  const fillCalls = toArray(getPatchFillBindings(section), (binding) =>
    gatePatchWrite(
      binding,
      callRuntime(
        "_patch_value",
        scopeIdIdentifier,
        t.stringLiteral(getPatchFillKey(binding)),
        getDeclaredBindingExpression(binding),
      ),
    ),
  );

  // Effect-read values need no client registration: the wire writes the
  // accessor here, and each reading effect's section re-runs it by register
  // id when the value it saw changed.
  if (isPersisted()) {
    forEach(section.bindings, (binding) => {
      if (isPatchEffectBinding(binding)) {
        fillCalls.push(
          gatePatchWrite(
            binding,
            callRuntime(
              "_patch_write",
              scopeIdIdentifier,
              t.stringLiteral(getScopeAccessor(binding)),
              getDeclaredBindingExpression(binding),
            ),
          ),
        );
      }
    });
    // One entry per effect (keyed by its register id), listing every
    // effect-read accessor it observes: a patch changing several of them
    // re-runs the effect ONCE, matching the client `_or` coalescing.
    // Entries self-gate on patch renders (and the check defers to the
    // effect queue), so they emit plainly in any section's body. Effect
    // bindings are root values, so one owner-hop count suffixes the
    // accessors (accessors never parse as pure numbers).
    for (const signal of allSignals) {
      if (signal.hasHTMLEffect) {
        let accessors = "";
        forEach(signal.referencedBindings, (binding) => {
          if (isPatchEffectBinding(binding)) {
            accessors += (accessors && " ") + getScopeAccessor(binding);
          }
        });
        if (accessors && section.depth) accessors += " " + section.depth;
        // Global reads ride a trailing `!` segment naming the static keys
        // read (bare `!` = whole bag; `!` cannot be an accessor in either
        // mode), on the GlobalEffect entry kind so a runtime that cannot
        // parse the segment rejects instead of missing.
        const globalReads = signal.globalEffectReads;
        if (globalReads) {
          let keys = "";
          if (globalReads !== true) {
            for (const key of [...globalReads].sort()) {
              if (!key || key.includes(" ")) {
                keys = "";
                break;
              }
              keys += " " + key;
            }
          }
          accessors += (accessors && " ") + "!" + keys;
        }
        if (accessors) {
          body.push(
            t.expressionStatement(
              callRuntime(
                "_patch_effect",
                scopeIdIdentifier,
                t.stringLiteral(
                  getResumeRegisterId(section, signal.referencedBindings),
                ),
                t.stringLiteral(accessors),
                ...(globalReads ? [t.numericLiteral(1)] : []),
              ),
            ),
          );
        }
      }
    }
  }

  forEach(section.referencedLocalClosures, writeSerializedBinding);

  // A RENDERED fed renderer has no faithful patch: its poison entry makes
  // the frame reject (navigation). Nullish slots patch normally.
  const opaqueRenderProps = persisted && getOpaqueRenderProps(section);
  if (opaqueRenderProps) {
    for (const prop of opaqueRenderProps) {
      body.push(
        t.expressionStatement(
          t.logicalExpression(
            "&&",
            t.memberExpression(t.identifier("input"), t.identifier(prop)),
            callRuntime("_patch_poison", scopeIdIdentifier),
          ),
        ),
      );
    }
  }
  // A constructible branch seeds its state onto freshly constructed scopes
  // as SETUP fills: the fill signal's joins render all downstream content.
  if (persisted && section.isBranch && isPatchCaptureSection(section)) {
    forEach(getPatchFillBindings(section), (binding) => {
      body.push(
        t.expressionStatement(
          callRuntime(
            "_patch_value",
            scopeIdIdentifier,
            t.stringLiteral(getPatchFillKey(binding)),
            getDeclaredBindingExpression(binding),
            t.numericLiteral(1),
          ),
        ),
      );
      // A controllable let's change handler wires through `_patch_bind`,
      // emitted after the value so a seed cannot clobber an installed
      // handler.
      const changeAccessor = getPrefixedScopeAccessor(
        binding,
        getAccessorPrefix().TagVariableChange,
      );
      const change = getSerializedAccessors(section).get(changeAccessor);
      if (change) {
        // The runtime decides how the handler wires from the rendered
        // value alone (bind by owner-hop distance, or plain write), so any
        // handler expression shape compiles the same way. A param-fed
        // handler binds only under server ownership.
        const bindOwned =
          change.reason !== true ? getOwnershipGuard(change.reason) : undefined;
        const bindCall = callRuntime(
          "_patch_bind",
          scopeIdIdentifier,
          t.stringLiteral(changeAccessor),
          t.cloneNode(change.expression, true),
        );
        body.push(
          t.expressionStatement(
            bindOwned
              ? t.logicalExpression("&&", bindOwned, bindCall)
              : bindCall,
          ),
        );
      }
    });
  }

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
    body.push(
      t.expressionStatement(
        // Child sections gate through their cross-section guards (derived
        // from the root reason, so still binary under persisted).
        persisted && !section.parent
          ? fillCalls.length
            ? t.conditionalExpression(
                scopeReasonIdentifier(section),
                writeCall,
                toSequenceExpression(fillCalls),
              )
            : t.logicalExpression(
                "&&",
                scopeReasonIdentifier(section),
                writeCall,
              )
          : getExprIfSerialized(section, sectionSerializeReason, writeCall),
      ),
    );
  } else if (fillCalls.length) {
    body.push(
      t.expressionStatement(
        t.logicalExpression(
          "||",
          scopeReasonIdentifier(section),
          toSequenceExpression(fillCalls),
        ),
      ),
    );
  }

  const resumeClosestBranch =
    !section.isBranch &&
    (section.hasAbortSignal ||
      !!section.referencedClosures ||
      (sectionSerializeReason &&
        !!find(
          section.bindings,
          (binding) => binding.type === BindingType.let,
        )));

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

function getBuildAssignment(extra: AssignedBindingExtra) {
  const { assignmentTo, assignment } = extra;
  if (assignmentTo) {
    return (section: Section, value: t.Expression) => {
      let scopeRead: t.Expression;
      if (assignmentTo.pruned) {
        // The change binding was pruned (an ancestor is already tracked), so read
        // the change handler via property chain from the nearest non-pruned ancestor.
        let cur = assignmentTo;
        const props: string[] = [];
        while (cur.pruned && cur.property !== undefined && cur.upstreamAlias) {
          props.push(cur.property);
          cur = cur.upstreamAlias;
        }
        scopeRead = createScopeReadExpression(cur, section);
        for (let i = props.length; i--;) {
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
    referencedLocals: Opt<Binding>;
  }[]
>();
export function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement &&
        t.classProperty(
          node.key,
          replacement,
          undefined,
          undefined,
          node.computed,
          node.static,
        )
      );
    }
    case "ClassPrivateMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement &&
        t.classPrivateProperty(node.key, replacement, undefined, node.static)
      );
    }
    case "ObjectMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement && t.objectProperty(node.key, replacement, node.computed)
      );
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
    const referencedLocals = extra.referencedLocalBindingsInFunction;
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
