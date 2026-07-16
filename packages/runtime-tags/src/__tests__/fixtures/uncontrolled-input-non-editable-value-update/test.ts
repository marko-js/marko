import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

function update(container: Element) {
  container.querySelectorAll("button")[0].click();
}

function assertUpdated(container: Element) {
  for (const input of container.querySelectorAll<HTMLInputElement>("input")) {
    assert.equal(input.value, "b", `${input.type} value`);
  }

  const form = container.querySelector("form")!;
  form.querySelector<HTMLInputElement>("[type=checkbox]")!.checked = true;
  form.querySelector<HTMLInputElement>("[type=radio]")!.checked = true;
  const data = new form.ownerDocument.defaultView!.FormData(form);
  assert.equal(data.get("checkbox"), "b");
  assert.equal(data.get("dynamic"), "b");
  assert.equal(data.get("hidden"), "b");
  assert.equal(data.get("radio"), "b");
}

function remove(container: Element) {
  container.querySelectorAll("button")[1].click();
}

function assertRemoved(container: Element) {
  for (const input of container.querySelectorAll<HTMLInputElement>("input")) {
    assert.equal(input.hasAttribute("value"), false, `${input.type} attribute`);
    assert.equal(
      input.value,
      input.type === "checkbox" || input.type === "radio" ? "on" : "",
      `${input.type} value`,
    );
  }

  const form = container.querySelector("form")!;
  const data = new form.ownerDocument.defaultView!.FormData(form);
  assert.equal(data.get("checkbox"), "on");
  assert.equal(data.get("dynamic"), "");
  assert.equal(data.get("hidden"), "");
  assert.equal(data.get("radio"), "on");
}

export const config: TestConfig = {
  steps: [{}, update, assertUpdated, remove, assertRemoved],
};
