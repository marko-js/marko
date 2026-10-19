import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#t")!.click();
};

// A stateful body's effect, reading a param, runs once per created call: its
// call's renders queue it, so the server names it on no created scope.
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
