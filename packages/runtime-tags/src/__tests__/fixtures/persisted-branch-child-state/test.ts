import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A stateful child constructed inside a branch: its root state seeds from
// the frame's setup entry and its mount effect attaches, so the handler
// works and later fills refresh it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "A", start: 5 },
    { show: true, title: "A", start: 5 },
    inc,
    { show: true, title: "B", start: 5 },
    inc,
  ],
};
