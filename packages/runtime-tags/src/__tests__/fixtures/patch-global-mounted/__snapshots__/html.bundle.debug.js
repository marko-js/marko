// tags/badge.marko
const $template$1 = "<p> </p>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/badge.marko_0_$global#5", "__tests__/tags/badge.marko_0"]];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko !__tests__/tags/badge.marko_0_$global#5 __tests__/tags/badge.marko_0; D ;<p> </p>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/1", count + $global$1.brand)}</p>${_el_resume($scope0_id, "#p/0")}`);
	_fill_global_subscribe("__tests__/tags/badge.marko_0_count#2_$global_brand#6", $scope0_id, 1);
	_script($scope0_id, "__tests__/tags/badge.marko_0_$global#5");
	_script($scope0_id, "__tests__/tags/badge.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/badge.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/tags/badge.marko", 0, { count: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<div></div>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	badge_default({});
	_patch_child_end();
	_html(`<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
