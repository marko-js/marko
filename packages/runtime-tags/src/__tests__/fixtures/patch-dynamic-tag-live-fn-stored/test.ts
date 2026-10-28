import type { TestConfig } from "../../main.test";
const call = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".call")!.click();
// A dynamic tag passes a live function its child stores: its template cannot see the
// holder, so the bind marks, and a patch with no capture changed keeps the function.
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
