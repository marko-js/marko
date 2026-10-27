// tags/pick.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var pick_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_a__OR__input_b__OR__input_title = _write_guard($scope0_reason, 4), $cg__input_a__OR__input_b__OR__input_title = _client_guard($scope0_reason, 3), $cg__input_on__OR__input_b__OR__input_title = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_a__OR__input_title = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_a__OR__input_b = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.on ? input.a : input.b, { title: input.title }, 1, 0, 0, $wg__input_on__OR__input_a__OR__input_b__OR__input_title, $scope0_reason, 4);
	_client_guard($scope0_reason, 4) && _patch_init($scope0_id, "b4");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.on,
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 4)) && input.b,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.title
	}) || (_filled_guard($scope0_reason, 5) && $cg__input_a__OR__input_b__OR__input_title && _patch_fill($scope0_id, "vb0", input.on, !_server_guard($scope0_reason, 5)), $cg__input_a__OR__input_b__OR__input_title && _content_withhold(input.on), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_b__OR__input_title && _patch_fill($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_b__OR__input_title && _content_withhold(input.a), _filled_guard($scope0_reason, 7) && $cg__input_on__OR__input_a__OR__input_title && _patch_fill($scope0_id, "vb2", input.b, !_server_guard($scope0_reason, 7)), $cg__input_on__OR__input_a__OR__input_title && _content_withhold(input.b), _filled_guard($scope0_reason, 8) && $cg__input_on__OR__input_a__OR__input_b && _patch_fill($scope0_id, "vb3", input.title, !_server_guard($scope0_reason, 8)), $cg__input_on__OR__input_a__OR__input_b && _content_withhold(input.title));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["b>", $setup$1]);
_shells({
	a3: "a3 a7",
	a2: "a2",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>s</button>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button>s</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 0) << 9 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 4) << 17);
	const $childScope = _patch_child($scope0_id, "b", 0);
	pick_default({
		on: input.on,
		title: input.title,
		a: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_patch_text($scope1_id, "a", input.x, 2, $scope0_reason, 3)}`);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "a0" : "a1");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "a", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.x,
		h: s,
		i: _write_if($scope0_reason, 3) && $input_x__closures,
		j: $s__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.x, !_server_guard($scope0_reason, 3));
}, 1);
