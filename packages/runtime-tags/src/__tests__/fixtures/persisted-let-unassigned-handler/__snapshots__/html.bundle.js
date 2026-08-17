// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let x = input.foo;
	_html(`<main><em>${_escape(0)}${_el_resume($scope0_id, "a")}</em><button>set</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "g");
	$scope0_reason ? writeScope($scope0_id, { g: x?.length }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "g", x?.length);
	_resume_branch($scope0_id);
}, 1, 0);
