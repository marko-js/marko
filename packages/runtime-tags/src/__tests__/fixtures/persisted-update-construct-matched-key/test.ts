import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Matched items swap in place while new keys join by construction.
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible (and a csr navigation cannot lose an echo).
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, range: "narrow" } },
    clickCount,
    navigate({ $global: { persisted: true, range: "wide" } }),
    clickCount,
    // Sparse fills and ordinary keyed removal on the way back.
    navigate({ $global: { persisted: true, range: "narrow" } }),
    clickCount,
  ],
};
