import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Paired rows from server items render an attr the caller's state (the path) joins.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ href: "/a", label: "A" }] },
    {
      items: [
        { href: "/a", label: "A" },
        { href: "/b", label: "B" },
      ],
    },
    nth(".p"),
    {
      items: [
        { href: "/c", label: "C" },
        { href: "/b", label: "B" },
      ],
    },
    nth(".p"),
  ],
};
