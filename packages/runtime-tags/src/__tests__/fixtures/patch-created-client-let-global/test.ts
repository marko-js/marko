import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();

// A created scope joins an unserialized `$global` with a `<let>` the client
// assigns.
export const config: TestConfig = {
  patches: true,
  // Debug warns of the unserialized `$global`, which optimize cannot.
  skip_parity: true,
  steps: [
    { show: false, a: "x" },
    { show: true, a: "x" },
    nth(".b"),
    { show: true, a: "y" },
  ],
};
