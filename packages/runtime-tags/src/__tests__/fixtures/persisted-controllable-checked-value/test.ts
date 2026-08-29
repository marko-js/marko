import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelectorAll("input")[1]!.click();
};

const probe = (document: Document) => {
  const [a, b] = document.querySelectorAll("input");
  document.querySelector("p")!.textContent = `a:${a!.checked} b:${b!.checked}`;
};

// A `checkedValue` group: each input's entry carries `[checkedValue, value]`
// and applies through the same helper CSR uses, so a live selection survives
// an unchanged frame while a changed server value re-selects the group.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { picked: "a" },
    pickB,
    probe,
    { picked: "a" },
    probe,
    { picked: "b" },
    probe,
  ],
};
