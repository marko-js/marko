import { type Accessor, PatchKey } from "../common/types";
import { _html } from "./dom";
import { patchers } from "./resume";

patchers[PatchKey.Html] = (scope, key, value) =>
  _html(scope, value, key.slice(PatchKey.Html.length) as Accessor);
