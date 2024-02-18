import { getTemplateId } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar } from "@marko/runtime-tags/common/types";
import { returnId } from "../core/return";
import {
  cleanIdentifier,
  currentProgramPath,
  scopeIdentifier,
} from "../visitors/program";
import { isOutputHTML } from "./marko-config";
import { type Opt, type OneMany, push, forEach } from "./optional";
import type { References } from "./references";
import {
  type Reserve,
  ReserveType,
  getScopeAccessorLiteral,
  reserveUtil,
} from "./reserve";
import { callRuntime } from "./runtime";
import { createScopeReadPattern, getScopeExpression } from "./scope-read";
import {
  type Section,
  createSectionState,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "./sections";

export type subscribeBuilder = (subscriber: t.Expression) => t.Expression;
export type registerScopeBuilder = (scope: t.Expression) => t.Expression;

export type Signal = {
  identifier: t.Identifier;
  valueAccessor?: t.Expression;
  reserve: Opt<Reserve>;
  section: Section;
  build: () => t.Expression;
  register?: boolean;
  isDynamicClosure?: boolean;
  values: Array<{
    signal: {
      identifier: t.Identifier;
      hasDownstreamIntersections: () => boolean;
      buildDeclaration?: () => t.VariableDeclaration;
    };
    value: t.Expression;
    scope: t.Expression;
    intersectionExpression?: t.Expression;
  }>;
  intersection: Opt<t.Expression>;
  render: t.Statement[];
  effect: t.Statement[];
  effectInlineReferences: Opt<Reserve>;
  closures: Map<Section, Signal>;
  hasDownstreamIntersections: () => boolean;
  hasDynamicSubscribers?: true;
};

const [getSignals] = createSectionState<Map<unknown, Signal>>(
  "signals",
  () => new Map(),
);
const [getSubscribeBuilder, _setSubscribeBuilder] = createSectionState<
  subscribeBuilder | undefined
>("queue");
export function setSubscriberBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: subscribeBuilder,
) {
  _setSubscribeBuilder(getSection(tag.get("body")), builder);
}

export const [getClosures] = createSectionState<t.ArrayExpression["elements"]>(
  "closures",
  () => [],
);
export const addClosure = (
  fromSection: Section,
  toSection: Section,
  closure: t.Expression,
) => {
  let currentSection: Section | undefined = fromSection;
  while (currentSection !== undefined && currentSection !== toSection) {
    getClosures(currentSection).push(closure);
    currentSection = currentSection.parent;
  }
};

const [forceResumeScope, _setForceResumeScope] = createSectionState<
  undefined | true
>("forceResumeScope");
export function setForceResumeScope(section: Section) {
  _setForceResumeScope(section, true);
}
export const [getSerializedScopeProperties] = createSectionState<
  Map<t.StringLiteral | t.NumericLiteral, t.Expression>
>("serializedScopeProperties", () => new Map());

const [getRegisterScopeBuilder, _setRegisterScopeBuilder] = createSectionState<
  registerScopeBuilder | undefined
>("register");
export function setRegisterScopeBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: registerScopeBuilder,
) {
  _setRegisterScopeBuilder(getSection(tag.get("body")), builder);
}

const unimplementedBuild = () => {
  return t.stringLiteral("SIGNAL NOT INITIALIZED");
};

export function getSignal(section: Section, reserve?: OneMany<Reserve>) {
  const signals = getSignals(section);
  let signal = signals.get(reserve)!;
  if (!signal) {
    signals.set(
      reserve,
      (signal = {
        identifier: t.identifier(generateSignalName(section, reserve)),
        reserve,
        section,
        values: [],
        intersection: undefined,
        render: [],
        effect: [],
        effectInlineReferences: undefined,
        subscribers: [],
        closures: new Map(),
        hasDownstreamIntersections: () => {
          if (
            signal.intersection ||
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
        build: unimplementedBuild,
      } as Signal),
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
          getSignalFn(signal, [scopeIdentifier], reserve),
        );
      };
    } else if (reserve.section !== section) {
      const provider = getSignal(reserve.section, reserve);
      addClosure(section, reserve.section, signal.identifier);
      provider.closures.set(section, signal);
      signal.build = () => {
        const builder = getSubscribeBuilder(section);
        const ownerScope = getScopeExpression(section, reserve.section);
        const isImmediateOwner =
          (ownerScope as t.MemberExpression).object === scopeIdentifier;
        const isDynamicClosure = (signal.isDynamicClosure = !(
          isImmediateOwner && builder
        ));
        return callRuntime(
          isDynamicClosure ? "dynamicClosure" : "closure",
          getScopeAccessorLiteral(reserve),
          getSignalFn(signal, [scopeIdentifier, t.identifier(reserve.name)]),
          isImmediateOwner
            ? null
            : t.arrowFunctionExpression([scopeIdentifier], ownerScope),
          buildSignalIntersections(signal),
          buildSignalValuesWithIntersections(signal),
        );
      };
    }
  }
  return signal;
}

