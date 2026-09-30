import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(label: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${label}`)!.click();
}

// Lazy content streams in a reorder, sync and past a pending await of its
// own; each batch keeps its place in the ready streams the main stream shares.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    flush,
    flush,
    flush,
    wait,
    click("main"),
    click("reordered"),
    click("reordered-async"),
    click("reordered-async-nested"),
    click("streamed"),
  ],
};
