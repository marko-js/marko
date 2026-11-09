// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b3: "b3;D l ;<p> </p><div></div>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_b = _server_guard($scope0_reason, 3), $ui__input_show__OR__input_b = _unfilled_if($scope0_reason, 0), $fg__input_b2 = _filled_guard($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_b = _filled_guard($scope0_reason, 3);
			const c = input.b + "!";
			$fg__input_b && _patch_write($scope1_id, "xc", c, !$sg__input_b);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + c, 1, $scope0_reason, 1)}</p><div></div>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "b0", 1, $fg__input_b, "c");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b1");
			_patch_render($scope1_id, "b2", [_filled_guard($scope0_reason, 4) && ">f", $fg__input_b && "c"], $scope0_reason, 1);
			_scope($scope1_id, {
				c,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 2);
	$fg__input_b2 && $cg__input_show && _patch_render($scope0_id, "b1", "e");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b4", "f");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.b,
		f: ($ui__input_show__OR__input_b || _unfilled_if($scope0_reason, 1)) && input.a
	}) || ($fg__input_b2 && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.b, !$sg__input_b), $fg__input_a && $ui__input_show__OR__input_b && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 4) << 5 | _updates_from($scope0_reason, 3) << 7 | _updates_from($scope0_reason, 2) << 9);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
