import {
  register,
  set,
  get,
  on,
  createRenderFn,
  walk,
  source,
  textContent
} from "../../../../src/dom";
import { next, over, get as getNode } from "../../../dom/utils/walks";

let button: HTMLButtonElement;

export const updates = [() => button.click()];

export const template = "<div></div><button>Increment</button>";
export const walks = getNode + next(1) + getNode + over(1);
export const hydrate = (input: { start: number }) => {
  const count = source(get(input).start as number);
  walk();
  textContent(count);
  button = walk() as HTMLButtonElement;
  on("click", () => set(count, get(count) + 1));
};

export default createRenderFn(template, walks, [], hydrate);
register(__dirname.split("/").pop()!, hydrate);
