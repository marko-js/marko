import {
  attrs,
  walk,
  set,
  register,
  createRenderFn,
  Scope
} from "../../../../src/dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: { a: 1, b: 2 }
  },
  {
    value: { b: 2, c: 3 }
  },
  {
    value: {}
  },
  {
    value: null
  },
  {
    value: { a: 1 }
  }
];

// <div ...input.value/>
export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset + 2] = walk();
});

export const execInputValue = (scope: Scope, offset: number) => {
  attrs(scope[offset + 2] as Element, scope, offset);
};

export const execDynamicInput = (
  input: typeof inputs[number],
  scope: Scope,
  offset: number
) => {
  set(scope, offset, input.value);
  execInputValue(scope, offset);
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);
