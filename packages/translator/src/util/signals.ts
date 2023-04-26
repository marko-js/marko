import { types as t } from "@marko/compiler";
import type { References } from "./references";
import {
  getSectionId,
  createSectionState,
  getOrCreateSectionId,
  getScopeIdIdentifier,
  getScopeIdentifier,
} from "./sections";
import {
  Reserve,
  repeatableReserves,
  getNodeLiteral,
  ReserveType,
} from "./reserve";
import {
  currentProgramPath,
  dirtyIdentifier,
  scopeIdentifier,
} from "../visitors/program";
import { callRuntime, callRead } from "./runtime";
import { getTemplateId } from "@marko/babel-utils";
import type { NodePath } from "@marko/compiler/babel-types";
import { returnId } from "../core/return";
import { isOutputHTML } from "./marko-config";

export type subscribeBuilder = (subscriber: t.Expression) => t.Statement;
export type registerScopeBuilder = (scope: t.Expression) => t.Expression;

export type Signal = {
  identifier: t.Identifier;
  reserve: undefined | Reserve | Reserve[];
  sectionId: number;
  build: () => t.Expression;
  register?: boolean;
  values: Array<{
    signal: {
      identifier: t.Identifier;
      hasDownstreamIntersections: () => boolean;
    };
    value: t.Expression;
    scope: t.Expression;
  }>;
  intersectionDeclarations: t.VariableDeclarator[];
  intersection: t.Statement[];
  render: t.Statement[];
  effect: t.Statement[];
  effectInlineReferences: undefined | Reserve | Reserve[];
  closures: Map<number /* sectionId */, Signal>;
  hasDownstreamIntersections: () => boolean;
  hasDynamicSubscribers?: true;
};

/** TODO: temporary location - duplicated from "@marko/runtime-fluurt/src/common/types" */
const enum AccessorChars {
  DYNAMIC = "?",
  MARK = "#",
  STALE = "&",
  SUBSCRIBERS = "*",
  CLEANUP = "-",
  TAG_VARIABLE = "/",
  COND_SCOPE = "!",
  LOOP_SCOPE_ARRAY = "!",
  COND_CONTEXT = "^",
  LOOP_CONTEXT = "^",
  COND_RENDERER = "(",
  LOOP_SCOPE_MAP = "(",
  LOOP_VALUE = ")",
  CONTEXT_VALUE = ":",
}

const [getSignals] = createSectionState<Map<unknown, Signal>>(
  "signals",
  () => new Map()
);
const [getSubscribeBuilder, _setSubscribeBuilder] = createSectionState<
  subscribeBuilder | undefined
>("queue");
export function setSubscriberBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: subscribeBuilder
) {
  _setSubscribeBuilder(getSectionId(tag.get("body")), builder);
}

export const [getClosures] = createSectionState<t.ArrayExpression["elements"]>(
  "closures",
  () => []
);

const [forceResumeScope, _setForceResumeScope] = createSectionState<
  undefined | true
>("forceResumeScope");
export function setForceResumeScope(sectionId: number) {
  _setForceResumeScope(sectionId, true);
}
export const [getSerializedScopeProperties] = createSectionState<
  Map<t.Expression, t.Expression>
>("serializedScopeProperties", () => new Map());

const [getRegisterScopeBuilder, _setRegisterScopeBuilder] = createSectionState<
  registerScopeBuilder | undefined
>("register");
export function setRegisterScopeBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: registerScopeBuilder
) {
  _setRegisterScopeBuilder(getSectionId(tag.get("body")), builder);
}

