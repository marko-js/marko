import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

const click = (document: Document) => {
  document.querySelector<HTMLElement>("b")!.click();
};

// An object the frame's tree writes and a lazy child's channel batch reads:
// the batch must carry it itself, not a path into the tree the client
// applies and drops.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_fresh_render: true,
  steps: [{ label: "a" }, load, { label: "b" }, wait, click],
};
