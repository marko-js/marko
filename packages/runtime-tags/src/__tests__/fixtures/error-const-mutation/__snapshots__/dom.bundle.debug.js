// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $user = ($scope, user) => {
	$user_fullName($scope, user.fullName);
	$user_firstName($scope, user.firstName);
	$user_middleName($scope, user.middleName);
	$user_lastName($scope, user.lastName);
};
const $fullName = ($scope, fullName) => _text($scope["#text/0"], fullName);
const $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName = /*@__PURE__*/ _or(6, ($scope) => $fullName($scope, $scope.user_fullName = `${$scope.user_firstName} ${$scope.user_middleName} ${$scope.user_lastName}`), 3);
const $user_fullName = /*@__PURE__*/ _const("user_fullName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
const $user_firstName = /*@__PURE__*/ _const("user_firstName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
const $user_middleName = /*@__PURE__*/ _const("user_middleName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
const $user_lastName = /*@__PURE__*/ _const("user_lastName", $user_fullName__OR__user_firstName__OR__user_middleName__OR__user_lastName);
function $setup($scope) {
	$user($scope, {
		firstName: "George",
		middleName: "R.R.",
		lastName: "Martin"
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
