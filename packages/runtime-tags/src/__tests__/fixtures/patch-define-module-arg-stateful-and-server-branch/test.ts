import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A call passing a module function in stateful structure and one in a server branch:
// the client derives it where it renders the call, the patch writes the other.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: true },
    { label: "b", show: true },
    click,
    click,
    { label: "c", show: true },
  ],
};
