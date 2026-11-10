import { linkKnownTagPatchEntries } from "../../util/known-tag";
import { finalizeReasonsSettled } from "../../util/patch/decisions";
import { linkPatchFills } from "../../util/shell";

// What a page with this module links, once reasons and setup work settle: the
// runtime features its patches apply through.
export function finalizePageLinks() {
  finalizeReasonsSettled();
  linkPatchFills();
  linkKnownTagPatchEntries();
}
