// tags/sum-with.marko
const $template$1 = "<!><div> </div>";
const $walks$1 = "0&bD l";
const $Sum_content__input_n__OR__a = /*@__PURE__*/ _or(3, ($scope) => _return($scope, $scope.a + $scope._.input_n));
const $Sum_content__input_n = /*@__PURE__*/ _closure_get("input_n/7", $Sum_content__input_n__OR__a, 0, "__tests__/tags/sum-with.marko_1_input_n#0:5/subscribe");
const $Sum_content__setup = $Sum_content__input_n;
const $Sum_content__a = /*@__PURE__*/ _const("a", $Sum_content__input_n__OR__a);
const $Sum_content__$params = ($scope, $params2) => $Sum_content__$temp($scope, $params2[0]);
const $Sum_content__$temp = ($scope, $temp) => $Sum_content__a($scope, $temp.a);
const $x = _var_resume("__tests__/tags/sum-with.marko_0_x#6/var", ($scope, x) => _text($scope["#text/2"], x));
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Sum_content__setup($scope["#childScope/0"]);
	$Sum_content__a($scope["#childScope/0"], 1);
	_var($scope, "#childScope/0", $x);
}
const $input = ($scope, input) => $input_n($scope, input.n);
const $input_n__closure = /*@__PURE__*/ _closure($Sum_content__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__closure);
var sum_with_default = /*@__PURE__*/ _template("__tests__/tags/sum-with.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $input_n($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
