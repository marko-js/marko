// tags/g-badge/index.marko
var g_badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_patch_text($scope0_id, "a", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "a")} <!>${_patch_text($scope0_id, "b", $global$1.flag)}${_el_resume($scope0_id, "b")}</p>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 1);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(g_badge_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "a", $childScope);
		g_badge_default({ value: count });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [g_badge_default]);
