// tags/counter/index.marko
var counter_default = _template_persisted("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let spins = 0;
	_html(`<section><p>Value <!>${_patch_text($scope0_id, "#text/0", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")} (spun <!>${_escape(spins)}${_el_resume($scope0_id, "#text/1")})</p><button class=spin>spin</button>${_el_resume($scope0_id, "#button/2")}</section>`);
	_script($scope0_id, "__tests__/tags/counter/index.marko_0");
	$scope0_reason && writeScope($scope0_id, { spins }, "__tests__/tags/counter/index.marko", 0, { spins: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(counter_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/1", $childScope);
		counter_default({ value: count });
	}
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
