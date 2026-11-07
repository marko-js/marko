// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show__OR__input_a__OR__input_b = _client_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = $global$1.g + "!";
			_client_guard($scope0_reason, 0) && _patch_write($scope1_id, "xb", c);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + input.b + c, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
			_patch_render($scope1_id, "b0", [
				_filled_guard($scope0_reason, 3) && ">e",
				_filled_guard($scope0_reason, 4) && ">f",
				"b"
			], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
			_scope($scope1_id, {
				b: _unfilled_if($scope0_reason, 0) && c,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 2);
	_fill_global_subscribe("b2", $scope0_id, $cg__input_show);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b3", "e");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b4", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}) || ($fg__input_a && $cg__input_show__OR__input_a__OR__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $cg__input_show__OR__input_a__OR__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | (_updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 2) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 4) << 7 | _updates_from($scope0_reason, 2) << 9);
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
