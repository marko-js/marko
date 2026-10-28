// tags/child.marko
const $template = "<!><!><em> </em>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><em> </em>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "b0", $scope0_reason, 1, _filled_guard($scope0_reason, 5) && ">f", _filled_guard($scope0_reason, 6) && ">g");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["b1"], $scope0_reason, 4);
	_html(`<em>${_text_resume($scope0_id, "b", input.a + input.c, void 0, $scope0_reason, 2)}</em>`);
	_filled_guard($scope0_reason, 5) && $cg__input_show ? _patch_fill($scope0_id, "vb2", input.a) : _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 6) || _client_guard($scope0_reason, 7))));
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "vb3", input.b) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.b, !(_filled_guard($scope0_reason, 6) && $cg__input_a));
	$cg__input_a && _patch_write($scope0_id, "xh", input.c, !(_filled_guard($scope0_reason, 7) && $cg__input_a));
	_patch_join_init($scope0_id, "b4", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && "f", _filled_guard($scope0_reason, 7) && "h");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		h: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.c
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(9118 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 15));
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		c: input.c,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(902 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 4) << 13 | _mask_group($scope0_reason, 3) << 15));
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b,
		c: input.c,
		show: s
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
