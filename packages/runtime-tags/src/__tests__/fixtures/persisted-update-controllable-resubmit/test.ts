import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const typeQty = (value: string) => (container: Element) => {
  const input = container.querySelector<HTMLInputElement>("input.qty")!;
  const window = input.ownerDocument.defaultView!;
  input.value = value;
  input.dispatchEvent(new window.Event("input", { bubbles: true }));
};

const submit = (container: Element) => {
  const form = container.querySelector<HTMLFormElement>("form.order")!;
  const window = form.ownerDocument.defaultView!;
  form.dispatchEvent(
    new window.Event("submit", { bubbles: true, cancelable: true }),
  );
};

// After a same-route navigation a submit must see the new request-derived id
// in both the hidden input and scope, while the user's quantity survives.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { id: 11, name: "Alpha lamp", $global: { persisted: true } },
    typeQty("3"),
    submit,
    navigate({ id: 22, name: "Beta chair", $global: { persisted: true } }),
    submit,
    typeQty("5"),
    submit,
  ],
};
