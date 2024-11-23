export const _template_ = "<p> </p>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _fullName = /* @__PURE__ */_$.value("fullName", (_scope, fullName) => _$.data(_scope["#text/0"], fullName));
const _user_lastName = /* @__PURE__ */_$.value("user_lastName", 0);
const _user_middleName = /* @__PURE__ */_$.value("user_middleName", 0);
const _user_firstName = /* @__PURE__ */_$.value("user_firstName", 0);
const _user_fullName = /* @__PURE__ */_$.value("user_fullName", 0);
const _user = /* @__PURE__ */_$.value("user", (_scope, user) => {
  _user_fullName(_scope, user.fullName);
  _user_firstName(_scope, user.firstName);
  _user_middleName(_scope, user.middleName);
  _user_lastName(_scope, user.lastName);
});
export function _setup_(_scope) {
  _user(_scope, {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  });
  _fullName(_scope, user_fullName = `${user_firstName} ${user_middleName} ${user_lastName}`);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/error-const-mutation/template.marko", _template_, _walks_, _setup_);