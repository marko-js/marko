// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<i> </i>";
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Inner_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Inner_content__walks);
const $Inner_content__input_x__OR__k = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_x#0:4_k#3/setup", 4, ($scope) => _text($scope["#text/0"], $scope._.input_x + $scope.k));
const $Inner_content__input_x = /*@__PURE__*/ _closure_get("input_x/6", $Inner_content__input_x__OR__k, 0, "__tests__/template.marko_1_input_x#0:4/subscribe");
const $Inner_content__setup = $Inner_content__input_x;
const $Inner_content__k = /*@__PURE__*/ _const("k", $Inner_content__input_x__OR__k);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => $Inner_content__k($scope, $temp.k);
const $n = _let("n/5", ($scope) => $Inner_content__k($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/1"]._ = $scope;
	$Inner_content__setup($scope["#childScope/1"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($Inner_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
