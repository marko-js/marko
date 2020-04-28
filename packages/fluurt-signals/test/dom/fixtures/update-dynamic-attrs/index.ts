import { dynamicAttrs, register } from "../../../../dom/index";

import { beginEl, endEl, nextElementRef } from "../../../../dom/dom";

export const inputs = [
  {
    value: { a: 1, b: 2 }
  },
  {
    value: { b: 2, c: 3 }
  },
  {
    value: {}
  },
  {
    value: null
  },
  {
    value: { a: 1 }
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    nextElementRef();
    dynamicAttrs(input.value);
  }
);

renderer.input = ["value"];

export const html = `<div #></div>`;
export default renderer;
