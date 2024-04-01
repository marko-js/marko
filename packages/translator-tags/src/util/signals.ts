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
import { type Opt, push } from "./optional";
import {
  BindingType,
  type Binding,
  type ReferencedBindings,
  bindingUtil,
  getScopeAccessorLiteral,
} from "./references";
import { callRuntime } from "./runtime";
import { createScopeReadPattern, getScopeExpression } from "./scope-read";
import {
  type Section,
  getScopeIdIdentifier,
  getSection,
  hasSection,
} from "./sections";
import { createSectionState } from "./state";

export type subscribeBuilder = (subscriber: t.Expression) => t.Expression;
export type registerScopeBuilder = (scope: t.Expression) => t.Expression;

export type Signal = {
  identifier: t.Identifier;
  valueAccessor?: t.Expression;
  referencedBindings: ReferencedBindings;
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
  effectInlineReferences: ReferencedBindings;
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

export function getSignal(
  section: Section,
  referencedBindings: ReferencedBindings,
  name: string = generateSignalName(referencedBindings),
) {
  const signals = getSignals(section);
  let signal = signals.get(referencedBindings)!;
  if (!signal) {
    signals.set(
      referencedBindings,
      (signal = {
        identifier: currentProgramPath.scope.generateUidIdentifier(
          name + section.name.replace("_", "$"),
        ),
        referencedBindings,
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
    } else if (!referencedBindings) {
      signal.build = () => getSignalFn(signal, [scopeIdentifier]);
    } else if (Array.isArray(referencedBindings)) {
      subscribe(referencedBindings, signal);
      signal.build = () => {
        return callRuntime(
          "intersection",
          t.numericLiteral(referencedBindings.length),
          getSignalFn(signal, [scopeIdentifier], referencedBindings),
        );
      };
    } else if (referencedBindings.section !== section) {
      const provider = getSignal(
        referencedBindings.section,
        referencedBindings,
      );
      addClosure(
        section,
        section.parent! /*reserve.section*/,
        signal.identifier,
      );
      provider.closures.set(section, signal);
      signal.build = () => {
        const builder = getSubscribeBuilder(section);
        const ownerScope = getScopeExpression(
          section,
          referencedBindings.section,
        );
        const isImmediateOwner =
          (ownerScope as t.MemberExpression).object === scopeIdentifier;
        const isDynamicClosure = (signal.isDynamicClosure = !(
          isImmediateOwner && builder
        ));
        return callRuntime(
          isDynamicClosure ? "dynamicClosure" : "closure",
          getScopeAccessorLiteral(referencedBindings),
          getSignalFn(signal, [
            scopeIdentifier,
            t.identifier(referencedBindings.name),
          ]),
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
  binding: Binding,
  valueAccessor = getScopeAccessorLiteral(binding),
) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  signal.build = () => {
    const fn = getSignalFn(signal, [
      scopeIdentifier,
      t.identifier(binding.name),
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
  referencedBindings?: ReferencedBindings,
) {
  const section = signal.section;

  for (const value of signal.values) {
    signal.render.push(
      t.expressionStatement(
        t.callExpression(value.signal.identifier, [value.scope, value.value]),
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
    return initValue(varPath.node.extra!.binding!);
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
                  cleanIdentifier,
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
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
  originalNodes: t.Expression | t.Expression[],
  isInlined?: boolean,
): void;
export function addStatement(
  type: "render",
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
): void;
export function addStatement(
  type: "render" | "effect",
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
  originalNodes?: t.Expression | t.Expression[],
  isInlined?: boolean,
): void {
  const signal = getSignal(targetSection, referencedBindings);
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
  referencedBindings: ReferencedBindings,
  signal: Signal["values"][number]["signal"],
  value: t.Expression,
  scope: t.Expression = scopeIdentifier,
  intersectionExpression?: t.Expression,
) {
  getSignal(targetSection, referencedBindings).values.push({
    signal,
    value,
    scope,
    intersectionExpression,
  });
}

export function addEffectReferences(signal: Signal, expression: t.Expression) {
  signal.effectInlineReferences = bindingUtil.union(
    signal.effectInlineReferences,
    expression.extra?.referencedBindings,
  );
}

export function getResumeRegisterId(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  const {
    markoOpts: { optimize },
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
          t.stringLiteral(
            getResumeRegisterId(section, signal.referencedBindings),
          ),
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
        t.stringLiteral(
          getResumeRegisterId(section, signal.referencedBindings),
        ),
        value,
      );
    }

    if (signal.isDynamicClosure) {
      value = callRuntime(
        "registerSubscriber",
        t.stringLiteral(
          getResumeRegisterId(section, signal.referencedBindings, "subscriber"),
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
  addStatement("effect", section, referencedBindings, undefined as any, []);
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
  tagVarIdentifier?: t.Identifier,
) {
  if (!hasSection(path)) return;

  const section = getSection(path);
  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);
  const closures = section.closures;

  if (closures) {
    for (const closure of closures) {
      let currentSection = section;
      while (currentSection !== closure.section) {
        getSerializedScopeProperties(currentSection).set(
          t.stringLiteral("_"),
          callRuntime(
            "serializedScope",
            getScopeIdIdentifier((currentSection = currentSection.parent!)),
          ),
        );
      }
    }
  }

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

  const accessors = new Set<string | number>();
  const additionalProperties = getSerializedScopeProperties(section);
  const serializedProperties: t.ObjectProperty[] = [];
  section.bindings.forEach((binding) => {
    if (binding.serialize && binding.type !== BindingType.dom) {
      const accessor = getScopeAccessorLiteral(binding);
      if (binding.section.id === section.id) {
        serializedProperties.push(
          t.objectProperty(accessor, t.identifier(binding.name)),
        );
        accessors.add(accessor.value);
      } else {
        const isImmediateOwner = section.parent?.id === binding.section.id;
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
                t.stringLiteral(
                  getResumeRegisterId(section, binding, "subscriber"),
                ),
              ),
            ),
          );
        }
        getSerializedScopeProperties(binding.section).set(
          accessor,
          t.identifier(binding.name),
        );
      }
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
  const referencedBindings = extra?.referencedBindings;
  const program = fn.hub.file.path;
  const functionIdentifier = program.scope.generateUidIdentifier(extra?.name);

  if (referencedBindings) {
    if (node.body.type !== "BlockStatement") {
      node.body = t.blockStatement([t.returnStatement(node.body)]);
    }

    node.body.body.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          createScopeReadPattern(section, referencedBindings),
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
