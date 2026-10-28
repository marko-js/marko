import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child rendering and logging a joined client choice beside a passed live function
// re-runs both by their fill runs.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    { title: "b" },
    click,
    { title: "c" },
    click,
    { title: "d" },
  ],
};
