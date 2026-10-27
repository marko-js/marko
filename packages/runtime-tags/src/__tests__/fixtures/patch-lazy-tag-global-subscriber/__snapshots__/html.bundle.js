// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["a1"]];
_shells({ a: "a !a1; D ;<button> </button>" });
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", $global$1.brand + ":0")}</button>${_el_resume($scope0_id, "a")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_patch_fill($scope0_id, "va2", count, 1);
	_scope($scope0_id, { c: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)($walks)};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "b", 0);
	$Child_withLoadAssets({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
