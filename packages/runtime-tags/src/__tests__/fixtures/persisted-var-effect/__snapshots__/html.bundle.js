// tags/labeler/index.marko
_shells({ b: "b,<span>fmt</span>" });
var labeler_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<span>fmt</span>");
	return "[" + input.title + "]";
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let label = labeler_default({ title: input.title });
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_patch_effect($scope0_id, "a2", "i");
	$scope0_reason ? writeScope($scope0_id, {
		h: count,
		i: label,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "i", label);
	_resume_branch($scope0_id);
}, 1, () => [labeler_default]);
