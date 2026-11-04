import type { TestConfig } from "../../main.test";

function fail(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{ on: true, note: "c" }, fail],
};
