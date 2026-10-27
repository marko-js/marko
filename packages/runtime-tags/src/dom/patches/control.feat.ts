import "./write.feat";
import {
  type Accessor,
  AccessorPrefix,
  type ControlledType,
  PatchKey,
  type Scope,
} from "../../common/types";
import { queueRender } from "../queue";
import { setupPatchers, patchers } from "./apply";

// Control applies by controlled type (its entry names the type, then the
// accessor), filled by the per-kind feats; queued so a created scope renders first.
export const controlPatchers: {
  [T in ControlledType]?: (
    scope: Scope,
    accessor: Accessor,
    value: unknown,
    handler?: unknown,
  ) => void;
} = {};

setupPatchers[PatchKey.Control] = patchers[PatchKey.Control] = (
  scope,
  typeAndAccessor,
  value,
) => {
  const accessor = typeAndAccessor.slice(1);
  queueRender(
    scope,
    (scope) =>
      controlPatchers[+typeAndAccessor[0] as ControlledType]!(
        scope,
        accessor,
        value,
        scope[AccessorPrefix.ControlledHandler + accessor],
      ),
    -1,
  );
};
