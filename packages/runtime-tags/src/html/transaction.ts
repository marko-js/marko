// Transactions are client-only, so on the server an `<action>` is just its
// function (always present: the compiler normalizes the value to one) with a
// constant `false` pending flag. Drafts compile straight to `<const>` and need
// no runtime here.
export function _action<F extends (...args: any[]) => unknown>(
  fn: F,
): F & { pending: false } {
  const action = fn as F & { pending: false };
  action.pending = false;
  return action;
}
