// tags/reader.marko
const $template$1 = "<button class=call>call</button><pre></pre>";
const $walks$1 = " b b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/reader.marko": "__tests__/tags/reader.marko; b ;<button class=call>call</button><pre></pre>" });
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "#button/0")}<pre></pre>${_el_resume($scope0_id, "#pre/1")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_input_fn#4");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/reader.marko_0_input_fn#4" : "PatchEffect:__tests__/tags/reader.marko_0_input_fn#4", "input_fn");
	$scope0_page ? _scope($scope0_id, { input_fn: input.fn }, "__tests__/tags/reader.marko", 0, { input_fn: ["input.fn"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<output id=out></output>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<output id=out></output>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const fn = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "__tests__/template.marko_0/fn", $scope0_id);
	_html("<output id=out></output>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	reader_default({ fn });
	$scope0_page && _scope($scope0_id, {
		input_title: input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);
