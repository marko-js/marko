import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// The `runtimeId` compiler option is baked into both entries: the page
// entry wrapper applies it server side (`withPageAssets`) and the browser
// entry resumes from the matching global — without the server half, this
// fixture would render but never hydrate.
export const config: TestConfig = {
  runtime_id: "MY_APP",
  steps: [{}, click, click],
};
