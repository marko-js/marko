import type { TestConfig } from "../../main.test";

// Round-trip: `count` flows Tags -> Class (the split child renders it) and the
// split child's event flows Class -> Tags (incrementing the same <let>), which
// re-renders both the tags display and the split child's reactive input.
function clickClass(c: Element) {
  (c.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickClass, clickClass],
};
