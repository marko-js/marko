// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $input_value__OR__input_big__OR__plain__OR__loud = /*@__PURE__*/ _or(9, ($scope) => _attr_input_value($scope, "#input/1", $scope.input_value, $scope.input_big ? $scope.loud : $scope.plain), 3);
const $plain2 = /*@__PURE__*/ _const("plain", $input_value__OR__input_big__OR__plain__OR__loud);
const $loud2 = /*@__PURE__*/ _const("loud", $input_value__OR__input_big__OR__plain__OR__loud);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/1"));
function $setup($scope) {
	$plain2($scope, $plain);
	$loud2($scope, $loud);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_big__OR__plain__OR__loud);
const $input_big = /*@__PURE__*/ _const("input_big", $input_value__OR__input_big__OR__plain__OR__loud);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_value($scope, input.value);
	$input_big($scope, input.big);
};
function $plain(next) {
	document.querySelector("main").dataset.got = next;
}
function $loud(next) {
	document.querySelector("main").dataset.got = next.toUpperCase();
}
_resume("__tests__/template.marko_0/plain", $plain);
_resume("__tests__/template.marko_0/loud", $loud);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
