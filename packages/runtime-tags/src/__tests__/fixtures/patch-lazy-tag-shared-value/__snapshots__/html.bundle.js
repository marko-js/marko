// child.marko
const $template = "<b>t</b><!><!>";
const $walks = " b%c";
_shells({ a: "a !a0; b%;<b>t</b><!><!>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<b>t</b>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.item,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.item);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a", [{
	type: "on-click",
	selector: "body"
}]);
_shells({ b: /*@__PURE__*/ (() => `b !b0;${((_w0) => ` D l%b/${_w0}&b`)($walks)};${((_w0) => `<button> </button><!>${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { label: input.label };
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope);
	$Child_withLoadAssets({ item });
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		h: item,
		i: count,
		d: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "h", item);
}, 1);
