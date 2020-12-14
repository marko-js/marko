import {
  register,
  set,
  get,
  on,
  createRenderFn,
  walk,
  source,
  text
} from "../../../../src/dom";
import { next, over, get as getNode } from "../../../dom/utils/walks";

export const updates = [
  (container: Element) => container.querySelector("button")!.click()
];

export const template = "<div> </div><button>increment</button>";
export const walks = next(1) + getNode + over(1) + getNode + over(1);
export const hydrate = (input: { start: number }) => {
  const count = source(get(input).start as number);
  text(count);
  walk();
  on("click", () => set(count, get(count) + 1));
};

export default createRenderFn(template, walks, ["start"], hydrate);
register("counter", hydrate);
