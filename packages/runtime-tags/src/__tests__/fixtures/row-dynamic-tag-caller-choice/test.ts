import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Paired rows render a dynamic tag the caller's state chooses, fed the row's item.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", tags: ["x", "y"] },
    { label: "b", tags: ["y", "z"] },
    nth(".c"),
    { label: "b", tags: ["z", "w"] },
    nth(".c"),
  ],
};
