import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// Content a patch creates from its shell mounts an effect on a caller's param
// once: the init's render queues it for state, the flush names it for server data.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, count: 10 }, click, { show: true, count: 10 }, click],
};
