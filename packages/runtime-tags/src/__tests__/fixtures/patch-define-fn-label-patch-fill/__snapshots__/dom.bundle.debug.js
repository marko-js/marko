// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $Row_content__fn__OR__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "label", /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.fn() + $scope.label)));
const $Row_content__fn = /*@__PURE__*/ _const("fn", $Row_content__fn__OR__label);
const $Row_content__label = /*@__PURE__*/ _const("label", $Row_content__fn__OR__label);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__fn($scope, $temp.fn);
	$Row_content__label($scope, $temp.label);
};
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $Row_content__fn($scope["#childScope/0"], $fn($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $Row_content__label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
const $fn = ($scope) => () => $scope.count;
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
