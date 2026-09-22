import type { TestConfig } from "../../main.test";

// A server-owned native dynamic tag whose args carry a handler bound to the
// tag's own scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { tag: "div", title: "a" },
    { tag: "span", title: "bb" },
    (document: Document) =>
      document.querySelector<HTMLElement>("[title]")!.click(),
  ],
};
