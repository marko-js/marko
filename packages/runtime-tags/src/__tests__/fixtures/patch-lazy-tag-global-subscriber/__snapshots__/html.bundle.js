// child.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ a: "a !a1; D ;<button> </button>" });
var child_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", $global$1.brand + ":0")}</button>${_el_resume($scope0_id, "a")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", count, 1);
	$scope0_page && _scope($scope0_id, { c: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `D%b/${_w0}&l`)($walks)};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Child_withLoadAssets({});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
