import type { TestConfig } from "../../main.test";

// A dynamic style inside client-owned structure follows the branch: a
// patch leaves a hidden branch hidden and its rule recomputes on the client.
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
export const config: TestConfig = {
  persisted: true,
  steps: [{ x: "first", color: "red" }, click, { x: "second", color: "blue" }],
};
