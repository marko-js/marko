import type { TestConfig } from "../../main.test";

// The await may not have resolved when the click comes, leaving no button.
const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")?.click();

// Content a created card keeps under an `<await>`: the instance is created in the await's
// later flush, so it keeps its own copy of the holes the first flush's withheld entry sends.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
