import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<let>` nothing assigns, passed to a child: a patch leaves the live child's
// input, as the client keeps the `<let>`'s value (the fresh render re-inits
// it).
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
