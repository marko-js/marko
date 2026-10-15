import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// Content a child renders in its `@catch`, read or not, follows the page's
// params as a patch throws, throws again, recovers and throws.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [
    { fail: false, label: "a" },
    { fail: true, label: "b" },
    { fail: true, label: "c" },
    { fail: false, label: "d" },
    click,
    { fail: true, label: "e" },
  ],
};
