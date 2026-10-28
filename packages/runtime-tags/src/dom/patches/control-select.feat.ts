import { ControlledType } from "../../common/types";
import { _attr_select_value } from "../controllable";
import { controlPatchers } from "./control.feat";

controlPatchers[ControlledType.SelectValue] = _attr_select_value;
