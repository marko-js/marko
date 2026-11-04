import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer keeps content it takes under another name than `content`, through
// its whole input, under its own state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a" },
    { on: true, note: "b" },
    toggle,
    toggle,
    { on: true, note: "c" },
    toggle,
    toggle,
  ],
};
