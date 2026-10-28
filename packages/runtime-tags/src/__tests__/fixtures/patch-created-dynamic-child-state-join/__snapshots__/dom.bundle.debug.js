// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_a = /*@__PURE__*/ _fill_signal("input_show __tests__/template.marko_fill0,input_a __tests__/template.marko_fill1", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_show ? child_default : null, ($_) => ({ x: $scope.input_a }))));
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_show__OR__input_a);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
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
