import {
  once,
  textContent,
  walk,
  compute,
  source,
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
    const a = source(0);
    const b = source(0);
    walk();
    once("click", () => {
      set(a, 1);
      set(b, 1);
    });
    textContent(compute(([_a, _b]) => _a + _b, [a, b], 0));
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
