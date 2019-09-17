import {
  el,
  beginEl,
  MaybeSignal,
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

const renderer = (input: { value: MaybeSignal<string | undefined> }) => {
  beginEl("div");
  const branch0 = () => {
    beginEl("span");
    dynamicText(input.value);
    endEl();
  };
  conditional(compute(() => (get(input.value) ? branch0 : undefined)));
  el("span");
  el("span");
  endEl();
};

renderer.input = ["value"];

export default renderer;
