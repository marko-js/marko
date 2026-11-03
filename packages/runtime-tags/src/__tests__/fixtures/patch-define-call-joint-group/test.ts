import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body joins a client-sourced param with a server one, and that
// one with a page input: the call passes that param alone from the server.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: 1, y: "a" }, click, { x: 2, y: "b" }, click, { x: 3, y: "c" }],
};
