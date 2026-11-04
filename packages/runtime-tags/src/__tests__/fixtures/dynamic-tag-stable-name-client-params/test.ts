import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// The plain twin of patch-dynamic-tag-stable-name-client-params: the client renders
// each input and each click.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    click,
    { show: false, label: "c" },
    click,
  ],
};
