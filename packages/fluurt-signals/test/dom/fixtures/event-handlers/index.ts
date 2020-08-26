import {
  dynamicOn,
  textContent,
  walk,
  source,
  compute,
  set,
  register,
  createRenderFn
} from "../../../../dom/index";
import { get, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

export const template = `<button></button>`;
export const walks = get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    walk();
    const clickCount = source(0);
    dynamicOn(
      "click",
      compute(
        count =>
          count <= 1
            ? () => {
                set(clickCount, count + 1);
              }
            : false,
        clickCount,
        1
      )
    );
    textContent(clickCount);
  }
);

export default createRenderFn(template, walks, [], hydrate);
