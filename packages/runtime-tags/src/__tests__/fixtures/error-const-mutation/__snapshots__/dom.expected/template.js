export const _template_ = "<p> </p>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_user_fullName_user_firstName_user_middleName_user_lastName = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    "user_fullName/2": user_fullName,
    "user_firstName/3": user_firstName,
    "user_middleName/4": user_middleName,
    "user_lastName/5": user_lastName
  } = _scope;
  _fullName(_scope, user_fullName = `${user_firstName} ${user_middleName} ${user_lastName}`);
});
const _fullName = /* @__PURE__ */_$.value("fullName/7", (_scope, fullName) => _$.data(_scope["#text/0"], fullName));
const _user_lastName = /* @__PURE__ */_$.value("user_lastName/5", (_scope, user_lastName) => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user_middleName = /* @__PURE__ */_$.value("user_middleName/4", (_scope, user_middleName) => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user_firstName = /* @__PURE__ */_$.value("user_firstName/3", (_scope, user_firstName) => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user_fullName = /* @__PURE__ */_$.value("user_fullName/2", (_scope, user_fullName) => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user = /* @__PURE__ */_$.value("user/1", (_scope, user) => {
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
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);