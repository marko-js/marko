// tags/text-field.marko
const $template$1 = "<input>";
const $walks$1 = " b";
_shells({ "__tests__/tags/text-field.marko": "__tests__/tags/text-field.marko !__tests__/tags/text-field.marko_0_attrs#6 __tests__/tags/text-field.marko_0; ;<input>" });
var text_field_default = _template("__tests__/tags/text-field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_patch_input_value($scope0_id, "#input/0", value, valueChange, "PatchControl:2#input/0", $scope0_reason, 0, "PatchBind:ControlledHandler:#input/0", $scope0_reason, 0)}${_patch_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "#input/0", $scope0_id, "input", void 0, $scope0_reason, 3)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/text-field.marko_0_attrs#6");
	_script($scope0_id, "__tests__/tags/text-field.marko_0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/text-field.marko_0_value#3_valueChange#4/init");
	$scope0_page ? _scope($scope0_id, {
		value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && value,
		valueChange: _unfilled_if($scope0_reason, 0) && valueChange
	}, "__tests__/tags/text-field.marko", 0, {
		value: "1:10",
		valueChange: "1:17",
		"ControlledHandler:#input/0": ["valueChange", "2:29"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/text-field.marko_fill0", value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/text-field.marko_fill1", valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko;${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | ($scope0_page ? 0 : 0) << 5 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "__tests__/template.marko_0/valueChange")
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
