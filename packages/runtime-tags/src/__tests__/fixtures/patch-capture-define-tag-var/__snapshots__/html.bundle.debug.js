// tags/label.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko; ;<output></output>" });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/label.marko_0_get#3" : "PatchEffect:__tests__/tags/label.marko_0_get#3", "get");
	$scope0_page ? _scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0&b/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0&b/${_w0}&`)(" b")};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content("__tests__/template.marko_1*content", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = text + "!";
		return $return;
	}, $scope0_id) };
	const $childScope = _patch_child($scope0_id, "#childScope/0", $cg__input_v && 1);
	let row = Row.content({ text: input.v });
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:row", row, !_server_guard($scope0_reason, 0));
	$cg__input_v && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_row#6/var");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "#childScope/2");
	label_default({ get: _bind_resume(function() {
		return row;
	}, "__tests__/template.marko_0/get", $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		row,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { row: "4:6" });
}, 1);
