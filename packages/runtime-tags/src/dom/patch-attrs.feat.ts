import { type Accessor, PatchKey } from "../common/types";
import { controllableRenders } from "./controllable";
import { _attrs, _attrs_partial, _attrs_script } from "./dom";
// The set may carry bound handlers.
import "./patch-value-bind.feat";
import { queueEffect } from "./queue";
import { patchers } from "./resume";

// A spread's set re-applies as its render would (a `[set, skip]` pair
// leaves the statics after the spread alone); the trailing `1` marks a
// spread that owns the element's controllable, which re-claims from the
// set (a control a static attr owns must be left alone). Its effect then
// re-attaches.
patchers[PatchKey.Attrs] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Attrs.length) as Accessor;
  let set = value as Record<string, unknown> | 0;
  let skip: Record<string, 1> | 0 | undefined;
  let controllable: (typeof controllableRenders)[string] | undefined;
  if (Array.isArray(value)) {
    set = value[0] as typeof set;
    skip = value[1] as typeof skip;
    if (value[2]) {
      controllable = controllableRenders[(scope[accessor] as Element).tagName];
    }
  }
  if (skip) {
    _attrs_partial(scope, accessor, set || undefined!, skip, controllable);
  } else {
    _attrs(
      scope,
      accessor,
      (set || undefined) as Record<string, unknown>,
      controllable,
    );
  }
  queueEffect(scope, () => _attrs_script(scope, accessor));
};
