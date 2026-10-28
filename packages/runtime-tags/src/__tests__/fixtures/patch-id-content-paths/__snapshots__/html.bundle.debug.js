// tags/field.marko
const $template$4 = "<label> </label><input><!><!>";
const $walks$4 = " D l b%c";
const $setup$4 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l b%;<label> </label><input><!><!>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "PatchAttr:#input/2 aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_dynamic_tag($scope0_id, "#text/3", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/forward.marko
const $template$3 = "<section><!></section><aside><!></aside>";
const $walks$3 = "D%lD%l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/forward.marko": "__tests__/tags/forward.marko;D%lD%;<section><!></section><aside><!></aside>" });
var forward_default = _template("__tests__/tags/forward.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section><aside>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</aside>");
	_scope($scope0_id, {}, "__tests__/tags/forward.marko", 0);
});

// tags/leaf.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/leaf.marko": "__tests__/tags/leaf.marko;b%;<!><!><!>",
	"__tests__/tags/leaf.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/leaf.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4)}`)()
});
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			field_default({ name: "nested" });
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/leaf.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, void 0, void 0, void 0, ["__tests__/tags/leaf.marko_1*shell"], 0, 0);
});

// tags/nested.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/nested.marko": /*@__PURE__*/ (() => `__tests__/tags/nested.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`)() });
var nested_default = _template("__tests__/tags/nested.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	leaf_default({});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/nested.marko", 0);
});

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
const $Item_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4);
const $Item_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4);
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!><!><!>${_w0}${_w1}${_w2}<!>`)($Content_content__template, $template$3, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b%b%b/${_w0}&/${_w1}&/${_w2}&b`)($Content_content__walks, $walks$3, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/3>", $setup$3], ["#childScope/4>", $setup$1]);
_shells({
	"__tests__/template.marko_7*content": /*@__PURE__*/ (() => `__tests__/template.marko_7*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4)}`)(),
	"__tests__/template.marko_6*content": /*@__PURE__*/ (() => `__tests__/template.marko_6*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4)}`)(),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2) => `b%b%b/${_w0}&/${_w1}&/${_w2}&b`)($Content_content__walks, $walks$3, $walks$1)};${((_w0, _w1, _w2) => `<!><!><!>${_w0}${_w1}${_w2}<!>`)($Content_content__template, $template$3, $template$1)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], [">#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$4])]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template)}`)(),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ (() => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], [">#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$4])]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template)}`)(),
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flip = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Item = { content: _content("__tests__/template.marko_1*content", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope1_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		field_default({ name });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	const Content = { content: _content("__tests__/template.marko_4*content", ({ item: items }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__items = _write_guard($scope4_reason, 0);
		_for_of(items, (item) => {
			const $scope5_id = _scope_id();
			_dynamic_tag($scope5_id, "#text/0", item, {}, 10, 0, 0, $wg__items, $scope4_reason, 0);
			_write_if($scope4_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "3:35");
		}, 0, $scope4_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_5*shell", $scope4_reason, 0);
		_scope($scope4_id, {}, "__tests__/template.marko", "3:2");
	}, $scope0_id) };
	_if(() => {
		if (input.flip) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 2);
			Item.content({ name: "first" });
			_patch_child_end();
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "4:2");
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope3_id, "#childScope/0", 2);
			Item.content({ name: "other" });
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "4:42");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_flip, void 0, void 0, void 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_3*shell"], $scope0_reason, 0);
	_dynamic_tag($scope0_id, "#text/1", input.flip ? field_default : "section", { name: "dynamic" }, 33, _content_resume("__tests__/template.marko_6*content", () => {
		const $scope6_id = _scope_id();
		const $scope6_reason = _scope_reason();
		_set_scope_reason(0);
		const $childScope4 = _peek_scope_id($scope6_id, "#childScope/0", 3);
		field_default({ name: "content" });
		_patch_child_end();
		_scope($scope6_id, { "#childScope/0": _existing_scope($childScope4) }, "__tests__/template.marko", "5:4");
	}, $scope0_id), 0, $wg__input_flip, $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_7*content", () => {
			const $scope7_reason = _scope_reason();
			const $scope7_id = _scope_id();
			_set_scope_reason(16);
			const $childScope5 = _peek_scope_id($scope7_id, "#childScope/0", 5);
			field_default({ name: item.key });
			_patch_child_end();
			_scope($scope7_id, { "#childScope/0": _existing_scope($childScope5) }, "__tests__/template.marko", "7:29");
		}, $scope0_id, 1) });
	});
	const $childScope6 = _peek_scope_id($scope0_id, "#childScope/2", 6);
	Content.content({ item: $item });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope8 = _peek_scope_id($scope0_id, "#childScope/3", 8);
	forward_default({ content: _content("__tests__/template.marko_8*content", () => {
		const $scope8_reason = _scope_reason();
		const $scope8_id = _scope_id();
		_set_scope_reason(0);
		const $childScope7 = _peek_scope_id($scope8_id, "#childScope/0", 7);
		field_default({ name: "forwarded" });
		_patch_child_end();
		_scope($scope8_id, { "#childScope/0": _existing_scope($childScope7) }, "__tests__/template.marko", "9:2");
	}, $scope0_id) });
	_patch_child_end();
	const $childScope9 = _peek_scope_id($scope0_id, "#childScope/4", 9);
	nested_default({});
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/2": _existing_scope($childScope6),
		"#childScope/3": _existing_scope($childScope8),
		"#childScope/4": _existing_scope($childScope9)
	}, "__tests__/template.marko", 0);
}, 1);
