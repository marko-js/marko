import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A child a flush creates joins a constant with an input its caller passes
// client state: the fresh scope inits the join, as no patch value completes it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, y: "a" },
    click,
    { show: true, y: "b" },
    click,
    { show: false, y: "c" },
    { show: true, y: "d" },
    click,
  ],
};
