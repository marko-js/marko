import type { TestConfig } from "../../main.test";
const call = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".call")!.click();
// A child's `<return>` of a live function its caller passes to another child, which
// stores it: that call binds it, and keeps it until its capture changes.
export const config: TestConfig = {
  patches: true,
  // The logs are client-effect state; the client render of the same steps decides.
  skip_fresh_render: true,
  steps: [
    { title: "a" },
    { title: "b" },
    { title: "b" },
    call,
    { title: "c" },
    call,
  ],
};