export function initValue(
  reserve: Reserve,
  valueAccessor = getScopeAccessorLiteral(reserve),
) {
  const section = reserve.section;
  const signal = getSignal(section, reserve);
  signal.build = () => {
    const fn = getSignalFn(signal, [
      scopeIdentifier,
      t.identifier(reserve.name),
    ]);
    const intersections = buildSignalIntersections(signal);
    const valuesWithIntersections = buildSignalValuesWithIntersections(signal);
    if (
      (fn.body as t.BlockStatement).body.length > 0 ||
      intersections ||
      valuesWithIntersections
    ) {
      return callRuntime(
        "value",
        valueAccessor,
        fn,
        intersections,
        valuesWithIntersections,
      );
    } else {
      return fn;
    }
  };
  signal.valueAccessor = valueAccessor;
  return signal;
}

export function getSignalFn(
  signal: Signal,
  params: Array<t.Identifier | t.Pattern>,
  references?: References,
) {
  const section = signal.section;

  for (const value of signal.values) {
    signal.render.push(
      t.expressionStatement(
        t.callExpression(value.signal.identifier, [value.scope, value.value]),
      ),
    );
  }

  if (references) {
    signal.render.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          createScopeReadPattern(section, references),
          scopeIdentifier,
        ),
      ]),
    );
  }

  return t.arrowFunctionExpression(params, t.blockStatement(signal.render));
}

export function buildSignalIntersections(signal: Signal) {
  const section = signal.section;
  let intersections = signal.intersection;

  // In order to ensure correct topological ordering, closures must be called last
  // with closures higher in the tree called before calling closures lower in the tree
  // TODO: use a repeatable of signals sorted by section
  const closureEntries = Array.from(signal.closures.entries()).sort(
    ([a], [b]) => a.id - b.id,
  );
  for (const [closureSection, closureSignal] of closureEntries) {
    const builder = getSubscribeBuilder(closureSection);
    const isImmediateOwner = closureSection.parent === section;
    if (builder && isImmediateOwner) {
      intersections = push(intersections, builder(closureSignal.identifier));
    } else if (!signal.hasDynamicSubscribers) {
      signal.hasDynamicSubscribers = true;
    }
  }
  if (signal.hasDynamicSubscribers) {
    signal.hasDynamicSubscribers = true;
    intersections = push(
      intersections,
      callRuntime("dynamicSubscribers", signal.valueAccessor),
    );
  }

  return Array.isArray(intersections)
    ? callRuntime("intersections", t.arrayExpression(intersections))
    : intersections;
}

export function buildSignalValuesWithIntersections(signal: Signal) {
  let valuesWithIntersections: Opt<t.Expression>;

  for (const value of signal.values) {
    if (value.signal.hasDownstreamIntersections()) {
      valuesWithIntersections = push(
        valuesWithIntersections,
        value.intersectionExpression ??
          t.identifier(value.signal.identifier.name),
      );
    }
  }

  return Array.isArray(valuesWithIntersections)
    ? callRuntime("values", t.arrayExpression(valuesWithIntersections))
    : valuesWithIntersections;
}

export function getTagVarSignal(varPath: t.NodePath<t.LVal | null>) {
  if (varPath.isIdentifier()) {
    return initValue(varPath.node.extra!.reserve!);
  } else {
    return getDestructureSignal(
      Object.values(varPath.getBindingIdentifiers()) as t.Identifier[],
      varPath.node!,
    )!;
  }
}

export function getTagParamsSignal(
  paramsPaths: t.NodePath<t.Identifier | t.RestElement | t.Pattern>[],
  pattern: t.ArrayPattern = t.arrayPattern(
    paramsPaths.map((path) => path.node!),
  ),
) {
  const parameterBindings = paramsPaths.reduce((bindingsLookup, path) => {
    return Object.assign(bindingsLookup, path.getBindingIdentifiers());
  }, {});
  return getDestructureSignal(parameterBindings, pattern);
}

