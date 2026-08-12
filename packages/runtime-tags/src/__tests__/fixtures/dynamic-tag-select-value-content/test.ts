import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// Swapping away from the select must tear the body branch down, so the option
// stops tracking `n`; swapping back must rebuild it and resume tracking.
export const config: TestConfig = {
  steps: [
    { tag: "select" },
    click("bump"),
    click("swap"),
    click("bump"),
    click("swap"),
    click("bump"),
  ],
};
