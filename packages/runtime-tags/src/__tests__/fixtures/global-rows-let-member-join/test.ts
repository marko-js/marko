import type { TestConfig } from "../../main.test";

const data = (rows: [string, number, number][]) => ({
  $global: {
    data: {
      player: {
        entries: rows.map(([id, qty, value]) => ({
          item: { id, name: id.toUpperCase(), value },
          qty,
        })),
      },
    },
  },
});
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    data([
      ["a", 2, 3],
      ["b", 1, 5],
    ]),
    inc,
    data([
      ["a", 4, 3],
      ["b", 1, 5],
    ]),
    inc,
    data([
      ["b", 2, 5],
      ["c", 1, 7],
    ]),
    inc,
  ],
};
