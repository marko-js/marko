// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.a + ":" + input.b, 1, $scope0_reason, 2)}</p>`);
			_patch_render($scope1_id, "b0", ((_filled_guard($scope0_reason, 5) ? " >e" : "") + (_filled_guard($scope0_reason, 6) ? " >f" : "")).slice(1), $scope0_reason, 2);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 4);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b2", "e");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b3", "f");
	_scope($scope0_id, {
		e: ($ui__input_show__OR__input_b || $ui__input_a__OR__input_b) && input.a,
		f: ($ui__input_show__OR__input_a || $ui__input_a__OR__input_b) && input.b
	}) || ($fg__input_a && $ui__input_show__OR__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && $ui__input_show__OR__input_a && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	let s = false;
	_set_scope_reason(3066 | $uf__input_x << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: count,
		b: input.x,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(926 | (_updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 2) << 11 | $uf__input_x << 13));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		a: input.y,
		b: input.x,
		show: s
	});
	_patch_child_end();
	_html(`<button class=c>+</button>${_el_mark($scope0_id, "c")}<button class=s>s</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: count,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
