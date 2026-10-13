import { ControlledType } from "../../common/types";
import { _attr_select_value } from "../controllable";
import { patchControls } from "./control.feat";

patchControls[ControlledType.SelectValue] = _attr_select_value;
