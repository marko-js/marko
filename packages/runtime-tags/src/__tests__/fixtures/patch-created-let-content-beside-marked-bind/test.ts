import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// Content bound by its shell keeps its owner's holes on a page whose bound
// functions keep their identity (`patches/marked-bind`).
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", title: "a" },
    { show: true, label: "b", title: "b" },
    { show: true, label: "c", title: "b" },
    click,
    { show: true, label: "d", title: "c" },
  ],
};
