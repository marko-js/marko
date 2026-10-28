import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#t")!.click();
};
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A stateful body calls another: the outer body's setup runs the inner call's
// setup work, so the server names no init for it per created scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    inc,
    click,
    { show: true, label: "c" },
    { show: false, label: "d" },
    { show: true, label: "e" },
  ],
};
