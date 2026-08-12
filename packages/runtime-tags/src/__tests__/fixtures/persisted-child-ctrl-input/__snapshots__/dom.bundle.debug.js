// tags/field/index.marko
const $template$1 = "<input><em> </em>";
const $walks$1 = " bD l";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(6, ($scope) => _attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_valueChange));
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	_text($scope["#text/1"], $scope.input_value);
	$input_value__OR__input_valueChange($scope);
});
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script$1 = _script("__tests__/tags/field/index.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script$1;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<main><!><p> </p><button>+</button></main>";
const $walks = "D%bD l l";
const $if_content__text = /*@__PURE__*/ _resume("__tests__/template.marko_1_text#3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.text)));
const $if_content__setup = ($scope) => {
	$if_content__text._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
};
const $text = /*@__PURE__*/ _let("text/3", ($scope) => {
	_text($scope["#text/1"], $scope.text);
	$if_content__text($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/4", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$text($scope, "hi");
	$open($scope, true);
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_text) => {
	$text($scope._, _new_text);
};
_resume("__tests__/template.marko_1/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
