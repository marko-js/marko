import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The lazy tag's module lands before the `<try>` shows its placeholder and its
// input after, once the placeholder moved the body's range aside.
export const config: TestConfig = {
  skip_ssr: true,
  delay_load: ["input_value"],
  steps: [{}, show, wait],
};
