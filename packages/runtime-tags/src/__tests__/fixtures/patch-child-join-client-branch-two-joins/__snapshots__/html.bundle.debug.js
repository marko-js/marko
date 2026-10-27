// tags/child.marko
const $template$1 = "<!><!><em> </em>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%bD ;<!><!><em> </em>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5_input_b#0:6/init", $scope0_reason, 1, _filled_guard($scope0_reason, 5) && ">input_a", _filled_guard($scope0_reason, 6) && ">input_b");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 4);
	_html(`<em>${_patch_text($scope0_id, "#text/1", input.a + input.c, void 0, $scope0_reason, 2)}</em>`);
	_filled_guard($scope0_reason, 5) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 6) || _client_guard($scope0_reason, 7))));
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 6) && $cg__input_a));
	$cg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_c", input.c, !(_filled_guard($scope0_reason, 7) && $cg__input_a));
	_patch_join_init($scope0_id, "__tests__/tags/child.marko_0_input_a#5_input_c#7/init", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && "input_a", _filled_guard($scope0_reason, 7) && "input_c");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		input_c: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.c
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"]
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(9118 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 15));
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		b: n,
		c: input.c,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(902 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 4) << 13 | _mask_group($scope0_reason, 3) << 15));
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.a,
		b: input.b,
		c: input.c,
		show: s
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=s>s</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		s,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		s: "2:6"
	});
}, 1);
