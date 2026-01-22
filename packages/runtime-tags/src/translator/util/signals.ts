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
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-char";
import { getDeclaredBindingExpression } from "./get-defined-binding-expression";
import { isOptimize, isOutputHTML } from "./marko-config";
import { find, forEach, type Opt, push, some } from "./optional";
import {
  type AssignedBindingExtra,
  type Binding,
  BindingType,
  bindingUtil,
  compareSources,
  getCanonicalBinding,
  getDebugName,
  getDebugNames,
  getDebugScopeAccess,
  getReadReplacement,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getSectionInstancesAccessorLiteral,
  hasNonConstantPropertyAlias,
  intersectionMeta,
  isAssignedBindingExtra,
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
import { getExprIfSerialized } from "./serialize-guard";
import { getSerializeReason, type SerializeReason } from "./serialize-reasons";
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
const [getSignals] = createSectionState<Map<unknown, Signal>>(
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

export function getBindingGetterIdentifier(binding: Binding) {
  const idsMap = getBindingGetterIdMap(binding.section);
  let identifier = idsMap.get(binding);
  if (!identifier) {
    idsMap.set(
      binding,
      (identifier = generateUidIdentifier(`get${binding.name}`)),
    );
  }
  return identifier;
}

export function getSignal(
  section: Section,
  referencedBindings: ReferencedBindings,
  name: string = generateSignalName(referencedBindings),
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
              section.name ? `${section.name}__${name}` : name,
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
            referencedBindings.hoists.size)
        ),
        hasDynamicSubscribers: false,
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
      subscribe(referencedBindings, signal);
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
            ? t.stringLiteral(getResumeRegisterId(section, closure))
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
  signal.build = () => {
    const fn = getSignalFn(signal);
    const isDirectAlias =
      binding.upstreamAlias &&
      binding.property === undefined &&
      binding.excludeProperties === undefined;
    if (
      isDirectAlias ||
      !signal.hasSideEffect ||
      !signalHasStatements(signal)
    ) {
      return fn;
    }

    return callRuntime(
      isLet ? "_let" : "_const",
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
          (binding.hoists.size ||
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

export function getSignalFn(signal: Signal): t.Expression {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue = isBinding && binding.section === section;
  const assertsHoists = isValue && binding.hoists.size && !isOptimize();

  if (isValue) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      if (signalHasStatements(aliasSignal)) {
        if (alias.excludeProperties !== undefined) {
          const props: t.ObjectPattern["properties"] = [];
          const aliasId = t.identifier(alias.name);
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
          signal.render.push(
            t.expressionStatement(
              t.callExpression(
                t.arrowFunctionExpression(
                  [t.objectPattern(props)],
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
                        t.objectExpression([]),
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
        const aliasSignal = getSignal(alias.section, alias);
        signal.render.push(
          t.expressionStatement(
            t.callExpression(aliasSignal.identifier, [
              scopeIdentifier,
              toMemberExpression(
                createScopeReadExpression(binding),
                key,
                binding.nullable,
              ),
              ...getTranslatedExtraArgs(aliasSignal),
            ]),
          ),
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
    if (signalHasStatements(value.signal)) {
      signal.render.push(
        t.expressionStatement(
          t.callExpression(value.signal.identifier, [
            scopeIdentifier,
            value.value,
            ...getTranslatedExtraArgs(value.signal),
          ]),
        ),
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

  if (!signal.hasSideEffect) {
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

export function subscribe(references: ReferencedBindings, subscriber: Signal) {
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

function generateSignalName(referencedBindings?: ReferencedBindings) {
  let name: string;

  if (referencedBindings) {
    if (Array.isArray(referencedBindings)) {
      name = "";

      for (const ref of referencedBindings) {
        if (name) {
          name += `__OR__${ref.name.replace(/^\$/, "")}`;
        } else {
          name = ref.name;
        }
      }
    } else {
      name = referencedBindings.name;
    }
  } else {
    name = "setup";
  }

  return name;
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

export function addValue(
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  signal: Signal,
  value: t.Expression,
) {
  const parentSignal = getSignal(targetSection, referencedBindings);
  addRenderReferences(parentSignal, referencedBindings);
  parentSignal.values.push({
    signal,
    value,
  });

  if (value.extra?.referencedBindingsInFunction) {
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

const usedRegisterIdsBySection = new WeakMap<Section, Set<string>>();
export function getRegisterUID(section: Section, name: string) {
  const {
    markoOpts,
    opts: { filename },
  } = getFile();

  let used = usedRegisterIdsBySection.get(section);
  if (!used) usedRegisterIdsBySection.set(section, (used = new Set()));

  const baseId = getTemplateId(
    markoOpts,
    filename as string,
    `${section.id}/${name}`,
  );
  let count = 0;
  let id = baseId;

  while (used.has(id)) {
    id = baseId + "_" + ++count;
  }

  used.add(id);
  return id;
}

export function writeSignals(section: Section) {
  const seen = new Set<Signal>();
  writeHoists(section);
  writeDomGetters(section);

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
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        callRuntime(
          "_script",
          t.stringLiteral(
            getResumeRegisterId(section, signal.referencedBindings),
          ),
          t.arrowFunctionExpression(
            [scopeIdentifier],
            toFirstExpressionOrBlock(signal.effect),
          ),
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
  }
}

function writeDomGetters(section: Section) {
  for (const [binding, registerId] of section.domGetterBindings) {
    getProgram().node.body.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          getBindingGetterIdentifier(binding),
          callRuntime(
            "_el",
            t.stringLiteral(registerId),
            getScopeAccessorLiteral(binding, true),
          ),
        ),
      ]),
    );
  }
}

function writeHoists(section: Section) {
  forEach(section.hoisted, (binding) => {
    for (const hoistedBinding of binding.hoists.values()) {
      const accessors: t.Expression[] = [
        binding.type === BindingType.dom
          ? t.stringLiteral(
              getAccessorPrefix().Getter + getScopeAccessor(binding),
            )
          : getScopeAccessorLiteral(binding, true),
      ];
      let currentSection: Section | undefined = section;
      while (currentSection && currentSection !== hoistedBinding.section) {
        const parentSection: Section | undefined = currentSection.parent;
        if (parentSection) {
          accessors.push(getSectionInstancesAccessorLiteral(currentSection)!);
        }
        currentSection = parentSection;
      }

      const hoistIdentifier = getBindingGetterIdentifier(hoistedBinding);

      getProgram().node.body.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            hoistIdentifier,
            hoistedBinding.reads.size
              ? callRuntime(
                  "_resume", // TODO: add _hoist_resume runtime
                  t.stringLiteral(
                    getResumeRegisterId(
                      hoistedBinding.section,
                      hoistedBinding,
                      "hoist",
                    ),
                  ),
                  callRuntime("_hoist", ...accessors),
                )
              : callRuntime("_hoist", ...accessors),
          ),
        ]),
      );

      if (hoistedBinding.reads.size) {
        addValue(
          hoistedBinding.section,
          undefined,
          initValue(hoistedBinding),
          t.callExpression(hoistIdentifier, [scopeIdentifier]),
        );
      }
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

        setBindingSerializedValue(
          section,
          closure,
          t.numericLiteral(getDynamicClosureIndex(closure, section)),
          getAccessorPrefix().ClosureSignalIndex,
        );

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
                    t.stringLiteral(getResumeRegisterId(section, closure)),
                  ),
                ),
              ),
            );
          }
        } else {
          addWriteScopeBuilder(section, (expr) =>
            callRuntime("_subscribe", identifier, expr),
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
  const sectionSerializeReason = nonAnalyzedForceSerializedSection.has(section)
    ? true
    : section.serializeReason;
  let debugVars: t.ObjectProperty[] | undefined;
  const writeSerializedBinding = (binding: Binding) => {
    const reason = getSerializeReason(section, binding);
    if (!reason) return;
    const accessor = getScopeAccessor(binding);
    serializedLookup.delete(accessor);
    serializedProperties.push(
      toObjectProperty(
        accessor,
        sectionSerializeReason &&
          (sectionSerializeReason === reason ||
            (sectionSerializeReason !== true &&
              reason !== true &&
              compareSources(sectionSerializeReason, reason) === 0))
          ? getDeclaredBindingExpression(binding)
          : getExprIfSerialized(
              section,
              reason,
              getDeclaredBindingExpression(binding),
            ),
      ),
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

  forEach(section.referencedLocalClosures, writeSerializedBinding);

  if (section.parent) {
    const ownerAccessor = getAccessorProp().Owner;
    const ownerReason = getSerializeReason(section, ownerAccessor);
    if (ownerReason) {
      const getOwnerExpr = callRuntime(
        "_scope_with_id",
        getScopeIdIdentifier(section.parent),
      );
      serializedLookup.delete(ownerAccessor);
      serializedProperties.push(
        toObjectProperty(
          ownerAccessor,
          sectionSerializeReason &&
            (sectionSerializeReason === ownerReason ||
              (sectionSerializeReason !== true &&
                ownerReason !== true &&
                compareSources(sectionSerializeReason, ownerReason) === 0))
            ? getOwnerExpr
            : getExprIfSerialized(section, ownerReason, getOwnerExpr),
        ),
      );
    }
  }

  for (const [key, { expression, reason }] of serializedLookup) {
    serializedProperties.push(
      toObjectProperty(key, getExprIfSerialized(section, reason, expression)),
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
        getExprIfSerialized(
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
      if (binding.hoists.size && binding.type !== BindingType.dom) {
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
    ? getSignal(section, undefined).identifier
    : getSignals(section).get(undefined)?.identifier;
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
      const binding = extra?.read?.binding;
      if (binding?.type === BindingType.dom) {
        const replacement = createScopeReadExpression(binding, extra!.section);
        return isOptimize()
          ? replacement
          : callRuntime("_el_read", replacement);
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
      const replacement = callRuntime(
        "_call",
        createScopeReadExpression(assignmentTo, section),
        value,
      );
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
    let registedFns = registeredFnsForProgram.get(getProgram().node);
    if (!registedFns) {
      registeredFnsForProgram.set(getProgram().node, (registedFns = []));
    }

    registedFns.push({
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
