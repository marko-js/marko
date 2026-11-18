// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = ($_) => {};
const $for_content__$params = ($scope, user) => {
	_text($scope["#text/0"], user?.name);
	_text($scope["#text/1"], user?.role);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li><!> (<!>)</li>", "D%c%", 0, $for_content__$params);
const $input_users = ($scope, input_users) => $for($scope, [input_users]);
const $input = ($scope, input) => $input_users($scope, input.users);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
