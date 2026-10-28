import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Created calls spread into a stateful body: what a spread passes reads its
// references, a constant (or a literal spread's const) runs from the init.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: { isOpen: true }, b: { label: "a" }, label: "a" },
    { show: true, a: { isOpen: true }, b: { label: "b" }, label: "b" },
    click,
    { show: true, a: { isOpen: true }, b: { label: "c" }, label: "c" },
  ],
};
