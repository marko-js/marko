import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// A keyed loop's handler reads the row's index and item; rows reorder.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ id: "a", v: 1 }] },
    {
      items: [
        { id: "b", v: 2 },
        { id: "a", v: 1 },
      ],
    },
    nth(".r", 0),
    nth(".r", 1),
  ],
};
