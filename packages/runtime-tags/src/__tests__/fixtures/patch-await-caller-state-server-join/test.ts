import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", prefix: "x" },
    clickOpen,
    wait,
    { label: "b", prefix: "y" },
    wait,
    clickOpen,
    wait,
    { label: "c", prefix: "z" },
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}
