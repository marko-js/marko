// tags/field/index.marko
_shells({ b: "b !b1; bD ;<input><em> </em>" });
var field_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let v = "";
	_html(`<input${_attr_input_value($scope0_id, "a", v, _resume((_new_v) => {
		v = _new_v;
	}, "b0", $scope0_id))}${_patch_bind($scope0_id, "Ea", _resume((_new_v) => {
		v = _new_v;
	}, "b0", $scope0_id))}${_patch_control($scope0_id, "a", 2, v)}>${_el_resume($scope0_id, "a")}<em>${_text_resume($scope0_id, "b", v)}</em>`);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b0", v, 1);
	$scope0_reason && _scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			field_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1, () => [field_default]);
