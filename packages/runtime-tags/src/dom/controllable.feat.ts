import {
  _controllable_input,
  _controllable_open,
  _controllable_select,
  _controllable_textarea,
  controllableRenders,
} from "./controllable";
// A run-time tag name can be any controllable, so its page enables them all.
import "./controllable-input.feat";
import "./controllable-open.feat";
import "./controllable-select.feat";

controllableRenders.INPUT = _controllable_input;
controllableRenders.TEXTAREA = _controllable_textarea;
controllableRenders.SELECT = _controllable_select;
controllableRenders.DETAILS = controllableRenders.DIALOG = _controllable_open;
