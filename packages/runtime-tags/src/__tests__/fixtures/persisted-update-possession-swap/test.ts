import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

let navigation = 0;
const assertHave = {
  mutateHave(have: string) {
    assert.equal(have, ["SC", "SD"][navigation++ % 2]);
    return have;
  },
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "a", topic: "sales" } },
    clickCount,
    navigate(
      { $global: { persisted: true, view: "b", topic: "sales" } },
      assertHave,
    ),
    clickCount,
    navigate(
      { $global: { persisted: true, view: "a", topic: "growth" } },
      assertHave,
    ),
  ],
};
