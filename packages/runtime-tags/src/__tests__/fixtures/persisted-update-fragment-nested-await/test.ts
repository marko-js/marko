import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A pending `<await>` nested inside another pending boundary's body, inside a
// cross-route fragment: each boundary-body frame leaves the page consistent.
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
    clickCount,
  ],
};
