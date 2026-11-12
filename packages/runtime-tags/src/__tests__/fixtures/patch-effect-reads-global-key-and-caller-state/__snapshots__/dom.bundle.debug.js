// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $global_user_name_key = /*@__PURE__*/ _global_key("$global_user_name/9", "user", "name");
const $global_user_name = /*@__PURE__*/ _global_closure("__tests__/tags/child.marko_0_$global_user_name#7/subscribe", $global_user_name_key);
const $input_page__OR__input_n__OR__$global_user_name__script = _script_patch("__tests__/tags/child.marko_0_input_page#3_input_n#4_$global_user_name#7 input_page input_n", ($scope) => {
	$input_page__OR__input_n__OR__$global_user_name.r($scope);
	_el_read($scope["#div/0"]).textContent = _global_read($scope.$global, "user").name + ":" + $scope.input_page + $scope.input_n;
});
const $input_page__OR__input_n__OR__$global_user_name = /*@__PURE__*/ _global_or(6, $input_page__OR__input_n__OR__$global_user_name__script, $global_user_name);
const $input_page__OR__input_n__script = _script_patch("__tests__/tags/child.marko_0_input_page#3_input_n#4 input_page input_n", ($scope) => _el_read($scope["#div/0"]).title = $scope.input_page + $scope.input_n);
const $input_page__OR__input_n = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_0_input_page#3_input_n#4/setup", 5, ($scope) => {
	$input_page__OR__input_n__OR__$global_user_name($scope);
	$input_page__OR__input_n__script($scope);
});
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__input_n);
const $input_n$1 = /*@__PURE__*/ _const("input_n", $input_page__OR__input_n);
const $setup$1 = $global_user_name;
const $input$1 = ($scope, input) => {
	$input_page($scope, input.page);
	$input_n$1($scope, input.n);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>go</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)(" b");
const $page = _let("page/5", ($scope) => $input_page($scope["#childScope/0"], $scope.page));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$page($scope, $scope.page + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$page($scope, "p");
	$setup__script($scope);
}
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
