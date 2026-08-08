import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Positions open on first paint: resume adopts the server's subscriber
// set with its serialized indices, and patches must dispatch through it
// (no client stamping involved) before the toggle exercises re-create.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
