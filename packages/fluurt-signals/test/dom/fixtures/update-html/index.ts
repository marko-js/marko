import { dynamicText, register } from "../../../../dom/index";

import { html, dynamicHTML } from "../../../../dom/dom";

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

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    html("<em>Testing</em> ");
    dynamicHTML(input.value);
  }
);

renderer.input = ["value"];

export default renderer;
