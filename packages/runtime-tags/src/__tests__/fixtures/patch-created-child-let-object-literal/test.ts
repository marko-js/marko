import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created card keeping an object literal its call passes in a `<let>`: the fill
// still sends the object, which the call records with its sources.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
  ],
};
