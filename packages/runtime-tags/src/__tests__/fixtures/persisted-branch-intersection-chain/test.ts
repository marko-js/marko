import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One fill key registered from a root join plus every else-if branch hop
// (only-child anchor): selection guards pick the live branch per patch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { kind: "a", title: "Store" },
    click,
    { kind: "a", title: "Store!" },
    { kind: "b", title: "Store!" },
    { kind: "b", title: "Plaza" },
    click,
    { kind: "c", title: "Plaza" },
    { kind: "c", title: "Plaza!" },
  ],
};
