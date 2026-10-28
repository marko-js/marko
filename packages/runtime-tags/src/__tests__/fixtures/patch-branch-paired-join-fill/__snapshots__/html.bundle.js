// tags/panel.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["b6"]];
_shells({
	b: "b !b6;b%b ;<!><!><button>+</button>",
	b5: "b5 b11;D lD lD ;<p> </p><p> </p><em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 2), $sg__input_y = _server_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const a = input.x + "a";
			_filled_guard($scope0_reason, 2) ? _patch_fill($scope1_id, "vb0", a) : _patch_init($scope1_id, "b1");
			const b = input.y + "b";
			_filled_guard($scope0_reason, 3) ? _patch_fill($scope1_id, "vb2", b) : _patch_init($scope1_id, "b3");
			_html(`<p>${_text_resume($scope1_id, "a", a + count)}</p><p>${_text_resume($scope1_id, "b", b + count)}</p><em>${_text_resume($scope1_id, "c", a + b, 1, $scope0_reason, 0)}</em>`);
			_patch_join_init($scope1_id, "b4", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && "d", _filled_guard($scope0_reason, 3) && "f");
			_scope($scope1_id, {
				d: a,
				f: b,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b5"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b6");
	_patch_fill($scope0_id, "vb9", count, 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.y,
		h: count
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb7", input.x, !$sg__input_x), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "vb8", input.y, !$sg__input_y));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>y</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = "y0";
	_set_scope_reason(134 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		x: input.x,
		y,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(38 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		x: y,
		y: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>y</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: y,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
