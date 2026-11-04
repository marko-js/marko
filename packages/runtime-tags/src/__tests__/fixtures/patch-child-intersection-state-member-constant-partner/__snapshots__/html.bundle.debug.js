// tags/child.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D ;<i> </i>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_x__OR__input_k = _unfilled_if($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 1), $fg__input_k = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "#text/0", input.x + input.k, 1, $scope0_reason, 0)}</i>`);
	_patch_render($scope0_id, "__tests__/tags/child.marko_0_input_x#3_input_k#4/setup", (($fg__input_x ? " input_x" : "") + ($fg__input_k ? " input_k" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_x: _write_if($scope0_reason, 2) && $ui__input_x__OR__input_k && input.x,
		input_k: _write_if($scope0_reason, 1) && $ui__input_x__OR__input_k && input.k
	}, "__tests__/tags/child.marko", 0, {
		input_x: ["input.x"],
		input_k: ["input.k"]
	}) || ($fg__input_x && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 1)), $fg__input_k && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_k", input.k, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&D l`)("D l")};${((_w0) => `<button>+</button>${_w0}<span> </span>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
		x: "a",
		k: n
	});
	_patch_child_end();
	_html(`<span>${_text_mark($scope0_id, "#text/2", input.y, 1, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
