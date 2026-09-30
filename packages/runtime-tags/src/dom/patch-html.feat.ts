import { type Accessor, PatchKey } from "../common/types";
import { _html } from "./dom";
import { createPatchers, patchers } from "./resume";

createPatchers[PatchKey.Html] = patchers[PatchKey.Html] = (scope, key, value) =>
  _html(scope, value, key.slice(PatchKey.Html.length) as Accessor);
