import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click("add"), click("toggle"), click("toggle"), click("rename")],
};

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
}
