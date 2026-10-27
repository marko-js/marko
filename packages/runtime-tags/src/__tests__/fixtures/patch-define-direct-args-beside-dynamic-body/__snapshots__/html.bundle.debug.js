// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", (label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "#text/0", label, void 0, $scope1_reason, 0)}</em>`);
		$scope1_page && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_2*content", (label) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0), $scope2_page = _page_render();
		_html(`<i>${_text_resume($scope2_id, "#text/0", label, $wg__label)}</i>`);
		$scope2_page && _write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "5:2");
	}, $scope0_id) };
	_set_scope_reason((_mask_group($scope0_reason, 0) | _filled_guard($scope0_reason, 0)) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Panel.content(input.label);
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/1", open ? Other : Panel, [input.label], 8, 0, 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open,
		Panel,
		Other,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Other: "5:9"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _content_withhold(input.label));
}, 1);
