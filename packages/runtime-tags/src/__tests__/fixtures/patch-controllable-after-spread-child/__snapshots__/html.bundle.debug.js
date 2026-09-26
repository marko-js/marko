// tags/text-field.marko
const $template$1 = "<input>";
const $walks$1 = " b";
_shells({ "__tests__/tags/text-field.marko": "__tests__/tags/text-field.marko !__tests__/tags/text-field.marko_0_attrs#6 __tests__/tags/text-field.marko_0; ;<input>" });
var text_field_default = _template_patch("__tests__/tags/text-field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_attr_input_value($scope0_id, "#input/0", value, valueChange)}${_patch_bind($scope0_id, "ControlledHandler:#input/0", valueChange, 0, 0)}${_patch_control($scope0_id, "#input/0", 2, value, $scope0_reason, 0)}${_patch_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "#input/0", $scope0_id, "input", void 0, $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/text-field.marko_0_attrs#6");
	_script($scope0_id, "__tests__/tags/text-field.marko_0");
	$scope0_page && _scope($scope0_id, {
		value: _source_if($scope0_reason, 1) && value,
		valueChange: _source_if($scope0_reason, 0) && valueChange
	}, "__tests__/tags/text-field.marko", 0, {
		value: "1:10",
		valueChange: "1:17",
		"ControlledHandler:#input/0": ["valueChange", "2:29"]
	});
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)(" b"), $template$1) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "__tests__/template.marko_0/valueChange")
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [text_field_default]);
