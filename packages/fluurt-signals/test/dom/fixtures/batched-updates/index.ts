import {
  once,
  textContent,
  walk,
  compute,
  createSignal,
  set,
  register,
  createRenderFn
} from "../../../../dom/index";
import { get, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

export const template = `<button></button>`;
export const walks = get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const a = createSignal(0);
    const b = createSignal(0);
    walk();
    once("click", () => {
      set(a, 1);
      set(b, 1);
    });
    textContent(compute((_a, _b) => _a + _b, [a, b]));
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
