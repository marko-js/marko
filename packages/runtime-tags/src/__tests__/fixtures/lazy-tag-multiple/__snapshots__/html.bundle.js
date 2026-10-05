// child-a.marko
var child_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=a>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "a0", $wg__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// child-b.marko
var child_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=b>${_text_resume($scope0_id, "a", input.value * 2, $wg__input_value)}</span>`);
	_script($scope0_id, "b0", $wg__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $ChildA_withLoadAssets = withLoadAssets(child_a_default, flush, "_a");
const $ChildB_withLoadAssets = withLoadAssets(child_b_default, flush, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$ChildA_withLoadAssets({ value });
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	$ChildB_withLoadAssets({ value });
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		f: value,
		c: _existing_scope($childScope),
		e: _existing_scope($childScope2)
	});
}, 1);
