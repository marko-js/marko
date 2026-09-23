import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click("add"), click("mode"), click("mode"), click("mode")],
};

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
}
