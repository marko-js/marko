import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// Parent state changing while the body is hidden must not run its effects;
// the reveal re-mounts (a fresh `onMount`) with the latest value.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("bump"), click("toggle"), click("bump")],
};
