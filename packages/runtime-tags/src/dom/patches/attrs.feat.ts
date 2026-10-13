import { type Accessor, PatchKey } from "../../common/types";
import { controllableSpreadHelpers } from "../controllable";
import { _attrs, _attrs_partial, _attrs_script } from "../dom";
import { queueEffect } from "../queue";
import { createPatchers, patchers } from "./apply";

// An empty set ships as `0`.
type AttrsRecord = Record<string, unknown>;
type AttrsSet = AttrsRecord | 0;

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Attrs]: AttrsSet | [AttrsSet, (Record<string, 1> | 0)?, 1?];
  }
}

// A spread's set re-applies as its render would (`[set, skip]` leaves the
// statics alone; a trailing `1` re-claims the element's controllable).
createPatchers[PatchKey.Attrs] = patchers[PatchKey.Attrs] = (
  scope,
  key,
  entry,
) => {
  const accessor = key.slice(PatchKey.Attrs.length) as Accessor;
  const [value, skip, claims] = Array.isArray(entry) ? entry : [entry];
  const controllable =
    claims && controllableSpreadHelpers[(scope[accessor] as Element).tagName];
  // The wire's empty-set `0` flows through as-is: every consumer only
  // truthiness-checks or `for..in`s the set, so it acts like `undefined`.
  if (skip) {
    _attrs_partial(scope, accessor, value as AttrsRecord, skip, controllable);
  } else {
    _attrs(scope, accessor, value as AttrsRecord, controllable);
  }
  queueEffect(scope, (scope) => _attrs_script(scope, accessor));
};