export function getDestructureSignal(
  bindingsByName: Record<string, t.Identifier> | t.Identifier[],
  destructurePattern: t.LVal,
) {
  const bindings = Array.isArray(bindingsByName)
    ? bindingsByName
    : Object.values(bindingsByName);
  if (bindings.length) {
    const valueIdentifier =
      currentProgramPath.scope.generateUidIdentifier("destructure");
    const bindingSignals = bindings.map((binding) =>
      initValue(binding.extra?.reserve as Reserve),
    );

    const declarations = t.variableDeclaration(
      "let",
      bindings.map((binding) => t.variableDeclarator(binding)),
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
                  bindings[i],
                  cleanIdentifier,
                ]),
              ),
            ),
          ]),
        );
      },
      hasDownstreamIntersections() {
        return bindings.some((binding) => {
          const reserve = binding.extra!.reserve!;
          const signal = getSignal(reserve.section, reserve);
          return signal.hasDownstreamIntersections();
        });
      },
    };
  }
}

export function subscribe(
  provider: undefined | Reserve | Reserve[],
  subscriber: Signal,
) {
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

function generateSignalName(
  section: Section,
  references?: undefined | Reserve | Reserve[],
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

  name += section.name.replace("_", "$");
  return currentProgramPath.scope.generateUid(name);
}

export function queueSource(
  source: Signal,
  value: t.Expression,
  targetSection: Section,
) {
  return callRuntime(
    "queueSource",
    getScopeExpression(targetSection, source.section),
    source.identifier,
    value,
  );
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
  targetSection: Section,
  references: References,
  statement: t.Statement | t.Statement[],
  originalNodes: t.Expression | t.Expression[],
  isInlined?: boolean,
): void;
export function addStatement(
  type: "render",
  targetSection: Section,
  references: References,
  statement: t.Statement | t.Statement[],
): void;
export function addStatement(
  type: "render" | "effect",
  targetSection: Section,
  references: References,
  statement: t.Statement | t.Statement[],
  originalNodes?: t.Expression | t.Expression[],
  isInlined?: boolean,
): void {
  const signal = getSignal(targetSection, references);
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
  targetSection: Section,
  references: References,
  signal: Signal["values"][number]["signal"],
  value: t.Expression,
  scope: t.Expression = scopeIdentifier,
  intersectionExpression?: t.Expression,
) {
  getSignal(targetSection, references).values.push({
    signal,
    value,
    scope,
    intersectionExpression,
  });
}

export function addEffectReferences(signal: Signal, expression: t.Expression) {
  signal.effectInlineReferences = reserveUtil.union(
    signal.effectInlineReferences,
    (expression as t.FunctionExpression).extra?.references,
  );
}

export function getResumeRegisterId(
  section: Section,
  references: string | References,
  type?: string,
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
  return getTemplateId(
    optimize,
    `${filename}_${section.id}${name}${type ? "/" + type : ""}`,
  );
}

export function writeSignals(section: Section) {
  const signals = [...getSignals(section).values()].sort(sortSignals);
  for (const signal of signals) {
    let effectDeclarator;
    if (signal.effect.length) {
      const effectIdentifier = t.identifier(`${signal.identifier.name}_effect`);

      if (signal.effectInlineReferences) {
        signal.effect.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              createScopeReadPattern(section, signal.effectInlineReferences),
              scopeIdentifier,
            ),
          ]),
        );
      }

      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        callRuntime(
          "register",
          t.stringLiteral(getResumeRegisterId(section, signal.reserve)),
          t.arrowFunctionExpression(
            [scopeIdentifier],
            signal.effect.length === 1 &&
              t.isExpressionStatement(signal.effect[0])
              ? signal.effect[0].expression
              : t.blockStatement(signal.effect),
          ),
        ),
      );
      signal.render.push(
        t.expressionStatement(
          callRuntime("queueEffect", scopeIdentifier, effectIdentifier),
        ),
      );
    }

    let value = signal.build();

    if (t.isCallExpression(value)) {
      finalizeSignalArgs(value.arguments as any as t.Expression[]);
    }

    if (signal.register) {
      value = callRuntime(
        "register",
        t.stringLiteral(getResumeRegisterId(section, signal.reserve)),
        value,
      );
    }

    if (signal.isDynamicClosure) {
      value = callRuntime(
        "registerSubscriber",
        t.stringLiteral(
          getResumeRegisterId(section, signal.reserve, "subscriber"),
        ),
        value,
      );
    }

    const signalDeclarator = t.variableDeclarator(signal.identifier, value);
    const roots = currentProgramPath.pushContainer(
      "body",
      effectDeclarator
        ? [
            t.variableDeclaration("const", [effectDeclarator]),
            t.variableDeclaration("const", [signalDeclarator]),
          ]
        : t.variableDeclaration("const", [signalDeclarator]),
    );

    for (const root of roots) {
      root.traverse(bindFunctionsVisitor, { root, section });
    }
  }
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

