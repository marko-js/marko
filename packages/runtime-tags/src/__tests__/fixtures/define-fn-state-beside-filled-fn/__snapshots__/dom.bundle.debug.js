// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($Row_content__walks);
const $Row_content__a__OR__b = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.a() + $scope.b()));
const $Row_content__a = /*@__PURE__*/ _const("a", $Row_content__a__OR__b);
const $Row_content__b = /*@__PURE__*/ _const("b", $Row_content__a__OR__b);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__a($scope, $temp.a);
	$Row_content__b($scope, $temp.b);
};
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $Row_content__a($scope["#childScope/0"], $a($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => $Row_content__b($scope["#childScope/0"], $b($scope)));
const $input = ($scope, input) => $input_x($scope, input.x);
const $a = ($scope) => () => $scope.count;
const $b = ($scope) => () => $scope.input_x;
_resumed["__tests__/template.marko_0/a"] = $a;
_resumed["__tests__/template.marko_0/b"] = $b;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
