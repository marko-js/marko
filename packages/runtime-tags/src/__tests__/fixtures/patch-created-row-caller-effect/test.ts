import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A created row mounts an effect on a caller's param once: the init's render
// queues it for state, the flush names it for server data.
export const config: TestConfig = {
  patches: true,
  steps: [{ items: [], count: 10 }, click, { items: ["a"], count: 10 }, click],
};
