import { type Accessor, AccessorPrefix } from "../common/types";
import { setAttribute } from "./dom";
import { patchers } from "./resume";

patchers[AccessorPrefix.PatchAttr] = (scope, key, value) => {
  const sep = key.indexOf(" ");
  setAttribute(
    scope[
      key.slice(AccessorPrefix.PatchAttr.length, sep) as Accessor
    ] as Element,
    key.slice(sep + 1),
    value === 0 ? undefined : (value as string),
  );
};
