// tags/text-area.marko
const $template$1 = "<textarea></textarea>";
const $walks$1 = " b";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _fill_join("__tests__/tags/text-area.marko_fill1", "input_valueChange", /*@__PURE__*/ _fill_join("__tests__/tags/text-area.marko_fill0", "input_value", /*@__PURE__*/ _or_resume("__tests__/tags/text-area.marko_0_input_value#3_input_valueChange#4/init", 5, ($scope) => _attr_textarea_value($scope, "#textarea/0", $scope.input_value, $scope.input_valueChange))));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/tags/text-area.marko_0", ($scope) => {
	_attr_textarea_value_script($scope, "#textarea/0");
	_el_read($scope["#textarea/0"]);
});
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var text_area_default = /*@__PURE__*/ _template("__tests__/tags/text-area.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $if_content__text = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_text#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.text)));
const $if_content__setup = ($scope) => {
	$if_content__text._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
};
const $text = /*@__PURE__*/ _let("text/5", ($scope) => {
	_text($scope["#text/1"], $scope.text);
	$if_content__text($scope);
});
function $setup($scope) {
	$text($scope, "");
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $valueChange = ($scope) => (_new_text) => {
	$text($scope._, _new_text);
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
