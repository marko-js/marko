import { type Accessor, PatchKey } from "../common/types";
import { controllableRenders } from "./controllable";
import { _attrs, _attrs_partial, _attrs_script } from "./dom";
// The set may carry bound handlers.
import "./patch-value-bind.feat";
import { queueEffect } from "./queue";
import { patchers } from "./resume";

// A spread's set re-applies as its render would (`[set, skip]` leaves the
// statics alone; a trailing `1` re-claims the element's controllable).
patchers[PatchKey.Attrs] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Attrs.length) as Accessor;
  let skip: Record<string, 1> | 0 | undefined;
  let controllable: (typeof controllableRenders)[string] | undefined;
  if (Array.isArray(value)) {
    skip = value[1] as typeof skip;
    if (value[2]) {
      controllable = controllableRenders[(scope[accessor] as Element).tagName];
    }
    value = value[0];
  }
  // The wire's empty-set `0` flows through as-is: every consumer only
  // truthiness-checks or `for..in`s the set, so it acts like `undefined`.
  if (skip) {
    _attrs_partial(
      scope,
      accessor,
      value as Record<string, unknown>,
      skip,
      controllable,
    );
  } else {
    _attrs(scope, accessor, value as Record<string, unknown>, controllable);
  }
  queueEffect(scope, () => _attrs_script(scope, accessor));
};
