// tags/child.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_valueChange));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p id=out> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $out = /*@__PURE__*/ _let("out/2", ($scope) => _text($scope["#text/1"], $scope.out));
const $onChange2 = ($scope, onChange) => $input_valueChange($scope["#childScope/0"], onChange);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], "a");
	$out($scope, "-");
	$onChange2($scope, $onChange($scope));
}
const $onChange = ($scope) => (next) => {
	$out($scope, next);
};
_resumed["__tests__/template.marko_0/onChange"] = $onChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
