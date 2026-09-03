// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_text_resume($scope0_id, "b", input.value, _serialize_guard($scope0_reason, 0))}: ${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button class=parent>parent: ${_text_resume($scope0_id, "b", value, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value });
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: value,
		d: _existing_scope($childScope)
	});
}, 1);
