// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
_shells({ a: `a !a2;${((_w0) => `/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `${_w0}<!><button>toggle</button>`)($Panel_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a0", (label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", label, 1, $scope1_reason, 0)}</em>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a1", (label) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
		_html(`<i>${_text_mark($scope2_id, "a", label, $wg__label)}</i>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content(input.label);
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", Panel, [input.label], 8, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", $fg__input_label && "f");
	_scope($scope0_id, {
		f: input.label,
		g: open,
		h: Panel,
		i: Other,
		a: _existing_scope($childScope)
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
