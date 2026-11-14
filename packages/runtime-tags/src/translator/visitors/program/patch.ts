import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { linkKnownTagPatchEntries } from "../../util/known-tag";
import { finalizeReasonsSettled } from "../../util/patch/decisions";
import { getPatchFillBindings, patchCreates } from "../../util/patch/refresh";
import { getSourcesForExpr } from "../../util/reasons";
import { callRuntime } from "../../util/runtime";
import { forEachSection, getSection, type Section } from "../../util/sections";
import {
  buildShell,
  buildShellMarker,
  buildShellSetup,
  getBranchShellId,
  getShells,
  getShellSetup,
  getShippedBranchShellId,
  linkPatchFills,
} from "../../util/shell";
import { getResumeRegistryId } from "../../util/signals";
import { getSectionMeta, writeStructureExports } from "../../util/structure";
import { toObjectProperty } from "../../util/to-property-name";

// What a page with this module links, once reasons and setup work settle: the
// runtime features its patches apply through.
export function finalizePageLinks() {
  finalizeReasonsSettled();
  linkPatchFills();
  linkKnownTagPatchEntries();
}

// What a patch build's server module adds once its body is written: the
// template's setup ids, its shells and the exports its callers' shells compose.
export function writePatchProgram(program: t.NodePath<t.Program>) {
  const section = getSection(program);
  const shells = getShells();
  // Naming the template's parts first lets its shells share them.
  getSectionMeta(section);
  // A caller's shell composes this template's setup ids as it composes
  // its markup and walks.
  program.node.body.push(
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(program.node.extra.exportNames!.setup),
          buildShellSetup(getShellSetup(section)),
        ),
      ]),
    ),
  );
  // Branch shells register at server module load so patches can create
  // them without the client bundling conditional content.
  const shellProps: t.ObjectProperty[] = [];
  for (const id in shells) {
    const section = shells[id];
    // A branch shell ships where the tags creating it name it.
    if (id === getBranchShellId(section) && !getShippedBranchShellId(section)) {
      continue;
    }
    // A shell's id token is its setup ids; a lone `!` means setup for
    // seeds alone: a root's, or a created scope's.
    const setupIds =
      (!section.parent || patchCreates(section)) &&
      (buildShellMarker(section) ||
        (getPatchFillBindings(section) && t.stringLiteral(" !")));
    shellProps.push(
      toObjectProperty(id, buildShell(id, section, setupIds || undefined)),
    );
  }
  if (shellProps.length) {
    program.node.body.push(
      t.expressionStatement(
        callRuntime("_shells", t.objectExpression(shellProps)),
      ),
    );
  }

  // A parent's shell composes this template's markup and walks, exported
  // under the dom module's names once the shells have named their parts.
  writeStructureExports(program);
  forEachSection(registerClientReturn);
}

// A dynamic tag's patch leaves its variable to the client where the rendered
// template's or content's own state drives the `<return>`.
function registerClientReturn(section: Section) {
  const { returnValueExpr } = section;
  if (returnValueExpr && getSourcesForExpr(returnValueExpr)?.state) {
    getProgram().node.body.push(
      t.expressionStatement(
        callRuntime(
          "_stateful_return",
          t.stringLiteral(
            section.parent
              ? getResumeRegistryId(section, "content")
              : getFile().metadata.marko.id,
          ),
        ),
      ),
    );
  }
}
