// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input_page__OR__input_n__$global_user_name__script = _fill_global_path_script("__tests__/tags/child.marko_0_input_page#3_input_n#4_$global_user_name#7", ($scope) => _el_read($scope["#div/0"]).textContent = _global_read($scope.$global, "user").name + ":" + $scope.input_page + $scope.input_n, "user", "name");
const $input_page__OR__input_n__$global_user_name = $input_page__OR__input_n__$global_user_name__script;
const $input_page__OR__input_n__script = _script("__tests__/tags/child.marko_0_input_page#3_input_n#4", ($scope) => _el_read($scope["#div/0"]).title = $scope.input_page + $scope.input_n);
const $input_page__OR__input_n = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_0_input_page#3_input_n#4/setup", 5, ($scope) => {
	$input_page__OR__input_n__$global_user_name($scope);
	$input_page__OR__input_n__script($scope);
});
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__input_n);
const $input_n$1 = /*@__PURE__*/ _const("input_n", $input_page__OR__input_n);
const $input$1 = ($scope, input) => {
	$input_page($scope, input.page);
	$input_n$1($scope, input.n);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>go</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)(" b");
const $page = _let("page/5", ($scope) => $input_page($scope["#childScope/0"], $scope.page));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$page($scope, $scope.page + "!");
}));
function $setup($scope) {
	$page($scope, "p");
	$setup__script($scope);
}
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
