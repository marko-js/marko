// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $sg__input_value)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "visible",
	selector: "body"
}, {
	type: "on-mouseover",
	selector: "body"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value });
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: value,
		c: _existing_scope($childScope)
	});
}, 1);
