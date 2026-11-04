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
	a5: "a5;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_rows = _client_guard($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0), $sg__input_rows = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		const $for_content__row_card__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", row.p, (v) => {
			const $scope2_id = _scope_id();
			const $await_content__v__closures = /* @__PURE__ */ new Set();
			_dynamic_tag($scope2_id, "a", row.card ? card_default : "div", {}, 2, _content_resume("a0", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<b>${_text_mark($scope3_id, "a", row.label, 1, $scope0_reason, 0)} ${_text_mark($scope3_id, "b", v, 2, $scope0_reason, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope3_id, "a1", $cg__input_rows);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope3_id, "a2", $cg__input_rows);
				_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope3_id, { _: $wi__input_rows && _scope_with_id($scope2_id) }), $cg__input_rows && "a1"), $cg__input_rows && "a2");
			}, $scope2_id, ($scope) => $scope0_page ? [{ f: row?.label }, {
				c: v,
				_: $scope($scope1_id)
			}] : []), 0, $wg__input_rows, $scope0_reason, 0, 0, void 0, 0, 0, "a0");
			_filled_guard($scope0_reason, 0) && _patch_subscribers($scope2_id, "a3", "c");
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a4", $cg__input_rows);
			$wi__input_rows && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_card__closures, _scope($scope2_id, { i: $await_content__v__closures }), $cg__input_rows && "a4", $wg__input_rows);
			_filled_guard($scope0_reason, 0) && _client_branch_if("a0", $scope2_id) && _patch_write($scope2_id, "xc", v, !$sg__input_rows);
		}, 1, "a5", _unfilled_if($scope0_reason, 0) && 3, 0, 1);
		_filled_guard($scope0_reason, 0) && _patch_subscribers($scope1_id, "a8", "f");
		$wi__input_rows && _scope($scope1_id, {
			h: $for_content__row_label__closures,
			g: _unfilled_if($scope0_reason, 0) && $for_content__row_card__closures
		});
		_filled_guard($scope0_reason, 0) && _client_branch_if("a0", $scope1_id) && _patch_write($scope1_id, "xf", row?.label, !$sg__input_rows);
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a7", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
