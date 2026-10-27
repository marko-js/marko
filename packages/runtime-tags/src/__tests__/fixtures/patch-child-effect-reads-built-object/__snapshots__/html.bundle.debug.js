// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/label.marko_0_input_item#2", 0);
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/label.marko_0_input_item#2" : "PatchEffect:__tests__/tags/label.marko_0_input_item#2", "input_item");
	$scope0_page ? _scope($scope0_id, { input_item: input.item }, "__tests__/tags/label.marko", 0, { input_item: ["input.item"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${_w0}`)("") });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { label: input.title };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	label_default({ item: _patch_live($childScope, item, $scope0_id, "input_title") });
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
