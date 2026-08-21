import type { TestConfig } from "../../main.test";

const toggleB = (document: Document) => {
  document.querySelectorAll("input")[1]!.click();
};

const probe = (document: Document) => {
  const [a, b] = document.querySelectorAll("input");
  document.querySelector("p")!.textContent = `a:${a!.checked} b:${b!.checked}`;
};

// An array `checkedValue` (checkbox group): the entry re-ships the array by
// value each frame and each box compares its own `value` against it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { picked: ["a"] },
    toggleB,
    probe,
    { picked: ["a", "b"] },
    probe,
    { picked: [] },
    probe,
  ],
};
