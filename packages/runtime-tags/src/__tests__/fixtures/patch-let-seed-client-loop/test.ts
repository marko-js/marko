import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector("button")!.click();

// A `<let>` in a row a client loop adds seeds from the input a flush last sent.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ v: "a", w: "1" }, { v: "b", w: "2" }, click, { v: "c", w: "3" }],
};
