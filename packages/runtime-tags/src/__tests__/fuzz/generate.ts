// Random templates built from the shapes past bugs combined: state read across
// section boundaries (branches, loops, tag bodies), updated by clicks and input.
export interface Case {
  seed: number;
  template: Node[];
  child: Node[];
  input: Input;
  steps: StepSpec[];
}

export type StepSpec = { click: string } | { input: Input };

export type Input = {
  n: number;
  s: string;
  on: boolean;
  list: number[];
};

export type Type = "num" | "str" | "bool" | "list";

export interface Expr {
  code: string;
  type: Type;
}

export type Node =
  | { kind: "text"; text: string }
  | { kind: "placeholder"; value: Expr }
  | { kind: "element"; tag: string; attrs: Attr[]; children: Node[] }
  | { kind: "let"; name: string; value: Expr }
  | { kind: "const"; name: string; value: Expr }
  | { kind: "button"; id: string; name: string; value: Expr }
  | { kind: "if"; test: Expr; children: Node[]; otherwise?: Node[] }
  | { kind: "show"; test: Expr; children: Node[] }
  | { kind: "for"; item: string; index: string; of: Expr; children: Node[] }
  | { kind: "child"; attrs: Attr[]; children: Node[] }
  | { kind: "dynamic"; test: Expr; children: Node[] }
  | { kind: "await"; name: string; value: Expr; children: Node[] }
  | { kind: "content" };

export interface Attr {
  name: string;
  value: Expr;
}

interface Binding {
  name: string;
  type: Type;
  assignable: boolean;
}

interface Scope {
  bindings: Binding[];
  depth: number;
}

const types: Type[] = ["num", "str", "bool", "list"];
const inputBindings: Binding[] = [
  { name: "input.n", type: "num", assignable: false },
  { name: "input.s", type: "str", assignable: false },
  { name: "input.on", type: "bool", assignable: false },
  { name: "input.list", type: "list", assignable: false },
];
const maxDepth = 4;

export function generate(seed: number): Case {
  const random = createRandom(seed);
  const state: GenerateState = {
    random,
    names: 0,
    buttons: [],
    inChild: false,
  };
  const template = generateChildren(state, {
    bindings: [...inputBindings],
    depth: 0,
  });
  const templateButtons = state.buttons.splice(0);
  state.inChild = true;
  const child = [
    ...generateChildren(state, { bindings: [...inputBindings], depth: 1 }),
    { kind: "content" } as Node,
    ...generateChildren(state, { bindings: [...inputBindings], depth: 2 }),
  ];
  const buttons = [...templateButtons, ...state.buttons];
  const steps: StepSpec[] = [];
  for (let i = random.int(1, 6); i--;) {
    if (buttons.length && random.chance(0.7)) {
      steps.push({ click: `#${random.pick(buttons)}` });
    } else {
      steps.push({ input: generateInput(random) });
    }
  }
  return { seed, template, child, input: generateInput(random), steps };
}

// A template's top level is concise mode, where a text line needs `--`.
export function print(nodes: Node[], indent = ""): string {
  return nodes.map((node) => printNode(node, indent)).join("");
}

function printNode(node: Node, indent: string): string {
  const inner = (children: Node[]) => print(children, indent + "  ");
  const text = indent ? "" : "-- ";
  const attrs = (list: Attr[]) =>
    list.map((attr) => ` ${attr.name}=(${attr.value.code})`).join("");
  switch (node.kind) {
    case "text":
      return `${indent}${text}${node.text}\n`;
    case "placeholder":
      return `${indent}${text}\${${node.value.code}}\n`;
    case "element":
      return `${indent}<${node.tag}${attrs(node.attrs)}>\n${inner(node.children)}${indent}</${node.tag}>\n`;
    case "let":
      return `${indent}<let/${node.name}=(${node.value.code})/>\n`;
    case "const":
      return `${indent}<const/${node.name}=(${node.value.code})/>\n`;
    case "button":
      return `${indent}<button id="${node.id}" onClick() { ${node.name} = ${node.value.code}; }>${node.id}</button>\n`;
    case "if":
      return (
        `${indent}<if=(${node.test.code})>\n${inner(node.children)}${indent}</if>\n` +
        (node.otherwise
          ? `${indent}<else>\n${inner(node.otherwise)}${indent}</else>\n`
          : "")
      );
    case "show":
      return `${indent}<show=(${node.test.code})>\n${inner(node.children)}${indent}</show>\n`;
    case "for":
      return `${indent}<for|${node.item}, ${node.index}| of=(${node.of.code})>\n${inner(node.children)}${indent}</for>\n`;
    case "child":
      return `${indent}<child${attrs(node.attrs)}>\n${inner(node.children)}${indent}</child>\n`;
    case "dynamic":
      return `${indent}<\${(${node.test.code}) ? "section" : "article"}>\n${inner(node.children)}${indent}</>\n`;
    case "await":
      return `${indent}<await|${node.name}|=Promise.resolve(${node.value.code})>\n${inner(node.children)}${indent}</await>\n`;
    case "content":
      return `${indent}<\${input.content}/>\n`;
  }
}

