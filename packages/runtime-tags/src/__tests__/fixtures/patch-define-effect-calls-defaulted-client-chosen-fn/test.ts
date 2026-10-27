import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body's script calling a client-chosen function behind `??` re-runs
// by the candidates' captures.
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
