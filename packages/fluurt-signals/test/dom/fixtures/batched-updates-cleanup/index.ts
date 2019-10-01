import {
  once,
  compute,
  get,
  Signal,
  conditional,
  set,
  register
} from "../../../../dom/index";

import { dynamicText, beginEl, endEl } from "../../../../dom/dom";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const show = new Signal(true);
    const message = new Signal("hi");

    beginEl("button");
    once("click", () => {
      set(message, "bye");
      set(show, false);
    });
    endEl();
    const branch0 = () => {
      beginEl("span");
      dynamicText(message);
      endEl();
    };
    conditional(compute(() => (get(show) ? branch0 : undefined)));
  }
);

renderer.input = ["value"];

export default renderer;
