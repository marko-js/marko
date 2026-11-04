// tags/panel.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["b6"]];
_shells({
	b: "b !b6;b%b ;<!><!><button>+</button>",
	b5: "b5 b9;D lD lD ;<p> </p><p> </p><em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $sg__input_x = _server_guard($scope0_reason, 2), $sg__input_y = _server_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2), $fg__input_y = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const a = input.x + "a";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xd", a, !$sg__input_x);
			const b = input.y + "b";
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "xf", b, !$sg__input_y);
			_html(`<p>${_text_mark($scope1_id, "a", a + count)}</p><p>${_text_mark($scope1_id, "b", b + count)}</p><em>${_text_mark($scope1_id, "c", a + b, 1, $scope0_reason, 0)}</em>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b1");
			_patch_render($scope1_id, "b2", _filled_guard($scope0_reason, 2) && "d");
			_patch_render($scope1_id, "b3", _filled_guard($scope0_reason, 3) && "f");
			_patch_render($scope1_id, "b4", [_filled_guard($scope0_reason, 2) && "d", _filled_guard($scope0_reason, 3) && "f"], $scope0_reason, 0);
			_scope($scope1_id, {
				d: a,
				f: b,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b5"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b6");
	$fg__input_x && $cg__input_show && _patch_render($scope0_id, "b0", "f");
	$fg__input_y && $cg__input_show && _patch_render($scope0_id, "b1", "g");
	_patch_fill($scope0_id, "vb7", count, 1);
	_scope($scope0_id, {
		f: $wi__input_show && input.x,
		g: $wi__input_show && input.y,
		h: count
	}) || ($fg__input_x && $cg__input_show && _patch_write($scope0_id, "xf", input.x, !$sg__input_x), $fg__input_y && $cg__input_show && _patch_write($scope0_id, "xg", input.y, !$sg__input_y));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>y</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = "y0";
	_set_scope_reason(134 | (_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 0) << 5));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		x: input.x,
		y,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(38 | (_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 0) << 7));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		x: y,
		y: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>y</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: y,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
