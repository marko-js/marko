import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#t")!.click();
};

// A created call's effect runs once per created call; a resumed page takes no new input.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false, label: "a" }, { show: true, label: "b" }, click],
};
