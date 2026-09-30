import type { Case, Expr, Node, Type } from "./generate";

// Greedy delta debugging: keep the first smaller case that still fails the
// same way, until no single removal or simplification does.
export async function shrink(
  failing: Case,
  stillFails: (candidate: Case) => Promise<boolean>,
  budget = 400,
): Promise<Case> {
  let current = failing;
  let progressed = true;
  while (progressed && budget > 0) {
    progressed = false;
    for (const candidate of candidates(current)) {
      if (--budget < 0) break;
      if (await stillFails(candidate)) {
        current = candidate;
        progressed = true;
        break;
      }
    }
  }
  return current;
}

function* candidates(current: Case): Generator<Case> {
  for (let i = current.steps.length; i--;) {
    yield { ...current, steps: current.steps.toSpliced(i, 1) };
  }
  for (const template of smallerLists(current.template)) {
    yield { ...current, template };
  }
  for (const child of smallerLists(current.child)) {
    yield { ...current, child };
  }
}

// Each list one edit smaller: a node removed, a node replaced by its
// children, or an expression replaced by the simplest literal of its type.
function* smallerLists(nodes: Node[]): Generator<Node[]> {
  for (let i = 0; i < nodes.length; i++) {
    yield nodes.toSpliced(i, 1);
  }
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if ("children" in node) {
      yield nodes.toSpliced(
        i,
        1,
        ...node.children,
        ...(node.kind === "if" ? (node.otherwise ?? []) : []),
      );
    }
  }
  for (let i = 0; i < nodes.length; i++) {
    for (const node of smallerNodes(nodes[i])) {
      yield nodes.toSpliced(i, 1, node);
    }
  }
}

function* smallerNodes(node: Node): Generator<Node> {
  if (node.kind === "if" && node.otherwise) {
    yield { ...node, otherwise: undefined };
  }
  for (const key of exprKeys) {
    const value = (node as Record<string, unknown>)[key] as Expr | undefined;
    if (value && value.code !== simplest[value.type]) {
      yield {
        ...node,
        [key]: { type: value.type, code: simplest[value.type] },
      } as Node;
    }
  }
  if ("attrs" in node) {
    for (let i = 0; i < node.attrs.length; i++) {
      const { value } = node.attrs[i];
      if (value.code !== simplest[value.type]) {
        yield {
          ...node,
          attrs: node.attrs.with(i, {
            ...node.attrs[i],
            value: { type: value.type, code: simplest[value.type] },
          }),
        };
      }
    }
  }
  if ("children" in node) {
    for (const children of smallerLists(node.children)) {
      yield { ...node, children };
    }
  }
  if (node.kind === "if" && node.otherwise) {
    for (const otherwise of smallerLists(node.otherwise)) {
      yield { ...node, otherwise };
    }
  }
}

const exprKeys = ["value", "test", "of"] as const;
const simplest: Record<Type, string> = {
  num: "0",
  str: '""',
  bool: "false",
  list: "[]",
};
