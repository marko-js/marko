import { text, dynamicText } from "../../../src";

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

const renderer = (input: (typeof inputs)[number]) => {
  text("Static ");
  dynamicText(input.value);
};

renderer.input = ["value"];

export default renderer;
