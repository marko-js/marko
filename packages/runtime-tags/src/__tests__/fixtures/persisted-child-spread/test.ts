import type { TestConfig } from "../../main.test";

// A request-derived spread into a child feeds every group it may carry:
// the child's masks stay server-owned per group, absent keys render as
// undefined, and a constructed branch's child seeds and mounts as usual.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { props: { title: "A", note: "n1" }, show: false },
    { props: { title: "B" }, show: true, more: { note: "m1" } },
    { props: { title: "B", note: "n2" }, show: true, more: { note: "m2" } },
  ],
};
