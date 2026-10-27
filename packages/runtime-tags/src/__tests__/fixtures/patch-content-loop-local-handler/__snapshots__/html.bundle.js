// tags/menu.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var menu_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", it, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a2: "a2 !a1; D l ;<button> </button><span></span>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&D l`)("b%c")};${((_w0) => `<!>${_w0}<p> </p>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let picked = "none";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content_elide("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "xe", x?.name);
			_html(`<button${_attr_class("b" + x.id, $scope1_id, "a")}>${_patch_text($scope1_id, "b", x.name)}</button>${_el_resume($scope1_id, "a")}<span></span>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a0", 1, 1, "e");
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				e: x?.name,
				_: _scope_with_id($scope0_id)
			});
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "a", 0);
	menu_default({ item: $item });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "b", picked)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
