import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();

// A created scope joins a `<const>` of two `<let>`s with a third the client
// assigns.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "x" },
    { show: true, a: "x" },
    nth(".b"),
    { show: true, a: "y" },
  ],
};
