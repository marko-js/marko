import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#t")!.click();
};

// A stateful body reads its owner's state: its setup subscribes the closure,
// so the server names no init for it per created scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, open: true, label: "a" },
    { show: true, open: true, label: "b" },
    click,
    { show: true, open: true, label: "c" },
    { show: false, open: true, label: "d" },
    { show: true, open: true, label: "e" },
  ],
};
