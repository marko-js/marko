// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko," });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_fn#2_v#3", 0);
	(_filled_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 2)) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? "PatchQueuedEffect:__tests__/tags/child.marko_0_fn#2_v#3" : "PatchEffect:__tests__/tags/child.marko_0_fn#2_v#3", _filled_guard($scope0_reason, 1) && "fn", _filled_guard($scope0_reason, 2) && "v");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/child.marko_0_fn#2_v#3/init");
	_scope($scope0_id, {
		fn: input.fn,
		v: input.v
	}, "__tests__/tags/child.marko", 0, {
		fn: "1:10",
		v: "1:14"
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:fn", input.fn, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:v", input.v, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("")};${((_w0) => `${_w0}<p> </p>`)("")}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = "none";
	const fa = _resume(function(v) {
		last = "a" + v;
	}, "__tests__/template.marko_0/fa", $scope0_id);
	const fb = _resume(function(v) {
		last = "b" + v;
	}, "__tests__/template.marko_0/fb", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		v: input.x,
		fn: input.pick ? fa : fb
	});
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/1", last)}</p>`);
	_scope($scope0_id, {
		fa: _unfilled_if($scope0_reason, 2) && fa,
		fb: _unfilled_if($scope0_reason, 2) && fb,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		fa: "2:8",
		fb: "3:8"
	});
}, 1);
