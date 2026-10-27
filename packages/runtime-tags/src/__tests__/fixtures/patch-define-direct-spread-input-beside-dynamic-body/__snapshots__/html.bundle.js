// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", label, void 0, $scope1_reason, 0)}</em>`);
		$scope1_page && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason((_mask_group($scope0_reason, 0) | _filled_guard($scope0_reason, 0)) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Panel.content(input);
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", Panel, { label: input.label }, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: open,
		h: Panel,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0)), _content_withhold(input.label));
}, 1);
