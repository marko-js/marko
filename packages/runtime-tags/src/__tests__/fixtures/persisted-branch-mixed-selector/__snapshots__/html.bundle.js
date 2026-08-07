// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > input.min) {
			const $scope1_id = _scope_id();
			_html("<p>big</p>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.min,
		f: count
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.min);
	_resume_branch($scope0_id);
}, 1, 0);
