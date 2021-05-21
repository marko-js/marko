import {
  walk,
  data,
  set,
  conditional,
  setConditionalRenderer,
  Conditional,
  Scope,
  createRenderer,
  createRenderFn,
  staticNodeMethods
} from "../../../../src/dom/index";
import { next, get, over } from "../../utils/walks";

export const inputs = [
  {
    value: { name: "Jack" },
    visible: true
  },
  {
    value: undefined,
    visible: false
  },
  {
    value: { name: "Jake" },
    visible: true
  }
];

type Input = typeof inputs[number];

// <div><if=input.visible><span>${input.value.name}</span></if></div>
export const template = `<div><!></div>`;
export const walks = next(1) + get + over(1);
export const hydrate = (scope: Scope, offset: number) => {
  scope[offset + 2] = conditional(walk() as Comment, scope, offset);
};

export const execInputValueVisible = (scope: Scope, offset: number) => {
  const cond0 = scope[offset + 2] as Conditional;
  setConditionalRenderer(cond0, scope[offset + 1] ? branch0 : undefined);
  if (cond0.renderer === branch0) {
    const cond0_scope = cond0.scope;
    data(cond0_scope[0] as Text, (scope[offset] as Input["value"])!.name);
  }
};

export const execDynamicInput = (
  input: Input,
  scope: Scope,
  offset: number
) => {
  set(scope, offset, input.value);
  set(scope, offset + 1, input.visible);
  execInputValueVisible(scope, offset);
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
