import { type Accessor, PatchKey } from "../common/types";
import { _attrs, _attrs_partial, _attrs_script } from "./dom";
// The set may carry bound handlers.
import "./patch-value-bind.feat";
import { queueEffect } from "./queue";
import { patchers } from "./resume";

// A spread's set re-applies as its render would (a `[set, skip]` pair
// leaves the statics after the spread alone); its effect then re-attaches.
patchers[PatchKey.Attrs] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Attrs.length) as Accessor;
  if (Array.isArray(value)) {
    _attrs_partial(scope, accessor, value[0] || undefined, value[1]);
  } else {
    _attrs(scope, accessor, (value || undefined) as Record<string, unknown>);
  }
  queueEffect(scope, () => _attrs_script(scope, accessor));
};
