// template.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($TextField_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($TextField_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content !__tests__/template.marko_1_attrs#6 __tests__/template.marko_1;${_w0};${_w1}`)($TextField_content__walks, $TextField_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)($TextField_content__walks)};${((_w0) => `<!>${_w0}<!>`)($TextField_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const TextField = { content: _content_elide("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_patch_input_value($scope1_id, "#input/0", value, valueChange, "PatchControl:2#input/0", $scope1_reason, 0, "PatchBind:ControlledHandler:#input/0", $scope1_reason, 0)}${_patch_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "#input/0", $scope1_id, "input", void 0, $scope1_reason, 3)}>${_el_resume($scope1_id, "#input/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_attrs#6");
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_write($scope1_id, "PatchWrite:value", value, 1);
		_patch_write($scope1_id, "PatchWrite:valueChange", valueChange, 1);
		_client_guard($scope1_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_value#3_valueChange#4/init");
		$scope1_page ? _scope($scope1_id, {
			value: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && value,
			valueChange: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 2)) && valueChange
		}, "__tests__/template.marko", "1:2", {
			value: "2:12",
			valueChange: "2:19",
			"ControlledHandler:#input/0": ["valueChange", "3:31"]
		}) : (_filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 2) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill0", value), _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", valueChange));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "__tests__/template.marko_0/valueChange")
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
