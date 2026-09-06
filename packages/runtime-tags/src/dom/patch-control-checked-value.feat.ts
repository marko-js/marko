import { type Accessor, ControlledType, type Scope } from "../common/types";
import { _attr_input_checkedValue } from "./controllable";
import { patchControls } from "./patch-control.feat";

// A group entry carries `[checkedValue, value]`: each input in the group
// applies its own comparison through the same helper CSR uses.
patchControls[ControlledType.InputCheckedValue] = (
  scope: Scope,
  accessor: Accessor,
  value: unknown,
  handler?: unknown,
) =>
  _attr_input_checkedValue(
    scope,
    accessor,
    (value as unknown[])[0],
    handler,
    (value as unknown[])[1],
  );
