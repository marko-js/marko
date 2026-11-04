import type { TestConfig } from "../../main.test";

const call = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".call")!.click();

// A function passed straight to a dynamic tag's known template, which stores it:
// a patch changing what it captures makes it anew, as through a known tag.
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
