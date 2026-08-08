// tags/dia-d/index.marko
var dia_d_default = _template_persisted("e", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.note, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</em>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/dia-b/index.marko
var dia_b_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dia_d_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [dia_d_default]);

// tags/dia-c/index.marko
var dia_c_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dia_d_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [dia_d_default]);

// tags/dia-a/index.marko
var dia_a_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dia_b_default({ note: input.note });
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope2);
	dia_c_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 0, () => [dia_b_default, dia_c_default]);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			dia_a_default({ note: input.note });
			writeScope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.note,
		f: show
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.note);
	_resume_branch($scope0_id);
}, 1, () => [dia_a_default]);
