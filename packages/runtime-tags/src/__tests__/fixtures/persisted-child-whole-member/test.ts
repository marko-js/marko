import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A member read beside a wholesale read stays COARSE by design: the
// wholesale hole needs the constructed input object, so every feed
// rides the merged fill (see the rest-grain design notes for the
// deferred dual-materialization alternative).
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click],
};
