import type { TestConfig } from "../../main.test";
function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}
export const config: TestConfig = { steps: [{ secret: "s3cret" }, toggle] };
