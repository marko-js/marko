import type { TestConfig } from "../../main.test";

// The ebay-button shape: a split Class API child emits `click`; the Tags API
// parent's onClick clears a <let>. The tags-side value must reactively clear.
function clickClass(c: Element) {
  (c.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickClass],
};
