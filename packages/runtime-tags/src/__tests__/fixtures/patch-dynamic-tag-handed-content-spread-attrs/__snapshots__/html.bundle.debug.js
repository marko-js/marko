// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/one.marko": "__tests__/tags/one.marko !;b%;<!><!><!>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_attrs = _write_guard($scope0_reason, 0), $cg__input_attrs = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, input.attrs, 0, 0, $wg__input_content__OR__input_attrs, void 0, 1, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/one.marko_0_input_content#3_input_attrs#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		input_attrs: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.attrs
	}, "__tests__/tags/one.marko", 0, {
		input_content: ["input.content"],
		input_attrs: ["input.attrs"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_attrs && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_attrs && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill1", input.attrs, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.attrs));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=z>z</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=z>z</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	one_default({
		attrs: _patch_live($childScope, { title: input.y }, $scope0_id, "input_y"),
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		z,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { z: "1:6" });
}, 1);
