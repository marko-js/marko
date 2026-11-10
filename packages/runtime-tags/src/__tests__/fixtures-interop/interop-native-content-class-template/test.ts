import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    (document.querySelector(selector) as HTMLButtonElement).click();
  };
}

// A Class template that takes no input renders as a native tag's content,
// in place across updates and in a branch the client creates.
export const config: TestConfig = {
  steps: [{}, click("div .thing"), click("#tags"), click("#toggle")],
};
