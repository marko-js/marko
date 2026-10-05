// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "a0", $wg__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a", [{
	type: "idle",
	options: { timeout: 100 }
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_value << 1);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
