import {
  attr,
  walk,
  register,
  set,
  createRenderFn,
  Scope
} from "../../../../src/dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: 1
  },
  {
    value: "1"
  },
  {
    value: "2"
  },
  {
    value: null
  },
  {
    value: "1"
  },
  {
    value: false
  }
];

// <div a=0 b=input.value/>
export const template = `<div a=0></div>`;
export const walks = get + over(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset + 1] = walk();
});

export const execInputValue = (scope: Scope, offset: number) => {
  attr(scope[offset + 1] as Element, "b", scope[offset]);
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
