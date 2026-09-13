// child.marko
_shells({ a: "a !a0; b%;<b>t</b><!><!>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<b>t</b>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.item,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.item);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "body"
}], 1);
_shells({ b: "b b2!b0; D l%/&;<button> </button><!><!>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { label: input.label };
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope);
	$Child_withLoadAssets({ item });
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, {
		h: item,
		i: count,
		d: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "h", item);
}, 1, () => [$Child_withLoadAssets]);
