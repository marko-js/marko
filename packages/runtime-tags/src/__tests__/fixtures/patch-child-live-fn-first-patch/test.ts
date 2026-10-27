import type { TestConfig } from "../../main.test";
const call = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".call")!.click();
// A child stores its caller's live function: the first patch, with no capture
// changed, keeps the function the page revived.
export const config: TestConfig = {
  patches: true,
  // The logs are client-effect state; the client render of the same steps decides.
  skip_fresh_render: true,
  steps: [
    { title: "a" },
    { title: "a" },
    { title: "b" },
    { title: "b" },
    call,
    { title: "c" },
    call,
  ],
};
