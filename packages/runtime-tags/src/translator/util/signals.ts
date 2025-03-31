import { types as t } from "@marko/compiler";
import { getTemplateId } from "@marko/compiler/babel-utils";

import { toAccess } from "../../html/serializer";
import { getSectionReturnValueIdentifier } from "../core/return";
import {
  cleanIdentifier,
  currentProgramPath,
  isScopeIdentifier,
  scopeIdentifier,
} from "../visitors/program";
import { getDynamicSourcesForBinding } from "./dynamic-sources";
import { forEachIdentifier } from "./for-each-identifier";
import { getAccessorPrefix } from "./get-accessor-char";
import { getDeclaredBindingExpression } from "./get-defined-binding-expression";
import { isOptimize, isOutputHTML } from "./marko-config";
import { find, forEach, type Opt, push } from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  getReadReplacement,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getSectionInstancesAccessor,
  getSectionInstancesAccessorLiteral,
  intersectionMeta,
  isAssignedBindingExtra,
  isRegisteredFnExtra,
  type ReferencedBindings,
} from "./references";
import { callRuntime } from "./runtime";
import { createScopeReadPattern, getScopeExpression } from "./scope-read";
import {
  getScopeIdIdentifier,
  getSectionForBody,
  isDynamicClosure,
  isImmediateOwner,
  type Section,
} from "./sections";
import { simplifyFunction } from "./simplify-fn";
import { createSectionState } from "./state";
import {
  toFirstExpressionOrBlock,
  toParenthesizedExpressionIfNeeded,
} from "./to-first-expression-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { traverseContains, traverseReplace } from "./traverse";

export type Signal = {
  identifier: t.Identifier;
  valueAccessor?: t.Expression;
  referencedBindings: ReferencedBindings;
  section: Section;
  build: () => t.Expression;
  register?: boolean;
  values: Array<{
    signal: {
      identifier: t.Identifier | t.MemberExpression;
      hasDownstreamIntersections: () => boolean;
      buildDeclaration?: () => t.VariableDeclaration;
      extraArgs?: t.Expression[];
    };
    value: t.Expression;
    scope: t.Expression;
  }>;
  intersection: Opt<t.Expression>;
  render: t.Statement[];
  renderReferencedBindings: ReferencedBindings;
  effect: t.Statement[];
  effectReferencedBindings: ReferencedBindings;
  hasDownstreamIntersections: () => boolean;
  hasDynamicSubscribers?: true;
  export: boolean;
  extraArgs?: t.Expression[];
  prependStatements?: t.Statement[];
  buildAssignment?: (
    valueSection: Section,
    value: t.Expression,
  ) => t.Expression;
};

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

const [serializeSectionReason, setSerializeSectionReason] = createSectionState<
  undefined | true | Opt<Binding>
>("serializeSectionSources");
export function serializeSectionIfNeeded(
  section: Section,
  reason: undefined | boolean | Opt<Binding>,
) {
  if (reason) {
    const existingReason = serializeSectionReason(section);
    if (existingReason === true) return;
    if (!existingReason || reason === true) {
      setSerializeSectionReason(section, reason);
    } else {
      setSerializeSectionReason(
        section,
        bindingUtil.union(existingReason, reason),
      );
    }
  }
}
const [getSerializedScopeProperties] = createSectionState<
  Map<
    string,
    { expression: t.Expression; reason: undefined | boolean | Opt<Binding> }
  >
>("serializedScopeProperties", () => new Map());
export function setSerializedProperty(
  section: Section,
  key: string,
  expression: t.Expression,
  reason: undefined | boolean | Opt<Binding>,
) {
  if (reason) {
    getSerializedScopeProperties(section).set(key, { expression, reason });
  }
}

const [getSectionWriteScopeBuilder, setSectionWriteScopeBuilder] =
  createSectionState<undefined | ((expr: t.Expression) => t.Expression)>(
    "sectionWriteScopeBuilder",
  );
