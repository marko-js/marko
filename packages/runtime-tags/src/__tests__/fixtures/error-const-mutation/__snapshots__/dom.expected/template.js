export const $template = "<p> </p>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_user_fullName_user_firstName_user_middleName_user_lastName = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    user_fullName,
    user_firstName,
    user_middleName,
    user_lastName
  } = $scope;
  $fullName($scope, user_fullName = `${user_firstName} ${user_middleName} ${user_lastName}`);
}, 3);
const $fullName = /* @__PURE__ */_$.value("fullName", ($scope, fullName) => _$.data($scope["#text/0"], fullName));
const $user_lastName = /* @__PURE__ */_$.value("user_lastName", $expr_user_fullName_user_firstName_user_middleName_user_lastName);
const $user_middleName = /* @__PURE__ */_$.value("user_middleName", $expr_user_fullName_user_firstName_user_middleName_user_lastName);
const $user_firstName = /* @__PURE__ */_$.value("user_firstName", $expr_user_fullName_user_firstName_user_middleName_user_lastName);
const $user_fullName = /* @__PURE__ */_$.value("user_fullName", $expr_user_fullName_user_firstName_user_middleName_user_lastName);
const $user = /* @__PURE__ */_$.value("user", ($scope, user) => {
  $user_fullName($scope, user.fullName);
  $user_firstName($scope, user.firstName);
  $user_middleName($scope, user.middleName);
  $user_lastName($scope, user.lastName);
});
export function $setup($scope) {
  $user($scope, {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);