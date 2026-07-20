import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click("#update"), click("#reselect")],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
