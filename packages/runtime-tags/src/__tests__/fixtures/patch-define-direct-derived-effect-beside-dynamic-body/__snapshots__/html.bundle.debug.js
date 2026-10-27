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
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const shout = label + "!";
		_html(`<em>${_patch_text($scope1_id, "#text/0", shout, void 0, $scope1_reason, 0)}</em>`);
		_script($scope1_id, "__tests__/template.marko_1_shout#4");
		_filled_guard($scope1_reason, 0) && _patch_effect($scope1_id, _client_guard($scope1_reason, 0) ? "PatchQueuedEffect:__tests__/template.marko_1_shout#4" : "PatchEffect:__tests__/template.marko_1_shout#4", "shout");
		$scope1_page ? _scope($scope1_id, { shout }, "__tests__/template.marko", "2:2", { shout: "3:10" }) : _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:shout", shout, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason((_mask_group($scope0_reason, 0) | _filled_guard($scope0_reason, 0)) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Panel.content({ label: input.label });
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/1", open ? "b" : Panel, { label: input.label }, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open,
		Panel,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _content_withhold(input.label));
}, 1);
