import { attrs, createRenderFn, write } from "../../../dom/index";
import { get, over, open, close } from "../../utils/walks";

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

// type scope = {
//   [Index.DIV]: HTMLDivElement;
//   [Index.INPUT_VALUE]: typeof inputs[number]["value"];
// };

// <div ...input.value/>
export const template = `<div></div>`;
export const walks = open(2) + get + over(1) + close;

export const execInputValue = () => {
  attrs(Index.DIV, Index.INPUT_VALUE);
};

export const execDynamicInput = (input: typeof inputs[number]) => {
  if (write(Index.INPUT_VALUE, input.value)) {
    execInputValue();
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);
