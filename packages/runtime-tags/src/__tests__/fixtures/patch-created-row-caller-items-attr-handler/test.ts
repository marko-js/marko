import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Rows a patch creates from the caller's `<let>` items render attrs from a server path and a
// handler reading the item.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, path: "/a" },
    { show: true, path: "/a" },
    nth(".add"),
    { show: true, path: "/b" },
    nth("a", 1),
  ],
};
