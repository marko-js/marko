export const $template = "<p> </p>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $user = /* @__PURE__ */_._const("user", $scope => {
  $user_fullName($scope, $scope.user.fullName);
  $user_firstName($scope, $scope.user.firstName);
  $user_middleName($scope, $scope.user.middleName);
  $user_lastName($scope, $scope.user.lastName);
});
const $fullName = /* @__PURE__ */_._const("fullName", $scope => _._text($scope["#text/0"], $scope.fullName));
const $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName = /* @__PURE__ */_._or(6, $scope => $fullName($scope, $scope.user_fullName = `${$scope.user_firstName} ${$scope.user_middleName} ${$scope.user_lastName}`), 3);
const $user_fullName = /* @__PURE__ */_._const("user_fullName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
const $user_firstName = /* @__PURE__ */_._const("user_firstName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
const $user_middleName = /* @__PURE__ */_._const("user_middleName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
const $user_lastName = /* @__PURE__ */_._const("user_lastName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
export function $setup($scope) {
  $user($scope, {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);