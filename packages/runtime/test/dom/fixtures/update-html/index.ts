import {
  html,
  register,
  walk,
  set,
  createRenderFn,
  Scope
} from "../../../../src/dom/index";
import { over, get } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello <strong>World</strong>"
  },
  {
    value: "Some content"
  },
  {
    value: "<div/>"
  }
];

export const FAILS_HYDRATE = true;

// <em>Testing</em> $!{input.value}
export const template = "<em>Testing</em> <!>";
export const walks = over(2) + get + over(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset + 1] = scope[offset + 2] = walk();
});

export const execInputValue = (scope: Scope, offset: number) => {
  html(scope[offset] as string, scope, offset + 1);
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