function addWriteScopeBuilder(
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

const [getHoistFunctionsIdsMap] = createSectionState<
  Map<Binding, t.Identifier>
>("hoistFunctionsIdsMap", () => new Map());

export function getHoistFunctionIdentifier(hoistedBinding: Binding) {
  const idsMap = getHoistFunctionsIdsMap(hoistedBinding.section);
  let identifier = idsMap.get(hoistedBinding);
  if (!identifier) {
    idsMap.set(
      hoistedBinding,
      (identifier = currentProgramPath.scope.generateUidIdentifier(
        `get${hoistedBinding.name}`,
      )),
    );
  }
  return identifier;
}

const unimplementedBuild = () => {
  return t.stringLiteral("SIGNAL NOT INITIALIZED");
};

export function getSignal(
  section: Section,
  referencedBindings: ReferencedBindings,
  name: string = generateSignalName(referencedBindings),
) {
  const signals = getSignals(section);
  let signal = signals.get(referencedBindings)!;
  if (!signal) {
    const exportName = referencedBindings
      ? !Array.isArray(referencedBindings) &&
        referencedBindings.section === section &&
        referencedBindings.export
      : !section.parent && currentProgramPath.node.extra.domExports?.setup;

    signals.set(
      referencedBindings,
      (signal = {
        identifier: exportName
          ? t.identifier(exportName)
          : currentProgramPath.scope.generateUidIdentifier(
              name + section.name.replace("_", "$"),
            ),
        referencedBindings,
        section,
        values: [],
        intersection: undefined,
        render: [],
        renderReferencedBindings: undefined,
        effect: [],
        effectReferencedBindings: undefined,
        subscribers: [],
        hasDownstreamIntersections: () => {
          let hasDownstreamIntersections: boolean =
            !!(signal.intersection /* || signal.closures.size */);
          if (!hasDownstreamIntersections) {
            for (const value of signal.values) {
              if (value.signal.hasDownstreamIntersections()) {
                hasDownstreamIntersections = true;
                break;
              }
            }
          }
          if (!hasDownstreamIntersections) {
            if (!Array.isArray(referencedBindings) && referencedBindings) {
              for (const alias of referencedBindings.aliases) {
                if (getSignal(section, alias).hasDownstreamIntersections()) {
                  hasDownstreamIntersections = true;
                  break;
                }
              }
              if (!hasDownstreamIntersections) {
                for (const [, alias] of referencedBindings.propertyAliases) {
                  if (getSignal(section, alias).hasDownstreamIntersections()) {
                    hasDownstreamIntersections = true;
                    break;
                  }
                }
              }
            }
          }
          signal.hasDownstreamIntersections = () => hasDownstreamIntersections;
          return hasDownstreamIntersections;
        },
        build: unimplementedBuild,
        export: !!exportName,
      } as Signal),
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
          "intersection",
          t.numericLiteral(id),
          getSignalFn(signal),
          scopeOffset || referencedBindings.length > 2
            ? t.numericLiteral(referencedBindings.length - 1)
            : undefined,
          scopeOffset && getScopeAccessorLiteral(scopeOffset),
        );
      };
    } else if (
      referencedBindings.section !== section &&
      bindingUtil.find(section.referencedClosures, referencedBindings)
    ) {
      signal.build = () => {
        const render = getSignalFn(signal);
        const closureSignalBuilder = getClosureSignalBuilder(section);
        return !closureSignalBuilder ||
          isDynamicClosure(section, referencedBindings)
          ? callRuntime(
              "dynamicClosureRead",
              getScopeAccessorLiteral(referencedBindings),
              render,
              isImmediateOwner(section, referencedBindings)
                ? undefined
                : t.arrowFunctionExpression(
                    [scopeIdentifier],
                    getScopeExpression(section, referencedBindings.section),
                  ),
            )
          : getClosureSignalBuilder(section)!(referencedBindings, render);
      };
    }
  }
  return signal;
}

