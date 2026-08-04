import type { TestConfig } from "../../main.test";

// A shell's text AND attribute holes fill from the branch partial when the
// client constructs it — including the attr removal sentinel — then keep
// filling through pairing patches on the now-live branch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: false },
    { title: "Store", show: true, href: "/sale", label: "Sale", hidden: true },
    { title: "Store", show: true, href: "/new", label: "New" },
    { title: "Store", show: false },
    { title: "Store", show: true, href: "/back", label: "Back" },
  ],
};
