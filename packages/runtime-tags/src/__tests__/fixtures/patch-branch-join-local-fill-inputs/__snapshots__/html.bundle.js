// tags/child.marko
const $template = "<!><!><div></div>";
const $walks = "b%b b";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%b ;<!><!><div></div>",
	b7: "b7 !b4;D lD l ;<p> </p><em> </em><button class=m>m</button>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _server_guard($scope0_reason, 3), $sg__input_b = _server_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let m = 0;
			const x = input.a + "!";
			_filled_guard($scope0_reason, 3) ? _patch_fill($scope1_id, "vb0", x) : _patch_init($scope1_id, "b1");
			const y = input.b + "?";
			_filled_guard($scope0_reason, 4) ? _patch_fill($scope1_id, "vb2", y) : _patch_init($scope1_id, "b3");
			_html(`<p>${_text_resume($scope1_id, "a", x + y + m)}</p><em>${_text_resume($scope1_id, "b", input.a + input.b, 1, $scope0_reason, 1)}</em><button class=m>m</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "b4");
			_patch_init_entry($scope1_id, "b5", [_filled_guard($scope0_reason, 3) && ">f", _filled_guard($scope0_reason, 4) && ">g"], $scope0_reason, 1);
			_patch_fill($scope1_id, "vb6", m, 1);
			_scope($scope1_id, {
				e: m,
				f: x,
				g: y,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["b7"], $scope0_reason, 2);
	_html(`<div></div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b8", 1, _filled_guard($scope0_reason, 3), "f");
	_scope($scope0_id, {
		f: input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.b
	}) || (_filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb10", input.a) : _client_guard($scope0_reason, 4) ? _patch_fill($scope0_id, "vb9", input.a, !$sg__input_a) : _patch_write($scope0_id, "xf", input.a, !$sg__input_a)), _filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "vb12", input.b) : _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vb11", input.b, !$sg__input_b)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | (_mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
