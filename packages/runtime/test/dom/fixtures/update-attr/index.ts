import {
  attr,
  walk,
  register,
  createRenderFn,
  write,
  read
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

const enum Index {
  DIV = 0,
  INPUT_VALUE = 1
}

type scope = {
  [Index.DIV]: HTMLDivElement;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
};

// <div a=0 b=input.value/>
export const template = `<div a=0></div>`;
export const walks = get + over(1);
export const hydrate = register("", () => {
  write(Index.DIV, walk());
});

export const execInputValue = () => {
  attr(read<scope, Index.DIV>(Index.DIV), "b", read(Index.INPUT_VALUE));
};

export const execDynamicInput = (input: typeof inputs[number]) => {
  write(Index.INPUT_VALUE, input.value);
  execInputValue();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);
