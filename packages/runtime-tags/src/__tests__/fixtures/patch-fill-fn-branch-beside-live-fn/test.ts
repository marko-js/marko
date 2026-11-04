import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-bound functions a `?:` or `||` branch or a sequence yields, beside a
// live bind: each re-binds on a change of what it captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", flag: true },
    { title: "b", flag: true },
    click,
    { title: "c", flag: true },
    click,
  ],
};
