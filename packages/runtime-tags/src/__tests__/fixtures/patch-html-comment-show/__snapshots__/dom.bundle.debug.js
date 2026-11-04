// template.marko
const $template = "<!----><p> </p><!><button>+</button>";
const $walks = " bD l%b b";
const $input_label__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_label#6_count#8/setup", 9, ($scope) => _text($scope["#comment/0"], `${_to_text($scope.input_label)} ${_to_text($scope.count)}`));
const $count = _let("count/8", $input_label__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__count($scope);
	_text($scope["#text/1"], $scope.input_label);
});
const $show = /*@__PURE__*/ _show("#text/2");
const $input_on = $show;
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
