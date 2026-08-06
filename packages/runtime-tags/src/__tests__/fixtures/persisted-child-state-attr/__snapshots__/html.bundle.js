// tags/counter/index.marko
var counter_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let spins = 0;
	_html(`<section><p>Value <!>${_patch_text($scope0_id, "a", input.value)}${_escape(input.value)}${_el_resume($scope0_id, "a")} (spun <!>${_escape(spins)}${_el_resume($scope0_id, "b")})</p><button class=spin>spin</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "b0");
	$scope0_reason && writeScope($scope0_id, { g: spins });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1>`);
	const $childScope = _peek_scope_id();
	if ($scope0_reason) {
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
}, 1);
