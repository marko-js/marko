import { getTemplateId } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar } from "@marko/runtime-tags/common/types";
import { returnId } from "../core/return";
import {
  cleanIdentifier,
  currentProgramPath,
  scopeIdentifier,
} from "../visitors/program";
import { isStatefulReferences } from "./is-stateful";
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
      callee?: t.Expression;
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
  export: boolean;
  callee?: t.Expression;
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
    const exportName =
      referencedBindings &&
      !Array.isArray(referencedBindings) &&
      referencedBindings.section === section &&
      referencedBindings.export;

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
        effect: [],
        effectInlineReferences: undefined,
        subscribers: [],
        closures: new Map(),
        hasDownstreamIntersections: () => {
          let hasDownstreamIntersections: boolean = !!(
            signal.intersection || signal.closures.size
          );
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
        section.parent! /*binding.section*/,
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
        );
      };
    }
  }
  return signal;
}

export function initValue(binding: Binding) {
  const valueAccessor = getScopeAccessorLiteral(binding);
  const section = binding.section;
  const signal = getSignal(section, binding);
  signal.build = () => {
    const fn = getSignalFn(signal, [
      scopeIdentifier,
      t.identifier(binding.name),
    ]);
    const intersections = buildSignalIntersections(signal);
    const isParamBinding =
      !binding.upstreamAlias &&
      (binding.type === BindingType.param ||
        binding.type === BindingType.input);
    const isNakedAlias = binding.upstreamAlias && !binding.property;
    const needsGuard =
      !isNakedAlias &&
      (binding.downstreamExpressions.size ||
        (fn.body as t.BlockStatement).body.length > 0);
    const needsCache = needsGuard || intersections;
    const needsMarks = isParamBinding || intersections;
    if (needsCache || needsMarks) {
      return callRuntime("value", valueAccessor, fn, intersections);
    } else {
      return fn;
    }
  };
  signal.valueAccessor = valueAccessor;

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

  if (binding && !Array.isArray(binding) && binding.section === section) {
    const [scopeIdentifier, valueIdentifier] = params as [
      t.Identifier,
      t.Identifier,
    ];
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      signal.render.push(
        t.expressionStatement(
          t.callExpression(aliasSignal.callee || aliasSignal.identifier, [
            scopeIdentifier,
            valueIdentifier,
          ]),
        ),
      );
    }

    for (const [key, alias] of binding.propertyAliases) {
      const aliasSignal = getSignal(alias.section, alias);
      signal.render.push(
        t.expressionStatement(
          t.callExpression(aliasSignal.callee || aliasSignal.identifier, [
            scopeIdentifier,
            toMemberExpression(valueIdentifier, key),
          ]),
        ),
      );
    }
  }

  for (const value of signal.values) {
    signal.render.push(
      t.expressionStatement(
        t.callExpression(value.signal.callee || value.signal.identifier, [
          value.scope,
          value.value,
        ]),
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
  const binding = signal.referencedBindings;

  if (
    binding &&
    !Array.isArray(binding) &&
    binding.section === signal.section
  ) {
    for (const alias of binding.aliases) {
      const signal = getSignal(alias.section, alias);
      if (signal.hasDownstreamIntersections()) {
        intersections = push(
          intersections,
          t.identifier(signal.identifier.name),
        );
      }
    }

    for (const [, alias] of binding.propertyAliases) {
      const signal = getSignal(alias.section, alias);
      if (signal.hasDownstreamIntersections()) {
        intersections = push(
          intersections,
          t.identifier(signal.identifier.name),
        );
      }
    }
  }

  for (const value of signal.values) {
    if (value.signal.hasDownstreamIntersections()) {
      intersections = push(
        intersections,
        value.intersectionExpression ??
          t.identifier(value.signal.identifier.name),
      );
    }
  }

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
                  t.callExpression(signal.callee || signal.identifier, [
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
                t.callExpression(signal.callee || signal.identifier, [
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
  changeBinding?: Binding,
): t.Expression {
  if (!changeBinding) {
    return callRuntime(
      "queueSource",
      getScopeExpression(targetSection, source.section),
      source.identifier,
      value,
    );
  }

  const changeBindingId = t.identifier(changeBinding.name);

  if (changeBinding.upstreamExpression?.static) {
    return t.callExpression(changeBindingId, [value]);
  }
  return callRuntime(
    "queueControllableSource",
    getScopeExpression(targetSection, source.section),
    source.identifier,
    changeBindingId,
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
        "registerBoundSignal",
        t.stringLiteral(
          getResumeRegisterId(section, signal.referencedBindings),
        ),
        value,
      );
    }

    if (
      signal.isDynamicClosure &&
      isStatefulReferences(signal.referencedBindings)
    ) {
      value = callRuntime(
        "registerSubscriber",
        t.stringLiteral(
          getResumeRegisterId(section, signal.referencedBindings, "subscriber"),
        ),
        value,
      );
    }

    const signalDeclarator = t.variableDeclarator(signal.identifier, value);
    let signalDeclaration: t.Statement = t.variableDeclaration("const", [
      signalDeclarator,
    ]);
    if (signal.export) {
      signalDeclaration = t.exportNamedDeclaration(signalDeclaration);
    }
    const roots = currentProgramPath.pushContainer(
      "body",
      effectDeclarator
        ? [
            t.variableDeclaration("const", [effectDeclarator]),
            signalDeclaration,
          ]
        : signalDeclaration,
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

  for (const closure of section.closures) {
    if (isStatefulReferences(closure)) {
      let currentSection = section;
      while (currentSection !== closure.section) {
        getSerializedScopeProperties(currentSection).set(
          t.stringLiteral("_"),
          callRuntime(
            "ensureScopeWithId",
            getScopeIdIdentifier((currentSection = currentSection.parent!)),
          ),
        );
      }
      setForceResumeScope(closure.section);
      const isImmediateOwner = section.parent?.id === closure.section.id;
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
                getResumeRegisterId(section, closure, "subscriber"),
              ),
            ),
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
      serializedProperties.push(
        t.objectProperty(accessor, t.identifier(binding.name)),
      );
      accessors.add(accessor.value);
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
    path.pushContainer(
      "body",
      t.expressionStatement(
        callRuntime(
          "writeScope",
          scopeIdIdentifier,
          t.objectExpression(serializedProperties),
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
  if (!extra) return;
  const { name, referencedBindings } = extra;
  const fnId = fn.hub.file.path.scope.generateUidIdentifier(name);

  root
    .insertBefore(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          fnId,
          t.arrowFunctionExpression(
            [scopeIdentifier],
            referencedBindings
              ? t.blockStatement([
                  t.variableDeclaration("const", [
                    t.variableDeclarator(
                      createScopeReadPattern(section, referencedBindings),
                      scopeIdentifier,
                    ),
                  ]),
                  t.returnStatement(node),
                ])
              : node,
          ),
        ),
      ]),
    )[0]
    .skip();

  fn.replaceWith(t.callExpression(fnId, [scopeIdentifier]))[0].skip();
}

export function getSetup(section: Section) {
  return getSignals(section).get(undefined)?.identifier;
}

function toMemberExpression(value: t.Expression, key: string) {
  const keyLiteral = keyToNode(key);
  return t.memberExpression(
    value,
    keyLiteral,
    keyLiteral.type !== "Identifier",
  );
}

function keyToNode(key: string) {
  if (/^[a-z_$][a-z0-9_$]*$/i.test(key)) {
    return t.identifier(key);
  } else if (/^(?:0|[1-9][0-9]*)$/.test(key)) {
    return t.numericLiteral(parseInt(key, 10));
  }

  return t.stringLiteral(key);
}