export function getSignal(sectionId: number, reserve?: Reserve | Reserve[]) {
  const signals = getSignals(sectionId);
  let signal = signals.get(reserve)!;
  if (!signal) {
    signals.set(
      reserve,
      (signal = {
        identifier: t.identifier(generateSignalName(sectionId, reserve)),
        reserve,
        sectionId,
        values: [],
        intersectionDeclarations: [],
        intersection: [],
        render: [],
        effect: [],
        effectInlineReferences: undefined,
        subscribers: [],
        closures: new Map(),
        hasDownstreamIntersections: () => {
          if (
            signal.intersection.length > 0 ||
            signal.closures.size ||
            signal.values.some((v) => v.signal.hasDownstreamIntersections())
          ) {
            signal.hasDownstreamIntersections = () => true;
            return true;
          } else {
            signal.hasDownstreamIntersections = () => false;
            return false;
          }
        },
      } as any as Signal)
    );

    if (isOutputHTML()) {
      return signal;
    } else if (!reserve) {
      signal.build = () => getSignalFn(signal, [scopeIdentifier]);
    } else if (Array.isArray(reserve)) {
      subscribe(reserve, signal);
      signal.build = () => {
        return callRuntime(
          "intersection",
          t.numericLiteral(reserve.length),
          getSignalFn(signal, [scopeIdentifier], reserve)
        );
      };
    } else if (reserve.sectionId !== sectionId) {
      const provider = getSignal(reserve.sectionId, reserve);
      getClosures(sectionId).push(signal.identifier);
      provider.closures.set(sectionId, signal);
      signal.build = () => {
        // TODO: subscribe to an owner multiple levels up
        const builder = getSubscribeBuilder(sectionId);

        return callRuntime(
          // TODO: this should use `closure` for <if> and <for>
          builder ? "closure" : "dynamicClosure",
          // TODO: read from an owner multiple levels up
          getNodeLiteral(reserve),
          getSignalFn(signal, [scopeIdentifier, t.identifier(reserve.name)])
        );
      };
    } else {
      signal.build = () => {
        return t.stringLiteral("SIGNAL NOT INITIALIZED");
      };
    }
  }
  return signal;
}

export function initValue(
  reserve: Reserve,
  valueAccessor = getNodeLiteral(reserve)
) {
  const sectionId = reserve.sectionId;
  const signal = getSignal(sectionId, reserve);
  signal.build = () => {
    const fn = getSignalFn(signal, [
      scopeIdentifier,
      t.identifier(reserve.name),
    ]);
    if ((fn.body as t.BlockStatement).body.length > 0) {
      return callRuntime("value", valueAccessor, fn);
    } else {
      return fn;
    }
  };
  return signal;
}

export function initContextProvider(
  templateId: string,
  reserve: Reserve,
  providers: References,
  compute: t.Expression,
  renderer: t.Identifier
) {
  const sectionId = reserve.sectionId;
  const scopeAccessor = getNodeLiteral(reserve);
  const valueAccessor = t.stringLiteral(
    `${reserve.id}${AccessorChars.CONTEXT_VALUE}`
  );
  const subscribersAccessor = t.stringLiteral(
    `${reserve.id}${AccessorChars.CONTEXT_VALUE}${AccessorChars.SUBSCRIBERS}`
  );

  const signal = initValue(reserve, valueAccessor);
  addValue(sectionId, providers, signal, compute);
  signal.intersection.push(
    t.expressionStatement(
      callRuntime(
        "dynamicSubscribers",
        t.memberExpression(scopeIdentifier, subscribersAccessor, true),
        dirtyIdentifier
      )
    )
  );

  addStatement(
    "render",
    reserve.sectionId,
    undefined,
    t.expressionStatement(
      callRuntime(
        "initContextProvider",
        scopeIdentifier,
        scopeAccessor,
        valueAccessor,
        t.stringLiteral(templateId),
        renderer
      )
    )
  );

  return signal;
}

export function initContextConsumer(templateId: string, reserve: Reserve) {
  const sectionId = reserve.sectionId;
  const signal = getSignal(sectionId, reserve);
  getClosures(sectionId).push(signal.identifier);
  signal.build = () => {
    return callRuntime(
      "contextClosure",
      getNodeLiteral(reserve),
      t.stringLiteral(templateId),
      getSignalFn(signal, [scopeIdentifier, t.identifier(reserve.name)])
    );
  };

  return signal;
}

export function addIntersectionWithGuardedValue(
  signal: Signal,
  name: string,
  value: t.Expression,
  getStatement: (i: t.Identifier) => t.Statement
) {
  const valueIdentifier = currentProgramPath.scope.generateUidIdentifier(name);
  signal.render.push(
    t.expressionStatement(t.assignmentExpression("=", valueIdentifier, value))
  );
  signal.intersection.push(getStatement(valueIdentifier));
  signal.intersectionDeclarations.push(t.variableDeclarator(valueIdentifier));
}

