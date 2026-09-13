import { ControlledType } from "../common/types";
import { _attr_details_or_dialog_open } from "./controllable";
import { patchControls } from "./patch-control.feat";

patchControls[ControlledType.DetailsOrDialogOpen] =
  _attr_details_or_dialog_open;
