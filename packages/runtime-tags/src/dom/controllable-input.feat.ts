import { ControlledType } from "../common/types";
import {
  _attr_input_checked_script,
  _attr_input_checkedValue_script,
  _attr_input_value_script,
  controllableScripts,
} from "./controllable";

controllableScripts[ControlledType.InputChecked] = _attr_input_checked_script;
controllableScripts[ControlledType.InputCheckedValue] =
  _attr_input_checkedValue_script;
controllableScripts[ControlledType.InputValue] = _attr_input_value_script;
