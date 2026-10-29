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
  accessor = accessor.slice(i);
  if (!(accessor in owner)) {
    // The id of the value the patch renders, or its tag entry's renderer.
    let id = entries[""];
    delete entries[""];
    for (const key in entries) {
      if (key.startsWith(PatchKey.DynamicTag)) {
        id ??= entries[key];
        // A live branch keeps content it renders, bound to whichever owner.
        if (
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
    }
    // Where a call passed the `<let>`'s value from the server, the page holds
    // its id: a render of another value is not the `<let>`'s, so the patch
    // rejects and the page loads the document.
    if ((owner[AccessorPrefix.FirstValueId + accessor] ?? id) !== id) {
      throw MARKO_DEBUG
        ? new Error(
            `A patch renders a value of the <let> "${accessor}" other than the one the page holds: its initial value changed.`,
          )
        : 0;
    }
    patchScope(entries, scope);
  }
};
