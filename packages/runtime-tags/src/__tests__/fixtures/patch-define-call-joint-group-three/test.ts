import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A joint group of three params carries one's client state: the call passes
// each other param alone from the server.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "a", z: 5 },
    click,
    { x: 2, y: "b", z: 6 },
    click,
    { x: 3, y: "c", z: 7 },
  ],
};
