// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko," });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input_value#2", 0);
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/child.marko_0_input_value#2" : "PatchEffect:__tests__/tags/child.marko_0_input_value#2", "input_value");
	$scope0_page ? _scope($scope0_id, { input_value: input.value }, "__tests__/tags/child.marko", 0, { input_value: ["input.value"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}`)("");
const $walks = /*@__PURE__*/ ((_w0) => `D /${_w0}&l`)("");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D /${_w0}&l`)("")};${((_w0) => `<p> </p>${_w0}`)("")}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_y = _server_guard($scope0_reason, 2), $sg__input_x = _server_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.x, void 0, $scope0_reason, 1)}</p>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	child_default({ value: _patch_live($childScope, c, $scope0_id, "input_y input_x") });
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && a,
		b: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && b,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		a: "2:8",
		b: "3:8"
	}) : (_filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", a, !$sg__input_y) : _patch_write($scope0_id, "PatchMarkedWrite:a", a, !$sg__input_y)), _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", b, !$sg__input_x) : _patch_write($scope0_id, "PatchMarkedWrite:b", b, !$sg__input_x)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !$sg__input_y));
}, 1);
