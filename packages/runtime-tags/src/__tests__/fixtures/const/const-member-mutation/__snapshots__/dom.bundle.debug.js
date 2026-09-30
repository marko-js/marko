// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $fullName = ($scope, fullName) => _text($scope["#text/0"], fullName);
const $user = ($scope, user) => $fullName($scope, user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`);
function $setup($scope) {
	$user($scope, {
		firstName: "George",
		middleName: "R.R.",
		lastName: "Martin"
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
