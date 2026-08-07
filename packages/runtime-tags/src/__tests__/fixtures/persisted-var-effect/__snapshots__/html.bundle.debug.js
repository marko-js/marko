// tags/labeler/index.marko
var labeler_default = _template_persisted("__tests__/tags/labeler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<span>fmt</span>");
	const $return = "[" + input.title + "]";
	return $return;
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	let label = labeler_default({ title: input.title });
	_patch_child($scope0_id, "#childScope/0", $childScope);
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_label/var");
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_label");
	_patch_effect($scope0_id, "__tests__/template.marko_0_label", "label");
	$scope0_reason ? writeScope($scope0_id, {
		count,
		label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		label: "3:12"
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "label", label);
	_resume_branch($scope0_id);
}, 1, () => [labeler_default]);
