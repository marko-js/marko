// tags/card.marko
_shells({ b: "b !b1; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a: "a;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_wrap = _write_guard($scope0_reason, 2), $cg__input_wrap = _client_guard($scope0_reason, 2), $wi__input_rows__OR__input_wrap = _write_if($scope0_reason, 0), $sg__input_rows = _server_guard($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 1), $fg__input_wrap = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.wrap ? card_default : "div", {}, 2, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_mark($scope2_id, "a", row.label, 1, $scope0_reason, 1)}</b>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a1", $cg__input_rows);
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__row_label__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_wrap && _scope_with_id($scope1_id) }));
		}, $scope1_id, ($scope) => $scope0_page ? [{ d: row?.label }] : []), 0, $wg__input_wrap, $scope0_reason, 2, 0, void 0, 0, 0, "a0");
		_filled_guard($scope0_reason, 1) && (_client_branch_if("a0", $scope1_id) || $cg__input_wrap) && _patch_subscribers($scope1_id, "a2", "d");
		$cg__input_wrap && _patch_render($scope1_id, "a3");
		$wi__input_rows__OR__input_wrap && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && row?.label,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 1) && $for_content__row_label__closures
		});
		_filled_guard($scope0_reason, 1) && (_client_branch_if("a0", $scope1_id) || $cg__input_wrap) && _patch_write($scope1_id, "xd", row?.label, !$sg__input_rows);
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 1);
	$fg__input_wrap && $cg__input_rows && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.wrap }) || $fg__input_wrap && $cg__input_rows && _patch_write($scope0_id, "xe", input.wrap, !_server_guard($scope0_reason, 2));
}, 1);
