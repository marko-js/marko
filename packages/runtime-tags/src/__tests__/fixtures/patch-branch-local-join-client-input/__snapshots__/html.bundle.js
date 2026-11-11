// tags/child.marko
const $template = "<!><!><div></div>";
const $walks = "b%b b";
const $setup$1 = [[], []];
_shells({
	b: "b;b%b ;<!><!><div></div>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $sg__input_b = _server_guard($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b2 = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_b = _filled_guard($scope0_reason, 2);
			const c = input.b + "!";
			$fg__input_b && _unfilled_if($scope0_reason, 3) && _patch_write($scope1_id, "xb", c, !$sg__input_b);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + c, 1, $scope0_reason, 0)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_patch_render($scope1_id, "b1", ((_filled_guard($scope0_reason, 3) ? " >g" : "") + ($fg__input_b ? " b" : "")).slice(1), $scope0_reason, 0);
			_scope($scope1_id, {
				b: _unfilled_if($scope0_reason, 0) && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b2"], $scope0_reason, 1);
	_html(`<div></div>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b3", 1, $fg__input_a);
	$fg__input_b2 && $cg__input_show && _patch_render($scope0_id, "b0", "f");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b4", "g");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.b,
		g: input.a
	}) || ($fg__input_b2 && $ui__input_show && _patch_write($scope0_id, "xf", input.b, !$sg__input_b), $fg__input_a && _patch_write($scope0_id, "xg", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 2), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(134 | ($uf__input_show << 3 | $uf__input_x << 5));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | $uf__input_show << 3 | $uf__input_x << 5 | _updates_from($scope0_reason, 3) << 7);
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
