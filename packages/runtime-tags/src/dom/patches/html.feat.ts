import { PatchKey } from "../../common/types";
import { _html } from "../dom";
import { setupPatchers, patchers } from "./apply";

setupPatchers[PatchKey.Html] = patchers[PatchKey.Html] = (
  scope,
  accessor,
  value,
) => _html(scope, value, accessor);
