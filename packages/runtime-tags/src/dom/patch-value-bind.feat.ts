import "./patch-value.feat";
import { BIND_FRAME_VAR } from "../common/meta";
import type { Scope } from "../common/types";
import { frameBinds, frameVars } from "./patch";
import { getRegisteredWithScope, patchers } from "./resume";

// The frame epoch's binds: a source entry re-binds its registration at the
// paired live scope, and bound fills reference the bind by index. A source
// entry's key is that index (from 1), dispatched on its first digit like
// any kind; the index is the datum, so no prefix.
for (let digit = 10; --digit;) {
  patchers[digit] = (scope, key, id) => {
    frameBinds[key] = (
      getRegisteredWithScope(id as string) as (scope: Scope) => unknown
    )(scope);
  };
}
// A reference resolves lazily from its frame's table (later frames replace
// `frameBinds`): its source walks in after the frame text evaluates, with
// the frame or with a guard the frame left pending.
frameVars[BIND_FRAME_VAR] = (i: number) => {
  const binds = frameBinds;
  // A bound value that is not callable (owner-bound content) is the value.
  return (...args: unknown[]) =>
    typeof binds[i] === "function"
      ? (binds[i] as (...args: unknown[]) => unknown)(...args)
      : binds[i];
};
