import { beginEl, endEl, dynamicAttrs, ContainerNode } from "../../../src";

export const inputs = [
  {
    value: { a: 1, b: 2 }
  },
  {
    value: { b: 2, c: 3 }
  },
  {
    value: {}
  },
  {
    value: null
  },
  {
    value: { a: 1 }
  }
];

const renderer = (parent: ContainerNode, input: (typeof inputs)[number]) => {
  const div = beginEl("div", parent);
  dynamicAttrs(div, input.value);
  endEl(div, parent);
};

renderer.input = ["value"];

export default renderer;