export function getSignalFn(
  signal: Signal,
  params: Array<t.Identifier | t.Pattern>,
  references?: References
) {
  const isSetup = !signal.reserve;
  const sectionId = signal.sectionId;
  const needsDirty = !isSetup && signal.hasDownstreamIntersections();
  let statements;

  for (const value of signal.values) {
    const callee = value.signal.identifier;
    const needsDirty = !isSetup && value.signal.hasDownstreamIntersections();
    if (needsDirty) {
      addIntersectionWithGuardedValue(
        signal,
        callee.name + "_value",
        value.value,
        (valueIdentifier) => {
          return t.expressionStatement(
            t.callExpression(callee, [
              value.scope,
              valueIdentifier,
              dirtyIdentifier,
            ])
          );
        }
      );
    } else {
      signal.render.push(
        t.expressionStatement(
          t.callExpression(callee, [value.scope, value.value])
        )
      );
    }
  }

  // In order to ensure correct topological ordering, closures must be called last
  // with closures higher in the tree called before calling closures lower in the tree
  const closureEntries = Array.from(signal.closures.entries()).sort(
    ([a], [b]) => a - b
  );
  for (const [closureSectionId, closureSignal] of closureEntries) {
    const builder = getSubscribeBuilder(closureSectionId);
    if (builder) {
      signal.intersection.push(builder(closureSignal.identifier));
    } else if (!signal.hasDynamicSubscribers) {
      const dynamicSubscribersKey = getNodeLiteral(
        closureSignal.reserve as Reserve
      );
      dynamicSubscribersKey.value += AccessorChars.SUBSCRIBERS;
      signal.hasDynamicSubscribers = true;
      signal.intersection.push(
        t.expressionStatement(
          callRuntime(
            "dynamicSubscribers",
            t.memberExpression(scopeIdentifier, dynamicSubscribersKey, true),
            dirtyIdentifier
          )
        )
      );
    }
  }

  if (Array.isArray(references)) {
    signal.render.unshift(
      t.variableDeclaration(
        "const",
        references.map((binding) =>
          t.variableDeclarator(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        )
      )
    );
  } else if (references) {
    signal.render.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(references.name),
          callRead(references, sectionId)
        ),
      ])
    );
  }

  if (needsDirty) {
    params.push(dirtyIdentifier);
    if (signal.render.length) {
      statements = [
        t.ifStatement(dirtyIdentifier, t.blockStatement(signal.render)),
        ...signal.intersection,
      ];
      if (signal.intersectionDeclarations.length) {
        statements.unshift(
          t.variableDeclaration("let", signal.intersectionDeclarations)
        );
      }
    } else {
      statements = signal.intersection;
    }
  } else {
    statements = signal.render;
  }

  return t.arrowFunctionExpression(params, t.blockStatement(statements));
}

export function getTagVarSignal(varPath: NodePath<t.LVal | null>) {
  if (varPath.isIdentifier()) {
    return initValue(varPath.node.extra.reserve!);
  } else {
    return getDestructureSignal(
      Object.values(varPath.getBindingIdentifiers()) as t.Identifier[],
      varPath.node!
    )!;
  }
}

export function getTagParamsSignal(
  paramsPaths: NodePath<t.Identifier | t.RestElement | t.Pattern>[],
  pattern: t.ArrayPattern = t.arrayPattern(
    paramsPaths.map((path) => path.node!)
  )
) {
  const parameterBindings = paramsPaths.reduce((bindingsLookup, path) => {
    return Object.assign(bindingsLookup, path.getBindingIdentifiers());
  }, {});
  return getDestructureSignal(parameterBindings, pattern);
}

