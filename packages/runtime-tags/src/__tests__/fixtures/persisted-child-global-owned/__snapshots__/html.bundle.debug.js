// tags/g-badge/index.marko
var g_badge_default = _template_persisted("__tests__/tags/g-badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")} <!>${_patch_text($scope0_id, "#text/1", $global().flag)}${_el_resume($scope0_id, "#text/1")}</p>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/g-badge/index.marko", 0);
}, 0, 1);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(g_badge_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/0", $childScope);
		g_badge_default({ value: count });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [g_badge_default]);
