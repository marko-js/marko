// tags/list.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1,<p>item</p>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_elide("a1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "xa", label);
			_html("<p>item</p>");
			_script($scope1_id, "a0", 0);
			_patch_effect($scope1_id, "ea0", "a");
			$scope1_page && _scope($scope1_id, { a: label });
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "a", 0);
	list_default({ item: $item });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
