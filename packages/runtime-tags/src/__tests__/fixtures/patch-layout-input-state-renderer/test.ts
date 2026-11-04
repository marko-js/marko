import type { TestConfig } from "../../main.test";

// A layout holding `<html>` is a page its route passes client state: a flush
// writes the input of the dynamic tag that state names, and keeps the name.
export const config: TestConfig = {
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  patches: true,
  steps: [
    { label: "x" },
    click("button"),
    { label: "y" },
    click("button"),
    { label: "z" },
  ],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
