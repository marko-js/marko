// template.marko
const $template = "<input>";
const $walks = " b";
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => _attr_input_value($scope, "#input/0", $scope.input_v, $valueChange));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup = $setup__script;
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#3", ($scope) => _attrs_script($scope, "#input/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.input_attrs, {
		value: 1,
		valueChange: 1
	});
	$input_attrs__script($scope);
});
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_v($scope, input.v);
};
function $valueChange(next) {
	document.body.dataset.v = next;
}
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
