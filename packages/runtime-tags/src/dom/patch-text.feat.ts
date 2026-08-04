import { type Accessor, PatchKey } from "../common/types";
import { patchers } from "./resume";

patchers[PatchKey.Text] = (scope, key, value) =>
  ((scope[key.slice(PatchKey.Text.length) as Accessor] as Text).data =
    value as string);