export function initValue(
  binding: Binding,
  runtimeHelper: "value" | "state" = "value",
) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  signal.build = () => {
    const fn = getSignalFn(signal);
    const isParamBinding =
      !binding.upstreamAlias &&
      (binding.type === BindingType.param ||
        binding.type === BindingType.input);
    const isNakedAlias = binding.upstreamAlias && !binding.property;
    const needsGuard =
      !isNakedAlias &&
      (binding.downstreamExpressions.size ||
        (fn.body as t.BlockStatement).body.length > 0);
    const needsCache = needsGuard || signal.intersection;
    // TODO: marks not used anymore. can remove?
    const needsMarks = isParamBinding || signal.intersection;
    if (needsCache || needsMarks || binding.hoists.size) {
      return callRuntime(
        runtimeHelper,
        getScopeAccessorLiteral(binding, runtimeHelper === "state"),
        fn,
      );
    } else {
      return fn;
    }
  };
  signal.valueAccessor = getScopeAccessorLiteral(binding);

  for (const alias of binding.aliases) {
    initValue(alias);
  }

  for (const alias of binding.propertyAliases.values()) {
    initValue(alias);
  }

  return signal;
}

function getSignalFn(signal: Signal) {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const params: t.Identifier[] = [scopeIdentifier];
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue = isBinding && binding.section === section;

  if (
    isBinding &&
    (signal.renderReferencedBindings ||
      binding.aliases.size ||
      binding.propertyAliases.size)
  ) {
    const valueParam = t.identifier(binding.name);
    if (binding.loc) {
      valueParam.loc = binding.loc;
      valueParam.start = (binding.loc.start as any).index;
      valueParam.end = (binding.loc.end as any).index;
    }
    params.push(valueParam);
  }

  if (isValue) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      signal.render.push(
        t.expressionStatement(
          t.callExpression(aliasSignal.identifier, [
            scopeIdentifier,
            t.identifier(binding.name),
            ...getTranslatedExtraArgs(aliasSignal),
          ]),
        ),
      );
    }

    for (const [key, alias] of binding.propertyAliases) {
      const aliasSignal = getSignal(alias.section, alias);
      signal.render.push(
        t.expressionStatement(
          t.callExpression(aliasSignal.identifier, [
            scopeIdentifier,
            toMemberExpression(
              t.identifier(binding.name),
              key,
              binding.nullable,
            ),
            ...getTranslatedExtraArgs(aliasSignal),
          ]),
        ),
      );
    }
  }

  for (const value of signal.values) {
    signal.render.push(
      t.expressionStatement(
        t.callExpression(value.signal.identifier, [
          value.scope,
          value.value,
          ...getTranslatedExtraArgs(value.signal),
        ]),
      ),
    );
  }

  forEach(signal.intersection, (intersection) => {
    signal.render.push(
      t.expressionStatement(t.callExpression(intersection, [scopeIdentifier])),
    );
  });

  if (isValue) {
    let dynamicClosureArgs: t.Expression[] | undefined;
    let dynamicClosureSignalIdentifier: t.Identifier | undefined;
    forEach(binding.closureSections, (closureSection) => {
      if (binding.sources) {
        if (isDynamicClosure(closureSection, binding)) {
          if (!dynamicClosureArgs) {
            dynamicClosureArgs = [];
            dynamicClosureSignalIdentifier =
              currentProgramPath.scope.generateUidIdentifier(
                signal.identifier.name + "_closure",
              );

            signal.render.push(
              t.expressionStatement(
                t.callExpression(dynamicClosureSignalIdentifier, [
                  scopeIdentifier,
                ]),
              ),
            );
          }

          dynamicClosureArgs.push(
            getSignal(closureSection, binding).identifier,
          );
        } else {
          signal.render.push(
            t.expressionStatement(
              t.callExpression(getSignal(closureSection, binding).identifier, [
                scopeIdentifier,
              ]),
            ),
          );
        }
      }
    });

    if (dynamicClosureSignalIdentifier) {
      (signal.prependStatements ||= []).push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            dynamicClosureSignalIdentifier,
            callRuntime("dynamicClosure", ...dynamicClosureArgs!),
          ),
        ]),
      );
    }
  }

  if (signal.effect.length) {
    const effectIdentifier = t.identifier(`${signal.identifier.name}_effect`);
    signal.render.push(
      t.expressionStatement(
        t.callExpression(effectIdentifier, [scopeIdentifier]),
      ),
    );
  }

  if (isIntersection && signal.renderReferencedBindings) {
    signal.render.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          createScopeReadPattern(section, signal.renderReferencedBindings),
          scopeIdentifier,
        ),
      ]),
    );
  }

  return t.arrowFunctionExpression(params, t.blockStatement(signal.render));
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

