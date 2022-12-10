import { types as t } from "@marko/compiler";
import type { ReferenceGroup } from "./references";
import {
  getSectionId,
  createSectionState,
  forEachSectionIdReverse,
  getOrCreateSectionId,
} from "./sections";
import { Reserve, insertReserve } from "./reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import { callRuntime, callRead } from "./runtime";
import { getTemplateId } from "@marko/babel-utils";
import type { NodePath } from "@marko/compiler/babel-types";

export type subscribeBuilder = (subscriber: t.Expression) => t.Expression;

type Signal = {
  identifier: t.Identifier;
  reserve: Reserve;
  sectionId: number;
  build: () => t.Expression;
  // TODO: rename "apply" to "render"
  render: t.Statement[];
  hydrate: t.Statement[];
  subscribers: t.Expression[];
  closures: Map<number /* sectionId */, Signal>;
  hasDynamicSubscribers?: true;
};

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
        render: [],
        hydrate: [],
        subscribers: [],
      } as any as Signal)
    );

    if (!reserve) {
      signal.build = () => {
        for (const subscriber of signal.subscribers) {
          signal.render.push(
            t.expressionStatement(
              callRuntime("notifySignal", scopeIdentifier, subscriber)
            )
          );
        }
        return t.arrowFunctionExpression(
          [scopeIdentifier],
          t.blockStatement(signal.render)
        );
      };
    } else if (Array.isArray(reserve)) {
      subscribe(reserve, signal);
      signal.build = () => {
        return callRuntime(
          "subscriber",
          t.arrayExpression(signal.subscribers),
          t.numericLiteral(reserve.length),
          getComputeFn(sectionId, t.blockStatement(signal.render), reserve)
        );
      };
    } else if (reserve.sectionId !== sectionId) {
      getClosures(sectionId).push(signal.identifier);
      signal.build = () => {
        // TODO: subscribe to an owner multiple levels up
        const builder = getSubscribeBuilder(sectionId);
        const provider = getSignal(reserve.sectionId, reserve);
        if (builder) {
          provider.subscribers.push(builder(signal.identifier));
        } else if (!provider.hasDynamicSubscribers) {
          provider.hasDynamicSubscribers = true;
          provider.subscribers.push(
            callRuntime("dynamicSubscribers", t.numericLiteral(reserve.id))
          );
        }

        return callRuntime(
          // TODO: this should use `closure` for <if> and <for>
          builder ? "closure" : "dynamicClosure",
          // TODO: read from an owner multiple levels up
          t.numericLiteral(1),
          t.numericLiteral(reserve.id),
          t.arrayExpression(signal.subscribers),
          t.arrowFunctionExpression(
            [scopeIdentifier, t.identifier(reserve.name)],
            t.blockStatement(signal.render)
          )
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

export function initSource(reserve: Reserve) {
  const sectionId = reserve.sectionId;
  const signal = getSignal(sectionId, reserve);
  signal.build = () => {
    return callRuntime(
      "source",
      t.numericLiteral(reserve.id),
      t.arrayExpression(signal.subscribers),
      t.arrowFunctionExpression(
        [scopeIdentifier, t.identifier(reserve.name)],
        t.blockStatement(signal.render)
      )
    );
  };
  return signal;
}

export function initDerivation(
  reserve: Reserve,
  providers: undefined | Reserve | Reserve[],
  compute: t.Expression
) {
  const sectionId = reserve.sectionId;
  const signal = getSignal(sectionId, reserve);
  signal.build = () => {
    return callRuntime(
      "derivation",
      t.numericLiteral(reserve.id),
      t.numericLiteral(Array.isArray(providers) ? providers.length : 1),
      t.arrayExpression(signal.subscribers),
      getComputeFn(sectionId, compute, providers),
      t.arrowFunctionExpression(
        [scopeIdentifier, t.identifier(reserve.name)],
        t.blockStatement(signal.render)
      )
    );
  };
  subscribe(providers, signal);
  return signal;
}

export function initContextProvider(
  templateId: string,
  reserve: Reserve,
  providers: undefined | Reserve | Reserve[],
  compute: t.Expression,
  renderer: t.Identifier
) {
  const sectionId = reserve.sectionId;
  const scopeAccessor = t.numericLiteral(reserve.id);
  const valueAccessor = t.numericLiteral(reserve.id + 1);

  const signal = getSignal(sectionId, reserve);
  signal.build = () => {
    return callRuntime(
      "derivation",
      valueAccessor,
      t.numericLiteral(Array.isArray(providers) ? providers.length : 1),
      t.arrayExpression(signal.subscribers),
      getComputeFn(sectionId, compute, providers),
      t.arrowFunctionExpression(
        [scopeIdentifier, t.identifier(reserve.name)],
        t.blockStatement(signal.render)
      )
    );
  };
  subscribe(providers, signal);
  signal.subscribers.push(callRuntime("dynamicSubscribers", valueAccessor));

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
      t.numericLiteral(reserve.id),
      t.stringLiteral(templateId),
      t.arrayExpression(signal.subscribers),
      t.arrowFunctionExpression(
        [scopeIdentifier, t.identifier(reserve.name)],
        t.blockStatement(signal.render)
      )
    );
  };

  return signal;
}

export function getComputeFn(
  sectionId: number,
  body: t.Expression | t.BlockStatement,
  references: undefined | Reserve | Reserve[]
) {
  const params: Array<t.Identifier | t.Pattern> = [scopeIdentifier];
  if (Array.isArray(references)) {
    references.forEach((binding) =>
      params.push(
        t.assignmentPattern(
          t.identifier(binding.name),
          callRead(binding, sectionId)
        )
      )
    );
  } else if (references) {
    params.push(
      t.assignmentPattern(
        t.identifier(references.name),
        callRead(references, sectionId)
      )
    );
  }
  return t.arrowFunctionExpression(params, body);
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
  providerSignal.subscribers.push(subscriber.identifier);
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
          if (i === args.length - 1) {
            args.length = i;
          } else {
            args[i] = t.nullLiteral();
          }
        } else if (body.length === 1 && t.isExpressionStatement(body[0])) {
          arg.body = body[0].expression;
        }
      }
    }
  }
}

