import {
  textContent,
  walk,
  source,
  compute,
  set,
  get,
  on,
  register,
  createRenderFn
} from "../../../../src/dom/index";
import { get as getNode, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click] as const;

export const template = `<button></button>`;
export const walks = getNode + over(1);
export const hydrate = register(__dirname.split("/").pop()!, () => {
  walk();
  const clickCount = source(0);
  const error = source("");
  const doubleClick = compute((click) => click * 2, clickCount, 1);
  on("click", () => {
    const prev = get(clickCount);
    set(clickCount, prev + 1);
    // TODO: figure out how to have failing tests
    try {
      if (prev) get(doubleClick);
    } catch(err) {
      set(error, err);
    }
  });
  textContent(compute(([clickCount, error]) => String(clickCount) + error, [clickCount, error], 0, true));
});

export default createRenderFn(template, walks, [], hydrate);