export function getDestructureSignal(
  bindingIdentifiersByName: Record<string, t.Identifier> | t.Identifier[],
  destructurePattern: t.LVal,
) {
  const bindingIdentifiers = Array.isArray(bindingIdentifiersByName)
    ? bindingIdentifiersByName
    : Object.values(bindingIdentifiersByName);
  if (bindingIdentifiers.length) {
    const valueIdentifier =
      currentProgramPath.scope.generateUidIdentifier("destructure");
    const bindingSignals = bindingIdentifiers.map((bindingIdentifier) =>
      initValue(bindingIdentifier.extra?.binding as Binding),
    );

    const declarations = t.variableDeclaration(
      "let",
      bindingIdentifiers.map((bindingIdentifier) =>
        t.variableDeclarator(bindingIdentifier),
      ),
    );

    let id: t.Identifier | undefined;

    return {
      get identifier() {
        if (!id) {
          id = currentProgramPath.scope.generateUidIdentifier("destructure");
          currentProgramPath.node.body.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(id, this.build(true)),
            ]),
          );
        }
        return id;
      },
      build(canCallOnlyWhenDirty?: boolean) {
        if (canCallOnlyWhenDirty && !this.hasDownstreamIntersections()) {
          return t.arrowFunctionExpression(
            [scopeIdentifier, destructurePattern as t.Pattern],
            t.blockStatement(
              bindingSignals.map((signal, i) =>
                t.expressionStatement(
                  t.callExpression(signal.identifier, [
                    scopeIdentifier,
                    bindingIdentifiers[i],
                    ...getTranslatedExtraArgs(signal),
                  ]),
                ),
              ),
            ),
          );
        }
        return t.arrowFunctionExpression(
          [scopeIdentifier, valueIdentifier, cleanIdentifier],
          t.blockStatement([
            declarations,
            t.ifStatement(
              t.unaryExpression("!", cleanIdentifier),
              t.expressionStatement(
                t.assignmentExpression(
                  "=",
                  destructurePattern,
                  valueIdentifier,
                ),
              ),
            ),
            ...bindingSignals.map((signal, i) =>
              t.expressionStatement(
                t.callExpression(signal.identifier, [
                  scopeIdentifier,
                  bindingIdentifiers[i],
                  ...getTranslatedExtraArgs(signal),
                ]),
              ),
            ),
          ]),
        );
      },
      hasDownstreamIntersections() {
        return bindingIdentifiers.some((bindingIdentifier) => {
          const binding = bindingIdentifier.extra!.binding!;
          const signal = getSignal(binding.section, binding);
          return signal.hasDownstreamIntersections();
        });
      },
    };
  }
}

export function subscribe(provider: ReferencedBindings, subscriber: Signal) {
  if (Array.isArray(provider)) {
    provider.forEach((p) => subscribe(p, subscriber));
    return;
  }
  const providerSignal = getSignal(subscriber.section, provider);
  providerSignal.intersection = push(
    providerSignal.intersection,
    subscriber.identifier,
  );
}

