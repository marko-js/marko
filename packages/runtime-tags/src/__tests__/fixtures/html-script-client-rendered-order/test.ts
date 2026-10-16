import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// The scripts one client render inserts run in document order before its
// effects, as the document's run before resume, from attributes or a row alike.
export const config: TestConfig = {
  steps: [{ n: "first" }, click],
};
