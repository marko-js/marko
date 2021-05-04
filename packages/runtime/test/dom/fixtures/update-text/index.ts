import {
  data,
  walk,
  enableExtendedWalk,
  register,
  createRenderFn,
  Scope
} from "../../../../src/dom/index";
import { after, over } from "../../utils/walks";

export const inputs = [
  {
    value: "Dynamic 1"
  },
  {
    value: "Dynamic 2"
  },
  {
    value: "Dynamic 3"
  }
];

// Static ${input.value}
export const template = "Static ";
export const walks = after + over(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset + 1] = walk();
});

export const execInputValue = (scope: Scope, offset: number) => {
  data(scope[offset + 1] as Text, scope[offset]);
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

enableExtendedWalk();
