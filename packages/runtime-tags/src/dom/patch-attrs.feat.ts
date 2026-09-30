import { type Accessor, AccessorPrefix, PatchKey } from "../common/types";
import { controllableRenders } from "./controllable";
import { _attrs, _attrs_partial, _attrs_script } from "./dom";
import { queueEffect } from "./queue";
import { createPatchers, patchers } from "./resume";

// An empty set ships as `0`.
type AttrsRecord = Record<string, unknown>;
type AttrsSet = AttrsRecord | 0;

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Attrs]: AttrsSet | [AttrsSet, (Record<string, 1> | 0)?, 1?];
  }
}

// A spread's set re-applies as its render would (`[set, skip]` leaves the
// statics alone; a trailing `1` re-claims the element's controllable).
createPatchers[PatchKey.Attrs] = patchers[PatchKey.Attrs] = (
  scope,
  key,
  value,
) => {
  const accessor = key.slice(PatchKey.Attrs.length) as Accessor;
  let skip: Record<string, 1> | 0 | undefined;
  let controllable: (typeof controllableRenders)[string] | undefined;
  if (Array.isArray(value)) {
    skip = value[1];
    if (value[2]) {
      controllable = controllableRenders[(scope[accessor] as Element).tagName];
    }
    value = value[0];
  }
  // A resumed spread removes only the names it wrote: attributes the client
  // set carry through as they are. A created element's spread owns them all.
  const namesAccessor = (AccessorPrefix.SpreadAttrs + accessor) as Accessor;
  const names = scope[namesAccessor] as string | undefined;
  if (names !== undefined) {
    const own = " " + names + " ";
    const next: AttrsRecord = { ...(value as AttrsRecord) };
    for (const { name, value: current } of (scope[accessor] as Element)
      .attributes) {
      if (!own.includes(" " + name + " ") && !(name in next)) {
        next[name] = current;
      }
    }
    scope[namesAccessor] = value ? Object.keys(value).join(" ") : "";
    value = next;
  }
  // The wire's empty-set `0` flows through as-is: every consumer only
  // truthiness-checks or `for..in`s the set, so it acts like `undefined`.
  if (skip) {
    _attrs_partial(scope, accessor, value as AttrsRecord, skip, controllable);
  } else {
    _attrs(scope, accessor, value as AttrsRecord, controllable);
  }
  queueEffect(scope, () => _attrs_script(scope, accessor));
};
