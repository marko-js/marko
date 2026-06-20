import type { TestConfig } from "../../main.test";

// `on && {…}`, `on ? {…} : null`, and `box.inner &&= {…}` (where `box.inner`
// is itself `on ? {…} : null`) are all nullable: each yields a nullish value
// when its left/condition side is falsy, so reading a member off the result
// must be guarded. Toggling `on` to null must not throw.
function toggle(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle],
};
