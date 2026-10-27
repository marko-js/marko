import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};

// A patch reveals a load-on-render child whose input reads page state:
// the flush waits for the input signal's module too, so the composed
// child receives the client-derived value in the creating run.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    click,
    { show: true, label: "c" },
  ],
};
