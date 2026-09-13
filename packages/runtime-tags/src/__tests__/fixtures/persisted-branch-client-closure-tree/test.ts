import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One server value read at a deep branch position and fed to a nested
// child: the deep position dispatches by index while the child updates
// through its tag-args, off the same fill write.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
