// tags/child.marko
const $template = "<!><!><!><button class=t>t</button>";
const $walks = "b%b%b b";
const $setup$1 = [[], ["b4"]];
_shells({
	b: "b !b4;b%b%b ;<!><!><!><button class=t>t</button>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
			_patch_render($scope1_id, "b0", [_filled_guard($scope0_reason, 3) && ">g", _filled_guard($scope0_reason, 4) && ">h"], $scope0_reason, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["b1"], $scope0_reason, 2);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "b2", 1, _filled_guard($scope0_reason, 3), ">g");
			_client_guard($scope0_reason, 3) && _patch_render($scope2_id, "b3");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b4");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b5", "g");
	$fg__input_a && _patch_render($scope0_id, "b3", "g");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b6", "h");
	_patch_fill($scope0_id, "vb7", open, 1);
	_scope($scope0_id, {
		g: input.a,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		i: open
	}) || ($fg__input_a && _patch_write($scope0_id, "xg", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(574 | _updates_from($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 4) << 5 | _updates_from($scope0_reason, 2) << 7 | _updates_from($scope0_reason, 3) << 9);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b,
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
