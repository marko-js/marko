import type { TestConfig } from "../../main.test";

// A loop item whose root element carries server-sourced attributes: the
// item shell must claim the root so a constructed item's attrs apply.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ href: "/a", icon: "a", label: "A" }], path: "/a" },
    {
      items: [
        { href: "/a", icon: "a", label: "A" },
        { href: "/b", icon: "b", label: "B" },
      ],
      path: "/b",
      page: "b",
    },
    { items: [{ href: "/b", icon: "b", label: "B" }], path: "/b" },
  ],
};
