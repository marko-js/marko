// tags/boxp.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/boxp.marko": "__tests__/tags/boxp.marko !;D%;<div><!></div>" });
var boxp_default = _template("__tests__/tags/boxp.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, { x: input.x }, 0, 0, $wg__input_content__OR__input_x, void 0, 1, $scope0_reason, 0);
	_html("</div>");
	_patch_write($scope0_id, "PatchWrite:input_content", input.content, 1);
	_patch_write($scope0_id, "PatchWrite:input_x", input.x, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/boxp.marko_0_input_content#3_input_x#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.x
	}, "__tests__/tags/boxp.marko", 0, {
		input_content: ["input.content"],
		input_x: ["input.x"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/boxp.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/boxp.marko_fill1", input.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	boxp_default({
		x: input.a,
		content: _content_resume("__tests__/template.marko_1*content", ({ x }) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			let l = String(x);
			_html(`<button>${_text_resume($scope1_id, "#text/1", l)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { l }, "__tests__/template.marko", "1:2", { l: "2:8" });
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
