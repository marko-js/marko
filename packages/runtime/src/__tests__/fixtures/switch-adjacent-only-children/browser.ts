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
import { get, next } from "../../utils/walks";

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
    ],
  },
  {
    children: [
      {
        id: 2,
        text: "c",
      },
      {
        id: 1,
        text: "d",
      },
    ],
  },
  {
    children: [
      {
        id: 1,
        text: "d",
      },
      {
        id: 2,
        text: "c",
      },
    ],
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  div = 0,
  loop = 0,
  children = 7,
}

type ComponentScope = Scope<{
  [INDEX.div]: HTMLDivElement;
  [INDEX.loop]: HTMLDivElement;
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

// <attrs/{ children }/>
// <div>
//   <for|{ text }| of=children.filter(Boolean) by(c) { return c.id }>
//     ${text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + next(1);

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
