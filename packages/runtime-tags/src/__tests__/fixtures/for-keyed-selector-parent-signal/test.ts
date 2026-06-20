import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

const clickToggle = (container: Element) =>
  (container.querySelector("button.toggle") as HTMLButtonElement).click();

export const config: TestConfig = {
  // The `danger` binding reads the selector key (`selected === row.id`) AND an
  // unrelated parent `<let>` (`enabled`). The selector only owns the `selected`
  // edge; `enabled` must still drive the rows via its own (fan-out) edge.
  steps: [
    {},
    clickSelect(0), // select row a -> danger on a
    clickToggle, // enabled=false (parent signal) -> a loses danger
    clickToggle, // enabled=true -> a regains danger
    clickSelect(2), // move selection a -> c
  ],
};
