import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A missing token makes fragment entries authoritative for every loop item.
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible (and a csr navigation cannot lose an echo).
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, range: "narrow" } },
    clickCount,
    // Matched items swap in place while the new item joins as a fragment.
    navigate(
      { $global: { persisted: true, range: "wide" } },
      { mutateHave: () => "" },
    ),
    clickCount,
    // The updated token restores sparse fills and ordinary keyed removal.
    navigate({ $global: { persisted: true, range: "narrow" } }),
    clickCount,
  ],
};
