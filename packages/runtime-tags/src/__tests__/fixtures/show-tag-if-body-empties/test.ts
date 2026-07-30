import type { TestConfig } from "../../main";

const click = (id: string) => (document: Document) =>
  document.getElementById(id)!.click();

export const config: TestConfig = {
  steps: [{}, click("t"), click("i"), click("i"), click("t")],
};
