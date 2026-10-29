// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2), $cg__input_b = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const d = input.b + "!";
		_html(`<p>${_text_resume($scope1_id, "a", input.a + d, 1, (_filled_guard($scope0_reason, 4) && !$cg__input_items || _filled_guard($scope0_reason, 3) ? _mask_group($scope0_reason, 1) : 1) << 1, 0)}</p>`);
		$cg__input_a && _patch_write($scope1_id, "xb", d, !(_filled_guard($scope0_reason, 3) && $cg__input_a));
		$cg__input_b && _patch_init($scope1_id, "b0");
		(_filled_guard($scope0_reason, 4) && !$cg__input_items || _filled_guard($scope0_reason, 3)) && _patch_init_entry($scope1_id, "b1", [_filled_guard($scope0_reason, 4) && ">f", _filled_guard($scope0_reason, 3) && "b"], $scope0_reason, 1);
		_scope($scope1_id, {
			b: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && d,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 2);
	_filled_guard($scope0_reason, 4) && $cg__input_items ? _patch_fill($scope0_id, "vb4", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 4) && $cg__input_b));
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	}) || _filled_guard($scope0_reason, 3) && $cg__input_items && _patch_fill($scope0_id, "vb3", input.b, !_server_guard($scope0_reason, 3));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b b`)("b%c")};${((_w0) => `<!>${_w0}<button class=n>+</button><button class=l>l</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let list = ["p", "q"];
	_set_scope_reason(574 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.b,
		items: list
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "b")}<button class=l>l</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: n,
		h: list,
		a: _existing_scope($childScope)
	});
}, 1);
