import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// An effect whose only home is inside control flow still switches the
// `<show>` into branch mode, so it cleans up on hide and re-mounts on reveal.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("toggle"), click("inner")],
};
