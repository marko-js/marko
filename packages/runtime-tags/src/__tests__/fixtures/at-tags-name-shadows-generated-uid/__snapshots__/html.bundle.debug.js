// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_scope = _serialize_guard($scope0_reason, 0), $si__input_scope = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.scope, (s) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", s.a, $sg__input_scope));
		$si__input_scope && _scope($scope1_id, {}, "__tests__/tags/child/index.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_scope, $sg__input_scope, $sg__input_scope, 0, 1);
	$si__input_scope && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cond = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	let $scope;
	if (cond) {
		$scope = attrTag({ a: 1 });
	} else {
		$scope = attrTag({ a: 2 });
	}
	const $childScope = _peek_scope_id();
	child_default({ scope: $scope });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		cond,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { cond: "1:6" });
	_resume_branch($scope0_id);
}, 1);
