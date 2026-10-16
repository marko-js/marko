import type { types as t } from "@marko/compiler";

import { callsOtherTemplateSetup } from "./known-tag";
import { forEach } from "./optional";
import { getCanonicalExtra, getReferencedBindings } from "./references";
import { forEachSection, type Section } from "./sections";
import { createAnalysisSectionState } from "./state";

// Client work keyed by nothing, or by an expression reading no binding, runs in
// the section's setup, which callers skip when analysis found none.

const [getSetupInfo] = createAnalysisSectionState(() => ({
  always: false,
  exprs: new Set<t.NodeExtra>(),
}));

// Client work the section runs when what `node` references changes.
export function addSetupExpr(section: Section, node: t.Node) {
  getSetupInfo(section).exprs.add((node.extra ??= {}));
}

// Client work the section runs in setup.
export function addSetupWork(section: Section) {
  getSetupInfo(section).always = true;
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
  // Setup subscribes the section to the closures it reads, and sets up another
  // template it renders.
  if (
    info.always ||
    section.referencedClosures ||
    callsOtherTemplateSetup(section)
  ) {
    return true;
  }
  for (const expr of info.exprs) {
    const extra = getCanonicalExtra(expr);
    if (!extra.dropped && !getReferencedBindings(extra)) {
      return true;
    }
  }
  return false;
}
