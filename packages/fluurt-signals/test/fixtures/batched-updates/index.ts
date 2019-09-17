import {
  ContainerNode,
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

const renderer = (parent: ContainerNode, input: (typeof inputs)[0]) => {
  const button = beginEl("button", parent);
  once(button, "click", () => {
    set(a, 1);
    set(b, 1);
  });
  dynamicText(compute(() => get(a) + get(b)), button);
  endEl(button, parent);
};

renderer.input = ["value"];

export default renderer;
