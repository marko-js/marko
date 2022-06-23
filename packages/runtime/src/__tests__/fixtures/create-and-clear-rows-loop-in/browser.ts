import {
  data,
  loop,
  computeLoopIn,
  inputAttr,
  param,
  createRenderer,
  createRenderFn,
  Scope,
} from "../../../dom/index";
import { next, get } from "../../utils/walks";

export const inputs = [
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c",
    },
  },
  {
    children: {},
  },
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c",
    },
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
  [INDEX_FOR0.text]: Input["children"]["1" | "2" | "3"];
}>;

// <attrs/{ children }/>
// <div>
//   <for|key, text| in=children>
//     ${text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + next(1);

const text$forBody0 = param(INDEX_FOR0.text, [], ([[key, text]]: [["1"|"2"|"3", Input["children"]["1"|"2"|"3"]]]) => text, (scope: For0Scope, text: For0Scope[INDEX_FOR0.text]) => {
  data(scope[INDEX_FOR0.textNode], text);
});

const forBody0 = createRenderer(" ", get + next(1));

const for0 = loop(
  INDEX.loop, 
  1, 
  forBody0,
  [text$forBody0],
  (scope: ComponentScope) => computeLoopIn(scope[INDEX.children])
);

export const children_subscribers = [
  for0
]

export const attrs_subscribers = [
  inputAttr(INDEX.children, children_subscribers, (attrs: Input) => attrs.children)
]

export default createRenderFn(template, walks, undefined, attrs_subscribers);