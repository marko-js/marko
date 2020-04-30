import { loopIn, compute, get, register } from "../../../../dom/index";

import { withTemplate, createTemplate, dynamicText } from "../../../../dom/dom";

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
    loopIn(input.children, withTemplate((_, text) => {
      dynamicText(text);
    }, loop_template));
  }
);

const loop_template = createTemplate("<!#T>");

renderer.input = ["children"];

export const html = `<div><!#F></div>`;
export default renderer;
