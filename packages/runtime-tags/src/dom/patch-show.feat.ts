import { type EncodedAccessor, PatchKey } from "../common/types";
import { _show } from "./control-flow";
import { createPatchers, patchers } from "./resume";

type ShowEntry = [
  display: 0 | 1,
  node: EncodedAccessor,
  start?: EncodedAccessor,
  end?: EncodedAccessor,
];

// Accessors ride as the template encodes them: a scope the flush creates
// finds its range from the markers, as a client render would.
createPatchers[PatchKey.Show] = patchers[PatchKey.Show] = (
  scope,
  _key,
  value,
) => {
  const [display, node, start, end] = value as ShowEntry;
  _show(node, start, end)(scope, display);
};
