import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggleWhileMatching, wait],
};

function toggleWhileMatching(document: Document) {
  document.defaultView!.matchMedia = (media) =>
    ({
      matches: true,
      media,
      addEventListener() {},
    }) as unknown as MediaQueryList;
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
