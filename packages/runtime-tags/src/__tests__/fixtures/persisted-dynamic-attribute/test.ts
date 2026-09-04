import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    { href: "/first", label: "First", title: "one" },
    { href: "/second", label: "Second", hidden: true },
    { href: "/third", label: "Third", title: 0 },
  ],
};
