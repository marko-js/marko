// tags/item.marko
const $template$1 = "<p> </p><p> </p>";
const $walks$1 = "D lD l";
const $setup$1 = ($_) => {};
const $input_n__$global_a = /*@__PURE__*/ _fill_global("__tests__/tags/item.marko_0_input_n#4_$global_a#6", ($scope) => _text($scope["#text/0"], $scope.input_n + _global_read($scope.$global, "a")), "a");
const $input_n__OR__input_i__$global_a = /*@__PURE__*/ _fill_global("__tests__/tags/item.marko_0_input_n#4_input_i#5_$global_a#6", ($scope) => _text($scope["#text/1"], $scope.input_i + $scope.input_n + _global_read($scope.$global, "a")), "a");
const $input_n__OR__input_i = /*@__PURE__*/ _or_patch("__tests__/tags/item.marko_0_input_n#4_input_i#5/setup", 6, $input_n__OR__input_i__$global_a);
const $input_n = /*@__PURE__*/ _const("input_n", ($scope) => {
	$input_n__OR__input_i($scope);
	$input_n__$global_a($scope);
});
const $input_i = /*@__PURE__*/ _const("input_i", $input_n__OR__input_i);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_i($scope, input.i);
};
var item_default = /*@__PURE__*/ _template("__tests__/tags/item.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=inc>+</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $n = _let("n/2", ($scope) => $input_n($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_i($scope["#childScope/1"], 1);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
