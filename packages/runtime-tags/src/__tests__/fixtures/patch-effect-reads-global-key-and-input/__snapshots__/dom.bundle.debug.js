// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $global_user_name_key = /*@__PURE__*/ _global_key("user", "name");
const $global_user_name = /*@__PURE__*/ _global_closure($global_user_name_key);
const $input_page__OR__input_n__OR__$global_user_name = _global_script(_filled_id("__tests__/template.marko_0_input_page#3_input_n#4_$global_user_name#7 input_page input_n"), ($scope) => _el_read($scope["#div/0"]).textContent = _global_read($scope.$global, "user").name + ":" + $scope.input_page + $scope.input_n, $global_user_name);
const $input_page__OR__input_n__script = _script_patch("__tests__/template.marko_0_input_page#3_input_n#4 input_page input_n", ($scope) => _el_read($scope["#div/0"]).title = $scope.input_page + $scope.input_n);
const $input_page__OR__input_n = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_page#3_input_n#4/setup", 5, ($scope) => {
	$input_page__OR__input_n__OR__$global_user_name($scope);
	$input_page__OR__input_n__script($scope);
});
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_page__OR__input_n);
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
