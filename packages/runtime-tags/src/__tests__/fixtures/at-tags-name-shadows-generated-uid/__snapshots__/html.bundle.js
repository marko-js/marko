// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_scope = _write_guard($scope0_reason, 0), $wi__input_scope = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.scope, (s) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", s.a, $wg__input_scope));
		$wi__input_scope && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_scope, $wg__input_scope);
	$wi__input_scope && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cond = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $scope;
	$scope = attrTag({ a: 1 });
	const $childScope = _peek_scope_id();
	child_default({ scope: $scope });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: cond,
		b: _existing_scope($childScope)
	});
}, 1);
