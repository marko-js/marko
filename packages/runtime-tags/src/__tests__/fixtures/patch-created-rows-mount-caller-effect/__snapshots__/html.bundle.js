// tags/list.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;D ;<i> </i>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "wd", it?.label, !_server_guard($scope0_reason, 0));
		_html(`<i>${_patch_text($scope1_id, "a", it.label, void 0, $scope0_reason, 0)}</i>`);
		_script($scope1_id, "b1", 1, 1);
		_filled_guard($scope0_reason, 0) && _patch_effect($scope1_id, _client_guard($scope0_reason, 0) ? "hb1" : "eb1", "d");
		_scope($scope1_id, { d: it?.label });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { label: x.name });
	});
	const $childScope = _patch_child($scope0_id, "a");
	list_default({ item: $item });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
