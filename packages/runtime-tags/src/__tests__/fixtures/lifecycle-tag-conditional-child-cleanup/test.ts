import type { TestConfig } from "../../main.test";

// A child component whose only interactive feature is a `<lifecycle>` (no
// `let`, no closures, no source `$signal`). Its `onDestroy` cleanup is wired
// through `$signal` at runtime, which requires the scope to resume with its
// closest branch linked. Toggling the `<if>` off after resume must run the
// cleanup, matching client-side rendering.
function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle],
};
