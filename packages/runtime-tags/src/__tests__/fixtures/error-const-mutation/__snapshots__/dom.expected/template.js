export const _template = "<p> </p>";
export const _walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_user_fullName_user_firstName_user_middleName_user_lastName = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    user_fullName,
    user_firstName,
    user_middleName,
    user_lastName
  } = _scope;
  _fullName(_scope, user_fullName = `${user_firstName} ${user_middleName} ${user_lastName}`);
}, 3);
const _fullName = /* @__PURE__ */_$.value("fullName", (_scope, fullName) => _$.data(_scope["#text/0"], fullName));
const _user_lastName = /* @__PURE__ */_$.value("user_lastName", _scope => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user_middleName = /* @__PURE__ */_$.value("user_middleName", _scope => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user_firstName = /* @__PURE__ */_$.value("user_firstName", _scope => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user_fullName = /* @__PURE__ */_$.value("user_fullName", _scope => _expr_user_fullName_user_firstName_user_middleName_user_lastName(_scope));
const _user = /* @__PURE__ */_$.value("user", (_scope, user) => {
  _user_fullName(_scope, user.fullName);
  _user_firstName(_scope, user.firstName);
  _user_middleName(_scope, user.middleName);
  _user_lastName(_scope, user.lastName);
});
export function _setup(_scope) {
  _user(_scope, {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);