export function getDestructureSignal(
  bindingsByName: Record<string, t.Identifier> | t.Identifier[],
  destructurePattern: t.LVal
) {
  const bindings = Array.isArray(bindingsByName)
    ? bindingsByName
    : Object.values(bindingsByName);
  if (bindings.length) {
    const valueIdentifier =
      currentProgramPath.scope.generateUidIdentifier("destructure");
    const bindingSignals = bindings.map((binding) =>
      initValue(binding.extra?.reserve as Reserve)
    );

    const declarations = t.variableDeclaration(
      "let",
      bindings.map((binding) => t.variableDeclarator(binding))
    );

    return {
      get identifier() {
        const name =
          currentProgramPath.scope.generateUidIdentifier("destructure");
        currentProgramPath.pushContainer("body", [
          t.variableDeclaration("const", [
            t.variableDeclarator(name, this.build(true)),
          ]),
        ]);
        return name;
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
                    bindings[i],
                  ])
                )
              )
            )
          );
        }
        return t.arrowFunctionExpression(
          [
            scopeIdentifier,
            valueIdentifier,
            t.assignmentPattern(dirtyIdentifier, t.booleanLiteral(true)),
          ],
          t.blockStatement([
            declarations,
            t.ifStatement(
              dirtyIdentifier,
              t.expressionStatement(
                t.assignmentExpression("=", destructurePattern, valueIdentifier)
              )
            ),
            ...bindingSignals.map((signal, i) =>
              t.expressionStatement(
                t.callExpression(signal.identifier, [
                  scopeIdentifier,
                  bindings[i],
                  dirtyIdentifier,
                ])
              )
            ),
          ])
        );
      },
      hasDownstreamIntersections() {
        return bindings.some((binding) => {
          const reserve = binding.extra?.reserve as Reserve;
          const signal = getSignal(reserve.sectionId, reserve);
          return signal.hasDownstreamIntersections();
        });
      },
    };
  }
}

export function subscribe(
  provider: undefined | Reserve | Reserve[],
  subscriber: Signal
) {
  if (Array.isArray(provider)) {
    provider.forEach((p) => subscribe(p, subscriber));
    return;
  }
  const providerSignal = getSignal(subscriber.sectionId, provider);
  providerSignal.intersection.push(
    t.expressionStatement(
      t.callExpression(subscriber.identifier, [
        scopeIdentifier,
        dirtyIdentifier,
      ])
    )
  );
}

function generateSignalName(
  sectionId: number,
  references?: undefined | Reserve | Reserve[]
) {
  let name;

  if (references) {
    if (Array.isArray(references)) {
      name = "expr";
      for (const ref of references) {
        name += `_${ref.name}`;
      }
    } else {
      name = references.name;
    }
  } else {
    name = "setup";
  }

  name += sectionId
    ? currentProgramPath.node.extra.sectionNames![sectionId].replace("_", "$")
    : "";

  return currentProgramPath.scope.generateUid(name);
}

export function queueSource(
  source: Signal,
  value: t.Expression,
  targetSectionId: number
) {
  return callRuntime(
    "queueSource",
    getScopeExpression(source.sectionId, targetSectionId),
    source.identifier,
    value
  );
}

function getScopeExpression(ownerSectionId: number, sectionId: number) {
  const diff = ownerSectionId !== sectionId ? 1 : 0;
  let scope: t.Expression = scopeIdentifier;
  for (let i = 0; i < diff; i++) {
    scope = t.memberExpression(scope, t.identifier("_"));
  }
  return scope;
}

export function finalizeSignalArgs(args: t.Expression[]) {
  for (let i = args.length - 1; i >= 0; i--) {
    const arg = args[i];
    if (t.isArrowFunctionExpression(arg)) {
      const body = (arg.body as t.BlockStatement).body;
      if (body) {
        if (body.length === 0) {
          args[i] = t.nullLiteral();
        } else if (body.length === 1 && t.isExpressionStatement(body[0])) {
          arg.body = body[0].expression;
        }
      }
    }
  }

  for (let i = args.length - 1; t.isNullLiteral(args[i]); ) {
    args.length = i--;
  }
}
export function addStatement(
  type: "effect",
  targetSectionId: number,
  references: References,
  statement: t.Statement | t.Statement[],
  originalNodes: t.Expression | t.Expression[],
  isInlined?: boolean
): void;
export function addStatement(
  type: "render",
  targetSectionId: number,
  references: References,
  statement: t.Statement | t.Statement[]
): void;
export function addStatement(
  type: "render" | "effect",
  targetSectionId: number,
  references: References,
  statement: t.Statement | t.Statement[],
  originalNodes?: t.Expression | t.Expression[],
  isInlined?: boolean
): void {
  const signal = getSignal(targetSectionId, references);
  const statements = (signal[type] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }

  if (type === "effect") {
    if (Array.isArray(originalNodes)) {
      for (const node of originalNodes) {
        if (isInlined || !t.isFunction(node)) {
          addEffectReferences(signal, node);
        }
      }
    } else {
      if (isInlined || !t.isFunction(originalNodes)) {
        addEffectReferences(signal, originalNodes!);
      }
    }
  }
}

