import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A patch creates a template whose `<await>` takes its own `<let>`'s promise:
// the created scope sets the await up, so its body renders and follows the state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a" },
    { on: true, note: "b" },
    toggle,
    wait,
    toggle,
    wait,
    { on: true, note: "c" },
    toggle,
    wait,
    toggle,
    wait,
  ],
};
