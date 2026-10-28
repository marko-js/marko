// template.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
let n = 0;
const $input_name__OR__uid = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "uid", /*@__PURE__*/ _or(9, ($scope) => {
	_attr($scope["#label/0"], "for", `${$scope.uid}-${$scope.input_name}`);
	_attr($scope["#input/2"], "id", `${$scope.uid}-${$scope.input_name}`);
}));
const $uid = /*@__PURE__*/ _let("uid/8", $input_name__OR__uid);
function $setup($scope) {
	$uid($scope, "u" + ++n);
}
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	_attr($scope["#input/2"], "name", $scope.input_name);
	$input_name__OR__uid($scope);
});
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/2", $scope.input_value));
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
