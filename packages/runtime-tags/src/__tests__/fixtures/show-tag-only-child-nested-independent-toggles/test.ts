import type { TestConfig } from "../../main.test";

function clickOuter(document: Document) {
  document.querySelectorAll("button")[0].click();
}
function clickInner(document: Document) {
  document.querySelectorAll("button")[1].click();
}

export const config: TestConfig = {
  steps: [
    {},
    clickOuter,
    clickInner,
    clickInner,
    clickOuter,
    clickOuter,
    clickInner,
    clickOuter,
    clickInner,
    clickOuter,
  ],
};
