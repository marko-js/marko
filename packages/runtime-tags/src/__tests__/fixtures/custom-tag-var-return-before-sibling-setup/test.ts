import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

function showStyles(document: Document) {
  const pre = document.createElement("pre");
  // Custom property names differ between debug and optimized builds.
  pre.textContent = Array.from(document.querySelectorAll("style"), (style) =>
    style.textContent!.replace(/--[^:]+/g, "--var"),
  ).join("\n");
  document.querySelector("button")!.after(pre);
}

// A child's setup returns before its later siblings are set up, in a branch or
// as the template mounts; they receive it once they are set up.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, showStyles],
};
