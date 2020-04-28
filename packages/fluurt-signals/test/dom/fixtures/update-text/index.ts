import { register } from "../../../../dom/index";

import { dynamicText } from "../../../../dom/dom";

export const inputs = [
  {
    value: "Dynamic 1"
  },
  {
    value: "Dynamic 2"
  },
  {
    value: "Dynamic 3"
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    dynamicText(input.value);
  }
);

renderer.input = ["value"];

export const html = "Static <!#T>";
export default renderer;
