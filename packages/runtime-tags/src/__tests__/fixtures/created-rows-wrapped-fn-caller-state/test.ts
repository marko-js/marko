import type { TestConfig } from "../../main.test";

const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();

// Created rows pass a template-defined function (wrapping a module one) to a `<define>`
// whose join reads the caller's state: it registers, so a patch binds it.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, open: true, items: [1, 2] },
    { show: true, open: true, items: [1, 2] },
    nth(".l"),
    { show: true, open: true, items: [1, 2] },
    nth(".toggle"),
  ],
};
