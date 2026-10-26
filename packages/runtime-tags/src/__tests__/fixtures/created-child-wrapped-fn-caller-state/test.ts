import type { TestConfig } from "../../main.test";

const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();

// A created child passes a template-defined function (wrapping a module one) to a `<define>`
// whose join reads the caller's state, at its root: a patch binds it.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, open: true },
    { show: true, open: true },
    nth(".l"),
    { show: true, open: true },
    nth(".l"),
  ],
};
