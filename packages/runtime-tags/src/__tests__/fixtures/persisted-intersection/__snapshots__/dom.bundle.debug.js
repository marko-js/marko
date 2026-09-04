// template.marko
const $template = "<div><h1> </h1><h2> </h2><button>+</button></div>";
const $walks = "E lD l l";
const $input_title__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.input_title + " #" + $scope.count)));
const $count = /*@__PURE__*/ _let("count/6", $input_title__OR__count);
const $input_title__OR__other = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/1"], $scope.input_title + " / " + $scope.other)));
const $other = /*@__PURE__*/ _let("other/8", $input_title__OR__other);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
	$other($scope, +$scope.other - 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$other($scope, 10);
	$setup__script($scope);
}
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$input_title__OR__count($scope);
	$input_title__OR__other($scope);
});
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
