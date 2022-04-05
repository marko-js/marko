import { attr, createRenderFn, write, Scope } from "../../../dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: 1,
  },
  {
    value: "1",
  },
  {
    value: "2",
  },
  {
    value: null,
  },
  {
    value: "1",
  },
  {
    value: false,
  },
];

const enum Index {
  DIV = 0,
  INPUT_VALUE = 1,
}

type ComponentScope = Scope<{
  [Index.DIV]: HTMLDivElement;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
}>;

// <div a=0 b=input.value/>
export const template = `<div a=0></div>`;
export const walks = get + over(1);

export const execInputValue = (scope: ComponentScope) => {
  attr(scope[Index.DIV], "b", scope[Index.INPUT_VALUE]);
};

export const execDynamicInput = (
  scope: ComponentScope,
  input: typeof inputs[number]
) => {
  if (write(scope, Index.INPUT_VALUE, input.value)) {
    execInputValue(scope);
  }
};

export default createRenderFn(template, walks, undefined, execDynamicInput);
