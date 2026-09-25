import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    click("show-of"),
    click("show-in"),
    click("show-nested"),
    click("inc"),
  ],
};

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
}
