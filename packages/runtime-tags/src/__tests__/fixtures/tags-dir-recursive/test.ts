import type { TestConfig } from "../../main.test";

// Pins a CSR/SSR divergence: the first hydrated update tears down and
// re-creates the recursive `<tree>` subtree (losing any DOM state inside),
// while CSR patches the existing text nodes in place. The final DOM is
// equivalent. See BUGS.md.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
