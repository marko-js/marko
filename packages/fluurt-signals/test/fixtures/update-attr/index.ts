import { beginEl, endEl, attr, dynamicAttr } from "../../../src";

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

const renderer = (input: (typeof inputs)[number]) => {
  beginEl("div");
  attr("a", "0");
  dynamicAttr("b", input.value);
  endEl();
};

renderer.input = ["value"];

export default renderer;
