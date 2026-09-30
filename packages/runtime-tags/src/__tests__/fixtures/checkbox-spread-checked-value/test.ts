import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

function probe(document: Document) {
  const input = document.querySelector("input")!;
  document.querySelector("div")!.textContent =
    `checked:${(input as HTMLInputElement).checked}`;
}

export const config: TestConfig = {
  steps: [{}, probe, click("button"), probe],
};
