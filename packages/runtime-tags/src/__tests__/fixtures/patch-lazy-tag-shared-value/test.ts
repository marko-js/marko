import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

const click = (document: Document) => {
  document.querySelector<HTMLElement>("b")!.click();
};

// An object the flush's tree writes and a lazy child's entries read: one
// flush, one tree, so the reference resolves where it is written.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  skip_fresh_render: true,
  steps: [{ label: "a" }, load, { label: "b" }, wait, click],
};
