// tags/stepper.marko
const $template$1 = "<input type=number>";
const $walks$1 = " b";
const $clamp__OR__current = /*@__PURE__*/ _or_resume("__tests__/tags/stepper.marko_0_clamp#7_current#8/init", 10, ($scope) => _attr_input_value($scope, "#input/0", $scope.current, $valueChange$1($scope)));
const $clamp2 = /*@__PURE__*/ _const("clamp", $clamp__OR__current);
const $input_max = /*@__PURE__*/ _const("input_max", ($scope) => $clamp2($scope, $clamp($scope)));
const $current = /*@__PURE__*/ _fill_let_change("__tests__/tags/stepper.marko_fill2", "current/8", $clamp__OR__current);
const $input_value__OR__input_valueChange = /*@__PURE__*/ _fill_join("__tests__/tags/stepper.marko_fill1", "input_valueChange", /*@__PURE__*/ _fill_join("__tests__/tags/stepper.marko_fill0", "input_value", /*@__PURE__*/ _or_resume("__tests__/tags/stepper.marko_0_input_value#4_input_valueChange#5/init", 6, ($scope) => $current($scope, $scope.input_value, $scope.input_valueChange))));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/tags/stepper.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_max($scope, input.max);
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
const $valueChange$1 = ($scope) => (_new_current) => {
	$current($scope, $scope.clamp(_new_current));
};
const $clamp = ($scope) => (v) => Math.min($scope.input_max, Number(v));
_bind_resume("__tests__/tags/stepper.marko_0/valueChange clamp", $valueChange$1);
_bind_resume("__tests__/tags/stepper.marko_0/clamp input_max", $clamp);
var stepper_default = /*@__PURE__*/ _template("__tests__/tags/stepper.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__qty = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "qty/4", ($scope) => $input_value($scope["#childScope/0"], $scope.qty));
const $for_content__row_qty = ($scope, row_qty) => {
	$for_content__qty($scope, row_qty);
	$input_max($scope["#childScope/0"], row_qty);
};
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
};
const $for_content__$params = ($scope, $params2) => $for_content__row_qty($scope, $params2[0]?.qty);
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $for_content__setup, $for_content__$params);
const $setup__$global_rows = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_0_$global_rows#7", ($scope) => $for($scope, [$scope.$global.rows, "id"]), "rows");
const $setup = $setup__$global_rows;
const $valueChange = ($scope) => (_new_qty) => {
	$for_content__qty($scope, _new_qty);
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
