// tags/make.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/make.marko": "^__tests__/tags/make.marko," });
var make_default = _template("__tests__/tags/make.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "__tests__/tags/make.marko_0/_return", $scope0_id);
	$scope0_page && _scope($scope0_id, { input_title: input.title }, "__tests__/tags/make.marko", 0, { input_title: ["input.title"] });
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<output id=out></output>${_w0}<button class=call>call</button><pre></pre>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b b b`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&b b b`)("")};${((_w0) => `<output id=out></output>${_w0}<button class=call>call</button><pre></pre>`)("")}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", $cg__input_title && 1);
	let fn = make_default({ title: input.title });
	$cg__input_title && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_fn#7/var");
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "#button/2")}<pre></pre>${_el_resume($scope0_id, "#pre/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_fn#7");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, $cg__input_title ? "PatchQueuedEffect:__tests__/template.marko_0_fn#7" : "PatchEffect:__tests__/template.marko_0_fn#7", "fn");
	$scope0_page ? _scope($scope0_id, {
		fn,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { fn: "2:7" }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:fn", fn, !_server_guard($scope0_reason, 0));
}, 1);
