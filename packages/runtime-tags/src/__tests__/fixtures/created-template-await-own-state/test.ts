import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A template whose `<await>` takes its own `<let>`'s promise.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ on: true, note: "b" }, toggle, wait, toggle, wait],
};
