// tags/child.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko; ;<output></output>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_item#3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/child.marko_0_input_item#3" : "PatchEffect:__tests__/tags/child.marko_0_input_item#3", "input_item");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/child.marko", 0, { input_item: ["input.item"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_flag = _server_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({ item: _patch_live($childScope, input.flag ? { t: input.title } : { t: "none" }, $scope0_id, "input_flag input_title") });
	_patch_child_end();
	_scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"]
	}) || (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.flag, !$sg__input_flag) : _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !$sg__input_flag)), _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.title, !$sg__input_title) : _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title)));
}, 1);
