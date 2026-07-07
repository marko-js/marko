// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $input_value__OR__a__script = _script("__tests__/template.marko_0_input_value_a", ($scope) => _attrs_script($scope, "#div/1"));
const $input_value__OR__a = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs_content($scope, "#div/1", {
		a: $scope.a,
		...$scope.input_value
	});
	$input_value__OR__a__script($scope);
});
const $a = /*@__PURE__*/ _let("a/6", ($scope) => {
	_attr($scope["#div/2"], "a", $scope.a);
	$input_value__OR__a($scope);
});
function $setup($scope) {
	$a($scope, 0);
}
const $input_value__script = _script("__tests__/template.marko_0_input_value", ($scope) => {
	_attrs_script($scope, "#div/0");
	_attrs_script($scope, "#div/2");
});
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input_value);
	_attrs_partial_content($scope, "#div/2", $scope.input_value, { a: 1 });
	$input_value__OR__a($scope);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
