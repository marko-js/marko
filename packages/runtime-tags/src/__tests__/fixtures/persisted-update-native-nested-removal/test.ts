import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickChild = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.child")?.click();
};
const assertChild = (expected: boolean) => (container: Element) => {
  assert.equal(!!container.querySelector("button.child"), expected);
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { outer: "div", child: "component", $global: { persisted: true } },
    clickChild,
    navigate({ outer: "div", child: null, $global: { persisted: true } }),
    assertChild(false),
    navigate({ outer: "div", child: "native", $global: { persisted: true } }),
    assertChild(false),
    navigate({ outer: "div", child: false, $global: { persisted: true } }),
    assertChild(false),
    navigate({
      outer: "div",
      child: "component",
      $global: { persisted: true },
    }),
    assertChild(true),
    clickChild,
  ],
};
