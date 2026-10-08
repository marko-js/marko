import "./patch-write";
import {
  type Accessor,
  AccessorPrefix,
  type ControlledType,
  PatchKey,
  type Scope,
} from "../common/types";
import { queueRender } from "./queue";
import { createPatchers, patchers } from "./resume";

// Kind-keyed control applies (wire key `kind + accessor`), filled by the
// per-kind feats; queued as a RENDER so freshly created scopes take first-render.
export const patchControls: {
  [T in ControlledType]?: (
    scope: Scope,
    accessor: Accessor,
    value: unknown,
    handler?: unknown,
  ) => void;
} = {};

createPatchers[PatchKey.Control] = patchers[PatchKey.Control] = (
  scope,
  key,
  value,
) => {
  const accessor = key.slice(PatchKey.Control.length + 1) as Accessor;
  queueRender(
    scope,
    (scope) =>
      patchControls[+key[PatchKey.Control.length] as ControlledType]!(
        scope,
        accessor,
        value,
        scope[(AccessorPrefix.ControlledHandler + accessor) as Accessor],
      ),
    -1,
  );
};
