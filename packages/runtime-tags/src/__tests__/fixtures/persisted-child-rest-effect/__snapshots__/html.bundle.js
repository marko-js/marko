// tags/dump/index.marko
var dump_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", JSON.stringify(input), $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</p>`);
	_script($scope0_id, "b0");
	_patch_effect($scope0_id, "b0", "d");
	$scope0_reason ? writeScope($scope0_id, { d: input.label }) : _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "d", input.label);
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(30);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dump_default({
		value: count,
		label: input.title
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.title,
		f: count,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [dump_default]);
