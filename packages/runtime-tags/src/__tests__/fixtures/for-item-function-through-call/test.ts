import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// Each handler reaches the loop's items through a call, so the loop's readers
// must still register its closure over `n` instead of serializing it raw.
export const config: TestConfig = {
  steps: [{}, click("concat"), click("values"), click("direct")],
};
