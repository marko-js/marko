// tags/card.marko
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_c = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.c, {}, 2, 0, 0, $wg__input_c, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 1);
	$fg__input_c && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.c }) || $fg__input_c && $cg__input_show && _patch_write($scope0_id, "xe", input.c, !_server_guard($scope0_reason, 2));
});

// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var one_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_content__OR__input_show = _write_guard($scope0_reason, 3), $fg__input_Tag = _filled_guard($scope0_reason, 4), $fg__input_content = _filled_guard($scope0_reason, 5), $fg__input_show = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.Tag, {
		c: input.content,
		show: input.show
	}, 1, 0, 0, $wg__input_Tag__OR__input_content__OR__input_show, $scope0_reason, 3, 0, 4);
	_patch_render($scope0_id, "c0", [
		$fg__input_Tag && "d",
		$fg__input_content && "e",
		$fg__input_show && "f"
	], $scope0_reason, 3);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.Tag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.content,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.show
	}) || ($fg__input_Tag && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.Tag, !_server_guard($scope0_reason, 4)), $fg__input_content && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 5)), $fg__input_show && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.show, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;b%;A<!>",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_x = _client_guard($scope0_reason, 1), $fg__input_y = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 1) << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	one_default({
		Tag: card_default,
		show: input.x === 1,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "a", input.y, 2, $scope0_reason, 2)}`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a0", _client_guard($scope0_reason, 2));
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
		}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.y }] : [])
	});
	_patch_child_end();
	$fg__input_y && (_client_branch_if("a1", $scope0_id) || $cg__input_x || $cg__input_x) && _patch_subscribers($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		f: _write_if($scope0_reason, 2) && $input_y__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_y && (_client_branch_if("a1", $scope0_id) || $cg__input_x || $cg__input_x) && _patch_write($scope0_id, "xe", input.y, !_server_guard($scope0_reason, 2));
}, 1);
