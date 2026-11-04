import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child passing its joined inputs into a `<define>` re-runs the body's script by
// their fill runs, past the body's stored value.
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
