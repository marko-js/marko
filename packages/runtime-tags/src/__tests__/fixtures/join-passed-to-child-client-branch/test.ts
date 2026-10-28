import type { TestConfig } from "../../main.test";

// The plain twin: a resumed page takes no new input, so its client render
// alone shows each step.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ a: "x", b: "1" }, click("button"), click("button")],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
