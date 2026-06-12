// grand-child.marko
var grand_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "b0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "_b");
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$GrandChild_withLoadAssets({ value: input.value });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$Child_withLoadAssets({ value: input.value });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
