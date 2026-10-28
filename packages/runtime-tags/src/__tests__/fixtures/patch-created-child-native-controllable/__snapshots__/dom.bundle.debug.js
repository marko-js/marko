// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/field.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _fill_signal("input_value __tests__/tags/field.marko_fill0,input_valueChange __tests__/tags/field.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/tags/field.marko_0_input_value#3_input_valueChange#4/init", 5, ($scope) => _attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_valueChange)));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/tags/field.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, " b", $setup$1, $input);

// tags/page-b.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<output> </output>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $text = /*@__PURE__*/ _fill_let("__tests__/tags/page-b.marko_fill0", "text/2", ($scope) => {
	$input_value($scope["#childScope/0"], $scope.text);
	_text($scope["#text/1"], $scope.text);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
	$text($scope, "a");
}
const $valueChange = ($scope) => (_new_text) => {
	$text($scope, _new_text);
};
_resumed["__tests__/tags/page-b.marko_0/valueChange"] = $valueChange;
var page_b_default = /*@__PURE__*/ _template("__tests__/tags/page-b.marko", $template, $walks, $setup);
