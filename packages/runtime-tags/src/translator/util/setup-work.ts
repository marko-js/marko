import type { types as t } from "@marko/compiler";

import { forEach } from "./optional";
import { forEachSection, type Section } from "./sections";
import { createSectionState } from "./state";

/**
 * Tracks during analyze whether a section has work keyed by setup, so callers
 * of a template or `<define>` body can skip calling a noop setup.
 */

const [getSetupInfo] = createSectionState("setupWork", () => ({
  forced: false,
  exprs: new Set<t.NodeExtra>(),
}));

export function addSetupWork(section: Section) {
  getSetupInfo(section).forced = true;
}

export function addSetupExpr(section: Section, node: t.Node | undefined) {
  if (node) {
    getSetupInfo(section).exprs.add((node.extra ??= {}));
  } else {
    getSetupInfo(section).forced = true;
  }
}

export function finalizeSetupWork() {
  forEachSection((section) => {
    if (hasOwnSetupWork(section)) {
      section.hasSetupWork = true;
    }
  });

  forEachSection((section) => {
    if (section.hasSetupWork || section.readsOwner) {
      setCallSectionsSetup(section);
    }
  });
}

// A direct call of a `<define>` body or of the template itself sets up the
// called scope, or its owner, in the calling section's setup.
function setCallSectionsSetup(body: Section) {
  forEach(body.callSections, (callSection) => {
    if (!callSection.hasSetupWork) {
      callSection.hasSetupWork = true;
      setCallSectionsSetup(callSection);
    }
  });
}

function hasOwnSetupWork(section: Section) {
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
