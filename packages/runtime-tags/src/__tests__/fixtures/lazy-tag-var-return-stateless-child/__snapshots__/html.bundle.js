// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	return input.value * 2;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	const $childScope = _peek_scope_id();
	let doubled = $Child_withLoadAssets({ value });
	_var($scope0_id, "c", $childScope, "b0");
	_html(`<button>${_text_resume($scope0_id, "e", doubled)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: value,
		b: _existing_scope($childScope)
	});
}, 1);