function generateSignalName(referencedBindings?: ReferencedBindings) {
  let name;

  if (referencedBindings) {
    if (Array.isArray(referencedBindings)) {
      name = "expr";
      for (const ref of referencedBindings) {
        name += `_${ref.name}`;
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
  for (let i = args.length; i--; ) {
    const arg = args[i];
    if (!arg) {
      args[i] = t.numericLiteral(0);
    } else if (
      t.isArrowFunctionExpression(arg) &&
      t.isBlockStatement(arg.body)
    ) {
      const body = arg.body.body;
      if (body.length === 0) {
        args[i] = t.numericLiteral(0);
      } else if (body.length === 1 && t.isExpressionStatement(body[0])) {
        arg.body = toParenthesizedExpressionIfNeeded(body[0].expression);
      }
    } else if (
      t.isNullLiteral(arg) ||
      (t.isUnaryExpression(arg) && arg.operator === "void")
    ) {
      args[i] = t.numericLiteral(0);
    }
  }

  for (
    let i = args.length - 1;
    t.isNumericLiteral(args[i] as any) &&
    (args[i] as t.NumericLiteral).value === 0;

  ) {
    args.length = i--;
  }

  return args as t.Expression[];
}
export function addStatement(
  type: "render" | "effect",
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
  usedReferences?: ReferencedBindings[] | false,
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
  signal: Signal["values"][number]["signal"],
  value: t.Expression,
  scope: t.Expression = scopeIdentifier,
) {
  const parentSignal = getSignal(targetSection, referencedBindings);
  addRenderReferences(parentSignal, referencedBindings);
  parentSignal.values.push({
    signal,
    value,
    scope,
  });
}

export function getResumeRegisterId(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  const {
    markoOpts,
    opts: { filename },
  } = currentProgramPath.hub.file;
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
  } = currentProgramPath.hub.file;

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
  forEach(section.hoisted, (binding) => {
    for (const hoistedBinding of binding.hoists.values()) {
      const accessors: t.Expression[] = [
        binding.type === BindingType.dom
          ? t.stringLiteral(
              getAccessorPrefix().Getter + getScopeAccessor(binding),
            )
          : getScopeAccessorLiteral(binding),
      ];
      let currentSection: Section | undefined = section;
      while (currentSection && currentSection !== hoistedBinding.section) {
        const parentSection: Section | undefined = currentSection.parent;
        if (parentSection) {
          accessors.push(getSectionInstancesAccessorLiteral(currentSection)!);
        }
        currentSection = parentSection;
      }

      const hoistIdentifier = getHoistFunctionIdentifier(hoistedBinding);

      currentProgramPath.node.body.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            hoistIdentifier,
            hoistedBinding.downstreamExpressions.size
              ? callRuntime(
                  "register",
                  t.stringLiteral(
                    getResumeRegisterId(
                      hoistedBinding.section,
                      hoistedBinding,
                      "hoist",
                    ),
                  ),
                  callRuntime("hoist", ...accessors),
                )
              : callRuntime("hoist", ...accessors),
          ),
        ]),
      );

      if (hoistedBinding.downstreamExpressions.size) {
        addValue(
          hoistedBinding.section,
          undefined,
          initValue(hoistedBinding),
          t.callExpression(hoistIdentifier, [scopeIdentifier]),
        );
      }
    }
  });

  const signals = [...getSignals(section).values()].sort(sortSignals);
  for (const signal of signals) {
    traverseReplace(signal, "render", replaceRenderNode);

    for (const value of signal.values) {
      traverseReplace(value, "value", replaceRenderNode);
    }

    let effectDeclarator: t.VariableDeclarator | undefined;
    if (signal.effect.length) {
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = t.identifier(`${signal.identifier.name}_effect`);
      const referencedBindings = signal.effectReferencedBindings;
      const referencesScope = traverseContains(
        signal.effect,
        isScopeIdentifier,
      );
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        callRuntime(
          "effect",
          t.stringLiteral(
            getResumeRegisterId(section, signal.referencedBindings),
          ),
          t.arrowFunctionExpression(
            referencedBindings
              ? referencesScope
                ? [
                    scopeIdentifier,
                    createScopeReadPattern(section, referencedBindings),
                  ]
                : [createScopeReadPattern(section, referencedBindings)]
              : referencesScope
                ? [scopeIdentifier]
                : [],
            toFirstExpressionOrBlock(signal.effect),
          ),
        ),
      );
    }

    let value = signal.build();

    if (t.isCallExpression(value)) {
      replaceNullishAndEmptyFunctionsWith0(value.arguments as t.Expression[]);
    }

    if (signal.register) {
      value = callRuntime(
        "registerBoundSignal",
        t.stringLiteral(
          getResumeRegisterId(section, signal.referencedBindings, "var"),
        ),
        value,
      );
    }

    const signalDeclarator = t.variableDeclarator(signal.identifier, value);
    let signalDeclaration: t.Statement =
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

    const signalStatements = signal.prependStatements || [];

    if (effectDeclarator) {
      signalStatements.push(t.variableDeclaration("const", [effectDeclarator]));
    }

    signalStatements.push(signalDeclaration);
    currentProgramPath.node.body.push(...signalStatements);
  }
}

