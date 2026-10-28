// tags/child.marko
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;b%b%b ;<!><!><!><button class=t>t</button>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:6_input_b#0:7/init", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && ">input_a", _filled_guard($scope0_reason, 4) && ">input_b");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_resume($scope2_id, "#div/0")}`);
			_script($scope2_id, "__tests__/tags/child.marko_2_input_a#0:6");
			_scope($scope2_id, {}, "__tests__/tags/child.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3)));
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill2", open, 1);
	_scope($scope0_id, {
		input_a: input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		open: "1:6"
	}) || _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=n>+</button><button class=s>s</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b b`)($walks$1)};${((_w0) => `<!>${_w0}<button class=n>+</button><button class=s>s</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(574 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		b: n,
		show: s
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/1")}<button class=s>s</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		s,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		s: "2:6"
	});
}, 1);
