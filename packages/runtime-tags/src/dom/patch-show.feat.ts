import { type EncodedAccessor, PatchKey } from "../common/types";
import { _show } from "./control-flow";
import { createPatchers, patchers } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Show]: [
      display: 0 | 1,
      node: EncodedAccessor,
      start?: EncodedAccessor,
      end?: EncodedAccessor,
    ];
  }
}

// Accessors ride as the template encodes them: a scope the flush creates
// finds its range from the markers, as a client render would.
createPatchers[PatchKey.Show] = patchers[PatchKey.Show] = (
  scope,
  _key,
  [display, node, start, end],
) => _show(node, start, end)(scope, display);
