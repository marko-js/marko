// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_uid = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", $scope0_reason, 0)}>${_text_mark($scope0_id, "#text/1", input.name, 1, $scope0_reason, 1)}</label>${_el_mark($scope0_id, "#label/0", $uf__input_uid)}<input${_attr("id", uid, $scope0_id, "#input/2", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "#input/2", $scope0_reason, 2)}>${_el_mark($scope0_id, "#input/2", $uf__input_uid || _updates_from($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Content_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Content_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": `__tests__/template.marko_6*content${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko_5*content": `__tests__/template.marko_5*content${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko_4*content": `__tests__/template.marko_4*content${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko_3*content": `__tests__/template.marko_3*content${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)($Content_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Content_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items__OR__input_record__OR__input_end = _unfilled_if($scope0_reason, 3), $ui__input_record__OR__input_end = _unfilled_if($scope0_reason, 2), $ui__input_items__OR__input_end = _unfilled_if($scope0_reason, 1), $ui__input_items__OR__input_record = _unfilled_if($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 4), $fg__input_record = _filled_guard($scope0_reason, 5), $fg__input_end = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const Content = { content: _content("__tests__/template.marko_1*content", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", item, {}, 2, 0, 0, $wg__items, $scope1_reason, 0);
			_write_if($scope1_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:35");
		}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope1_reason, 0);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
	let $item;
	forOf(input.items, (item) => $item = attrTags($item, { content: _content("__tests__/template.marko_3*content", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason(16);
		const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 1);
		field_default({ name: item });
		_patch_child_end();
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:28");
	}, $scope0_id, 0) }));
	forIn(input.record, (key, value) => $item = attrTags($item, { content: _content("__tests__/template.marko_4*content", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_set_scope_reason(16);
		const $childScope2 = _peek_scope_id($scope4_id, "#childScope/0", 2);
		field_default({ name: key });
		_patch_child_end();
		_scope($scope4_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "4:34");
	}, $scope0_id, 0) }));
	forTo(input.end, 0, 1, (i) => $item = attrTags($item, { content: _content("__tests__/template.marko_5*content", () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_set_scope_reason(16);
		const $childScope3 = _peek_scope_id($scope5_id, "#childScope/0", 3);
		field_default({ name: i });
		_patch_child_end();
		_scope($scope5_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "5:23");
	}, $scope0_id, 0) }));
	forUntil(input.end, 0, 1, (i) => $item = attrTags($item, { content: _content("__tests__/template.marko_6*content", () => {
		const $scope6_reason = _scope_reason();
		const $scope6_id = _scope_id();
		_set_scope_reason(16);
		const $childScope4 = _peek_scope_id($scope6_id, "#childScope/0", 4);
		field_default({ name: i });
		_patch_child_end();
		_scope($scope6_id, { "#childScope/0": _existing_scope($childScope4) }, "__tests__/template.marko", "6:26");
	}, $scope0_id, 0) }));
	const $childScope5 = _peek_scope_id($scope0_id, "#childScope/0", 5);
	Content.content({ item: $item });
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_items#3_input_record#4_input_end#5/setup", (($fg__input_items ? " input_items" : "") + ($fg__input_record ? " input_record" : "") + ($fg__input_end ? " input_end" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		input_items: ($ui__input_record__OR__input_end || $ui__input_items__OR__input_record__OR__input_end) && input.items,
		input_record: ($ui__input_items__OR__input_end || $ui__input_items__OR__input_record__OR__input_end) && input.record,
		input_end: ($ui__input_items__OR__input_record || $ui__input_items__OR__input_record__OR__input_end) && input.end,
		"#childScope/0": _existing_scope($childScope5)
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_record: ["input.record"],
		input_end: ["input.end"]
	}) || ($fg__input_items && $ui__input_record__OR__input_end && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 4)), $fg__input_record && $ui__input_items__OR__input_end && _patch_write($scope0_id, "PatchMarkedWrite:input_record", input.record, !_server_guard($scope0_reason, 5)), $fg__input_end && $ui__input_items__OR__input_record && _patch_write($scope0_id, "PatchMarkedWrite:input_end", input.end, !_server_guard($scope0_reason, 6)));
}, 1);
