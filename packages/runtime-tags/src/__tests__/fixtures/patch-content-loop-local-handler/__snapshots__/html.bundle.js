// tags/menu.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var menu_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", it, {}, 0, 0, $wg__input_item, void 0, 2, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0 !a1 a2; D l ;<button> </button><span></span>",
	a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&D l`)("b%c")};${((_w0) => `<!>${_w0}<p> </p>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let picked = "none";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content_elide("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "we", x?.name);
			_html(`<button${_patch_attr_class($scope1_id, "aa class", "b" + x.id)}>${_patch_text($scope1_id, "b", x.name)}</button>${_el_resume($scope1_id, "a")}<span></span>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a1");
			_script($scope1_id, "a2");
			_patch_effect($scope1_id, "ea1", "e");
			_scope($scope1_id, {
				e: x?.name,
				_: _scope_with_id($scope0_id)
			});
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "a");
	menu_default({ item: $item });
	_html(`<p>${_text_resume($scope0_id, "b", picked)}</p>`);
	_patch_value($scope0_id, "va3", picked, 1);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
