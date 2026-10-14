import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// Content a child renders in its `@catch`, read or not, follows the page's
// params while later patches throw again, render the body or throw after a
// click, all keeping the `@catch` the first throw showed.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { fail: false, label: "a" },
    { fail: true, label: "b" },
    { fail: true, label: "c" },
    { fail: false, label: "d" },
    click,
    { fail: true, label: "e" },
  ],
};
