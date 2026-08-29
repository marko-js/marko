// template.marko
_shells({ a: "a !a0; D l%;<button> </button><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { label, ...rest } = input;
	let on = true;
	_html(`<button>${_patch_text($scope0_id, "b", label, void 0, $scope0_owned, 0)}</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_reason) _if(() => {
		if (rest.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		g: input.show,
		h: on
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.show);
	_resume_branch($scope0_id);
}, 1, 0);
