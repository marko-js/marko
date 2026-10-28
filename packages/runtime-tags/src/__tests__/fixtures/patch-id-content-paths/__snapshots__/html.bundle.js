// tags/field.marko
const $template$3 = "<label> </label><input><!><!>";
const $walks$2 = " D l b%c";
const $setup$4 = [[], []];
_shells({ b: "b; D l b%;<label> </label><input><!><!>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_dynamic_tag($scope0_id, "d", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_scope($scope0_id, {});
});

// tags/forward.marko
const $template$2 = "<section><!></section><aside><!></aside>";
const $walks$1 = "D%lD%l";
const $setup$3 = [[], []];
_shells({ c: "c;D%lD%;<section><!></section><aside><!></aside>" });
var forward_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section><aside>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</aside>");
	_scope($scope0_id, {});
});

// tags/leaf.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	d: "d;b%;<!><!><!>",
	d0: /*@__PURE__*/ (() => `d0${_shell_marker(_shell_setup([[], []], ["a>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$3)}`)()
});
var leaf_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			field_default({ name: "nested" });
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, void 0, void 0, void 0, ["d0"], 0, 0);
});

// tags/nested.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ e: /*@__PURE__*/ (() => `e${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var nested_default = _template("e", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	leaf_default({});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
const $Item_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $Item_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$3);
const $setup = _shell_setup([[], []], ["d>", $setup$3], ["e>", $setup$1]);
_shells({
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$3)}`)(),
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$3)}`)(),
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1, _w2) => `b%b%b/${_w0}&/${_w1}&/${_w2}&b`)($Content_content__walks, $walks$1, $walks)};${((_w0, _w1, _w2) => `<!><!><!>${_w0}${_w1}${_w2}<!>`)($Content_content__template, $template$2, $template)}`)(),
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], [">a>", _shell_setup([[], []], ["a>", $setup$4])]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template)}`)(),
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], []], [">a>", _shell_setup([[], []], ["a>", $setup$4])]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template)}`)(),
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flip = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Item = { content: _content("a0", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope1_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		field_default({ name });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	const Content = { content: _content("a6", ({ item: items }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__items = _write_guard($scope4_reason, 0);
		_for_of(items, (item) => {
			const $scope5_id = _scope_id();
			_dynamic_tag($scope5_id, "a", item, {}, 10, 0, 0, $wg__items, $scope4_reason, 0);
			_write_if($scope4_reason, 0) && _scope($scope5_id, {});
		}, 0, $scope4_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope4_reason, 0);
		_scope($scope4_id, {});
	}, $scope0_id) };
	_if(() => {
		if (input.flip) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 2);
			Item.content({ name: "first" });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope2) });
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope3_id, "a", 2);
			Item.content({ name: "other" });
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope3) });
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_flip, void 0, void 0, void 0, ["a4", "a5"], $scope0_reason, 0);
	_dynamic_tag($scope0_id, "b", input.flip ? field_default : "section", { name: "dynamic" }, 33, _content_resume("a3", () => {
		const $scope6_id = _scope_id();
		_scope_reason();
		_set_scope_reason(0);
		const $childScope4 = _peek_scope_id($scope6_id, "a", 3);
		field_default({ name: "content" });
		_patch_child_end();
		_scope($scope6_id, { a: _existing_scope($childScope4) });
	}, $scope0_id), 0, $wg__input_flip, $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("a2", () => {
			_scope_reason();
			const $scope7_id = _scope_id();
			_set_scope_reason(16);
			const $childScope5 = _peek_scope_id($scope7_id, "a", 5);
			field_default({ name: item.key });
			_patch_child_end();
			_scope($scope7_id, { a: _existing_scope($childScope5) });
		}, $scope0_id, 1) });
	});
	const $childScope6 = _peek_scope_id($scope0_id, "c", 6);
	Content.content({ item: $item });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope8 = _peek_scope_id($scope0_id, "d", 8);
	forward_default({ content: _content("a7", () => {
		_scope_reason();
		const $scope8_id = _scope_id();
		_set_scope_reason(0);
		const $childScope7 = _peek_scope_id($scope8_id, "a", 7);
		field_default({ name: "forwarded" });
		_patch_child_end();
		_scope($scope8_id, { a: _existing_scope($childScope7) });
	}, $scope0_id) });
	_patch_child_end();
	const $childScope9 = _peek_scope_id($scope0_id, "e", 9);
	nested_default({});
	_patch_child_end();
	_scope($scope0_id, {
		c: _existing_scope($childScope6),
		d: _existing_scope($childScope8),
		e: _existing_scope($childScope9)
	});
}, 1);
