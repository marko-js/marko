// tags/make.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/make.marko": "^__tests__/tags/make.marko," });
var make_default = _template("__tests__/tags/make.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "__tests__/tags/make.marko_0/_return", $scope0_id);
	_scope($scope0_id, { input_title: input.title }, "__tests__/tags/make.marko", 0, { input_title: ["input.title"] });
	return $return;
});

// tags/holder.marko
const $template$1 = "<button class=call>call</button><pre></pre>";
const $walks$1 = " b b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/holder.marko": "__tests__/tags/holder.marko; b ;<button class=call>call</button><pre></pre>" });
var holder_default = _template("__tests__/tags/holder.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "#button/0")}<pre></pre>${_el_resume($scope0_id, "#pre/1")}`);
	_script($scope0_id, "__tests__/tags/holder.marko_0_input_fn#4", 1, _filled_guard($scope0_reason, 0), "input_fn");
	_scope($scope0_id, { input_fn: input.fn }, "__tests__/tags/holder.marko", 0, { input_fn: ["input.fn"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<output id=out></output>${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}&`)("", $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$2], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&b/${_w1}&`)("", $walks$1)};${((_w0, _w1) => `<output id=out></output>${_w0}${_w1}`)("", $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, $cg__input_title && 1);
	let fn = make_default({ title: input.title });
	$cg__input_title && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_fn#6/var");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 1);
	holder_default({ fn });
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
