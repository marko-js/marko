import { text, dynamicText, ContainerNode } from "../../../src";

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

const renderer = (parent: ContainerNode, input: (typeof inputs)[number]) => {
  text("Static ", parent);
  dynamicText(input.value, parent);
};

renderer.input = ["value"];

export default renderer;
