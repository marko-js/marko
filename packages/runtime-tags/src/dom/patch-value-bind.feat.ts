import "./patch-value.feat";
import { BIND_FLUSH_VAR } from "../common/meta";
import type { Scope } from "../common/types";
import { flushBinds, flushVars } from "./patch";
import { getRegisteredWithScope, patchers } from "./resume";

// The flush epoch's binds: a source entry re-binds its registration at the
// paired live scope, and bound fills reference the bind by index. A source
// entry's key is that index (from 1), dispatched on its first digit like
// any kind; the index is the datum, so no prefix.
for (let digit = 10; --digit;) {
  patchers[digit] = (scope, key, id) => {
    flushBinds[key] = getRegisteredWithScope<(scope: Scope) => unknown>(
      id as string,
    )(scope);
  };
}
// A reference resolves lazily from its flush's table (later flushes replace
// `flushBinds`): its source walks in after the flush text evaluates, with
// the flush or with a guard the flush left pending.
flushVars[BIND_FLUSH_VAR] = (i: number) => {
  const binds = flushBinds;
  // A bound value that is not callable (owner-bound content) is the value.
  return (...args: unknown[]) =>
    typeof binds[i] === "function"
      ? (binds[i] as (...args: unknown[]) => unknown)(...args)
      : binds[i];
};
