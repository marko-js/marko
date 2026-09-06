// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $input_value__OR__input_wire__OR__handler = /*@__PURE__*/ _or(8, ($scope) => _attr_input_value($scope, "#input/1", $scope.input_value, $scope.input_wire ? $scope.handler : undefined), 2);
const $handler2 = /*@__PURE__*/ _const("handler", $input_value__OR__input_wire__OR__handler);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/1"));
function $setup($scope) {
	$handler2($scope, $handler);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_wire__OR__handler);
const $input_wire = /*@__PURE__*/ _const("input_wire", $input_value__OR__input_wire__OR__handler);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_value($scope, input.value);
	$input_wire($scope, input.wire);
};
function $handler(next) {
	document.querySelector("main").dataset.got = next;
}
_resume("__tests__/template.marko_0/handler", $handler);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
