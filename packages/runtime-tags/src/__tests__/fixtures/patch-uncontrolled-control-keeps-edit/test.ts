import type { TestConfig } from "../../main.test";

const edit = (document: Document) => {
  document.querySelector<HTMLInputElement>("input:not([type])")!.value =
    "typed";
  document.querySelector<HTMLInputElement>("[type=checkbox]")!.checked = false;
  document.querySelector("textarea")!.value = "typed";
  document.querySelector("select")!.value = "c";
  document.querySelector("details")!.open = true;
};

// A patch refreshes an uncontrolled control's default and keeps what the user changed, as a
// client render does: typed text, an unchecked box, a picked option, an opened details.
export const config: TestConfig = {
  patches: true,
  compare_defaults: true,
  steps: [
    { text: "a", on: true, pick: "a", open: false },
    { text: "b", on: false, pick: "b", open: false },
    edit,
    { text: "c", on: true, pick: "a", open: false },
    { text: "a", on: false, pick: "c", open: true },
  ],
};
