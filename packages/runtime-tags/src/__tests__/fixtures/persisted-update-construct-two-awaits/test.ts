import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Pins two pending awaits inside one placeholder boundary under a constructed
// hop: each body arrives in its own resolution-order fills frame.
export const config: TestConfig = {
  persisted: true,
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "reports",
        topic: "sales",
      },
    }),
  ],
};
