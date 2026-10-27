import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer hands the body on under an `<await>` whose value is no promise:
// it renders at once, with nothing pending, so the root reports the body.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: true, note: "a", p: 1 },
    { on: true, note: "b", p: 1 },
    toggle,
    toggle,
    { on: true, note: "c", p: 1 },
    toggle,
    toggle,
  ],
};
