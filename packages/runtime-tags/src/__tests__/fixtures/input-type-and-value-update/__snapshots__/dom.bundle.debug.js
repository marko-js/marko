// template.marko
const $template = "<input class=a><input class=b><input class=c><input class=d><input class=e><input class=f><input class=g><input value=s class=h><input class=i>";
const $walks = " b b b b b b b b b";
const $setup = () => {};
const $input_v__OR__input_t = /*@__PURE__*/ _or(13, ($scope) => {
	_attr_input_value_dynamic_default($scope, "#input/0", _attr_input_type($scope["#input/0"], $scope.input_t, $scope.input_v));
	_attr_input_value_dynamic_default($scope, "#input/2", _attr_input_type($scope["#input/2"], $scope.input_t, $scope.input_v));
	_attr($scope["#input/5"], "value", _attr_input_type($scope["#input/5"], $scope.input_t, $scope.input_v));
});
const $input_v__OR__input_t__OR__input_rest__script = _script("__tests__/template.marko_0_input_v#11_input_t#12_input_rest#15", ($scope) => _attrs_script($scope, "#input/3"));
const $input_v__OR__input_t__OR__input_rest = /*@__PURE__*/ _or(17, ($scope) => {
	_attrs_partial($scope, "#input/3", {
		...$scope.input_rest,
		type: $scope.input_t,
		value: $scope.input_v
	}, { class: 1 }, _controllable_input);
	$input_v__OR__input_t__OR__input_rest__script($scope);
}, 2);
const $input_v__OR__input_t__OR__input_checked = /*@__PURE__*/ _or(19, ($scope) => _attr_input_checkedValue_default($scope, "#input/6", $scope.input_checked, _attr_input_type($scope["#input/6"], $scope.input_t, $scope.input_v)), 2);
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	$input_v__OR__input_t($scope);
	$input_v__OR__input_t__OR__input_rest($scope);
	$input_v__OR__input_t__OR__input_checked($scope);
});
const $input_t__OR__input_rest__script = _script("__tests__/template.marko_0_input_t#12_input_rest#15", ($scope) => _attrs_script($scope, "#input/4"));
const $input_t__OR__input_rest = /*@__PURE__*/ _or(16, ($scope) => {
	_attrs_partial($scope, "#input/4", {
		...$scope.input_rest,
		type: $scope.input_t
	}, { class: 1 }, _controllable_input);
	$input_t__OR__input_rest__script($scope);
});
const $input_t = /*@__PURE__*/ _const("input_t", ($scope) => {
	_attr($scope["#input/7"], "value", _attr_input_type($scope["#input/7"], $scope.input_t, "s"));
	_attr($scope["#input/8"], "value", _attr_input_type($scope["#input/8"], $scope.input_t));
	$input_v__OR__input_t($scope);
	$input_v__OR__input_t__OR__input_rest($scope);
	$input_t__OR__input_rest($scope);
	$input_v__OR__input_t__OR__input_checked($scope);
});
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#14", ($scope) => _attrs_script($scope, "#input/1"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#input/1", $scope.input_attrs, { class: 1 }, _controllable_input);
	$input_attrs__script($scope);
});
const $input_rest = /*@__PURE__*/ _const("input_rest", ($scope) => {
	$input_v__OR__input_t__OR__input_rest($scope);
	$input_t__OR__input_rest($scope);
});
const $input_checked = /*@__PURE__*/ _const("input_checked", ($scope) => {
	_attr_input_checked_default($scope, "#input/5", $scope.input_checked);
	$input_v__OR__input_t__OR__input_checked($scope);
});
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_t($scope, input.t);
	$input_attrs($scope, input.attrs);
	$input_rest($scope, input.rest);
	$input_checked($scope, input.checked);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
