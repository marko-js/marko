// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.value) {
			const $scope1_id = _scope_id();
			_html("<span></span>");
			$wi__input_value && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_value, $wg__input_value, 0, 0, 1);
	const $return = 1;
	$wi__input_value && _scope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ value: count });
	_var($scope0_id, "d", $childScope, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: count,
		c: _existing_scope($childScope)
	});
}, 1);
