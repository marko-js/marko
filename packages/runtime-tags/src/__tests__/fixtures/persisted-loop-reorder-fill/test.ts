import type { TestConfig } from "../../main.test";

const unshift = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Keyed items unshifted to the front between fill writes: pairing moves
// the existing rows and the fill repaints all of them, in order.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, unshift, { note: "n2" }, unshift, { note: "n3" }],
};
