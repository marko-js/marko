import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A script inside client-owned structure reading a server value: the value
// fills through the closure that queues the script, which re-runs.
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [{ title: "a" }, click, click, { title: "b" }],
};
