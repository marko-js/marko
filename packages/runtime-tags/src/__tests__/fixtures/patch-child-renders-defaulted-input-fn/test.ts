import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child rendering its input's function behind `??` re-renders by its captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    click,
    { title: "b" },
    click,
    { title: "c" },
    { title: "c" },
  ],
};
