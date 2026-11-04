import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// Rows from a server-only `$global` join a `<let>` seeded from the row with a row
// member (`qty * item.value`): the member keeps its fill, as its source runs the join.
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
  patches: true,
  steps: () => [
    data([
      ["a", 2, 3],
      ["b", 1, 5],
    ]),
    inc,
    navigate(() =>
      data([
        ["a", 4, 3],
        ["b", 1, 5],
      ]),
    ),
    inc,
    navigate(() =>
      data([
        ["b", 2, 5],
        ["c", 1, 7],
      ]),
    ),
    inc,
  ],
};
