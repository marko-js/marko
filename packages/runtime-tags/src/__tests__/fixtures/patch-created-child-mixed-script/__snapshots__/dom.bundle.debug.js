// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_x($scope["#childScope/0"], $scope._.input_a))));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child/index.marko
const $template = "<p> </p><button>+</button>";
const $walks = "D l b";
const $input_x__OR__n__script = _script("__tests__/tags/child/index.marko_0_input_x#4_n#5", ($scope) => document.title = $scope.input_x + $scope.n);
const $input_x__OR__n = /*@__PURE__*/ _or_resume("__tests__/tags/child/index.marko_0_input_x#4_n#5/init", 6, $input_x__OR__n__script);
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/child/index.marko_fill0", "n/5", $input_x__OR__n);
const $setup__script = _script("__tests__/tags/child/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => {
	$input_x__OR__n($scope);
	_text($scope["#text/0"], $scope.input_x);
});
const $input = ($scope, input) => $input_x($scope, input.x);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template, $walks, $setup, $input);
