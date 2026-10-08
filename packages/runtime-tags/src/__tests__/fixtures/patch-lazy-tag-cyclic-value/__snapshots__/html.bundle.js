// tagged.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ a: "a !a0; D ;<button> </button>" });
var tagged_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let label = "";
	_html(`<button>${_text_resume($scope0_id, "b", label)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", label, 1);
	$scope0_page ? _scope($scope0_id, { e: input.node }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.node);
});

// template.marko
const $Tagged_withLoadAssets = withLoadAssets(tagged_default, flush, "_a");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const node = (() => {
		const n = {
			name: input.name,
			self: null
		};
		n.self = n;
		return n;
	})();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Tagged_withLoadAssets({ node });
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
