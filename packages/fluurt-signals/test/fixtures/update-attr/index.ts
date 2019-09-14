import { el, endEl, attr, dynamicAttr, ContainerNode } from "../../../src";

export const inputs = [
  {
    value: 1
  },
  {
    value: "1"
  },
  {
    value: "2"
  },
  {
    value: null
  },
  {
    value: "1"
  },
  {
    value: false
  }
];

const renderer = (parent: ContainerNode, input: (typeof inputs)[number]) => {
  const div = el("div", parent);
  attr(div, "a", "0");
  dynamicAttr(div, "b", input.value);
  endEl(div, parent);
};

renderer.input = ["value"];

export default renderer;
