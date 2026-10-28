import type { TestConfig } from "../../main.test";

const clickLabel = (d: Document) =>
  (d.querySelector(".l") as HTMLElement).click();

// A bare module function joined with the child's own state can't be serialized: a
// patch creating its rows fails as main's document does, optimized too.
export const config: TestConfig = {
  patches: true,
  error_html: true,
  steps: [
    { show: false, open: true, items: [1, 2] },
    { show: true, open: true, items: [1, 2] },
    clickLabel,
  ],
};
