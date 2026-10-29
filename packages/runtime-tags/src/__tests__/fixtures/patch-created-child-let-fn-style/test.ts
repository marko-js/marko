import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same for a `<style>` interpolation. The rule text (with the build-specific
// custom property name) lands in the mutation log.
export const config: TestConfig = {
  patches: true,
  skip_parity: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
