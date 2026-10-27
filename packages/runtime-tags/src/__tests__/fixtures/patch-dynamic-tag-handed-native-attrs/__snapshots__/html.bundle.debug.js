// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/one.marko": "__tests__/tags/one.marko !;b%;<!><!><!>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_c = _write_guard($scope0_reason, 0), $cg__input_c = _client_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.tag, { class: input.c }, 1, 0, 0, $wg__input_tag__OR__input_c, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/one.marko_0_input_tag#3_input_c#4/init");
	_scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tag,
		input_c: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.c
	}, "__tests__/tags/one.marko", 0, {
		input_tag: ["input.tag"],
		input_c: ["input.c"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_c && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill0", input.tag, !_server_guard($scope0_reason, 1)), $cg__input_c && _content_withhold(input.tag), _filled_guard($scope0_reason, 2) && $cg__input_tag && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill1", input.c, !_server_guard($scope0_reason, 2)), $cg__input_tag && _content_withhold(input.c));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	one_default({
		tag: "div",
		c: input.y
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
