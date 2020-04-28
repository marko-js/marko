import { dynamicAttr, register } from "../../../../dom/index";

import { nextElementRef } from "../../../../dom/dom";

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

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    nextElementRef();
    dynamicAttr("b", input.value);
  }
);

renderer.input = ["value"];

export const html = `<div a=0 #></div>`;
export default renderer;
