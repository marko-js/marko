export const _template_ = "<p> </p>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _fullName = /* @__PURE__ */_$.value("fullName", (_scope, fullName) => _$.data(_scope["#text/0"], fullName));
const _user = /* @__PURE__ */_$.value("user", 0);
export function _setup_(_scope) {
  _user(_scope, {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  });
  _fullName(_scope, user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/error-const-mutation/template.marko");