import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickAdd = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.add")!.click();

// Request-derived controllable attrs: changed captures win the live value on
// navigation while the bound (`:=`) qty input never rides a patch.
export const config: TestConfig = {
  persisted: true,
  // `getItem` is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, item: [2] } },
    clickAdd,
    navigate({ $global: { persisted: true, item: [3] } }),
    clickAdd,
  ],
};
