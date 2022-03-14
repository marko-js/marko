import { html, write, createRenderFn, Scope } from "../../../dom/index";
import { over, get, open, close } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello <strong>World</strong>",
  },
  {
    value: "Some content",
  },
  {
    value: "<div/>",
  },
];

export const FAILS_HYDRATE = true;

const enum Index {
  HTML = 0,
  INPUT_VALUE = 2,
}

type ComponentScope = Scope<{
  [Index.HTML]: Node & ChildNode;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
}>;

// <em>Testing</em> $!{input.value}
export const template = "<em>Testing</em> <!>";
export const walks = open(2) + over(2) + get + over(1) + close;

export const execInputValue = (scope: ComponentScope) => {
  html(scope, scope[Index.INPUT_VALUE] as string, Index.HTML);
};

export const execDynamicInput = (
  scope: ComponentScope,
  input: typeof inputs[number]
) => {
  if (write(scope, Index.INPUT_VALUE, input.value)) {
    execInputValue(scope);
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);
