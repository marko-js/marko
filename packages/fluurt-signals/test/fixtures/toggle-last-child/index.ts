import {
  el,
  ContainerNode,
  compute,
  get,
  dynamicText,
  endEl,
  conditional
} from "../../../src";

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

const renderer = (
  parent: ContainerNode,
  input: { value: string | undefined }
) => {
  const div = el("div", parent);
  const branch0 = (ifParent: ContainerNode) => {
    const span = el("span", ifParent);
    dynamicText(input.value, span);
    endEl(span, ifParent);
  };
  endEl(el("span", div), div);
  endEl(el("span", div), div);
  conditional(compute(() => (get(input.value) ? branch0 : undefined)), div);
  endEl(div, parent);
};

renderer.input = ["value"];

export default renderer;
