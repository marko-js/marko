import { PatchKey } from "../../common/types";
import { setAttribute } from "../dom";
import { setupPatchers, patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    // A normalized value; `undefined` removes the attribute.
    [PatchKey.Attr]: string | undefined;
  }
}

setupPatchers[PatchKey.Attr] = patchers[PatchKey.Attr] = (
  scope,
  accessorAndName,
  value,
) => {
  const sep = accessorAndName.indexOf(MARKO_DEBUG ? " " : "$");
  setAttribute(
    scope[accessorAndName.slice(0, sep)] as Element,
    accessorAndName.slice(sep + 1),
    value,
  );
};
