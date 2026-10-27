// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D ;<span> </span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_fn#3", 1, _filled_guard($scope0_reason, 0), "fn");
	_scope($scope0_id, { fn: input.fn }, "__tests__/tags/child.marko", 0, { fn: "1:10" }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&D m`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&D m`)("D l")};${((_w0) => `<main>${_w0}<p> </p></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let flag = 0;
	const fa = _resume(function() {
		flag = 1;
		const m = document.querySelector("main");
		m.dataset.a = String(+(m.dataset.a || 0) + 1);
	}, "__tests__/template.marko_0/fa", $scope0_id);
	const fb = _resume(function() {
		flag = 2;
		const m = document.querySelector("main");
		m.dataset.b = String(+(m.dataset.b || 0) + 1);
	}, "__tests__/template.marko_0/fb", $scope0_id);
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		label: input.x,
		fn: input.pick ? fa : fb
	});
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/1", flag)}</p></main>`);
	_scope($scope0_id, {
		fa: _unfilled_if($scope0_reason, 1) && fa,
		fb: _unfilled_if($scope0_reason, 1) && fb,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		fa: "2:8",
		fb: "3:8"
	});
}, 1);
