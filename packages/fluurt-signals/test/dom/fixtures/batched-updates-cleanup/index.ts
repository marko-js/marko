import {
  once,
  compute,
  createSignal,
  conditional,
  set,
  register
} from "../../../../dom/index";

import { dynamicText, nextElementRef, createTemplate, withTemplate, empty } from "../../../../dom/dom";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const show = createSignal(true);
    const message = createSignal("hi");
    nextElementRef();
    once("click", () => {
      set(message, "bye");
      set(show, false);
    });
    const branch0 = withTemplate(() => {
      dynamicText(message);
    }, branch0_template);
    conditional(compute(_show => (_show ? branch0 : empty), [show]));
  }
);

const branch0_template = createTemplate(`<span><!#T></span>`);

renderer.input = ["value"];

export const html = `<button #></button><!#F>`
export default renderer;
