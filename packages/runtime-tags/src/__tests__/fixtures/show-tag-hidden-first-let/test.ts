import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// A client-rendered initially-hidden body initializes its state on the first
// reveal (in a later batch than the branch's creation).
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("inc"), click("toggle"), click("toggle")],
};
