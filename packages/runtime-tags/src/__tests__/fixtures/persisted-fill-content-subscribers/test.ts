import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "x" },
    click("button.a"),
    click("button.b"),
    { label: "y" },
    click("button.a"),
  ],
};
