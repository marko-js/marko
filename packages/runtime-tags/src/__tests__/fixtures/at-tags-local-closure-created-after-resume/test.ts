import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    click("open"),
    click("toggle-0"),
    click("toggle-0"),
    click("save-last"),
    click("fail"),
  ],
};

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
}
