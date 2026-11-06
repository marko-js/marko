import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(selector)!.click();
}

export const config: TestConfig = {
  steps: [{}, click(".inc"), click(".inc"), click(".dec"), click(".run")],
};
