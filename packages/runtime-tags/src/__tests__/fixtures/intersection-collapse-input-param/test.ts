import type { TestConfig } from "../../main.test";

export const config: TestConfig = { steps: [{}, click] };

function click(c: Element) {
  c.querySelector("button")!.click();
}
