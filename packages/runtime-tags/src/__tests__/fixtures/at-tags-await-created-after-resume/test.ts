import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click("show"), click("inc")],
};

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
}
