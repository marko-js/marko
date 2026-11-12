// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a__OR__input_b = _updates_from($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_a__OR__input_b2 = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0);
			const c = $global$1.g + "!";
			$ui__input_a__OR__input_b && _patch_write($scope1_id, "PatchMarkedWrite:c", c);
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.a + input.b + c, 1, (2 | $uf__input_a__OR__input_b) << 1, 0)}</p>`);
			_global_subscribe("__tests__/tags/child.marko_1_$global_g#0:8/subscribe", $scope1_id);
			_patch_render($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4_input_b#0:5_c#1/setup", "c" + (_filled_guard($scope0_reason, 3) ? " >input_a" : "") + (_filled_guard($scope0_reason, 4) ? " >input_b" : ""), (2 | $uf__input_a__OR__input_b) << 1, 0);
			_scope($scope1_id, {
				c: $ui__input_a__OR__input_b && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", { c: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_a#0:4/setup", "input_a");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_b#0:5/setup", "input_b");
	_scope($scope0_id, {
		input_a: ($ui__input_show__OR__input_a__OR__input_b || $ui__input_a__OR__input_b2) && input.a,
		input_b: ($ui__input_show__OR__input_a__OR__input_b || $ui__input_a__OR__input_b2) && input.b
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || ($fg__input_a && $ui__input_show__OR__input_a__OR__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $ui__input_show__OR__input_a__OR__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 3), $uf__input_x = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | ($uf__input_show << 5 | $uf__input_x << 9));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | $uf__input_show << 5 | _updates_from($scope0_reason, 4) << 7 | $uf__input_x << 9);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
