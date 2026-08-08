// tags/dia-d/index.marko
var dia_d_default = _template_persisted("__tests__/tags/dia-d/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.note, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</em>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/dia-d/index.marko", 0);
}, 0, 0);

// tags/dia-b/index.marko
var dia_b_default = _template_persisted("__tests__/tags/dia-b/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	dia_d_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/dia-b/index.marko", 0);
}, 0, () => [dia_d_default]);

// tags/dia-c/index.marko
var dia_c_default = _template_persisted("__tests__/tags/dia-c/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	dia_d_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/dia-c/index.marko", 0);
}, 0, () => [dia_d_default]);

// tags/dia-a/index.marko
var dia_a_default = _template_persisted("__tests__/tags/dia-a/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	dia_b_default({ note: input.note });
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope2);
	dia_c_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/dia-a/index.marko", 0);
}, 0, () => [dia_b_default, dia_c_default]);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			dia_a_default({ note: input.note });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_note: input.note,
		show
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
	_resume_branch($scope0_id);
}, 1, () => [dia_a_default]);
