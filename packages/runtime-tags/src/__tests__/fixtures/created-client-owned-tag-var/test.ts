import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
    click(".log"),
    click(".edit"),
  ],
};
