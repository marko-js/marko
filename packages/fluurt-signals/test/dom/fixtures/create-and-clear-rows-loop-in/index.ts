import { loopIn, compute, get, register } from "../../../../dom/index";

import { beginEl, dynamicText, endEl } from "../../../../dom/dom";

export const inputs = [
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c"
    }
  },
  {
    children: {}
  },
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c"
    }
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: { children: { [x: string]: string } }) => {
    beginEl("div");
    loopIn(input.children, (_, text) => {
      dynamicText(text);
    });
    endEl();
  }
);

renderer.input = ["children"];

export default renderer;
