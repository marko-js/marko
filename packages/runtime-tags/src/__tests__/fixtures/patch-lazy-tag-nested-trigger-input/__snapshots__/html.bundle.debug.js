// inner.marko
const $template$2 = "<button><!>:<!></button>";
const $walks$2 = " D%c%l";
const $setup$2 = [[], ["__tests__/inner.marko_0"]];
_shells({ "__tests__/inner.marko": "__tests__/inner.marko !__tests__/inner.marko_0; D%c%;<button><!>:<!></button>" });
var inner_default = _template("__tests__/inner.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/inner.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/inner.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/inner.marko", 0, { count: "1:6" });
});

// outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><!>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks$2);
const $Inner_withLoadAssets = withLoadAssets(() => inner_default, "__tests__/inner.marko", flush, "ready:__tests__/inner.marko", [{
	type: "on-click",
	selector: "body"
}]);
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/outer.marko": /*@__PURE__*/ (() => `__tests__/outer.marko${_shell_marker($setup$1)};${((_w0) => `D%b/${_w0}&l`)($walks$2)};${((_w0) => `<section><!>${_w0}</section>`)($template$2)}`)() });
var outer_default = _template("__tests__/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	$Inner_withLoadAssets({ label: input.label });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/outer.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks$1);
const $Outer_withLoadAssets = withLoadAssets(() => outer_default, "__tests__/outer.marko", flush, "ready:__tests__/outer.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)($walks$1)};${((_w0) => `<main><!>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	$Outer_withLoadAssets({ label: input.label });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
