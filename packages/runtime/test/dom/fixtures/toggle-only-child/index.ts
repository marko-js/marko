import {
  walk,
  data,
  Conditional,
  Scope,
  createRenderer,
  createRenderFn,
  staticNodeMethods
} from "../../../../src/dom/index";
import { get, next, over } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello"
  },
  {
    value: false
  },
  {
    value: "World"
  },
  {
    value: "!"
  }
];

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = (scope: Scope, offset: number) => {
  scope[offset + 1] = new Conditional(walk() as Comment, scope, offset);
};

export const execInputValue = (scope: Scope, offset: number) => {
  const cond0 = scope[offset + 1] as Conditional;
  cond0.rendererOnlyChild = scope[offset] ? branch0 : undefined;
  if (cond0.renderer === branch0) {
    const cond0_scope = cond0.scope;
    data(cond0_scope[0] as Text, scope[offset]);
  }
};

export const execDynamicInput = (
  input: typeof inputs[number],
  scope: Scope,
  offset: number
) => {
  scope[offset] = input.value;
  execInputValue(scope, offset);
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  (scope: Scope) => {
    scope[0] = walk();
  },
  0,
  staticNodeMethods
);