function generateChildren(
  state: GenerateState,
  scope: Scope,
  count = state.random.int(1, 4),
): Node[] {
  const nodes: Node[] = [];
  const own: Scope = { bindings: [...scope.bindings], depth: scope.depth };
  for (let i = count; i--;) nodes.push(generateNode(state, own));
  return nodes;
}

type GenerateState = {
  random: Random;
  names: number;
  buttons: string[];
  inChild: boolean;
};

function generateNode(state: GenerateState, scope: Scope): Node {
  const { random } = state;
  const nested = scope.depth < maxDepth;
  const nest = () => ({ bindings: scope.bindings, depth: scope.depth + 1 });
  const assignable = scope.bindings.filter((binding) => binding.assignable);
  switch (
    random.weighted({
      let: 3,
      const: 2,
      placeholder: 4,
      element: nested ? 3 : 0,
      button: assignable.length ? 4 : 0,
      if: nested ? 3 : 0,
      show: nested ? 1 : 0,
      for: nested ? 2 : 0,
      child: nested && !state.inChild ? 2 : 0,
      dynamic: nested ? 1 : 0,
      await: nested ? 1 : 0,
      text: 1,
    })
  ) {
    case "let": {
      const value = generateExpr(random, scope, random.pick(types));
      const name = `v${state.names++}`;
      scope.bindings.push({ name, type: value.type, assignable: true });
      return { kind: "let", name, value };
    }
    case "const": {
      const value = generateExpr(random, scope, random.pick(types));
      const name = `c${state.names++}`;
      scope.bindings.push({ name, type: value.type, assignable: false });
      return { kind: "const", name, value };
    }
    case "placeholder":
      return {
        kind: "placeholder",
        value: generateExpr(random, scope, random.pick(["num", "str"])),
      };
    case "element":
      return {
        kind: "element",
        // Not `<p>`: the parser closes it before block content.
        tag: random.pick(["div", "span"]),
        attrs: random.chance(0.5)
          ? [{ name: "class", value: generateExpr(random, scope, "str") }]
          : [],
        children: generateChildren(state, nest()),
      };
    case "button": {
      const target = random.pick(assignable);
      const id = `b${state.names++}`;
      state.buttons.push(id);
      return {
        kind: "button",
        id,
        name: target.name,
        value: generateExpr(random, scope, target.type),
      };
    }
    case "if":
      return {
        kind: "if",
        test: generateExpr(random, scope, "bool"),
        children: generateChildren(state, nest()),
        otherwise: random.chance(0.5)
          ? generateChildren(state, nest())
          : undefined,
      };
    case "show":
      return {
        kind: "show",
        test: generateExpr(random, scope, "bool"),
        children: generateChildren(state, nest()),
      };
    case "for": {
      const item = `x${state.names++}`;
      const index = `i${state.names++}`;
      return {
        kind: "for",
        item,
        index,
        of: generateExpr(random, scope, "list"),
        children: generateChildren(state, {
          bindings: [
            ...scope.bindings,
            { name: item, type: "num", assignable: false },
            { name: index, type: "num", assignable: false },
          ],
          depth: scope.depth + 1,
        }),
      };
    }
    case "child":
      return {
        kind: "child",
        attrs: [
          { name: "n", value: generateExpr(random, scope, "num") },
          { name: "s", value: generateExpr(random, scope, "str") },
          { name: "on", value: generateExpr(random, scope, "bool") },
          { name: "list", value: generateExpr(random, scope, "list") },
        ],
        children: generateChildren(state, nest()),
      };
    case "dynamic":
      return {
        kind: "dynamic",
        test: generateExpr(random, scope, "bool"),
        children: generateChildren(state, nest()),
      };
    case "await": {
      const value = generateExpr(random, scope, random.pick(types));
      const name = `a${state.names++}`;
      return {
        kind: "await",
        name,
        value,
        children: generateChildren(state, {
          bindings: [
            ...scope.bindings,
            { name, type: value.type, assignable: false },
          ],
          depth: scope.depth + 1,
        }),
      };
    }
    case "text":
      return { kind: "text", text: random.pick(["hello", "a b", "&amp;"]) };
  }
}

