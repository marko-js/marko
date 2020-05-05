import { register, set, get, on, createSignal } from "../../../../dom/index";
import { text, dynamicText, beginEl, endEl } from "../../../../dom/dom";

let button: HTMLButtonElement;

export const updates = [() => button.click()];

const renderer = input => {
  counter(input);
};

export default createRenderFn(template, walks, [], hydrate);

const counter = register("counter", input => {
  const count = createSignal(get(input).start as number);
  beginEl("div");
  dynamicText(count);
  endEl();
  button = beginEl("button") as HTMLButtonElement;
  on("click", () => set(count, get(count) + 1));
  text("increment");
  endEl();
});
