import { dynamicText, register } from "../../../../dom/index";

import { dynamicHTML } from "../../../../dom/dom";

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
    dynamicHTML(input.value);
  }
);

renderer.input = ["value"];

export const html = "<em>Testing</em> <!#F>";
export default renderer;
