import { loopFrom, register } from "../../../../dom/index";

import { withTemplate, createTemplate, dynamicText } from "../../../../dom/dom";

export const inputs = [
  {
    from: 0,
    to: 3,
    step: 1
  },
  {
    from: 0,
    to: -1,
    step: 1
  },
  {
    from: 0,
    to: 3,
    step: 1
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: typeof inputs[0]) => {
    loopFrom(input.from, input.to, input.step, withTemplate(i => dynamicText(i), loop_template));
  }
);

const loop_template = createTemplate("<!#T>");

renderer.input = ["from", "to", "step"];

export const html = `<div><!#F></div>`;
export default renderer;
