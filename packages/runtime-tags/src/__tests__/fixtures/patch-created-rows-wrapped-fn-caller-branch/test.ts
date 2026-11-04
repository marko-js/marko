import type { TestConfig } from "../../main.test";

const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();

// The same wrapped function, with the join in a branch the caller's state picks.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, items: [1, 2] },
    { show: true, items: [1, 2] },
    nth(".l"),
    nth(".o"),
    nth(".o"),
    { show: true, items: [1, 2] },
    nth(".toggle"),
  ],
};
