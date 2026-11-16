// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, { a: $scope.input_x + $scope.input_y }));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__input_y);
const $input_y = /*@__PURE__*/ _const("input_y", $input_x__OR__input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>inc</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("");
const $count = /*@__PURE__*/ _let("count/4", ($scope) => $input_x($scope["#childScope/0"], $scope.count));
const $other__OR__q_inner_a = /*@__PURE__*/ _or(11, ($scope) => _text($scope["#text/2"], $scope.q_inner_a + $scope.other), 1, "#scopeOffset/1");
const $other = /*@__PURE__*/ _let("other/5", ($scope) => {
	$input_y($scope["#childScope/0"], $scope.other);
	$other__OR__q_inner_a($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
	$other($scope, +$scope.other + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $r);
	$count($scope, 0);
	$other($scope, 1);
	$setup__script($scope);
}
const $q = ($scope, q) => $q_inner_a($scope, q.inner?.a);
const $r = _var_resume("__tests__/template.marko_0_r#6/var", ($scope, r) => $q($scope, { inner: { ...r } }));
const $q_inner_a = /*@__PURE__*/ _const("q_inner_a", $other__OR__q_inner_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
