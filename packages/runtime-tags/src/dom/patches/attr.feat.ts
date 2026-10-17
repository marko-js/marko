import { type Accessor, PatchKey } from "../../common/types";
import { setAttribute } from "../dom";
import { createPatchers, patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    // A normalized value; `undefined` removes the attribute.
    [PatchKey.Attr]: string | undefined;
  }
}

createPatchers[PatchKey.Attr] = patchers[PatchKey.Attr] = (
  scope,
  key,
  value,
) => {
  const sep = key.indexOf(" ");
  setAttribute(
    scope[key.slice(PatchKey.Attr.length, sep) as Accessor] as Element,
    key.slice(sep + 1),
    value,
  );
};
