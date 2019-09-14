import {
  el,
  beginEl,
  MaybeSignal,
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
  input: { value: MaybeSignal<string | undefined> }
) => {
  const div = beginEl("div", parent);
  const branch0 = (ifParent: ContainerNode) => {
    const span = beginEl("span", ifParent);
    dynamicText(input.value, span);
    endEl(span, ifParent);
  };
  conditional(compute(() => (get(input.value) ? branch0 : undefined)), div);
  el("span", div);
  el("span", div);
  endEl(div, parent);
};

renderer.input = ["value"];

export default renderer;
