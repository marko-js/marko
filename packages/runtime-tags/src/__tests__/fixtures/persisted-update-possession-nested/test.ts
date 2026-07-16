import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A nested dynamic hop swaps by build-stable token identity.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "a", topic: "sales" } },
    clickCount,
    navigate({ $global: { persisted: true, view: "b", topic: "sales" } }),
    clickCount,
    navigate({ $global: { persisted: true, view: "a", topic: "growth" } }),
  ],
};
