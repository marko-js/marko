import {
  on,
  computeAsync,
  createSignal,
  attr,
  set,
  register,
  dynamicText,
  beginEl,
  endEl
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";

const clickA = (container: Element) => {
  (container.querySelector("#a") as HTMLElement).click();
};
const clickB = (container: Element) => {
  (container.querySelector("#b") as HTMLElement).click();
};

export const wait = 2;
export const FAILS_HYDRATE = true;
export const inputs = [
  { label: "number" },
  clickA,
  clickB,
  { label: "num" },
  { label: "count" }
] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    const a = createSignal(0);
    const b = createSignal(0);
    beginEl("button");
    attr("id", "a");
    on("click", () => {
      set(a, 1);
    });
    dynamicText(a);
    endEl();
    beginEl("button");
    attr("id", "b");
    on("click", () => {
      set(b, 2);
    });
    dynamicText(b);
    endEl();
    dynamicText(input.label);
    dynamicText(
      computeAsync(async (_a, _b) => resolveAfter(_a + _b, _a || _b ? 3 : 1), [
        a,
        b
      ])
    );
  }
);

renderer.input = ["label"];

export default renderer;
