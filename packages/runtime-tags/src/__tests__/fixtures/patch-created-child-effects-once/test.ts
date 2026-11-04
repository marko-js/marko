import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a patch creates in a branch mounts from setup only the effects no
// client render queues: the page's state reaches its count through the
// branch's init, which runs that effect itself, so each effect runs once.
export const config: TestConfig = {
  patches: true,
  steps: [
    { msg: "a" },
    click,
    { show: true, msg: "b" },
    { show: true, msg: "c" },
  ],
};
