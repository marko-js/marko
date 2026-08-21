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
  const [set, skip, claims] = (Array.isArray(value) ? value : [value]) as [
    Record<string, unknown> | 0,
    Record<string, 1> | 0,
    1?,
  ];
  const controllable = claims
    ? controllableRenders[(scope[accessor] as Element).tagName]
    : undefined;
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
