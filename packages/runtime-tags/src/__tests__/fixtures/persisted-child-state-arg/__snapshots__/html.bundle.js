// tags/arg-badge/index.marko
var arg_badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>Value <!>${_patch_text($scope0_id, "a", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</p>`);
	$scope0_reason && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	const $childScope = _peek_scope_id();
	if ($scope0_reason) {
		_patch_child($scope0_id, "b", $childScope);
		arg_badge_default({ value: count });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		g: count,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
