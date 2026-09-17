/** An `<action>` on the server: never pending, and the body as registered. */
export function _act<T extends (...args: never[]) => unknown>(
  fn: T,
): T & { readonly pending: false } {
  (fn as T & { pending: false }).pending = false;
  return fn as T & { readonly pending: false };
}
