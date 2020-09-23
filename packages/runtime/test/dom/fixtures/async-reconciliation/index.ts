import {
  on,
  textContent,
  text,
  walk,
  computeAsync,
  source,
  set,
  register,
  createRenderFn
} from "../../../../dom/index";
import { wait, resolveAfter } from "../../../utils/resolve";
import { get, after, over } from "../../utils/walks";
import { InputValue } from "../../utils/types";

const clickA = (container: Element) => {
  (container.querySelector("#a") as HTMLElement).click();
};
const clickB = (container: Element) => {
  (container.querySelector("#b") as HTMLElement).click();
};

export const FAILS_HYDRATE = true;
export const inputs = [
  { label: "number" },
  wait(2),
  clickA,
  wait(2),
  clickB,
  wait(2),
  { label: "num" },
  wait(2),
  { label: "count" },
  wait(2)
];

export const template = `<button id=a></button><button id=b></button>`;
export const walks = get + over(1) + get + after + after + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: InputValue<typeof inputs>) => {
    const a = source(0);
    const b = source(0);
    walk();
    on("click", () => {
      set(a, 1);
    });
    textContent(a);
    walk();
    on("click", () => {
      set(b, 2);
    });
    textContent(b);
    text(input.label);
    text(
      computeAsync(
        async ([_a, _b]) => resolveAfter(_a + _b, _a || _b ? 3 : 1),
        [a, b] as const,
        0
      )
    );
  }
);

export default createRenderFn(template, walks, ["label"], hydrate);
