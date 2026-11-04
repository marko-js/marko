import { encodeAccessor } from "../../common/helpers";
import { toArray } from "../../common/opt";
import { type EncodedAccessor, PatchKey } from "../../common/types";
import { _show } from "../control-flow";
import { setupPatchers, patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Show]: 0 | 1 | [display: 0 | 1, start: EncodedAccessor];
  }
}

// The key names the range's reference node, and the entry its start marker
// where it has one: a scope the flush creates finds its range from them.
setupPatchers[PatchKey.Show] = patchers[PatchKey.Show] = (
  scope,
  accessor,
  entry,
) => {
  // A bare `0` hides: `toArray` drops it, which leaves the display unset.
  const [display, start] = toArray(entry);
  _show(MARKO_DEBUG ? accessor : encodeAccessor(accessor), start)(
    scope,
    display,
  );
};