function generateExpr(
  random: Random,
  scope: Scope,
  type: Type,
  depth = 0,
): Expr {
  const vars = scope.bindings.filter((binding) => binding.type === type);
  const leaf = depth > 1 || random.chance(0.4);
  if (vars.length && (leaf ? random.chance(0.7) : random.chance(0.3))) {
    return { code: random.pick(vars).name, type };
  }
  if (leaf) return literal(random, type);
  const sub = (subType: Type) =>
    generateExpr(random, scope, subType, depth + 1).code;
  switch (type) {
    case "num":
      return {
        type,
        code: random.pick([
          () => `${sub("num")} + ${sub("num")}`,
          () => `${sub("num")} * 2`,
          () => `${sub("list")}.length`,
          () => `(${sub("bool")} ? ${sub("num")} : ${sub("num")})`,
        ])(),
      };
    case "str":
      return {
        type,
        code: random.pick([
          () => `\`\${${sub("num")}}-\${${sub("str")}}\``,
          () => `${sub("str")} + "!"`,
          () => `(${sub("bool")} ? ${sub("str")} : ${sub("str")})`,
        ])(),
      };
    case "bool":
      return {
        type,
        code: random.pick([
          () => `${sub("num")} > 2`,
          () => `!${sub("bool")}`,
          () => `${sub("str")}.length > 1`,
          () => `${sub("list")}.includes(${sub("num")})`,
        ])(),
      };
    case "list":
      return {
        type,
        code: random.pick([
          () => `[${sub("num")}, ${sub("num")}]`,
          () => `${sub("list")}.filter((x) => x % 2)`,
          () => `${sub("list")}.map((x) => x + 1)`,
          () => `${sub("list")}.slice(0, 3)`,
        ])(),
      };
  }
}

function literal(random: Random, type: Type): Expr {
  switch (type) {
    case "num":
      return { type, code: String(random.int(0, 5)) };
    case "str":
      return { type, code: JSON.stringify(random.pick(["", "a", "bc"])) };
    case "bool":
      return { type, code: String(random.chance(0.5)) };
    case "list":
      return {
        type,
        code: JSON.stringify(
          Array.from({ length: random.int(0, 3) }, () => random.int(0, 4)),
        ),
      };
  }
}

function generateInput(random: Random): Input {
  return {
    n: random.int(0, 5),
    s: random.pick(["", "a", "bc"]),
    on: random.chance(0.5),
    list: Array.from({ length: random.int(0, 4) }, () => random.int(0, 4)),
  };
}

type Random = ReturnType<typeof createRandom>;

function createRandom(seed: number) {
  let state = seed >>> 0 || 1;
  const next = () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const random = {
    next,
    int: (min: number, max: number) =>
      min + Math.floor(next() * (max - min + 1)),
    chance: (p: number) => next() < p,
    pick: <T>(list: readonly T[]) => list[Math.floor(next() * list.length)],
    weighted<K extends string>(weights: Record<K, number>): K {
      const entries = Object.entries(weights) as [K, number][];
      let roll = next() * entries.reduce((sum, [, w]) => sum + w, 0);
      for (const [key, weight] of entries) {
        if ((roll -= weight) < 0) return key;
      }
      return entries[entries.length - 1][0];
    },
  };
  return random;
}
