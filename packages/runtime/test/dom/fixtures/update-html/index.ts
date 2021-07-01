import {
  html,
  register,
  walk,
  read,
  write,
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

const enum Index {
  HTML = 0,
  INPUT_VALUE = 2
}

type scope = {
  [Index.HTML]: Node & ChildNode;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
};

// <em>Testing</em> $!{input.value}
export const template = "<em>Testing</em> <!>";
export const walks = over(2) + get + over(1);
export const hydrate = register("", () => {
  write(Index.HTML, walk());
});

export const execInputValue = () => {
  html(read<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE), Index.HTML);
};

export const execDynamicInput = (
  input: typeof inputs[number],
  scope: Scope,
  offset: number
) => {
  write(Index.INPUT_VALUE, input.value);
  execInputValue();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);
