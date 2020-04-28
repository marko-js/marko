import { compute, empty, conditional, register } from "../../../../dom/index";

import { dynamicText, createTemplate, withTemplate } from "../../../../dom/dom";

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
    const branch0 = withTemplate(() => {
      dynamicText(input.value);
    }, branch0_template);
    conditional(compute(value => (value ? branch0 : empty), [input.value]));
  }
);

const branch0_template = createTemplate("<span><!#T></span>");

renderer.input = ["value"];

export const html = `<div><!#F></div>`;
export default renderer;
