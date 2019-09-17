import {
  ContainerNode,
  dynamicText,
  once,
  compute,
  get,
  Signal,
  beginEl,
  endEl,
  conditional,
  set
} from "../../../src";

const show = new Signal(true);
const message = new Signal("hi");

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const renderer = (parent: ContainerNode, input: (typeof inputs)[0]) => {
  const button = beginEl("button", parent);
  once(button, "click", () => {
    set(message, "bye");
    set(show, false);
  });
  endEl(button, parent);
  const branch0 = (ifParent: ContainerNode) => {
    const span = beginEl("span", ifParent);
    dynamicText(message, span);
    endEl(span, ifParent);
  };
  conditional(compute(() => (get(show) ? branch0 : undefined)), parent);
};

renderer.input = ["value"];

export default renderer;
