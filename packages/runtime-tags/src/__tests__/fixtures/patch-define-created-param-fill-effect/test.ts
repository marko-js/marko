import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#t")!.click();
};

// A created call's param fill runs its effect: once per created call, in both builds.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
    { show: false, label: "d" },
    click,
    { show: true, label: "e" },
  ],
};
