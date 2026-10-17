import type { TestConfig } from "../../main.test";

// A new branch's closures (a keyed row's selector too), local closures and
// called `<define>` params reach its declaration after its setup writes the shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { rows: [], items: [], selected: 1, show: false, colors: [], color: "red" },
    {
      rows: [1],
      items: [{ id: 1 }],
      selected: 1,
      show: true,
      colors: ["red"],
      color: "red",
    },
    {
      rows: [1],
      items: [{ id: 1 }],
      selected: 2,
      show: true,
      colors: ["blue"],
      color: "blue",
    },
  ],
};
