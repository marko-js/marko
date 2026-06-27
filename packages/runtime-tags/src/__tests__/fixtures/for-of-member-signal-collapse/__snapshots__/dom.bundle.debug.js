// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $for_content__user_role = ($scope, user_role) => _text($scope["#text/1"], user_role);
const $for_content__$params = ($scope, $params2) => {
	$for_content__user_name($scope, $params2[0]?.name);
	$for_content__user_role($scope, $params2[0]?.role);
};
const $for = /* @__PURE__ */ _for_of("#ul/0", "<li><!> (<!>)</li>", "D%c%l", 0, $for_content__$params);
const $input_users = ($scope, input_users) => $for($scope, [input_users]);
const $input = ($scope, input) => $input_users($scope, input.users);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
