import { ControlledType } from "../../common/types";
import { _attr_input_checked, _attr_input_value } from "../controllable";
import { controlPatchers } from "./control.feat";

controlPatchers[ControlledType.InputChecked] = _attr_input_checked;
controlPatchers[ControlledType.InputValue] = _attr_input_value;
