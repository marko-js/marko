import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// An input a stateful branch reads joins a client-sourced one in its section:
// its fill re-runs the join only where that input is the client's.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x", c: "p" }, click, { a: "y", c: "q" }, { a: "z", c: "r" }],
};
