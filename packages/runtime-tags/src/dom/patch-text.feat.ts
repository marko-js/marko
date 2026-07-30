import { type Accessor, AccessorPrefix } from "../common/types";
import { patchers } from "./resume";

patchers[AccessorPrefix.PatchText] = (scope, key, value) =>
  ((
    scope[key.slice(AccessorPrefix.PatchText.length) as Accessor] as Text
  ).data = value as string);
