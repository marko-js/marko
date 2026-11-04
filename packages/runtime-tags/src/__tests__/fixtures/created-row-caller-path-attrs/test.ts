import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Rows a patch creates from server items render an attr the caller's state (the path) joins.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, items: [] },
    { show: true, items: [{ href: "/a", label: "A" }] },
    {
      show: true,
      items: [
        { href: "/a", label: "A" },
        { href: "/b", label: "B" },
      ],
    },
    nth(".p"),
    {
      show: true,
      items: [
        { href: "/b", label: "B" },
        { href: "/c", label: "C" },
      ],
    },
    nth(".p"),
  ],
};
