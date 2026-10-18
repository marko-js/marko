// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a0", (props) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__props = _write_guard($scope1_reason, 0);
		_html(`<em>${_text_resume($scope1_id, "a", JSON.stringify(props), $wg__props)}</em>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({ label: input.label });
	_dynamic_tag($scope0_id, "b", Panel, { label: input.label });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "wh", Panel, 1);
	_patch_value($scope0_id, "va3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: open,
		h: Panel,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0)), _content_withhold(input.label));
}, 1);
