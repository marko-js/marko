import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector("button")!.click();
// A join over a live function and an input, one caller passing client state:
// the patch fills what the function captures, so the client re-creates it and
// runs the join (and its lifecycle) only when that changes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p" },
    click,
    { a: "y", b: "p" },
    { a: "y", b: "p" },
    click,
  ],
};
