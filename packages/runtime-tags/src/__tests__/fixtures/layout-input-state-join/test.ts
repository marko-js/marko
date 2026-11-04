import type { TestConfig } from "../../main.test";

// A layout holding `<html>` is a page its route passes client state: a branch
// in it reads a join of that state and the server's input.
export const config: TestConfig = {
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  steps: [{ show: true, b: 10 }, click("button"), click("button")],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
