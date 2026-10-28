import type { TestConfig } from "../../main.test";

// Content positions a patch creates keep their own closure position, which
// a server value's fill matches, in optimized builds.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "x", show: false },
    (d: Document) => d.querySelector<HTMLButtonElement>("button.a")!.click(),
    (d: Document) => d.querySelector<HTMLButtonElement>("button.b")!.click(),
    { label: "y", show: true },
    { label: "z", show: true },
    (d: Document) => d.querySelector<HTMLButtonElement>("button.b")!.click(),
    { label: "w", show: true },
  ],
};
