import { attr, createRenderFn, write, read } from "../../../dom/index";
import { get, over, open, close } from "../../utils/walks";

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

type scope = {
  [Index.DIV]: HTMLDivElement;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
};

// <div a=0 b=input.value/>
export const template = `<div a=0></div>`;
export const walks = open(2) + get + over(1) + close;

export const execInputValue = () => {
  attr(Index.DIV, "b", read<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE));
};

export const execDynamicInput = (input: typeof inputs[number]) => {
  if (write(Index.INPUT_VALUE, input.value)) {
    execInputValue();
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);
