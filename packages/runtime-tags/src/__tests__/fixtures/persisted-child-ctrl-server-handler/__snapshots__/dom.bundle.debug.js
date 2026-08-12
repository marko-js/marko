// tags/field/index.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_valueChange));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script$1 = _script("__tests__/tags/field/index.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field/index.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>+</button><output></output></main>";
const $walks = "D%b l";
const $if_content__handle = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "handle", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_valueChange($scope["#childScope/0"], $scope._.handle)));
const $if_content__setup = ($scope) => {
	$if_content__handle._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], "a");
};
const $handle2 = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "handle", $if_content__handle);
const $input_prefix = /*@__PURE__*/ _const("input_prefix", ($scope) => $handle2($scope, $handle($scope)));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_prefix($scope, input.prefix);
const $handle = ($scope) => (next) => {
	document.querySelector("output").textContent = $scope.input_prefix + next;
};
_resume("__tests__/template.marko_0/handle", $handle);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
