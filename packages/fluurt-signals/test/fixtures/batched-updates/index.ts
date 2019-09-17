import {
  dynamicText,
  once,
  compute,
  get,
  Signal,
  beginEl,
  endEl,
  set
} from "../../../src";

const a = new Signal(0);
const b = new Signal(0);

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const renderer = (input: (typeof inputs)[0]) => {
  beginEl("button");
  once("click", () => {
    set(a, 1);
    set(b, 1);
  });
  dynamicText(compute(() => get(a) + get(b)));
  endEl();
};

renderer.input = ["value"];

export default renderer;
