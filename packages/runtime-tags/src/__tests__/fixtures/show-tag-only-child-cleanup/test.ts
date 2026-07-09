import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// The `<show>` is the only child of `<section>`, exercising the parent-element
// reference path of the keep-alive branch.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("toggle")],
};
