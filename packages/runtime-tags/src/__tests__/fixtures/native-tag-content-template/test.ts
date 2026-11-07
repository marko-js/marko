import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    (document.querySelector(selector) as HTMLButtonElement).click();
  };
}

// A template that takes no input renders as a native tag's content.
export const config: TestConfig = {
  steps: [{}, click("#counter"), click("#outer")],
};
