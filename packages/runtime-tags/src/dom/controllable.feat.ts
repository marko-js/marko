import {
  _controllable_input,
  _controllable_open,
  _controllable_select,
  _controllable_textarea,
  controllableSpreadHelpers,
} from "./controllable";
// A run-time tag name can be any controllable, so its page enables them all.
import "./controllable-input.feat";
import "./controllable-open.feat";
import "./controllable-select.feat";

controllableSpreadHelpers.INPUT = _controllable_input;
controllableSpreadHelpers.TEXTAREA = _controllable_textarea;
controllableSpreadHelpers.SELECT = _controllable_select;
controllableSpreadHelpers.DETAILS = controllableSpreadHelpers.DIALOG =
  _controllable_open;
