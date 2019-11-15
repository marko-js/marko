import {
  register,
  set,
  get,
  beginEl,
  endEl,
  text,
  attr,
  dynamicText,
  on,
  createSignal
} from "../../../../dom/index";

let button: HTMLButtonElement;

export const updates = [() => button.click()];

export default input => {
  counter(input);
};

const counter = register("counter", input => {
  const count = createSignal((input as any).start);
  beginEl("div");
  dynamicText(count);
  endEl();
  button = beginEl("button") as HTMLButtonElement;
  on("click", () => set(count, get(count) + 1));
  text("increment");
  endEl();
});