export function addValue(
  targetSectionId: number,
  references: References,
  signal: Signal["values"][number]["signal"],
  value: t.Expression,
  scope: t.Expression = scopeIdentifier
) {
  getSignal(targetSectionId, references).values.push({ signal, value, scope });
}

export function addEffectReferences(signal: Signal, expression: t.Expression) {
  signal.effectInlineReferences = repeatableReserves.addAll(
    signal.effectInlineReferences,
    (expression as t.FunctionExpression).extra?.references
  );
}

export function getResumeRegisterId(
  sectionId: number,
  references: string | References
) {
  const {
    markoOpts: { optimize },
    opts: { filename },
  } = currentProgramPath.hub.file;
  let name = "";
  if (references) {
    if (typeof references === "string") {
      name += `_${references}`;
    } else if (Array.isArray(references)) {
      for (const ref of references) {
        name += `_${ref.name}`;
      }
    } else {
      name += `_${references.name}`;
    }
  }
  return getTemplateId(optimize, `${filename}_${sectionId}${name}`);
}

export function writeSignals(sectionId: number) {
  const signals = getSignals(sectionId);
  const declarations = Array.from(signals.values())
    .sort(sortSignals)
    .flatMap((signal) => {
      let effectDeclarator;
      if (signal.effect.length) {
        const effectIdentifier = t.identifier(
          `${signal.identifier.name}_effect`
        );

        if (signal.effectInlineReferences) {
          signal.effect.unshift(
            t.variableDeclaration(
              "const",
              repeatableReserves.toArray(
                signal.effectInlineReferences,
                (binding) =>
                  t.variableDeclarator(
                    t.identifier(binding.name),
                    callRead(binding, sectionId)
                  )
              )
            )
          );
        }

        effectDeclarator = t.variableDeclarator(
          effectIdentifier,
          callRuntime(
            "register",
            t.stringLiteral(getResumeRegisterId(sectionId, signal.reserve)),
            t.arrowFunctionExpression(
              [scopeIdentifier],
              signal.effect.length === 1 &&
                t.isExpressionStatement(signal.effect[0])
                ? signal.effect[0].expression
                : t.blockStatement(signal.effect)
            )
          )
        );
        signal.render.push(
          t.expressionStatement(
            callRuntime("queueEffect", scopeIdentifier, effectIdentifier)
          )
        );
      }

      let value = signal.build();
      if (signal.register) {
        value = callRuntime(
          "register",
          t.stringLiteral(getResumeRegisterId(sectionId, signal.reserve)),
          value
        );
      }
      if (t.isCallExpression(value)) {
        finalizeSignalArgs(value.arguments as any as t.Expression[]);
      }
      const signalDeclarator = t.variableDeclarator(signal.identifier, value);
      return effectDeclarator
        ? [
            t.variableDeclaration("const", [effectDeclarator]),
            t.variableDeclaration("const", [signalDeclarator]),
          ]
        : t.variableDeclaration("const", [signalDeclarator]);
    });

  const newPaths = currentProgramPath.pushContainer("body", declarations);

  newPaths.forEach((newPath) =>
    newPath.traverse(bindFunctionsVisitor, { root: newPath, sectionId })
  );
}

function sortSignals(a: Signal, b: Signal) {
  const aReserves = getReserves(a);
  const bReserves = getReserves(b);

  for (let i = Math.max(aReserves.length, bReserves.length) - 1; i >= 0; i--) {
    const diff = (bReserves[i] ?? -1) - (aReserves[i] ?? -1);
    if (diff !== 0) return diff;
  }

  return 0;
}

function getReserves({ reserve }: Signal) {
  if (!reserve) {
    return [];
  } else if (Array.isArray(reserve)) {
    return reserve.map(getMappedId).sort();
  } else {
    return [getMappedId(reserve)];
  }
}

function getMappedId(reserve: Reserve) {
  return (reserve.type === 0 ? 1 : 0) * 10000 + reserve.id;
}

