// tags/card.marko
_shells({ b: "b !b0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/list.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	d: "d;b%;<!><!><!>",
	d0: "d0;b%;<!><!><!>"
});
var list_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "d0", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/heading.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	c0: "c0;b%c%;item <!> of <!>",
	c6: "c6 !;b%;<!><!><!>",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_type = _write_guard($scope0_reason, 2), $wi__input_n__OR__input_type = _write_if($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_type__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	let $item;
	forUntil(input.n, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_elide("c6", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__i = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $item_content__i__closures = /* @__PURE__ */ new Set();
			_dynamic_tag($scope1_id, "a", input.type, {}, 2, _content_resume("c0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`item ${_text_resume($scope2_id, "a", i, 2, 4, 0)} of ${_text_resume($scope2_id, "b", input.n, 2, $scope0_reason, 1)}`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_n ? "c1" : "c2");
				_patch_init($scope2_id, "c3");
				_subscribe(_unfilled_if() && $wi__i && $item_content__i__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: ($wi__input_n__OR__input_type || $wi__i) && _scope_with_id($scope1_id) })));
			}, $scope1_id, ($scope) => $scope1_page ? [{ d: input.n }, {
				b: i,
				_: $scope($scope0_id)
			}] : []), 0, $wg__input_type, $scope0_reason, 2);
			_content_withheld("c0", $scope1_id) && _patch_fill($scope1_id, "vc4", i);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c5");
			($wi__input_n__OR__input_type || $wi__i) && _subscribe(_unfilled_if($scope0_reason, 2) && $input_type__closures, _scope($scope1_id, {
				b: _unfilled_if($scope0_reason, 2) && i,
				_: $wi__input_n__OR__input_type && _scope_with_id($scope0_id),
				h: $wi__i && $item_content__i__closures
			}));
			$wg__input_type || ($wi__input_n__OR__input_type || $wi__i) && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "a", 1);
	list_default({ item: $item });
	_patch_child_end();
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.n,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.type,
		f: _write_if($scope0_reason, 1) && $input_n__closures,
		g: _write_if($scope0_reason, 2) && $input_type__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 1) && _content_withheld("c0", $scope0_id) && _patch_fill($scope0_id, "vc7", input.n, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_n && _patch_fill($scope0_id, "vc8", input.type, !_server_guard($scope0_reason, 2)), $cg__input_n && _content_withhold(input.type));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	heading_default({
		type: card_default,
		n: input.n
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
