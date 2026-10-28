// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "ac$id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "ac$aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
_shells({
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}&b`)($Content_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Content_content__template)}`)(),
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_record__OR__input_end = _client_guard($scope0_reason, 2), $cg__input_items__OR__input_end = _client_guard($scope0_reason, 1), $cg__input_items__OR__input_record = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Content = { content: _content("a5", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", item, {}, 2, 0, 0, $wg__items, $scope1_reason, 0);
			_write_if($scope1_reason, 0) && _scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope1_reason, 0);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("a4", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(16);
			const $childScope = _peek_scope_id($scope3_id, "a", 1);
			field_default({ name: item });
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope) });
		}, $scope0_id, 1) });
	});
	forIn(input.record, (key, value) => {
		$item = attrTags($item, { content: _content("a3", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_set_scope_reason(16);
			const $childScope2 = _peek_scope_id($scope4_id, "a", 2);
			field_default({ name: key });
			_patch_child_end();
			_scope($scope4_id, { a: _existing_scope($childScope2) });
		}, $scope0_id, 1) });
	});
	forTo(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("a2", () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_set_scope_reason(16);
			const $childScope3 = _peek_scope_id($scope5_id, "a", 3);
			field_default({ name: i });
			_patch_child_end();
			_scope($scope5_id, { a: _existing_scope($childScope3) });
		}, $scope0_id, 1) });
	});
	forUntil(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("a1", () => {
			_scope_reason();
			const $scope6_id = _scope_id();
			_set_scope_reason(16);
			const $childScope4 = _peek_scope_id($scope6_id, "a", 4);
			field_default({ name: i });
			_patch_child_end();
			_scope($scope6_id, { a: _existing_scope($childScope4) });
		}, $scope0_id, 1) });
	});
	const $childScope5 = _peek_scope_id($scope0_id, "a", 5);
	Content.content({ item: $item });
	_patch_child_end();
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.items,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.record,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.end,
		a: _existing_scope($childScope5)
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_record__OR__input_end && _patch_fill($scope0_id, "va6", input.items, !_server_guard($scope0_reason, 4)), $cg__input_record__OR__input_end && _content_withhold(input.items), _filled_guard($scope0_reason, 5) && $cg__input_items__OR__input_end && _patch_fill($scope0_id, "va7", input.record, !_server_guard($scope0_reason, 5)), $cg__input_items__OR__input_end && _content_withhold(input.record), _filled_guard($scope0_reason, 6) && $cg__input_items__OR__input_record && _patch_fill($scope0_id, "va8", input.end, !_server_guard($scope0_reason, 6)), $cg__input_items__OR__input_record && _content_withhold(input.end));
}, 1);
