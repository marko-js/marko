import {
  data,
  loop,
  source,
  setSource,
  destructureSources,
  createRenderer,
  createRenderFn,
  Scope,
} from "../../../dom/index";
import { next, over, get } from "../../utils/walks";

export const inputs = [
  {
    children: [
      {
        id: 1,
        text: "a",
      },
      {
        id: 2,
        text: "b",
      },
      {
        id: 3,
        text: "c",
      },
    ],
  },
  {
    children: [],
  },
  {
    children: [
      {
        id: 1,
        text: "a",
      },
      {
        id: 2,
        text: "b",
      },
      {
        id: 3,
        text: "c",
      },
    ],
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  comment = 0,
  loop = 0,
  children = 7,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.loop]: Comment;
  [INDEX.children]: Input["children"];
}>;

const enum INDEX_FOR0 {
  textNode = 0,
  text = 1,
}

type For0Scope = Scope<{
  _: ComponentScope;
  [INDEX_FOR0.textNode]: Text;
  [INDEX_FOR0.text]: Input["children"][number]["text"];
}>;

// <for|child| of=input.children by(c) { return c.id }>
//   ${child.text}
// </for>

export const template = `<!>`;
export const walks = get + over(1);

const text$forBody0 = source(
  INDEX_FOR0.text,
  [],
  (scope: For0Scope, text: For0Scope[INDEX_FOR0.text]) => {
    data(scope[INDEX_FOR0.textNode], text);
  }
);

const forBody0 = createRenderer(" ", get + next(1));

const for0 = loop(
  INDEX.loop,
  1,
  forBody0,
  [text$forBody0],
  (scope: For0Scope, [{ text }]) => setSource(scope, text$forBody0, text),
  (scope: ComponentScope) => [
    scope[INDEX.children],
    (i: Input["children"][number]) => "" + i.id,
  ]
);

export const children_subscribers = [for0];

const _children = source(INDEX.children, children_subscribers);

export const attrs = destructureSources(
  [_children],
  (scope: ComponentScope, { children }: Input) => {
    setSource(scope, _children, children);
  }
);

export default createRenderFn(template, walks, undefined, attrs);
