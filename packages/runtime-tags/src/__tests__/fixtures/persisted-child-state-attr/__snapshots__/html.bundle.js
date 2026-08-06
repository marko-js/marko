// tags/counter/index.marko
var counter_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let spins = 0;
	_html(`<section><p>Value <!>${_patch_text($scope0_id, "a", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "a")} (spun <!>${_escape(spins)}${_el_resume($scope0_id, "b")})</p><button class=spin>spin</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "b0");
	$scope0_reason && writeScope($scope0_id, { g: spins });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(counter_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "b", $childScope);
		counter_default({ value: count });
	}
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		g: count,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
