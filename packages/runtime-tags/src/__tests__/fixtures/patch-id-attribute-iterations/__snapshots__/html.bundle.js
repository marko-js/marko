// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_uid = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_text_mark($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_mark($scope0_id, "a", $uf__input_uid)}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_mark($scope0_id, "c", $uf__input_uid || _updates_from($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
_shells({
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a: `a;${((_w0) => `b/${_w0}&b`)($Content_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Content_content__template)}`,
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items__OR__input_record__OR__input_end = _unfilled_if($scope0_reason, 3), $fg__input_items = _filled_guard($scope0_reason, 4), $fg__input_record = _filled_guard($scope0_reason, 5), $fg__input_end = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const Content = { content: _content("a5", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", item, {}, 2, 0, 0, $wg__items, $scope1_reason, 0);
			_write_if($scope1_reason, 0) && _scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a0", $scope1_reason, 0);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
	let $item;
	forOf(input.items, (item) => $item = attrTags($item, { content: _content("a4", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason(16);
		const $childScope = _peek_scope_id($scope3_id, "a", 1);
		field_default({ name: item });
		_patch_child_end();
		_scope($scope3_id, { a: _existing_scope($childScope) });
	}, $scope0_id, 0) }));
	forIn(input.record, (key, value) => $item = attrTags($item, { content: _content("a3", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_set_scope_reason(16);
		const $childScope2 = _peek_scope_id($scope4_id, "a", 2);
		field_default({ name: key });
		_patch_child_end();
		_scope($scope4_id, { a: _existing_scope($childScope2) });
	}, $scope0_id, 0) }));
	forTo(input.end, 0, 1, (i) => $item = attrTags($item, { content: _content("a2", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_set_scope_reason(16);
		const $childScope3 = _peek_scope_id($scope5_id, "a", 3);
		field_default({ name: i });
		_patch_child_end();
		_scope($scope5_id, { a: _existing_scope($childScope3) });
	}, $scope0_id, 0) }));
	forUntil(input.end, 0, 1, (i) => $item = attrTags($item, { content: _content("a1", () => {
		_scope_reason();
		const $scope6_id = _scope_id();
		_set_scope_reason(16);
		const $childScope4 = _peek_scope_id($scope6_id, "a", 4);
		field_default({ name: i });
		_patch_child_end();
		_scope($scope6_id, { a: _existing_scope($childScope4) });
	}, $scope0_id, 0) }));
	const $childScope5 = _peek_scope_id($scope0_id, "a", 5);
	Content.content({ item: $item });
	_patch_child_end();
	_patch_render($scope0_id, "a6", (($fg__input_items ? " d" : "") + ($fg__input_record ? " e" : "") + ($fg__input_end ? " f" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_items__OR__input_record__OR__input_end && input.items,
		e: _write_if($scope0_reason, 1) && $ui__input_items__OR__input_record__OR__input_end && input.record,
		f: _write_if($scope0_reason, 0) && $ui__input_items__OR__input_record__OR__input_end && input.end,
		a: _existing_scope($childScope5)
	}) || ($fg__input_items && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.items, !_server_guard($scope0_reason, 4)), $fg__input_record && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.record, !_server_guard($scope0_reason, 5)), $fg__input_end && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.end, !_server_guard($scope0_reason, 6)));
}, 1);
