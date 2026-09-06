import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// TWO bound fills joining one render: they apply in one batch, so the
// join runs once per patch and never paints a half-updated pair.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: "1", b: "x" },
    click,
    { a: "2", b: "y" },
    click,
    { a: "3", b: "z" },
    click,
  ],
};
