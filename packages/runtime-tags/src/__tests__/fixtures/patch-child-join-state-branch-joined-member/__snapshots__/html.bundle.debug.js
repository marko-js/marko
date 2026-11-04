// tags/child.marko
const $template$1 = "<!><!><em> </em>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%bD ;<!><!><em> </em>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_d = _unfilled_if($scope0_reason, 0), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 2), $ui__input_d__OR__input_show__OR__input_b = _unfilled_if($scope0_reason, 3), $ui__input_a__OR__input_show = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 4), $fg__input_b = _filled_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 6), $fg__input_d = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const c = input.a + "-" + input.d;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.a + input.b, 1, $scope0_reason, 2)}</p>`);
			_patch_render($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4_input_b#0:8/setup", ((_filled_guard($scope0_reason, 4) ? " >input_a" : "") + (_filled_guard($scope0_reason, 7) ? " >input_b" : "")).slice(1), $scope0_reason, 2);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 6), 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 6);
	_html(`<em>${_text_mark($scope0_id, "#text/1", c, 1, $scope0_reason, 0)}</em>`);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_a#0:4/setup", "input_a");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_b#0:8/setup", "input_b");
	_patch_render($scope0_id, "__tests__/tags/child.marko_0_input_a#4_input_d#5/setup", (($fg__input_a ? " input_a" : "") + ($fg__input_d ? " input_d" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_a: _write_if($scope0_reason, 3) && ($ui__input_d__OR__input_show__OR__input_b || $ui__input_a__OR__input_d || $ui__input_a__OR__input_b) && input.a,
		input_d: _write_if($scope0_reason, 4) && $ui__input_a__OR__input_d && input.d,
		input_b: _write_if($scope0_reason, 1) && ($ui__input_a__OR__input_show || $ui__input_a__OR__input_b) && input.b
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_d: ["input.d"],
		input_b: ["input.b"]
	}) || ($fg__input_a && $ui__input_d__OR__input_show__OR__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 4)), $fg__input_d && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_d", input.d, !_server_guard($scope0_reason, 5)), $fg__input_b && $ui__input_a__OR__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a__OR__input_b = _updates_from($scope0_reason, 0), $uf__input_a = _updates_from($scope0_reason, 3), $uf__input_b = _updates_from($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(43262 | $uf__input_a << 9);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		b: n,
		d: n,
		show: s
	});
	_patch_child_end();
	_set_scope_reason($uf__input_a__OR__input_b << 1 | _updates_from($scope0_reason, 1) << 3 | $uf__input_a__OR__input_b << 5 | _updates_from($scope0_reason, 2) << 7 | $uf__input_a << 9 | $uf__input_b << 11 | _updates_from($scope0_reason, 5) << 13 | $uf__input_b << 15);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.a,
		b: input.b,
		d: input.b,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "#button/2")}<button class=s>s</button>${_el_mark($scope0_id, "#button/3")}`);
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
