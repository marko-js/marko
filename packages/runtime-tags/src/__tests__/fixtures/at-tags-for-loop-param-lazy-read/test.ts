import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    click(".direct", 1),
    click(".nested", 0),
    click("#rename", 0),
    click(".direct", 1),
    click(".nested", 0),
  ],
};

function click(selector: string, index: number) {
  return (document: Document) =>
    document.querySelectorAll<HTMLButtonElement>(selector)[index].click();
}
