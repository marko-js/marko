// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	_source_guard($scope0_reason, 1);
	_source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.a,
		f: input.b,
		g: open,
		i: $input_b__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.a), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.b));
	_resume_branch($scope0_id);
}, 1, 0);
