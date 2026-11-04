import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body a created branch calls reads the state of the scope that
// defines it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, id: "a" },
    { show: true, id: "b" },
    click,
    { show: false, id: "c" },
    click,
    { show: true, id: "d" },
  ],
};
