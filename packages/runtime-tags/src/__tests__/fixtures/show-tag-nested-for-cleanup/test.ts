import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// Effects inside a `<for>` in a branch-mode body are torn down on hide and
// re-mounted on every reveal.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("toggle"), click("toggle")],
};