export function addHTMLEffectCall(section: Section, references?: References) {
  // TODO: this should not add an undefined statement.
  addStatement("effect", section, references, undefined as any, []);
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
  tagVarIdentifier?: t.Identifier,
) {
  const section = getOrCreateSection(path);
  const intersections =
    currentProgramPath.node.extra.intersectionsBySection?.[section.id];
  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);

  let serializedReferences: Opt<Reserve>;

  // TODO: currently reserves do not know what their references are.
  // ideally we calculate that in analyze and use that to find intersections.
  if (intersections) {
    for (const intersection of intersections) {
      for (const reference of intersection) {
        if (reference.type !== ReserveType.Visit) {
          // TODO: this should not be needed
          serializedReferences = reserveUtil.add(
            serializedReferences,
            reference,
          );
        }
      }
    }
  }

  for (let i = allSignals.length; i--; ) {
    if (allSignals[i].effect.length) {
      const signalRefs = allSignals[i].reserve;
      serializedReferences = reserveUtil.union(
        serializedReferences,
        signalRefs,
      );
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

  const accessors = new Set<string | number>();
  const additionalProperties = getSerializedScopeProperties(section);
  const serializedProperties: t.ObjectProperty[] = [];
  forEach(serializedReferences, (ref) => {
    const accessor = getScopeAccessorLiteral(ref);
    if (ref.section.id === section.id) {
      serializedProperties.push(
        t.objectProperty(accessor, t.identifier(ref.name)),
      );
      accessors.add(accessor.value);
    } else {
      const isImmediateOwner = section.parent?.id === ref.section.id;
      // TODO: getSubscribeBuilder is not the right check
      // the builder shouldn't get set for the HTML output
      // we're setting it to an empty builder from if/for purely for this check
      const isDynamicClosure =
        !getSubscribeBuilder(section) || !isImmediateOwner;
      if (isDynamicClosure) {
        path.pushContainer(
          "body",
          t.expressionStatement(
            callRuntime(
              "writeEffect",
              scopeIdIdentifier,
              t.stringLiteral(getResumeRegisterId(section, ref, "subscriber")),
            ),
          ),
        );
      }
      getSerializedScopeProperties(ref.section).set(
        accessor,
        t.identifier(ref.name),
      );
      // TODO: should work recursively for more than one level
      getSerializedScopeProperties(section).set(
        t.stringLiteral("_"),
        callRuntime("serializedScope", getScopeIdIdentifier(ref.section)), // TODO: section.parent
      );
    }
  });

  if (tagVarIdentifier && returnId(section) !== undefined) {
    serializedProperties.push(
      t.objectProperty(
        t.stringLiteral(AccessorChar.TagVariable),
        tagVarIdentifier,
      ),
    );
  }

  for (const [key, value] of additionalProperties) {
    if (!accessors.has(key.value)) {
      serializedProperties.push(
        t.objectProperty(key, value, !t.isLiteral(key)),
      );
      accessors.add(key.value);
    }
  }

  if (serializedProperties.length || forceResumeScope(section)) {
    const builder = getRegisterScopeBuilder(section);
    path.pushContainer(
      "body",
      t.expressionStatement(
        callRuntime(
          "writeScope",
          scopeIdIdentifier,
          builder
            ? builder(t.objectExpression(serializedProperties))
            : t.objectExpression(serializedProperties),
        ),
      ),
    );
  }

  if (path.get("body").length) {
    path.unshiftContainer(
      "body",
      t.variableDeclaration("const", [
        t.variableDeclarator(scopeIdIdentifier, callRuntime("nextScopeId")),
      ]),
    );
  }
}

const bindFunctionsVisitor: t.Visitor<{
  root: t.NodePath<any>;
  section: Section;
}> = {
  FunctionExpression: { exit: bindFunction },
  ArrowFunctionExpression: { exit: bindFunction },
};

function bindFunction(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  { root, section }: { root: t.NodePath<any>; section: Section },
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
      t.variableDeclaration("const", [
        t.variableDeclarator(
          createScopeReadPattern(section, references),
          scopeIdentifier,
        ),
      ]),
    );
  }

  let parent: t.NodePath | null = fn.parentPath;
  while (parent) {
    if (parent.isFunction()) return;
    if (parent === root) return;
    parent = parent.parentPath;
  }

  root.insertBefore(
    t.variableDeclaration("const", [
      t.variableDeclarator(functionIdentifier, node),
    ]),
  );

  node.params.unshift(scopeIdentifier);
  fn.replaceWith(
    callRuntime("bindFunction", scopeIdentifier, functionIdentifier),
  );
}

export function getSetup(section: Section) {
  return getSignals(section).get(undefined)?.identifier;
}
