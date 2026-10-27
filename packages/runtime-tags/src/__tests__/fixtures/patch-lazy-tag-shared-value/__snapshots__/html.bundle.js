// child.marko
const $template = "<b>t</b><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["a0"]];
_shells({ a: "a !a0; b%;<b>t</b><!><!>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<b>t</b>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", open, 1);
	_scope($scope0_id, {
		e: input.item,
		f: open
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a", [{
	type: "on-click",
	selector: "body"
}]);
const $setup = _shell_setup([[], ["b0"]], ["d>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => ` D l%b/${_w0}&b`)($walks)};${((_w0) => `<button> </button><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = { label: input.label };
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "d", 0);
	$Child_withLoadAssets({ item: _patch_live($childScope, item, $scope0_id, "g") });
	_patch_child_end();
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		h: item,
		i: count,
		d: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.label, !$sg__input_label), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wh", item, !$sg__input_label));
}, 1);
