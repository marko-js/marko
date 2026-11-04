// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<i> </i>";
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Inner_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Inner_content__walks);
const $Inner_content__input_x__OR__k = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_1_input_x#0:4_k#3/setup", 4, ($scope) => _text($scope["#text/0"], $scope._.input_x + $scope.k));
const $Inner_content__input_x = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_1_input_x#0:4/subscribe", "input_x/6", $Inner_content__input_x__OR__k);
const $Inner_content__setup = $Inner_content__input_x;
const $Inner_content__k = /*@__PURE__*/ _const("k", $Inner_content__input_x__OR__k);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => $Inner_content__k($scope, $temp.k);
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_0_n#5/fill", "n/5", ($scope) => $Inner_content__k($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/1"]._ = $scope;
	$Inner_content__setup($scope["#childScope/1"]);
	$setup__script($scope);
	$n($scope, 0);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($Inner_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
