import { types as t } from "@marko/compiler";
import type { ReferenceGroup } from "./references";
import {
  getSectionId,
  createSectionState,
  getOrCreateSectionId,
  getScopeIdIdentifier,
  getScopeIdentifier,
} from "./sections";
import { Reserve, insertReserve, getNodeLiteral, ReserveType } from "./reserve";
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
  hydrate: t.Statement[];
  hydrateInlineReferences: undefined | Reserve | Reserve[];
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
export const [getClosures] = createSectionState<t.ArrayExpression["elements"]>(
  "closures",
  () => []
);

const [forceHydrateScope, _setForceHydrateScope] = createSectionState<
  undefined | true
>("forceHydrateScope");

export const [getSerializedScopeProperties] = createSectionState<
  Map<t.Expression, t.Expression>
>("serializedScopeProperties", () => new Map());

export function setForceHydrateScope(sectionId: number) {
  _setForceHydrateScope(sectionId, true);
}

export function setSubscriberBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: subscribeBuilder
) {
  _setSubscribeBuilder(getSectionId(tag.get("body")), builder);
}

export function getSignal(sectionId: number, reserve?: Reserve | Reserve[]) {
  const key = !Array.isArray(reserve)
    ? reserve
    : reserve
        .map((r) => `${r.sectionId}/${r.id}`)
        .sort()
        .join("-");
  const signals = getSignals(sectionId);
  let signal = signals.get(key)!;
  if (!signal) {
    signals.set(
      key,
      (signal = {
        identifier: t.identifier(generateSignalName(sectionId, reserve)),
        reserve,
        sectionId,
        values: [],
        intersectionDeclarations: [],
        intersection: [],
        render: [],
        hydrate: [],
        hydrateInlineReferences: undefined,
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
  providers: ReferenceGroup | undefined,
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
    "apply",
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
  references?: undefined | Reserve | Reserve[]
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

export function getDestructureSignal(
  bindingsByName: Record<string, t.Identifier>,
  destructurePattern: t.LVal
) {
  const bindings = Object.values(bindingsByName);
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
  type: "hydrate",
  targetSectionId: number,
  references: ReferenceGroup | undefined,
  statement: t.Statement | t.Statement[],
  originalNodes: t.Expression | t.Expression[],
  isInlined?: boolean
): void;
export function addStatement(
  type: "apply" | "intersection",
  targetSectionId: number,
  references: ReferenceGroup | undefined,
  statement: t.Statement | t.Statement[]
): void;
export function addStatement(
  // TODO: rename "apply" to "render"
  type: "apply" | "hydrate" | "intersection",
  targetSectionId: number,
  references: ReferenceGroup | undefined,
  statement: t.Statement | t.Statement[],
  originalNodes?: t.Expression | t.Expression[],
  isInlined?: boolean
): void {
  const reserve = references?.references;
  const signal = getSignal(targetSectionId, reserve);
  const statements = (signal[type === "apply" ? "render" : type] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }

  if (type === "hydrate") {
    if (Array.isArray(originalNodes)) {
      for (const node of originalNodes) {
        if (isInlined || !t.isFunction(node)) {
          addHydrateReferences(signal, node);
        }
      }
    } else {
      if (isInlined || !t.isFunction(originalNodes)) {
        addHydrateReferences(signal, originalNodes!);
      }
    }
  }
}

export function addValue(
  targetSectionId: number,
  references: ReferenceGroup | undefined,
  signal: Signal["values"][number]["signal"],
  value: t.Expression,
  scope: t.Expression = scopeIdentifier
) {
  const reserve = references?.references;
  const targetSignal = getSignal(targetSectionId, reserve);
  targetSignal.values.push({ signal, value, scope });
}

export function addHydrateReferences(signal: Signal, expression: t.Expression) {
  const references = (expression as t.FunctionExpression).extra?.references
    ?.references;
  let refs = signal.hydrateInlineReferences;
  if (references) {
    if (Array.isArray(references)) {
      for (const ref of references) {
        refs = insertReserve(refs, ref);
      }
    } else {
      refs = insertReserve(refs, references as Reserve);
    }
  }
  signal.hydrateInlineReferences = refs;
}

export function getHydrateRegisterId(
  sectionId: number,
  references: string | ReferenceGroup["references"]
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
      let hydrateDeclarator;
      if (signal.hydrate.length) {
        const hydrateIdentifier = t.identifier(
          "_hydrate" + signal.identifier.name
        );

        if (signal.hydrateInlineReferences) {
          signal.hydrate.unshift(
            t.variableDeclaration(
              "const",
              (Array.isArray(signal.hydrateInlineReferences)
                ? signal.hydrateInlineReferences
                : [signal.hydrateInlineReferences]
              ).map((binding) =>
                t.variableDeclarator(
                  t.identifier(binding.name),
                  callRead(binding, sectionId)
                )
              )
            )
          );
        }

        hydrateDeclarator = t.variableDeclarator(
          hydrateIdentifier,
          callRuntime(
            "register",
            t.stringLiteral(getHydrateRegisterId(sectionId, signal.reserve)),
            t.arrowFunctionExpression(
              [scopeIdentifier],
              signal.hydrate.length === 1 &&
                t.isExpressionStatement(signal.hydrate[0])
                ? signal.hydrate[0].expression
                : t.blockStatement(signal.hydrate)
            )
          )
        );
        signal.render.push(
          t.expressionStatement(
            callRuntime("queueHydrate", scopeIdentifier, hydrateIdentifier)
          )
        );
      }

      let value = signal.build();
      if (signal.register) {
        value = callRuntime(
          "register",
          t.stringLiteral(getHydrateRegisterId(sectionId, signal.reserve)),
          value
        );
      }
      if (t.isCallExpression(value)) {
        finalizeSignalArgs(value.arguments as any as t.Expression[]);
      }
      const signalDeclarator = t.variableDeclarator(signal.identifier, value);
      return hydrateDeclarator
        ? [
            t.variableDeclaration("const", [hydrateDeclarator]),
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

export function addHTMLHydrateCall(
  sectionId: number,
  references?: ReferenceGroup
) {
  addStatement("hydrate", sectionId, references, undefined as any, []);
}

export function writeHTMLHydrateStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
  tagVarIdentifier?: t.Identifier
) {
  const sectionId = getOrCreateSectionId(path);
  const referenceGroups =
    currentProgramPath.node.extra.referenceGroups?.[sectionId] ?? [];
  const allSignals = Array.from(getSignals(sectionId).values());
  const scopeIdIdentifier = getScopeIdIdentifier(sectionId);
  const scopeIdentifier = getScopeIdentifier(sectionId, true);

  path.unshiftContainer(
    "body",
    t.variableDeclaration("const", [
      t.variableDeclarator(scopeIdIdentifier, callRuntime("nextScopeId")),
    ])
  );

  const refs: Reserve[] = [];

  for (const { references } of referenceGroups) {
    if (Array.isArray(references)) {
      // TODO: only need to include refs that intersect with stateful refs
      for (const reference of references) {
        if (reference.type !== ReserveType.Visit) {
          insertReserve(refs, reference);
        }
      }
    }
  }

  for (let i = allSignals.length; i--; ) {
    if (allSignals[i].hydrate.length) {
      const references = allSignals[i].reserve;
      if (references) {
        if (Array.isArray(references)) {
          for (const ref of references) {
            insertReserve(refs, ref);
          }
        } else {
          insertReserve(refs, references);
        }
      }
      path.pushContainer(
        "body",
        t.expressionStatement(
          callRuntime(
            "writeHydrateCall",
            scopeIdIdentifier,
            t.stringLiteral(getHydrateRegisterId(sectionId, references))
          )
        )
      );
    }
  }

  const serializedProperties = refs.reduce((acc, ref) => {
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

  if (serializedProperties.length || forceHydrateScope(sectionId)) {
    path.pushContainer(
      "body",
      t.expressionStatement(
        callRuntime(
          "writeHydrateScope",
          scopeIdIdentifier,
          t.objectExpression(serializedProperties),
          scopeIdentifier
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
  const references = extra?.references?.references;
  const program = fn.hub.file.path;
  const functionIdentifier = program.scope.generateUidIdentifier(extra?.name);

  if (references) {
    if (node.body.type !== "BlockStatement") {
      node.body = t.blockStatement([t.returnStatement(node.body)]);
    }

    node.body.body.unshift(
      t.variableDeclaration(
        "const",
        (Array.isArray(references) ? references : [references]).map((binding) =>
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
