import "./patch-write";
import {
  type Accessor,
  AccessorPrefix,
  type ControlledType,
  PatchKey,
  type Scope,
} from "../common/types";
import { queueRender } from "./queue";
import { patchers } from "./resume";

// Kind-keyed control applies, filled by the per-kind patch feats a page's
// controls link: the wire keys `kind + accessor` (kind is a
// `ControlledType` digit), and the SAME controlled helpers CSR uses
// arbitrate live interaction.
// Queued as a RENDER so fresh constructs take the first-render path and a
// select's deferred option sync drains in the same frame.
export const patchControls: {
  [T in ControlledType]?: (
    scope: Scope,
    accessor: Accessor,
    value: unknown,
    handler?: unknown,
  ) => void;
} = {};

patchers[PatchKey.Control] = (scope, key, value) => {
  const type = +key[PatchKey.Control.length] as ControlledType;
  const accessor = key.slice(PatchKey.Control.length + 1) as Accessor;
  queueRender(
    scope,
    (scope) =>
      patchControls[type]!(
        scope,
        accessor,
        value,
        scope[(AccessorPrefix.ControlledHandler + accessor) as Accessor],
      ),
    -1,
  );
};