export function writeRegisteredFns() {
  const registeredFns = registeredFnsForProgram.get(currentProgramPath.node);
  const statements: t.Statement[] = [];
  if (registeredFns) {
    for (const registeredFn of registeredFns) {
      let fn: t.FunctionDeclaration;
      const params = registeredFn.referencedBindings
        ? registeredFn.referencesScope
          ? [
              scopeIdentifier,
              t.assignmentPattern(
                createScopeReadPattern(
                  registeredFn.section,
                  registeredFn.referencedBindings,
                ),
                scopeIdentifier,
              ),
            ]
          : [
              createScopeReadPattern(
                registeredFn.section,
                registeredFn.referencedBindings,
              ),
            ]
        : registeredFn.referencesScope
          ? [scopeIdentifier]
          : undefined;
      if (params) {
        fn = t.functionDeclaration(
          t.identifier(registeredFn.id),
          params,
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
            "register",
            t.stringLiteral(registeredFn.registerId),
            t.identifier(registeredFn.id),
          ),
        ),
      );
    }

    currentProgramPath.node.body.push(...statements);
  }
}

function toReturnedFunction(rawFn: t.Function) {
  const fn = simplifyFunction(rawFn);
  return fn.type === "FunctionDeclaration"
    ? [fn, t.returnStatement(fn.id!)]
    : [t.returnStatement(fn)];
}

function sortSignals(a: Signal, b: Signal) {
  const aReferencedBindings = getReferencedBindings(a);
  const bReferencedBindings = getReferencedBindings(b);

  for (
    let i =
      Math.max(aReferencedBindings.length, bReferencedBindings.length) - 1;
    i >= 0;
    i--
  ) {
    const diff =
      (bReferencedBindings[i] ?? -1) - (aReferencedBindings[i] ?? -1);
    if (diff !== 0) return diff;
  }

  return 0;
}

function getReferencedBindings({ referencedBindings: reserve }: Signal) {
  if (!reserve) {
    return [];
  } else if (Array.isArray(reserve)) {
    return reserve.map(getMappedId).sort();
  } else {
    return [getMappedId(reserve)];
  }
}

