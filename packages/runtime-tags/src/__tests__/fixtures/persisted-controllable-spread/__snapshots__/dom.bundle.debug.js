// template.marko
const $template = "<input><p> </p>";
const $walks = " bD l";
const $text = /*@__PURE__*/ _let("text/5", ($scope) => _text($scope["#text/1"], $scope.text));
function $setup($scope) {
	$text($scope, "");
}
const $field2__script = _script("__tests__/template.marko_0_field#6", ($scope) => _attrs_script($scope, "#input/0"));
const $field2 = /*@__PURE__*/ _const("field", ($scope) => {
	_attrs($scope, "#input/0", {
		type: "text",
		...$scope.field
	}, _controllable_input);
	$field2__script($scope);
});
const $input_field = ($scope, input_field) => $field2($scope, {
	...input_field,
	valueChange: $field($scope)
});
const $input = ($scope, input) => $input_field($scope, input.field);
const $field = ($scope) => (next) => {
	$text($scope, next);
};
_resume("__tests__/template.marko_0/field", $field);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
