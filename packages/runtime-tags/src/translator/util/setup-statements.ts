import type { types as t } from "@marko/compiler";

import { forEach } from "./optional";
import { forEachSection, type Section } from "./sections";
import { createSectionState } from "./state";

/**
 * Tracks during analyze whether translate may add setup-signal statements, so
 * callers of a template or `<define>` body can skip calling a noop setup.
 */

const [getSetupInfo] = createSectionState("setupStatements", () => ({
  forced: false,
  exprs: new Set<t.NodeExtra>(),
}));

export function addSetupStatement(section: Section) {
  getSetupInfo(section).forced = true;
}

export function addSetupExpr(section: Section, node: t.Node | undefined) {
  if (node) {
    getSetupInfo(section).exprs.add((node.extra ??= {}));
  } else {
    getSetupInfo(section).forced = true;
  }
}

export function finalizeSetupStatements() {
  forEachSection((section) => {
    if (hasOwnSetupStatements(section)) {
      section.hasSetupStatements = true;
    }
  });

  forEachSection((section) => {
    if (section.hasSetupStatements || section.readsOwner) {
      setCallSectionsSetup(section);
    }
  });
}

// A direct call of a `<define>` body or of the template itself sets up the
// called scope, or its owner, in the calling section's setup.
function setCallSectionsSetup(body: Section) {
  forEach(body.callSections, (callSection) => {
    if (!callSection.hasSetupStatements) {
      callSection.hasSetupStatements = true;
      setCallSectionsSetup(callSection);
    }
  });
}

function hasOwnSetupStatements(section: Section) {
  const info = getSetupInfo(section);
  // Setup subscribes the section to the closures it reads.
  if (info.forced || section.referencedClosures) return true;
  for (let extra of info.exprs) {
    while (extra.merged) extra = extra.merged;
    if (!extra.pruned && !extra.referencedBindings) {
      return true;
    }
  }
  return false;
}
