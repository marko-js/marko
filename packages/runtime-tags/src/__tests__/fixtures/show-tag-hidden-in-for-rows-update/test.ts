import type { TestConfig } from "../../main.test";

// Resumed hidden rows update inside their `<t hidden>` wrapper, client
// rendered ones while detached, so only the resumed log shows those updates.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#add")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#grow")!.click(),
  ],
};
