import {
  textContent,
  walk,
  compute,
  source,
  set,
  register,
  createRenderFn,
  userEffect
} from "../../../../src/dom/index";
import { wait } from "../../../utils/resolve";
import { get, over } from "../../utils/walks";

export const inputs = [{ value: 0 }, wait(2), { value: 1 }, wait(2)];

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { value: number }) => {
    const a = source(0);
    const b = source(0);
    walk();
    userEffect(
      v => {
        set(a, v + 1);
        return () => set(b, v + 1);
      },
      input.value,
      1
    );
    textContent(compute(([_a, _b]) => "" + _a + _b, [a, b], 0));
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
