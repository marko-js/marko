import type { types as t } from "@marko/compiler";

import type { Binding } from "./bindings";
import { callsOtherTemplateSetup } from "./known-tag";
import { forEach } from "./optional";
import { getCanonicalExtra, getReferencedBindings } from "./references";
import { forEachSection, type Section } from "./sections";
import { createAnalysisSectionState, createAnalysisState } from "./state";

// Client work keyed by nothing, or by an expression reading no binding, runs in
// the section's setup, which callers skip when analysis found none.

interface SetupInfo {
  always: boolean;
  exprs: Set<t.NodeExtra>;
}
// A known tag's call: the params it writes with no value, and the expressions
// keying its other writes (each the binding it writes derives from).
interface CallSetupInfo {
  params: Set<Binding>;
  exprs: Set<t.NodeExtra>;
}
const [getSetupInfo] = createAnalysisSectionState(
  (): SetupInfo => ({ always: false, exprs: new Set() }),
);
const [getCallSetupInfos] = createAnalysisState(
  () => new Map<t.MarkoTagExtra, CallSetupInfo>(),
);

// Client work the section (and a known tag's `call`) runs when what `node`
// references changes.
export function addSetupExpr(
  section: Section,
  node: t.Node,
  call?: t.MarkoTagExtra,
) {
  const extra = (node.extra ??= {});
  getSetupInfo(section).exprs.add(extra);
  if (call) addCallSetupExpr(call, extra);
}

// A known tag's `call` keys a write by `extra`, which counts toward the section's
// setup by its references (`finalizeReferences`).
export function addCallSetupExpr(call: t.MarkoTagExtra, extra: t.NodeExtra) {
  getCallSetupInfo(call).exprs.add(extra);
}

// Client work the section runs in setup.
export function addSetupWork(section: Section) {
  getSetupInfo(section).always = true;
}

// A known tag's `call` writes `param` with no value in the section's setup.
export function addCallSetupParam(
  section: Section,
  call: t.MarkoTagExtra,
  param: Binding,
) {
  addSetupWork(section);
  getCallSetupInfo(call).params.add(param);
}

// Whether a known tag's call writes a read param in setup.
export function callRunsSetup(call: t.MarkoTagExtra) {
  const info = getCallSetupInfos().get(call);
  if (!info) return false;
  for (const param of info.params) if (!param.pruned) return true;
  return keysSetup(info.exprs);
}

// Whether `expr` keys one of a known tag's call's writes.
export function isCallSetupExpr(call: t.MarkoTagExtra, expr: t.NodeExtra) {
  return !!getCallSetupInfos().get(call)?.exprs.has(expr);
}

function getCallSetupInfo(call: t.MarkoTagExtra) {
  let info = getCallSetupInfos().get(call);
  if (!info) {
    getCallSetupInfos().set(
      call,
      (info = { params: new Set(), exprs: new Set() }),
    );
  }
  return info;
}

// An expression still emitted that reads no binding keys work in setup.
function keysSetup(exprs: Set<t.NodeExtra>) {
  for (const expr of exprs) {
    const extra = getCanonicalExtra(expr);
    if (!extra.dropped && !getReferencedBindings(extra)) return true;
  }
  return false;
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
  // Setup subscribes the section to the closures it reads, and sets up another
  // template it renders.
  return (
    getSetupInfo(section).always ||
    keysSetup(getSetupInfo(section).exprs) ||
    !!section.referencedClosures ||
    callsOtherTemplateSetup(section)
  );
}
