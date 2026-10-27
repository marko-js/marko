import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a created `@catch` renders is set up by the catch's renderer, which
// queues its effects: a patch mounts only those reading what it writes (the
// error), so each runs once.
export const config: TestConfig = {
  patches: true,
  steps: [{ msg: "a" }, click, { fail: true, msg: "b" }],
};
