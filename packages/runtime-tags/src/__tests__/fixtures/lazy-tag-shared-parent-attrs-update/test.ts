import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two parents share the same load child from a subdirectory. Attr updates from
// both parents are buffered before the shared virtual module resolves, then
// flushed correctly once setup runs.
export const config: TestConfig = {
  steps: [{}, click, click, wait, click],
  equivalent: false,
};
