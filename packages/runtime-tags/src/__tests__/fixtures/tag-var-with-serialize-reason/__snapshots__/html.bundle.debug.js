// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.value) {
			const $scope1_id = _scope_id();
			_html("<span></span>");
			$wi__input_value && _scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_value, $wg__input_value, 0, 0, 1);
	const $return = 1;
	$wi__input_value && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	let x = child_default({ value: count });
	_var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_x#6/var");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
