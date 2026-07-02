// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.value) {
			const $scope1_id = _scope_id();
			_html("<span></span>");
			$si__input_value && writeScope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_value, $sg__input_value, $sg__input_value, 0, 1);
	const $return = 1;
	$si__input_value && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let x = child_default({ value: count });
	_var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_x/var");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
