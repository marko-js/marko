import { toArray } from "../../common/opt";
import { PatchKey } from "../../common/types";
import { controllableSpreadHelpers } from "../controllable";
import { _attrs, _attrs_partial, _attrs_script } from "../dom";
import { queueEffect } from "../queue";
import { setupPatchers, patchers } from "./apply";

// An empty set ships as `0`.
type AttrsRecord = Record<string, unknown>;
type AttrsSet = AttrsRecord | 0;
type AttrsEntry = [AttrsSet, (Record<string, 1> | 0)?, 1?];

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Attrs]: AttrsSet | AttrsEntry;
  }
}

// A spread's set re-applies as its render would (`[set, skip]` leaves the
// statics alone; a trailing `1` re-claims the element's controllable).
setupPatchers[PatchKey.Attrs] = patchers[PatchKey.Attrs] = (
  scope,
  accessor,
  entry,
) => {
  const [value, skip, claims] = toArray(entry) as AttrsEntry;
  const controllable =
    claims && controllableSpreadHelpers[(scope[accessor] as Element).tagName];
  // An empty set (`0`, or none once `toArray` drops a bare `0`) acts as no set:
  // every consumer only truthiness-checks or `for..in`s it.
  if (skip) {
    _attrs_partial(scope, accessor, value as AttrsRecord, skip, controllable);
  } else {
    _attrs(scope, accessor, value as AttrsRecord, controllable);
  }
  queueEffect(scope, (scope) => _attrs_script(scope, accessor));
};
