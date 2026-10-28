// tags/card.marko
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.c, {}, 2, 0, 0, $wg__input_c, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.c }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb2", input.c, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.c));
});

// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c !;b%;<!><!><!>" });
var one_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_content__OR__input_show = _write_guard($scope0_reason, 3), $cg__input_content__OR__input_show = _client_guard($scope0_reason, 2), $cg__input_Tag__OR__input_show = _client_guard($scope0_reason, 1), $cg__input_Tag__OR__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.Tag, {
		c: input.content,
		show: input.show
	}, 1, 0, 0, $wg__input_Tag__OR__input_content__OR__input_show, $scope0_reason, 3, 0, 4);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "c3");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.Tag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.content,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.show
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_content__OR__input_show && _patch_fill($scope0_id, "vc0", input.Tag, !_server_guard($scope0_reason, 4)), $cg__input_content__OR__input_show && _content_withhold(input.Tag), _filled_guard($scope0_reason, 5) && $cg__input_Tag__OR__input_show && _patch_fill($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 5)), $cg__input_Tag__OR__input_show && _content_withhold(input.content), _filled_guard($scope0_reason, 6) && $cg__input_Tag__OR__input_content && _patch_fill($scope0_id, "vc2", input.show, !_server_guard($scope0_reason, 6)), $cg__input_Tag__OR__input_content && _content_withhold(input.show));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a2: "a2;b%;A<!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 1) << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	one_default({
		Tag: card_default,
		show: input.x === 1,
		content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "a", input.y, 2, $scope0_reason, 2)}`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a0" : "a1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
		}, $scope0_id, ($scope) => [{ e: input.y }])
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		f: _write_if($scope0_reason, 2) && $input_y__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.y, !_server_guard($scope0_reason, 2));
}, 1);
