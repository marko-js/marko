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
import { forEachIdentifier } from "./for-each-identifier";
import { getDeclaredBindingExpression } from "./get-defined-binding-expression";
import { isStatefulReferences } from "./is-stateful";
import { isOptimize, isOutputHTML } from "./marko-config";
import { find, forEach, type Opt, push } from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  getReadReplacement,
  getScopeAccessor,
  getScopeAccessorLiteral,
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
  closures: Map<Section, Signal>;
  hasDownstreamIntersections: () => boolean;
  hasDynamicSubscribers?: true;
  export: boolean;
  extraArgs?: t.Expression[];
  buildAssignment?: (
    valueSection: Section,
    value: t.Expression,
  ) => t.Expression;
};

type closureSignalBuilder = (
  signal: Signal,
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

const [forceResumeScope, _setForceResumeScope] = createSectionState<
  undefined | true
>("forceResumeScope");
export function setForceResumeScope(section: Section) {
  _setForceResumeScope(section, true);
}
const [getSerializedScopeProperties] = createSectionState<
  Map<string, t.Expression>
>("serializedScopeProperties", () => new Map());
export function setSerializedProperty(
  section: Section,
  key: string,
  value: t.Expression,
) {
  getSerializedScopeProperties(section).set(key, value);
}
export const [getHTMLSectionStatements] = createSectionState<t.Statement[]>(
  "htmlScopeStatements",
  () => [],
);

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
        closures: new Map(),
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
      signal.build = () => getSignalFn(signal, [scopeIdentifier]);
    } else if (Array.isArray(referencedBindings)) {
      subscribe(referencedBindings, signal);
      signal.build = () => {
        const { id, scopeOffset } = intersectionMeta.get(referencedBindings)!;
        return callRuntime(
          "intersection",
          t.numericLiteral(id),
          getSignalFn(signal, [scopeIdentifier], referencedBindings),
          scopeOffset || referencedBindings.length > 2
            ? t.numericLiteral(referencedBindings.length - 1)
            : undefined,
          scopeOffset && getScopeAccessorLiteral(scopeOffset),
        );
      };
    } else if (
      referencedBindings.section !== section &&
      bindingUtil.find(section.closures, referencedBindings)
    ) {
      getSignal(referencedBindings.section, referencedBindings).closures.set(
        section,
        signal,
      );
      signal.build = () => {
        const builder = getClosureSignalBuilder(section);
        const ownerScope = getScopeExpression(
          section,
          referencedBindings.section,
        );
        const isImmediateOwner =
          (ownerScope as t.MemberExpression).object === scopeIdentifier;
        const isDynamicClosure = !isImmediateOwner || !builder;
        const render = getSignalFn(signal, [
          scopeIdentifier,
          t.identifier(referencedBindings.name),
        ]);
        return isDynamicClosure
          ? isStatefulReferences(referencedBindings)
            ? callRuntime(
                "registerDynamicClosure",
                t.stringLiteral(
                  getResumeRegisterId(
                    section,
                    signal.referencedBindings,
                    "subscriber",
                  ),
                ),
                getScopeAccessorLiteral(referencedBindings),
                render,
                isImmediateOwner
                  ? undefined
                  : t.arrowFunctionExpression([scopeIdentifier], ownerScope),
              )
            : callRuntime(
                "dynamicClosure",
                getScopeAccessorLiteral(referencedBindings),
                render,
                isImmediateOwner
                  ? undefined
                  : t.arrowFunctionExpression([scopeIdentifier], ownerScope),
              )
          : builder(signal, render);
      };
      addStatement(
        "render",
        section,
        undefined,
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(signal.identifier, t.identifier("_")),
            [scopeIdentifier],
          ),
        ),
      );
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
    const fn = getSignalFn(signal, [
      scopeIdentifier,
      t.identifier(binding.name),
    ]);
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
    if (needsCache || needsMarks) {
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

export function getSignalFn(
  signal: Signal,
  params: Array<t.Identifier | t.Pattern>,
  referencedBindings?: ReferencedBindings,
) {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const [scopeIdentifier, valueIdentifier] = params as [
    t.Identifier,
    t.Identifier,
  ];
  const isValueSignal =
    binding && !Array.isArray(binding) && binding.section === section;

  if (isValueSignal) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      signal.render.push(
        t.expressionStatement(
          t.callExpression(aliasSignal.identifier, [
            scopeIdentifier,
            valueIdentifier,
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
            toMemberExpression(valueIdentifier, key, binding.nullable),
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

  if (isValueSignal) {
    const closureEntries = Array.from(signal.closures.entries()).sort(
      ([a], [b]) => a.id - b.id,
    );
    for (const [_closureSection, closureSignal] of closureEntries) {
      if (isStatefulReferences(closureSignal.referencedBindings)) {
        signal.render.push(
          t.expressionStatement(
            t.callExpression(closureSignal.identifier, [scopeIdentifier]),
          ),
        );
      }
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

  if (referencedBindings) {
    signal.render.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          createScopeReadPattern(section, referencedBindings),
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
          currentProgramPath.pushContainer("body", [
            t.variableDeclaration("const", [
              t.variableDeclarator(id, this.build(true)),
            ]),
          ]);
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
  getSignal(targetSection, referencedBindings).values.push({
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
    currentProgramPath.pushContainer(
      "body",
      effectDeclarator
        ? [
            t.variableDeclaration("const", [effectDeclarator]),
            signalDeclaration,
          ]
        : signalDeclaration,
    );
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

    for (const stmt of currentProgramPath.pushContainer("body", statements)) {
      stmt.skip();
    }
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

  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);

  forEach(section.assignments, (assignment) => {
    let currentSection = section;
    while (currentSection !== assignment.section) {
      const currentSerialized = getSerializedScopeProperties(currentSection);
      currentSection = currentSection.parent!;
      if (!currentSerialized.has("_")) {
        currentSerialized.set(
          "_",
          callRuntime(
            "ensureScopeWithId",
            getScopeIdIdentifier(currentSection),
          ),
        );
      }
    }
  });

  forEach(section.closures, (closure) => {
    if (isStatefulReferences(closure)) {
      let currentSection = section;
      while (currentSection !== closure.section) {
        const currentSerialized = getSerializedScopeProperties(currentSection);
        currentSection = currentSection.parent!;
        if (!currentSerialized.has("_")) {
          currentSerialized.set(
            "_",
            callRuntime(
              "ensureScopeWithId",
              getScopeIdIdentifier(currentSection),
            ),
          );
        }
      }
      setForceResumeScope(closure.section);
      const isImmediateOwner = section.parent?.id === closure.section.id;
      // TODO: getClosureSignalBuilder is not the right check
      // the builder shouldn't get set for the HTML output
      // we're setting it to an empty builder from if/for purely for this check
      const isDynamicClosure =
        !getClosureSignalBuilder(section) || !isImmediateOwner;
      if (isDynamicClosure) {
        path.pushContainer(
          "body",
          t.expressionStatement(
            callRuntime(
              "writeEffect",
              scopeIdIdentifier,
              t.stringLiteral(
                getResumeRegisterId(section, closure, "subscriber"),
              ),
            ),
          ),
        );
      }
    }
  });

  for (let i = allSignals.length; i--; ) {
    if (allSignals[i].effect.length) {
      const signalRefs = allSignals[i].referencedBindings;
      path.pushContainer(
        "body",
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

  for (const [key, value] of serializedLookup) {
    serializedProperties.push(toObjectProperty(key, value));
  }

  if (serializedProperties.length || forceResumeScope(section)) {
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
    path.pushContainer(
      "body",
      t.expressionStatement(callRuntime("writeScope", ...writeScopeArgs)),
    );
  }

  const resumeClosestBranch =
    !section.isBranch &&
    (section.hasAbortSignal ||
      !!section.closures ||
      !!find(section.bindings, (binding) => binding.type === BindingType.let));

  if (resumeClosestBranch) {
    path.pushContainer(
      "body",
      t.expressionStatement(
        callRuntime("resumeClosestBranch", scopeIdIdentifier),
      ),
    );
  }

  const additionalStatements = getHTMLSectionStatements(section);
  if (path.get("body").length || additionalStatements.length) {
    path.unshiftContainer("body", [
      t.variableDeclaration("const", [
        t.variableDeclarator(scopeIdIdentifier, callRuntime("nextScopeId")),
      ]),
      ...additionalStatements,
    ]);
  }

  const returnIdentifier = getSectionReturnValueIdentifier(section);
  if (returnIdentifier !== undefined) {
    path.pushContainer("body", t.returnStatement(returnIdentifier));
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
