import {
  once,
  compute,
  createSignal,
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
    const a = createSignal(0);
    const b = createSignal(0);
    beginEl("button");
    once("click", () => {
      set(a, 1);
      set(b, 1);
    });
    dynamicText(compute((_a, _b) => _a + _b, [a, b]));
    endEl();
  }
);

renderer.input = ["value"];

export default renderer;
