// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a__OR__input_b = _updates_from($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_a__OR__input_b2 = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0);
			const c = $global$1.g + "!";
			$ui__input_a__OR__input_b && _patch_write($scope1_id, "xb", c);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + input.b + c, 1, (2 | $uf__input_a__OR__input_b) << 1, 0)}</p>`);
			_fill_global_subscribe("b0", $scope1_id);
			_patch_render($scope1_id, "b1", "b" + (_filled_guard($scope0_reason, 3) ? " >e" : "") + (_filled_guard($scope0_reason, 4) ? " >f" : ""), (2 | $uf__input_a__OR__input_b) << 1, 0);
			_scope($scope1_id, {
				b: $ui__input_a__OR__input_b && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 2);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b3", "e");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b4", "f");
	_scope($scope0_id, {
		e: ($ui__input_show__OR__input_a__OR__input_b || $ui__input_a__OR__input_b2) && input.a,
		f: ($ui__input_show__OR__input_a__OR__input_b || $ui__input_a__OR__input_b2) && input.b
	}) || ($fg__input_a && $ui__input_show__OR__input_a__OR__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $ui__input_show__OR__input_a__OR__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 3), $uf__input_x = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | ($uf__input_show << 5 | $uf__input_x << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | $uf__input_show << 5 | _updates_from($scope0_reason, 4) << 7 | $uf__input_x << 9);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
