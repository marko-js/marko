import { ControlledType } from "../common/types";
import { _attr_input_checked, _attr_input_value } from "./controllable";
import { patchControls } from "./patch-control.feat";

patchControls[ControlledType.InputChecked] = _attr_input_checked;
patchControls[ControlledType.InputValue] = _attr_input_value;
