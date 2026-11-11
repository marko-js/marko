// tags/child.marko
const $template = "<!><!><em> </em>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><em> </em>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_a__OR__input_c = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_b__OR__input_c = _unfilled_if($scope0_reason, 3), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $fg__input_c = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
			_patch_render($scope1_id, "b0", ((_filled_guard($scope0_reason, 5) ? " >f" : "") + (_filled_guard($scope0_reason, 6) ? " >g" : "")).slice(1), $scope0_reason, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 4), 1, 0, 0, ["b1"], $scope0_reason, 4);
	_html(`<em>${_text_mark($scope0_id, "b", input.a + input.c, 1, $scope0_reason, 2)}</em>`);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b2", "f");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b3", "g");
	_patch_render($scope0_id, "b4", (($fg__input_a ? " f" : "") + ($fg__input_c ? " h" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 3) && ($ui__input_show__OR__input_b__OR__input_c || $ui__input_a__OR__input_b || $ui__input_a__OR__input_c) && input.a,
		g: _write_if($scope0_reason, 0) && ($ui__input_show__OR__input_a || $ui__input_a__OR__input_b) && input.b,
		h: _write_if($scope0_reason, 5) && $ui__input_a__OR__input_c && input.c
	}) || ($fg__input_a && $ui__input_show__OR__input_b__OR__input_c && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && $ui__input_show__OR__input_a && _patch_write($scope0_id, "xg", input.b, !_server_guard($scope0_reason, 6)), $fg__input_c && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "xh", input.c, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a__OR__input_c = _updates_from($scope0_reason, 0), $uf__input_a = _updates_from($scope0_reason, 2), $uf__input_c = _updates_from($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(9118 | ($uf__input_a__OR__input_c << 5 | $uf__input_a << 11 | $uf__input_c << 15));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		c: input.c,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(902 | (_updates_from($scope0_reason, 1) << 3 | $uf__input_a__OR__input_c << 5 | $uf__input_a << 11 | _updates_from($scope0_reason, 4) << 13 | $uf__input_c << 15));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b,
		c: input.c,
		show: s
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}<button class=s>s</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
