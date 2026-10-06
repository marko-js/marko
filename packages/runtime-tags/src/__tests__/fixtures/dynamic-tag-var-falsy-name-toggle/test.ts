import type { TestConfig } from "../../main.test";

// A falsy name has no tag, so its variable is `undefined`, from the first render
// and while its body renders in its place, whatever that body `<return>`s.
export const config: TestConfig = { steps: [{}, click, click] };

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}
