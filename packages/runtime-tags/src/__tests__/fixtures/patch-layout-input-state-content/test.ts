import type { TestConfig } from "../../main.test";

// A layout holding `<html>` is a page its route passes client state: content
// it hands a known child renders when that state reaches the child.
export const config: TestConfig = {
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  patches: true,
  steps: [{}, click("button"), click("button"), click("button")],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
