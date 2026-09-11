// template.marko
const $template = "<!----><!><p> </p><!><button>+</button>";
const $walks = " b%bD l%b b";
const $input_label__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_label", /*@__PURE__*/ _or(10, ($scope) => _text($scope["#comment/0"], `${_to_text($scope.input_label)} ${_to_text($scope.count)}`)));
const $count = /*@__PURE__*/ _let("count/9", $input_label__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", ($scope) => {
	$input_label__OR__count($scope);
	_text($scope["#text/2"], $scope.input_label);
}, $input_label__OR__count);
const $show = /*@__PURE__*/ _show("#text/3", "#text/1");
const $input_on = $show;
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
