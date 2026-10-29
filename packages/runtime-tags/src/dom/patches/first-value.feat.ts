import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { patchers, patchScope } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.FirstValue]: Scope;
  }
}

// A hole takes the server's render while its `<let>` (a `^` per owner up)
// holds its first value; client code that sets the `<let>` owns it after.
patchers[PatchKey.FirstValue] = (scope, accessor, entries) => {
  let owner = scope,
    i = 0;
  for (; accessor[i] === "^"; i++) owner = owner[AccessorProp.Owner]!;
  if (!(accessor.slice(i) in owner)) {
    for (const key in entries) {
      // A live branch keeps content it renders, bound to whichever owner.
      if (
        key.startsWith(PatchKey.DynamicTag) &&
        (
          scope[
            AccessorPrefix.ConditionalRenderer +
              key.slice(PatchKey.DynamicTag.length)
          ] + ""
        ).startsWith((entries[key] + "").replace(/^\^+/, "") + " ")
      ) {
        delete entries[key];
      }
    }
    patchScope(entries, scope);
  }
};