function getMappedId(reference: Binding) {
  // TODO: this is wrong.
  return (reference.type === BindingType.dom ? 1 : 0) * 10000 + reference.id;
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
  const serializeOwnersUntilBinding = (binding: Binding) =>
    serializeOwners(section, binding.section);
  forEach(section.assignments, serializeOwnersUntilBinding);
  forEach(section.referencedHoists, serializeOwnersUntilBinding);
  forEach(section.referencedClosures, (closure) => {
    if (closure.sources) {
      const serializeReason = getDynamicSourcesForBinding(closure);
      serializeOwnersUntilBinding(closure);
      serializeSectionIfNeeded(closure.section, serializeReason);
      if (isDynamicClosure(section, closure)) {
        const closureSignal = getSignal(closure.section, closure);
        let identifier =
          htmlDynamicClosureInstancesIdentifier.get(closureSignal);
        if (!identifier) {
          htmlDynamicClosureInstancesIdentifier.set(
            closureSignal,
            (identifier = currentProgramPath.scope.generateUidIdentifier(
              closureSignal.identifier.name + "_closures",
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
          setSerializedProperty(
            closure.section,
            getAccessorPrefix().ClosureScopes + getScopeAccessor(closure),
            identifier,
            serializeReason,
          );
        }

        setSerializedProperty(
          section,
          getAccessorPrefix().ClosureSignalIndex + getScopeAccessor(closure),
          t.numericLiteral(getDynamicClosureIndex(closure, section)),
          serializeReason,
        );
        addWriteScopeBuilder(section, (expr) =>
          callRuntime("writeSubscribe", identifier, expr),
        );
      }
    }
  });

  const sectionDynamicSubscribers = new Set<Section>();
  forEach(section.hoisted, (binding) => {
    for (const hoistedBinding of binding.hoists.values()) {
      if (hoistedBinding.downstreamExpressions.size) {
        getHTMLSectionStatements(hoistedBinding.section).push(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier(hoistedBinding.name),
              callRuntime(
                "hoist",
                getScopeIdIdentifier(hoistedBinding.section),
                t.stringLiteral(
                  getResumeRegisterId(
                    hoistedBinding.section,
                    hoistedBinding,
                    "hoist",
                  ),
                ),
              ),
            ),
          ]),
        );
      }

      let currentSection: Section | undefined = section;
      while (currentSection && currentSection !== hoistedBinding.section) {
        const parentSection: Section = currentSection.parent!;
        if (
          !currentSection.sectionAccessor &&
          !sectionDynamicSubscribers.has(currentSection)
        ) {
          const subscribersIdentifier =
            currentProgramPath.scope.generateUidIdentifier(
              `${currentSection.name}_subscribers`,
            );

          sectionDynamicSubscribers.add(currentSection);

          getHTMLSectionStatements(parentSection).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                subscribersIdentifier,
                t.newExpression(t.identifier("Set"), []),
              ),
            ]),
          );

          addWriteScopeBuilder(currentSection, (expr) =>
            callRuntime("writeSubscribe", subscribersIdentifier, expr),
          );
          setSerializedProperty(
            parentSection,
            getSectionInstancesAccessor(currentSection)!,
            subscribersIdentifier,
            true,
          );
        }
        currentSection = parentSection!;
      }
    }

    if (binding.hoists.size && binding.type !== BindingType.dom) {
      setSerializedProperty(
        section,
        getScopeAccessor(binding),
        getDeclaredBindingExpression(binding),
        true,
      );
    }
  });

  for (let i = allSignals.length; i--; ) {
    if (allSignals[i].effect.length) {
      const signalRefs = allSignals[i].referencedBindings;
      body.push(
        t.expressionStatement(
          callRuntime(
            "writeEffect",
            scopeIdIdentifier,
            t.stringLiteral(getResumeRegisterId(section, signalRefs)),
          ),
        ),
      );
    }
  }

  const serializedLookup = getSerializedScopeProperties(section);
  const serializedProperties: t.ObjectProperty[] = [];
  forEach(section.bindings, (binding) => {
    if (binding.serialize && binding.type !== BindingType.dom) {
      const accessor = getScopeAccessor(binding);
      serializedLookup.delete(accessor);
      serializedProperties.push(
        toObjectProperty(accessor, getDeclaredBindingExpression(binding)),
      );
    }
  });

  for (const [key, { expression }] of serializedLookup) {
    serializedProperties.push(toObjectProperty(key, expression));
  }

  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const forceSerializeReason = serializeSectionReason(section);
  if (
    writeScopeBuilder ||
    serializedProperties.length ||
    forceSerializeReason
  ) {
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

    if (!isOptimize()) {
      let debugVars: t.ObjectProperty[] | undefined;
      forEach(section.bindings, (binding) => {
        if (!binding.serialize || binding.type === BindingType.dom) return;

        let root = binding;
        let access = "";
        while (!(root.loc || root.declared) && root.upstreamAlias) {
          if (root.property !== undefined) {
            access = toAccess(root.property) + access;
          }
          root = root.upstreamAlias;
        }

        const locExpr =
          root.loc &&
          t.stringLiteral(
            `${root.loc.start.line}:${root.loc.start.column + 1}`,
          );
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
      });

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
        writeScopeBuilder
          ? writeScopeBuilder(callRuntime("writeScope", ...writeScopeArgs))
          : callRuntime("writeScope", ...writeScopeArgs),
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
      t.expressionStatement(
        callRuntime("resumeClosestBranch", scopeIdIdentifier),
      ),
    );
  }

  const additionalStatements = getHTMLSectionStatements(section);
  if (body.length || additionalStatements.length) {
    body.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(scopeIdIdentifier, callRuntime("nextScopeId")),
      ]),
      ...additionalStatements,
    );
  }

  const returnIdentifier = getSectionReturnValueIdentifier(section);
  if (returnIdentifier !== undefined) {
    body.push(t.returnStatement(returnIdentifier));
  }
}

