import { type Accessor, PatchKey } from "../common/types";
import { setAttribute } from "./dom";
import { patchers } from "./resume";

patchers[PatchKey.Attr] = (scope, key, value) => {
  const sep = key.indexOf(" ");
  setAttribute(
    scope[key.slice(PatchKey.Attr.length, sep) as Accessor] as Element,
    key.slice(sep + 1),
    value === 0 ? undefined : (value as string),
  );
};
