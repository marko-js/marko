import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// MPA-navigation parity for volatile expressions: values that derive from
// nothing the source lattice tracks (impure calls like `new Date()` --
// simulated here with a deterministic counter) refresh on every persisted
// navigation, both inline and through a `<const>`, exactly as a full page
// load would refresh them. Client state (`count`) still survives.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_csr: true,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickButton,
  ],
};
