import { getTemplateId } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar } from "@marko/runtime-tags/common/types";

import { returnId } from "../core/return";
import {
  cleanIdentifier,
  currentProgramPath,
  scopeIdentifier,
} from "../visitors/program";
import { getDeclaredBindingExpression } from "./get-defined-binding-expression";
import { isStatefulReferences } from "./is-stateful";
import { isOutputHTML } from "./marko-config";
import { forEach, type Opt, push } from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  getScopeAccessorLiteral,
  type ReferencedBindings,
} from "./references";
import { callRuntime } from "./runtime";
import { createScopeReadPattern, getScopeExpression } from "./scope-read";
import {
  getScopeIdIdentifier,
  getSectionForBody,
  type Section,
} from "./sections";
import { createSectionState } from "./state";
import { toMemberExpression } from "./to-property-name";
import withPreviousLocation from "./with-previous-location";

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
      identifier: t.Identifier | t.MemberExpression;
      hasDownstreamIntersections: () => boolean;
      buildDeclaration?: () => t.VariableDeclaration;
      extraArgs?: t.Expression[];
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
  extraArgs?: t.Expression[];
  buildAssignment?: (
    valueSection: Section,
    value: t.Expression,
  ) => t.Expression;
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
  _setSubscribeBuilder(getSectionForBody(tag.get("body"))!, builder);
}

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
          buildSignalIntersections(signal),
        );
      };
    } else if (referencedBindings.section !== section) {
      getSignal(referencedBindings.section, referencedBindings).closures.set(
        section,
        signal,
      );
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

export function initValue(
  binding: Binding,
  runtimeHelper: "value" | "state" = "value",
) {
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
      return callRuntime(runtimeHelper, valueAccessor, fn, intersections);
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
          t.callExpression(aliasSignal.identifier, [
            scopeIdentifier,
            valueIdentifier,
            ...(aliasSignal.extraArgs || []),
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
            ...(aliasSignal.extraArgs || []),
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
          ...(value.signal.extraArgs || []),
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
          (t.isMemberExpression(value.signal.identifier)
            ? value.signal.identifier
            : t.identifier(value.signal.identifier.name)),
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

  return (
    intersections &&
    t.arrowFunctionExpression(
      [],
      Array.isArray(intersections)
        ? callRuntime("intersections", t.arrayExpression(intersections))
        : (intersections as t.Expression),
    )
  );
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
                    ...(signal.extraArgs || []),
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
                  ...(signal.extraArgs || []),
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

export function finalizeSignalArgs(args: t.Expression[]) {
  for (let i = args.length - 1; i >= 0; i--) {
    const arg = args[i];
    if (t.isArrowFunctionExpression(arg)) {
      const body = (arg.body as t.BlockStatement).body;
      if (body) {
        if (body.length === 0) {
          args[i] = t.numericLiteral(0);
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
  originalNodes?: t.Expression | t.Expression[],
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
    } else if (originalNodes && (isInlined || !t.isFunction(originalNodes))) {
      addEffectReferences(signal, originalNodes!);
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

export function renameBindings() {
  const program = currentProgramPath.node;
  const { body } = program;

  for (let i = 0; i < body.length; i++) {
    traverse(body[i], body, i, (node, container, key) => {
      switch (node.type) {
        case "Identifier":
        case "MemberExpression": {
          const { extra } = node;
          if (!extra) break;
          let { binding, read } = extra;
          let replacement: t.Node | undefined;

          if (
            (isOutputHTML() && read && !read.binding.declared) ||
            (binding && !binding.declared)
          ) {
            return; // TODO this is probably wrong and should walk up to the closest declared binding.
          }

          if (read) {
            if (read.props === undefined) {
              binding = read.binding;
              read = undefined;
            } else {
              binding = undefined;
            }
          }

          if (binding) {
            if (node.type === "Identifier") {
              if (binding.name !== node.name) {
                node.name = binding.name;
              }
            } else {
              replacement = t.identifier(binding.name);
            }
          } else if (read) {
            replacement = toMemberExpression(
              t.identifier(read.binding.name),
              Array.isArray(read.props) ? read.props[0] : read.props!,
            );

            if (Array.isArray(read.props)) {
              for (let i = 1; i < read.props.length; i++) {
                replacement = toMemberExpression(replacement, read.props[i]);
              }
            }
          }

          if (replacement) {
            container[key] = withPreviousLocation(replacement, node);
          }

          break;
        }
      }
    });
  }
}

export function replaceAssignments() {
  if (currentProgramPath.node.extra.assignments) {
    for (const [valueSection, assignment] of currentProgramPath.node.extra
      .assignments) {
      const { node } = assignment;
      if (node.type === "UpdateExpression") {
        const binding = node.argument.extra?.binding;
        if (binding) {
          const { buildAssignment } = getSignal(binding.section, binding);
          if (buildAssignment) {
            const replacement = buildAssignment(
              valueSection,
              t.binaryExpression(
                node.operator === "++" ? "+" : "-",
                node.argument,
                t.numericLiteral(1),
              ),
            );
            assignment.replaceWith(
              node.prefix || assignment.parentPath.isExpressionStatement()
                ? replacement
                : t.sequenceExpression([replacement, node.argument]),
            );
          }
        }
      } else {
        if (
          node.left.type === "ObjectPattern" ||
          node.left.type === "ArrayPattern"
        ) {
          handleDestructure(assignment, node.left, valueSection);
        } else if (node.left.type === "Identifier") {
          const binding = node.left.extra?.binding;
          if (binding) {
            const { buildAssignment } = getSignal(binding.section, binding);
            if (buildAssignment) {
              const replacement = buildAssignment(
                valueSection,
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
              assignment.replaceWith(replacement);
            }
          }
        }
      }
    }
  }
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
          "effect",
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
          t.callExpression(effectIdentifier, [scopeIdentifier]),
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
          getResumeRegisterId(section, signal.referencedBindings, "var"),
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
  const section = getSectionForBody(path);
  if (!section) return;

  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);

  forEach(section.closures, (closure) => {
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

  const accessors = new Set<string | number>();
  const additionalProperties = getSerializedScopeProperties(section);
  const serializedProperties: t.ObjectProperty[] = [];
  forEach(section.bindings, (binding) => {
    if (binding.serialize && binding.type !== BindingType.dom) {
      const accessor = getScopeAccessorLiteral(binding);
      serializedProperties.push(
        t.objectProperty(accessor, getDeclaredBindingExpression(binding)),
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

function handleDestructure(
  assignment: t.NodePath,
  node: t.LVal | t.ObjectProperty | t.ObjectProperty["value"],
  section: Section,
  ctx?: {
    statement: t.NodePath;
    end: t.NodePath;
  },
  replace?: (value: t.Identifier) => void,
) {
  if (!ctx) {
    ctx = {
      statement: assignment.getStatementParent()!,
      end: assignment.getStatementParent()!,
    };
  }

  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        handleDestructure(assignment, prop, section, ctx);
      }
      break;
    case "ArrayPattern":
      for (const i in node.elements) {
        if (node.elements[i] === null) continue;

        handleDestructure(
          assignment,
          node.elements[i]!,
          section,
          ctx,
          (id) => (node.elements[i] = id),
        );
      }
      break;
    case "RestElement":
      handleDestructure(
        assignment,
        node.argument,
        section,
        ctx,
        (id) => (node.argument = id),
      );
      break;
    case "ObjectProperty":
      handleDestructure(
        assignment,
        node.value,
        section,
        ctx,
        (id) => (node.value = id),
      );
      break;
    case "Identifier":
      {
        const binding = node.extra?.binding;
        if (binding) {
          const { buildAssignment } = getSignal(binding.section, binding);
          if (buildAssignment) {
            const valueId = currentProgramPath.scope.generateUidIdentifier(
              node.name,
            );

            ctx.statement.insertBefore(
              t.variableDeclaration("let", [t.variableDeclarator(valueId)]),
            );
            replace?.(valueId);
            [ctx.end] = ctx.end.insertAfter(
              t.expressionStatement(buildAssignment(section, valueId)),
            );
          }
        }
      }
      break;
  }
}

function bindFunction(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  { root, section }: { root: t.NodePath<any>; section: Section },
) {
  const { node } = fn;
  const { extra } = node;
  if (!extra?.referencedBindingsInFunction) return;
  const { name, referencedBindingsInFunction } = extra;
  const fnId = currentProgramPath.scope.generateUidIdentifier(name);

  root
    .insertBefore(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          fnId,
          t.arrowFunctionExpression(
            [scopeIdentifier],
            referencedBindingsInFunction
              ? t.blockStatement([
                  t.variableDeclaration("const", [
                    t.variableDeclarator(
                      createScopeReadPattern(
                        section,
                        referencedBindingsInFunction,
                      ),
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

function traverse<
  Container extends t.Node | t.Node[],
  Key extends (string | number) & keyof Container,
  Node extends Container[Key] & t.Node,
>(
  node: Node | null | void,
  container: Container,
  key: Key,
  enter: (node: t.Node, container: any, key: string | number) => void,
): void {
  if (node) {
    enter(node, container, key);
    for (const key of (t as any).VISITOR_KEYS[
      node.type
    ] as (keyof typeof node)[]) {
      const child = node[key];

      if (Array.isArray(child)) {
        for (let i = 0; i < child.length; i++) {
          traverse(child[i], child, i, enter);
        }
      } else {
        traverse(child as any, node, key as any, enter);
      }
    }
  }
}
