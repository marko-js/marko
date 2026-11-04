import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows joined with the caller's path render a child of their own beside a server branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, items: [] },
    { show: true, items: [{ href: "/a", icon: "a", label: "A" }] },
    {
      show: true,
      items: [
        { href: "/a", icon: "a", label: "A" },
        { href: "/b", icon: "b", label: "B" },
      ],
      page: "b",
    },
    nth(".p"),
    {
      show: true,
      items: [
        { href: "/b", icon: "b", label: "B" },
        { href: "/c", icon: "c", label: "C" },
      ],
    },
    nth(".p"),
  ],
};
