import { loopFrom, register } from "../../../../dom/index";

import { beginEl, dynamicText, endEl } from "../../../../dom/dom";

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
    beginEl("div");
    loopFrom(input.from, input.to, input.step, i => dynamicText(i));
    endEl();
  }
);

renderer.input = ["from", "to", "step"];

export default renderer;
