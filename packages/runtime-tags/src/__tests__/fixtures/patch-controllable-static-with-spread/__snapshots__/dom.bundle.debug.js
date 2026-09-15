// template.marko
const $template = "<input><p> </p>";
const $walks = " bD l";
const $input_rest__OR__text__script = _script("__tests__/template.marko_0_input_rest#4_text#5", ($scope) => _attrs_script($scope, "#input/0"));
const $input_rest__OR__text = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_rest", /*@__PURE__*/ _or(6, ($scope) => {
	_attrs($scope, "#input/0", {
		value: $scope.text,
		valueChange: $valueChange($scope),
		...$scope.input_rest
	}, _controllable_input);
	$input_rest__OR__text__script($scope);
}));
const $text = /*@__PURE__*/ _let("text/5", ($scope) => {
	_text($scope["#text/1"], $scope.text);
	$input_rest__OR__text($scope);
});
function $setup($scope) {
	$text($scope, "init");
}
const $input_rest = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_rest", $input_rest__OR__text);
const $input = ($scope, input) => $input_rest($scope, input.rest);
const $valueChange = ($scope) => (_new_text) => {
	$text($scope, _new_text);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
