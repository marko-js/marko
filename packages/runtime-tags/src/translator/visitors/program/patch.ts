import { types as t } from "@marko/compiler";
import { getFile, loadFileForImport } from "@marko/compiler/babel-utils";

import { hasClientWork } from "../../util/entry-builder";
import { linkKnownTagPatchEntries } from "../../util/known-tag";
import { finalizeReasonsSettled } from "../../util/patch/decisions";
import { linkPatchSends } from "../../util/shell";

// What a page with this module links, once reasons and setup work settle: the
// runtime features its patches apply through, and whether it loads client work.
export function finalizePageLinks(programExtra: t.ProgramExtra) {
  finalizeReasonsSettled();
  linkPatchSends();
  linkKnownTagPatchEntries();
  // Every page with this template links the modules the entry links.
  programExtra.includesClientWork =
    hasClientWork(programExtra) || importsClientWork();
}

// A template it imports includes client work; one still analyzing (a cycle)
// reads as not, which only keeps its content's shells.
function importsClientWork() {
  const file = getFile();
  for (const tag of file.metadata.marko.analyzedTags || []) {
    if (loadFileForImport(file, tag)?.path.node.extra.includesClientWork) {
      return true;
    }
  }
  return false;
}
