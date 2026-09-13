import { type Accessor, PatchKey } from "../common/types";
import { setAttribute } from "./dom";
import { patchers } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Attr]: string | 0;
  }
}

patchers[PatchKey.Attr] = (scope, key, value) => {
  const sep = key.indexOf(" ");
  setAttribute(
    scope[key.slice(PatchKey.Attr.length, sep) as Accessor] as Element,
    key.slice(sep + 1),
    value === 0 ? undefined : value,
  );
};
