import {
  el,
  beginEl,
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

const renderer = (input: { value: string | undefined }) => {
  beginEl("div");
  const branch0 = () => {
    beginEl("span");
    dynamicText(input.value);
    endEl();
  };
  el("span");
  el("span");
  conditional(compute(() => (get(input.value) ? branch0 : undefined)));
  endEl();
};

renderer.input = ["value"];

export default renderer;
