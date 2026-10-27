// tags/label.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko; ;<output></output>" });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/label.marko_0_get#3" : "PatchEffect:__tests__/tags/label.marko_0_get#3", "get");
	$scope0_page ? _scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/mid.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/mid.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$2) });
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	label_default({ get: input.get });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const getTitle = _bind_resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	mid_default({ get: getTitle });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		input_title: input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);
