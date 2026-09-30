import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("button"),
    click("button"),
    mouseoverBody,
    wait,
    click("button"),
  ],
  equivalent: false,
};

function mouseoverBody(document: Document) {
  document.body.dispatchEvent(
    new document.defaultView!.Event("mouseover", {
      bubbles: true,
    }),
  );
}
