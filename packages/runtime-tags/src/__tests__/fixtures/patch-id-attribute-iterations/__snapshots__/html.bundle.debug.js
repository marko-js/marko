// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", uid, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", uid, $scope0_reason, 0)}${_patch_attr($scope0_id, "PatchAttr:#input/2 aria-describedby", "aria-describedby", input.heading, $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Content_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Content_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_6*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_5*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_5*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_4*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_4*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_3*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b/${_w0}&b`)($Content_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Content_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_record__OR__input_end = _client_guard($scope0_reason, 2), $cg__input_items__OR__input_end = _client_guard($scope0_reason, 1), $cg__input_items__OR__input_record = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Content = { content: _content("__tests__/template.marko_1*content", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", item, {}, 2, 0, 0, $wg__items, $scope1_reason, 0);
			_write_if($scope1_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:35");
		}, 0, $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope1_reason, 0);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content_elide("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(16);
			const $childScope = _patch_child($scope3_id, "#childScope/0", 1);
			field_default({ name: item });
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:28");
		}, $scope0_id) });
	});
	forIn(input.record, (key, value) => {
		$item = attrTags($item, { content: _content_elide("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_set_scope_reason(16);
			const $childScope2 = _patch_child($scope4_id, "#childScope/0", 2);
			field_default({ name: key });
			_patch_child_end();
			_scope($scope4_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "4:34");
		}, $scope0_id) });
	});
	forTo(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_elide("__tests__/template.marko_5*content", () => {
			const $scope5_reason = _scope_reason();
			const $scope5_id = _scope_id();
			_set_scope_reason(16);
			const $childScope3 = _patch_child($scope5_id, "#childScope/0", 3);
			field_default({ name: i });
			_patch_child_end();
			_scope($scope5_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "5:23");
		}, $scope0_id) });
	});
	forUntil(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_elide("__tests__/template.marko_6*content", () => {
			const $scope6_reason = _scope_reason();
			const $scope6_id = _scope_id();
			_set_scope_reason(16);
			const $childScope4 = _patch_child($scope6_id, "#childScope/0", 4);
			field_default({ name: i });
			_patch_child_end();
			_scope($scope6_id, { "#childScope/0": _existing_scope($childScope4) }, "__tests__/template.marko", "6:26");
		}, $scope0_id) });
	});
	const $childScope5 = _patch_child($scope0_id, "#childScope/0", 5);
	Content.content({ item: $item });
	_patch_child_end();
	_scope($scope0_id, {
		input_items: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.items,
		input_record: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.record,
		input_end: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.end,
		"#childScope/0": _existing_scope($childScope5)
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_record: ["input.record"],
		input_end: ["input.end"]
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_record__OR__input_end && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 4)), $cg__input_record__OR__input_end && _content_withhold(input.items), _filled_guard($scope0_reason, 5) && $cg__input_items__OR__input_end && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.record, !_server_guard($scope0_reason, 5)), $cg__input_items__OR__input_end && _content_withhold(input.record), _filled_guard($scope0_reason, 6) && $cg__input_items__OR__input_record && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.end, !_server_guard($scope0_reason, 6)), $cg__input_items__OR__input_record && _content_withhold(input.end));
}, 1);
