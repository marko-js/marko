import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// A statically true branch inside a branch-mode body still serializes enough
// to re-mount its effects after resume.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("toggle"), click("toggle")],
};
