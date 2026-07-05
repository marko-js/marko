import { normalizeAttrValue } from "./dom";
import { delegate } from "./event";
import { isResuming } from "./resume";

// Shared plumbing for the controllable attr kinds (one module per kind so
// an app's hydration bundle hosts only the kinds it renders): change/reset
// delegation, per-element change detection, and small value normalizers.
export function syncControllableFormInput<
  T extends HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement,
>(
  el: T,
  hasChanged: (el: T) => boolean | undefined,
  onChange: (ev?: Event) => void,
) {
  (el as any)._ = onChange;
  delegate("input", handleChange);
  if ((el as any).form) {
    delegate("reset", handleFormReset);
  }

  if (isResuming && hasChanged(el)) {
    queueMicrotask(onChange);
  }
}

function handleChange(ev: Event) {
  (ev.target as any)._?.(ev);
}

function handleFormReset(ev: Event) {
  const handlers: (() => void)[] = [];
  for (const el of (ev.target as HTMLFormElement).elements) {
    if ((el as any)._ && hasFormElementChanged(el)) {
      handlers.push((el as any)._);
    }
  }

  requestAnimationFrame(() => {
    if (!ev.defaultPrevented) {
      for (const change of handlers) {
        change();
      }
    }
  });
}

export function hasValueChanged(el: HTMLInputElement) {
  return el.value !== el.defaultValue;
}

export function hasCheckboxChanged(el: HTMLInputElement) {
  return el.checked !== el.defaultChecked;
}

export function hasSelectChanged(el: HTMLSelectElement) {
  for (const opt of el.options) {
    if (opt.selected !== opt.defaultSelected) {
      return true;
    }
  }
}

function hasFormElementChanged(el: Element) {
  return (el as HTMLSelectElement).options
    ? hasSelectChanged(el as HTMLSelectElement)
    : hasValueChanged(el as HTMLInputElement) ||
        hasCheckboxChanged(el as HTMLInputElement);
}

export function normalizeStrProp(value: unknown) {
  return normalizeAttrValue(value) || "";
}

export function updateList(arr: unknown[], val: unknown, push: boolean) {
  const index = arr.indexOf(val);
  return (
    (push
      ? !~index && [...arr, val]
      : ~index && arr.slice(0, index).concat(arr.slice(index + 1))) || arr
  );
}
