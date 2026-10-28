import type { TestConfig } from "../../main.test";

// A layout holding `<html>` is a page its route passes client state: the
// dynamic tag that state names renders.
export const config: TestConfig = {
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  steps: [{ label: "x" }, click("button"), click("button")],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