export function addStatement(
  // TODO: rename "apply" to "render"
  type: "apply" | "hydrate",
  targetSectionId: number,
  references: ReferenceGroup | undefined,
  statement: t.Statement | t.Statement[]
) {
  const reserve = references?.references;
  const signal = getSignal(targetSectionId, reserve);
  const statements = (signal[type === "apply" ? "render" : "hydrate"] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }
}

function getHydrateRegisterId(
  sectionId: number,
  references: ReferenceGroup["references"]
) {
  const {
    markoOpts: { optimize },
    opts: { filename },
  } = currentProgramPath.hub.file;
  let name = "";
  if (references) {
    if (Array.isArray(references)) {
      for (const ref of references) {
        name += `_${ref.name}`;
      }
    } else {
      name += `_${references.name}`;
    }
  }
  return getTemplateId(optimize, `${filename}_${sectionId}${name}`);
}

export function writeAllStatementGroups() {
  forEachSectionIdReverse((sectionId) => {
    writeSignals(sectionId);
  });
}

// const [getClosurePriorities] = createSectionState<Array<t.NumericLiteral>>(
//   "closurePriorities",
//   () => []
// );

export function writeSignals(sectionId: number) {
  const signals = getSignals(sectionId);
  const declarations = Array.from(signals.values())
    .sort(sortSignals)
    .flatMap((signal) => {
      const value = signal.build();
      const signalDeclarator = t.variableDeclarator(signal.identifier, value);
      let hydrateDeclarator;
      if (signal.hydrate.length) {
        const hydrateIdentifier = t.identifier(
          "_hydrate" + signal.identifier.name
        );

        if (signal.reserve) {
          signal.hydrate.unshift(
            t.variableDeclaration(
              "const",
              (Array.isArray(signal.reserve)
                ? signal.reserve
                : [signal.reserve]
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

      if (t.isCallExpression(value)) {
        finalizeSignalArgs(value.arguments as any as t.Expression[]);
      }
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

// export function writeApplyGroups(sectionId: number) {
//   const allStatements = getApplyStatements(sectionId);
//   const numReferenceGroups =
//     currentProgramPath.node.extra!.referenceGroups![sectionId]!.length;
//   if (!numReferenceGroups) return;

//   for (let i = numReferenceGroups; i--; ) {
//     const statements = allStatements[i] ?? [];

//     // if (i === 0 && !statements.length) continue;

//     const referenceGroup = getReferenceGroup(sectionId, i);
//     const { references, apply: identifier } = referenceGroup;
//     let newPaths;
//     let params: (t.Identifier | t.RestElement | t.Pattern)[];
//     let body: t.BlockStatement;

//     if (references) {
//       if (Array.isArray(references)) {
//         // derivation
//         params = references.map((binding) =>
//           t.assignmentPattern(
//             t.identifier(binding.name),
//             callRead(binding, sectionId)
//           )
//         );
//         body = t.blockStatement(statements);

//         for (const binding of references) {
//           addStatement(
//             "apply",
//             sectionId,
//             getReferenceGroup(sectionId, binding),
//             t.expressionStatement(
//               // TODO: might need to queue in a child scope
//               callRuntime("queueSource", scopeIdentifier, identifier)
//             )
//           );
//         }
//       } else if (references.sectionId !== sectionId) {
//         // closure
//         params = [
//           t.assignmentPattern(
//             t.identifier(references.name),
//             callRead(references, sectionId)
//           ),
//         ];
//         body = t.blockStatement(statements);

//         const factory = getQueueBuilder(sectionId);
//         if (factory) {
//           const closurePriority = t.numericLiteral(NaN);
//           getClosurePriorities(references.sectionId).push(closurePriority);
//           addStatement(
//             "apply",
//             references.sectionId,
//             getReferenceGroup(references.sectionId, references),
//             t.expressionStatement(factory(referenceGroup, closurePriority))
//           );
//           addStatement(
//             "apply",
//             sectionId,
//             undefined,
//             t.expressionStatement(
//               callRuntime("queueSource", scopeIdentifier, identifier)
//             )
//           );
//         }
//       } else {
//         // source?
//         let renderFn;
//         if (statements.length) {
//           renderFn = t.arrowFunctionExpression([scopeIdentifier, t.identifier(references.name)], t.blockStatement(statements));
//         }
//         newPaths = currentProgramPath.pushContainer(
//           "body",
//           t.variableDeclaration("const", [
//             t.variableDeclarator(identifier, callRuntime("source", t.numericLiteral(references.id), t.arrayExpression(), renderFn))
//           ])
//         );
//       }
//     } else {
//       // setup
//       newPaths = currentProgramPath.pushContainer(
//         "body",
//         t.functionDeclaration(identifier, [scopeIdentifier], t.blockStatement(statements))
//       );
//     }

//     for (const path of newPaths) {
//       path.traverse(bindFunctionsVisitor, { root: path, sectionId });
//     }
//   }

//   const closurePriorities = getClosurePriorities(sectionId);
//   for (let i = 0; i < closurePriorities.length; i++) {
//     closurePriorities[i].value = i + allStatements.length;
//   }
// }

// export function writeHydrateGroups(sectionId: number) {
//   const allStatements = getHydrateStatements(sectionId);
//   for (let i = allStatements.length; i--; ) {
//     const statements = allStatements[i];
//     if (!statements?.length) continue;

//     const referenceGroup = getReferenceGroup(sectionId, i)!;
//     const { references, hydrate: identifier } = referenceGroup;
//     const params: Parameters<typeof t.functionDeclaration>[1] = references
//       ? (Array.isArray(references) ? references : [references]).map((binding) =>
//           t.assignmentPattern(
//             t.identifier(binding.name),
//             callRead(binding, sectionId)
//           )
//         )
//       : [];

//     const [fnPath] = currentProgramPath.pushContainer("body", [
//       t.functionDeclaration(
//         identifier,
//         [scopeIdentifier, ...params],
//         t.blockStatement(statements)
//       ),
//       t.expressionStatement(
//         callRuntime(
//           "register",
//           t.stringLiteral(getHydrateRegisterId(sectionId, references)),
//           identifier
//         )
//       ),
//     ]);
//     fnPath.traverse(bindFunctionsVisitor, { root: fnPath, sectionId });

//     addStatement(
//       "apply",
//       sectionId,
//       getReferenceGroup(sectionId, references),
//       t.expressionStatement(
//         callRuntime("queueHydrate", scopeIdentifier, identifier)
//       )
//     );
//   }
// }

export function addHTMLHydrateCall(
  sectionId: number,
  references?: ReferenceGroup
) {
  addStatement("hydrate", sectionId, references, undefined as any);
}

export function writeHTMLHydrateStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>
) {
  const sectionId = getOrCreateSectionId(path);
  const allSignals = Array.from(getSignals(sectionId).values());

  path.unshiftContainer(
    "body",
    t.variableDeclaration("const", [
      t.variableDeclarator(scopeIdentifier, callRuntime("nextScopeId")),
    ])
  );

  if (!allSignals.length) return;

  const refs: Reserve[] = [];

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
            scopeIdentifier,
            t.stringLiteral(getHydrateRegisterId(sectionId, references))
          )
        )
      );
    }
  }

  if (refs.length) {
    path.pushContainer(
      "body",
      t.expressionStatement(
        callRuntime(
          "writeHydrateScope",
          scopeIdentifier,
          t.objectExpression(
            refs.reduce((acc, ref) => {
              acc.push(
                t.objectProperty(
                  t.numericLiteral(ref.id),
                  t.identifier(ref.name)
                )
              );
              return acc;
            }, [] as Array<t.ObjectProperty>)
          )
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

  let parent: NodePath | null = fn.parentPath;
  while (parent) {
    if (parent.isFunction()) break;
    if (parent === root) return;
    parent = parent.parentPath;
  }

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

  root.insertBefore(
    t.variableDeclaration("const", [
      t.variableDeclarator(functionIdentifier, node),
    ])
  );

  node.params.unshift(scopeIdentifier);
  fn.replaceWith(callRuntime("bind", scopeIdentifier, functionIdentifier));
}

export function getSetup(sectionId: number) {
  return getSignals(sectionId).get(undefined)?.identifier;
}
