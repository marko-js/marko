// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "__tests__/grand-child.marko_0", $wg__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/grand-child.marko", 0);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_value << 1);
	const $childScope = _peek_scope_id();
	$GrandChild_withLoadAssets({ value: input.value });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_value << 1);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
