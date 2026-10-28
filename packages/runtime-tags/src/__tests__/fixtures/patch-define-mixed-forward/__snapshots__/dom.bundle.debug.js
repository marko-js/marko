// template.marko
const $Kid_content__walks = "D l";
const $Kid_content__template = "<span> </span>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Kid_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Kid_content__walks);
const $Kid_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_b", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b))));
const $Kid_content__input_a = /*@__PURE__*/ _const("input_a", $Kid_content__input_a__OR__input_b);
const $Kid_content__input_b = /*@__PURE__*/ _const("input_b", $Kid_content__input_a__OR__input_b);
const $Kid_content__$params = ($scope, $params2) => $Kid_content__input($scope, $params2[0]);
const $Kid_content__input = ($scope, input) => {
	$Kid_content__input_a($scope, input.a);
	$Kid_content__input_b($scope, input.b);
};
const $s = _let("s/5", ($scope) => $Kid_content__input_a($scope["#childScope/0"], $scope.s));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$s($scope, 1);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $Kid_content__input_b($scope["#childScope/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
