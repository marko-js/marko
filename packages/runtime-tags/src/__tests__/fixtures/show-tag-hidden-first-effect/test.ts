import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// The effect must not run while initially hidden; it mounts on first reveal.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("toggle"), click("toggle")],
};