export function serializeOwners(from: Section, to?: Section) {
  // TODO: need to do this based on sources.
  let cur = from;
  while (cur !== to) {
    const parent = cur.parent;
    if (!parent) break;
    const serialized = getSerializedScopeProperties(cur);
    cur = parent;
    if (!serialized.has("_")) {
      serialized.set("_", {
        expression: callRuntime("ensureScopeWithId", getScopeIdIdentifier(cur)),
        reason: true,
      });
    }
  }
}

export function getSetup(section: Section) {
  return getSignals(section).get(undefined)?.identifier;
}

function replaceRenderNode(node: t.Node) {
  return (
    replaceAssignedNode(node) ||
    replaceBindingReadNode(node) ||
    replaceRegisteredFunctionNode(node)
  );
}

function replaceEffectNode(node: t.Node) {
  return replaceAssignedNode(node) || replaceBindingReadNode(node);
}

function replaceBindingReadNode(node: t.Node) {
  switch (node.type) {
    case "Identifier":
    case "MemberExpression": {
      return getReadReplacement(node);
    }
  }
}

function replaceAssignedNode(node: t.Node) {
  switch (node.type) {
    case "UpdateExpression": {
      const { extra } = node.argument;
      if (isAssignedBindingExtra(extra)) {
        const { buildAssignment } = getSignal(
          extra.assignment.section,
          extra.assignment,
        );
        if (buildAssignment) {
          const replacement = buildAssignment(
            extra.section,
            t.binaryExpression(
              node.operator === "++" ? "+" : "-",
              node.argument,
              t.numericLiteral(1),
            ),
          );

          if (!node.prefix) {
            return t.sequenceExpression([replacement, node.argument]);
          }
          return replacement;
        }
      }
      break;
    }
    case "AssignmentExpression":
      switch (node.left.type) {
        case "Identifier": {
          const { extra } = node.left;
          if (isAssignedBindingExtra(extra)) {
            const { buildAssignment } = getSignal(
              extra.assignment.section,
              extra.assignment,
            );
            if (buildAssignment) {
              return buildAssignment(
                extra.section,
                node.operator === "="
                  ? node.right
                  : t.binaryExpression(
                      node.operator.slice(
                        0,
                        -1,
                      ) as t.BinaryExpression["operator"],
                      node.left as t.Identifier,
                      node.right,
                    ),
              );
            }
          }
          break;
        }
        case "ArrayPattern":
        case "ObjectPattern": {
          let params: undefined | t.Identifier[];
          let assignments: undefined | t.Expression[];
          forEachIdentifier(node.left, (id) => {
            const { extra } = id;
            if (isAssignedBindingExtra(extra)) {
              const signal = getSignal(
                extra.assignment.section,
                extra.assignment,
              );
              if (signal?.buildAssignment) {
                id.name = currentProgramPath.scope.generateUid(id.name);
                (params ||= []).push(t.identifier(id.name));
                (assignments ||= []).push(
                  signal.buildAssignment(extra.section, t.identifier(id.name)),
                );
              }
            }
          });
          if (params && assignments) {
            const resultId = currentProgramPath.scope.generateUid("result");
            return t.callExpression(
              t.arrowFunctionExpression(
                [t.identifier(resultId), ...params],
                t.sequenceExpression([
                  t.assignmentExpression(
                    "=",
                    node.left,
                    t.identifier(resultId),
                  ),
                  ...assignments,
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
    const id = currentProgramPath.scope.generateUid(extra.name);
    const referencesScope = extra.referencesScope;
    const referencedBindings = extra.referencedBindingsInFunction;
    let registedFns = registeredFnsForProgram.get(currentProgramPath.node);
    if (!registedFns) {
      registeredFnsForProgram.set(currentProgramPath.node, (registedFns = []));
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

function getDynamicClosureIndex(closure: Binding, closureSection: Section) {
  let index = 0;
  find(closure.closureSections, (section) => {
    if (section === closureSection) return true;
    if (isDynamicClosure(section, closure)) {
      index++;
    }

    return false;
  });
  return index;
}
