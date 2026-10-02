import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button:not(.toggle)")!.click();

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();

// The body streamed an open `<if>` branch and its closure subscription before
// rejecting; the catch resumes as the try's content and leaves no subscriber.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, toggle],
};
