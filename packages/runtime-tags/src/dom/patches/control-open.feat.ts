import { ControlledType } from "../../common/types";
import { _attr_details_or_dialog_open } from "../controllable";
import { controlPatchers } from "./control.feat";

controlPatchers[ControlledType.DetailsOrDialogOpen] =
  _attr_details_or_dialog_open;
