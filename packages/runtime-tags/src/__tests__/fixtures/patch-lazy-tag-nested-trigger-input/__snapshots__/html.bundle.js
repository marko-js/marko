// inner.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$2 = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var inner_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><!>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks$1);
const $Inner_withLoadAssets = withLoadAssets(() => inner_default, "a", flush, "_a", [{
	type: "on-click",
	selector: "body"
}]);
const $setup$1 = _shell_setup([[], []], ["b>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `D%b/${_w0}&l`)($walks$1)};${((_w0) => `<section><!>${_w0}</section>`)($template$1)}`)() });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Inner_withLoadAssets({ label: input.label });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
const $Outer_withLoadAssets = withLoadAssets(() => outer_default, "b", flush, "_b");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)($walks)};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Outer_withLoadAssets({ label: input.label });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
