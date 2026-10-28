import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body in a kept branch joins a client-sourced param with a server
// one: the patch sends the server param, and the body's scope inits the join.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true, x: "a" }, click, { show: true, x: "b" }],
};
