import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The held `<let>` client code may set: until it does, each patch renders the
// content; once it does, its own value renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
    click,
    { more: true, label: "d" },
  ],
};
