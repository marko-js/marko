import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A pending await constructed from its record on a scriptless page settles
// into a stateful child: the body record's walk created it, so its setup
// (seed, mount) applies when the settle frame lands.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, promise: Promise.resolve("a") },
    { show: true, promise: resolveAfter("b", 10) },
    inc,
  ],
};
