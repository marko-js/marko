import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector("button")!.click();

// A `<let>` in a client branch hidden while a flush changes its seed's input
// seeds from that input once the client shows the branch again.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ v: "a" }, click, { v: "b" }, click, { v: "c" }],
};
