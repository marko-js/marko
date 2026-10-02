// tags/display-intersection.marko
var display_intersection_default = _template("__tests__/tags/display-intersection.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let dummy = {};
	_html(`<div>${_text_resume($scope0_id, "#text/0", (dummy, input.value), $wg__input_value)}</div>`);
	$wi__input_value && _scope($scope0_id, { dummy }, "__tests__/tags/display-intersection.marko", 0, { dummy: "2:6" });
	$wg__input_value || $wi__input_value && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	display_intersection_default({ value: count });
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
