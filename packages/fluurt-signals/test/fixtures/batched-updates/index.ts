import { once, compute, get, Signal, set, register } from "../../../src";
import { dynamicText, beginEl, endEl } from "../../../src/dom";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const a = new Signal(0);
    const b = new Signal(0);
    beginEl("button");
    once("click", () => {
      set(a, 1);
      set(b, 1);
    });
    dynamicText(compute(() => get(a) + get(b)));
    endEl();
  }
);

renderer.input = ["value"];

export default renderer;
