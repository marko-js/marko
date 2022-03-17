import { attrs, createRenderFn, write, Scope } from "../../../dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: { a: 1, b: 2 },
  },
  {
    value: { b: 2, c: 3 },
  },
  {
    value: {},
  },
  {
    value: null,
  },
  {
    value: { a: 1 },
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

// <div ...input.value/>
export const template = `<div></div>`;
export const walks = get + over(1);

export const execInputValue = (scope: ComponentScope) => {
  attrs(scope, Index.DIV, Index.INPUT_VALUE);
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
