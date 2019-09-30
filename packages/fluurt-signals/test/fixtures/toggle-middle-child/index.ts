import { el, compute, get, conditional, register } from "../../../src";

import { beginEl, dynamicText, endEl } from "../../../src/dom";

export const inputs = [
  {
    value: "Hello"
  },
  {
    value: false
  },
  {
    value: "World"
  },
  {
    value: "!"
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: { value: string | undefined }) => {
    beginEl("div");
    const branch0 = () => {
      beginEl("span");
      dynamicText(input.value);
      endEl();
    };
    el("span");
    conditional(compute(() => (get(input.value) ? branch0 : undefined)));
    el("span");
    endEl();
  }
);

renderer.input = ["value"];

export default renderer;
