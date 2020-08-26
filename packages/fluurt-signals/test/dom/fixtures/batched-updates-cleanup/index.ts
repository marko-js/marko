import {
  once,
  textContent,
  walk,
  compute,
  source,
  conditional,
  set,
  register,
  createRenderer,
  createRenderFn
} from "../../../../dom/index";

import { get, after, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

export const template = `<button></button>`;
export const walks = get + after + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const show = source(true);
    const message = source("hi");
    walk();
    once("click", () => {
      set(message, "bye");
      set(show, false);
    });
    const branch0 = createRenderer(
      branch0_template,
      branch0_walks,
      undefined,
      () => textContent(message)
    );
    conditional(compute(_show => (_show ? branch0 : undefined), show, 1));
  }
);

const branch0_template = `<span></span>`;
const branch0_walks = get + over(1);

export default createRenderFn(template, walks, [], hydrate);