export function addHTMLEffectCall(sectionId: number, references?: References) {
  // TODO: this should not add an undefined statement.
  addStatement("effect", sectionId, references, undefined as any, []);
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
  tagVarIdentifier?: t.Identifier
) {
  const sectionId = getOrCreateSectionId(path);
  const intersections =
    currentProgramPath.node.extra.intersectionsBySection?.[sectionId] ?? [];
  const allSignals = Array.from(getSignals(sectionId).values());
  const scopeIdIdentifier = getScopeIdIdentifier(sectionId);
  const scopeIdentifier = getScopeIdentifier(sectionId, true);

  path.unshiftContainer(
    "body",
    t.variableDeclaration("const", [
      t.variableDeclarator(scopeIdIdentifier, callRuntime("nextScopeId")),
    ])
  );

  const serializedReferences: Reserve[] = [];

  for (const intersection of intersections) {
    for (const reference of intersection) {
      if (reference.type !== ReserveType.Visit) {
        // TODO: this should not be needed
        repeatableReserves.add(serializedReferences, reference);
      }
    }
  }

  for (let i = allSignals.length; i--; ) {
    if (allSignals[i].effect.length) {
      const signalRefs = allSignals[i].reserve;
      repeatableReserves.addAll(serializedReferences, signalRefs);
      path.pushContainer(
        "body",
        t.expressionStatement(
          callRuntime(
            "writeEffect",
            scopeIdIdentifier,
            t.stringLiteral(getResumeRegisterId(sectionId, signalRefs))
          )
        )
      );
    }
  }

  const serializedProperties = serializedReferences.reduce((acc, ref) => {
    acc.push(t.objectProperty(getNodeLiteral(ref), t.identifier(ref.name)));
    return acc;
  }, [] as Array<t.ObjectProperty>);

  if (tagVarIdentifier && returnId(sectionId) !== undefined) {
    serializedProperties.push(
      t.objectProperty(
        t.stringLiteral(AccessorChars.TAG_VARIABLE),
        tagVarIdentifier
      )
    );
  }

  const additionalProperties = getSerializedScopeProperties(sectionId);
  for (const [key, value] of additionalProperties) {
    serializedProperties.push(t.objectProperty(key, value, !t.isLiteral(key)));
  }

  if (serializedProperties.length || forceResumeScope(sectionId)) {
    const isRoot = path.isProgram();
    const builder = getRegisterScopeBuilder(sectionId);
    path.pushContainer(
      "body",
      t.expressionStatement(
        callRuntime(
          "writeScope",
          scopeIdIdentifier,
          builder
            ? builder(t.objectExpression(serializedProperties))
            : t.objectExpression(serializedProperties),
          isRoot ? scopeIdentifier : null
        )
      )
    );
  }
}

const bindFunctionsVisitor: t.Visitor<{
  root: t.NodePath<any>;
  sectionId: number;
}> = {
  FunctionExpression: { exit: bindFunction },
  ArrowFunctionExpression: { exit: bindFunction },
};

function bindFunction(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  { root, sectionId }: { root: t.NodePath<any>; sectionId: number }
) {
  const { node } = fn;
  const { extra } = node;
  const references = extra?.references;
  const program = fn.hub.file.path;
  const functionIdentifier = program.scope.generateUidIdentifier(extra?.name);

  if (references) {
    if (node.body.type !== "BlockStatement") {
      node.body = t.blockStatement([t.returnStatement(node.body)]);
    }

    node.body.body.unshift(
      t.variableDeclaration(
        "const",
        repeatableReserves.toArray(references, (binding) =>
          t.variableDeclarator(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        )
      )
    );
  }

  let parent: NodePath | null = fn.parentPath;
  while (parent) {
    if (parent.isFunction()) return;
    if (parent === root) return;
    parent = parent.parentPath;
  }

  root.insertBefore(
    t.variableDeclaration("const", [
      t.variableDeclarator(functionIdentifier, node),
    ])
  );

  node.params.unshift(scopeIdentifier);
  fn.replaceWith(
    callRuntime("bindFunction", scopeIdentifier, functionIdentifier)
  );
}

export function getSetup(sectionId: number) {
  return getSignals(sectionId).get(undefined)?.identifier;
}
