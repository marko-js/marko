import {
  once,
  compute,
  createSignal,
  set,
  register
} from "../../../../dom/index";
import { dynamicText, nextElementRef } from "../../../../dom/dom";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const a = createSignal(0);
    const b = createSignal(0);
    nextElementRef();
    once("click", () => {
      set(a, 1);
      set(b, 1);
    });
    dynamicText(compute((_a, _b) => _a + _b, [a, b]));
  }
);

renderer.input = ["value"];

export const html = `<button #><!#T></button>`;
export default renderer;
