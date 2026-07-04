import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickInc = (container: Element) =>
  container.querySelector<HTMLElement>("button.inc")!.click();

// The route-wrapper composition: a layout renders its body content through a
// dynamic tag (`<${input.content}/>`). Update merges must descend that hop --
// the server links the rendered branch explicitly and the client dispatches
// the content section's registered merge by the serialized renderer id.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "Home", $global: { persisted: true } },
    clickInc,
    navigate({ title: "About", $global: { persisted: true } }),
    clickInc,
  ],
};
